import { Card, CardContent } from "@/components/ui/card";
import { Plane, Settings, GraduationCap, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "航空器材銷售",
      description: "代理國際知名航空設備品牌，包括 TowFLEX、Motion Systems 等專業產品，提供完整的產品線與技術支援。",
    },
    {
      icon: Settings,
      title: "飛機, 發動機維修, 組裝",
      description: "根據客戶需求設計與開發專屬的飛行訓練系統，從規劃、設計到安裝，提供一站式整合服務。",
    },
    {
      icon: GraduationCap,
      title: "航空教學設備",
      description: "提供專業的飛行訓練課程與模擬器操作培訓，協助航空院校與訓練機構提升教學品質。",
    },
    {
      icon: Headphones,
      title: "技術支援維護",
      description: "完善的售後服務體系，提供設備維護、技術諮詢與零件更換服務，確保系統穩定運作。",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            我們的服務
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            提供全方位的航空科技服務與解決方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
