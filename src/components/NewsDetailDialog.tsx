import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import partnershipDetail1 from "@/assets/partnership-detail-1.jpg";
import partnershipDetail2 from "@/assets/partnership-detail-2.jpg";
import partnershipDetail3 from "@/assets/partnership-detail-3.jpg";
import partnershipDetail4 from "@/assets/partnership-detail-4.jpg";

interface NewsDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewsDetailDialog = ({ open, onOpenChange }: NewsDetailDialogProps) => {
  const { language } = useLanguage();

  const content = language === "zh" ? {
    date: "2024年10月7日",
    title: "中華科技大學簽署產學合作, 尹航科技有限公司航空人才培育研究案",
    paragraph1: "航空產業與國際接軌，一直是值得年青學子終身投入的產業，加強飛機修護、航空零組件製造與飛行技能的相關實作課程模組。",
    paragraph2: "經由勞動部飛修乙丙級的證照訓練，以及民航局維修工程師的執照的考試，最後再藉由尹航科技有限公司的合作，加強對航空產業實務各方面的認識，以提升職場的競爭力並能勝任職場的挑戰。",
    alt1: "飛行模擬器訓練",
    alt2: "模擬駕駛艙內部",
    alt3: "全景飛行模擬系統",
    alt4: "航空訓練設備展示"
  } : {
    date: "October 7, 2024",
    title: "Industry-Academia Cooperation Agreement with China University of Science and Technology for Aviation Talent Cultivation",
    paragraph1: "The aviation industry, in line with international standards, has always been a worthwhile career path for young students. We are strengthening practical course modules related to aircraft maintenance, aviation component manufacturing, and flight skills.",
    paragraph2: "Through the Ministry of Labor's aircraft maintenance certification training and the Civil Aeronautics Administration's maintenance engineer licensing exams, combined with our cooperation with Aerobatic Technology Co., Ltd., we enhance understanding of various aspects of aviation industry practice to improve workplace competitiveness and meet professional challenges.",
    alt1: "Flight simulator training",
    alt2: "Inside the simulator cockpit",
    alt3: "Panoramic flight simulation system",
    alt4: "Aviation training equipment display"
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
        </DialogHeader>
        
        <div className="mt-6 space-y-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              {content.paragraph1}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {content.paragraph2}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="overflow-hidden rounded-lg border border-border">
              <img 
                src={partnershipDetail1} 
                alt={content.alt1} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-border">
              <img 
                src={partnershipDetail2} 
                alt={content.alt2} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-border">
              <img 
                src={partnershipDetail3} 
                alt={content.alt3} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="overflow-hidden rounded-lg border border-border">
              <img 
                src={partnershipDetail4} 
                alt={content.alt4} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsDetailDialog;
