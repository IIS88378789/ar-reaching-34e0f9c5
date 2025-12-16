import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import tadteDetail1 from "@/assets/tadte-detail-1.jpg";
import tadteDetail2 from "@/assets/tadte-detail-2.jpg";

interface TadteNewsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TadteNewsDialog = ({ open, onOpenChange }: TadteNewsDialogProps) => {
  const { language } = useLanguage();

  const content = language === "zh" ? {
    date: "2025年9月18日",
    title: "2025年台北國際航太暨國防工業展（TADTE 2025）",
    description: "睽違6年，第一次參加臺北國防展，航空飛行推廣，推廣新建 ISO 9001維修工廠能量，設備維修，遙控飛機拖車引進，未來甚至向無人機等領域發展。",
    alt1: "TADTE 2025 展覽照片 1",
    alt2: "TADTE 2025 展覽照片 2"
  } : {
    date: "September 18, 2025",
    title: "2025 Taipei Aerospace & Defense Technology Exhibition (TADTE 2025)",
    description: "After 6 years, our first participation in the Taipei Defense Exhibition. Promoting aviation flight, showcasing our newly established ISO 9001 certified maintenance facility capabilities, equipment maintenance, remote-controlled aircraft tug introduction, and future expansion into UAV and other fields.",
    alt1: "TADTE 2025 Exhibition Photo 1",
    alt2: "TADTE 2025 Exhibition Photo 2"
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-foreground mb-4">
            {content.title}
          </DialogTitle>
          <div className="flex items-center gap-2 text-muted-foreground mb-6">
            <Calendar size={16} className="text-accent" />
            <span>{content.date}</span>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground leading-relaxed text-lg">
              {content.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src={tadteDetail1} 
                alt={content.alt1} 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src={tadteDetail2} 
                alt={content.alt2} 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TadteNewsDialog;
