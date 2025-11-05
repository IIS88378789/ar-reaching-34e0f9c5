import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar } from "lucide-react";
import towflexxDetail1 from "@/assets/towflexx-demo-detail-1.jpg";
import towflexxDetail2 from "@/assets/towflexx-demo-detail-2.png";
import towflexxDetail3 from "@/assets/towflexx-demo-detail-3.jpg";

interface TowflexxNewsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TowflexxNewsDialog = ({ open, onOpenChange }: TowflexxNewsDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Calendar size={14} className="text-accent" />
            <span className="font-medium">2025年5月21日</span>
          </div>
          <DialogTitle className="text-2xl md:text-3xl text-foreground leading-tight">
            TOWFLEXX TF5 飛特立航空 DEMO
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-6 space-y-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed text-lg">
              飛特立航空採用 TOWFLEXX TF5 執行拖機工作，減少拖機作業人員負擔和增加機棚場現有區域飛機停放。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <div className="overflow-hidden rounded-lg border border-border">
              <img 
                src={towflexxDetail1} 
                alt="TOWFLEXX TF5 拖機系統操作" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-border">
              <img 
                src={towflexxDetail2} 
                alt="TOWFLEXX TF5 與飛機正面視角" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-border md:col-span-2 lg:col-span-1">
              <img 
                src={towflexxDetail3} 
                alt="TOWFLEXX TF5 實際操作演示" 
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
