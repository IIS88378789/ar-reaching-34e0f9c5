import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import towflexxDetail1 from "@/assets/towflexx-demo-detail-1.jpg";
import towflexxDetail2 from "@/assets/towflexx-demo-detail-2-20250521.jpg";
import towflexxDetail3 from "@/assets/towflexx-demo-detail-3.jpg";

interface TowflexxNewsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TowflexxNewsDialog = ({ open, onOpenChange }: TowflexxNewsDialogProps) => {
  const { language } = useLanguage();

  const content = language === "zh" ? {
    date: "2025年5月21日",
    title: "TOWFLEXX TF5 飛特立航空 DEMO",
    description: "飛特立航空採用 TOWFLEXX TF5 執行拖機工作，減少拖機作業人員負擔和增加機棚場現有區域飛機停放。",
    srDescription: "TOWFLEXX TF5 現場 DEMO 照片，共三張。",
    alt1: "TOWFLEXX TF5 拖機系統操作",
    alt2: "TOWFLEXX TF5 與飛機正面視角",
    alt3: "TOWFLEXX TF5 實際操作演示"
  } : {
    date: "May 21, 2025",
    title: "TOWFLEXX TF5 Demo at Fly Jet Aviation",
    description: "Fly Jet Aviation adopts TOWFLEXX TF5 for aircraft towing operations, reducing operator workload and increasing hangar parking capacity in the existing area.",
    srDescription: "TOWFLEXX TF5 live demo photos, three in total.",
    alt1: "TOWFLEXX TF5 towing system operation",
    alt2: "TOWFLEXX TF5 front view with aircraft",
    alt3: "TOWFLEXX TF5 live operation demonstration"
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Calendar size={14} className="text-accent" />
            <span className="font-medium">{content.date}</span>
          </div>
          <DialogTitle className="text-2xl md:text-3xl text-foreground leading-tight">
            {content.title}
          </DialogTitle>
          <DialogDescription className="sr-only">{content.srDescription}</DialogDescription>
        </DialogHeader>
        
        <div className="mt-6 space-y-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed text-lg">
              {content.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <div className="overflow-hidden rounded-lg border border-border">
              <img 
                src={towflexxDetail1} 
                alt={content.alt1} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-border">
              <img 
                src={towflexxDetail2} 
                alt={content.alt2} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-border md:col-span-2 lg:col-span-1">
              <img 
                src={towflexxDetail3} 
                alt={content.alt3} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TowflexxNewsDialog;
