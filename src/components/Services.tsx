import { Plane, Settings, GraduationCap, Wrench } from "lucide-react";
import serviceAircraft from "@/assets/service-aircraft.png";
import serviceMaintenance from "@/assets/service-maintenance.png";
import serviceParts from "@/assets/service-parts.png";
import serviceSimulator from "@/assets/service-simulator.png";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "航空器材銷售",
      description: "代理國際知名航空設備品牌，包括 TowFLEX、Motion Systems 等專業產品，提供完整的產品線與技術支援。",
      image: serviceAircraft,
    },
    {
      icon: Settings,
      title: "飛機, 發動機維修, 組裝",
      description: "根據客戶需求設計與開發專屬的飛行訓練系統，從規劃、設計到安裝，提供一站式整合服務。",
      image: serviceMaintenance,
    },
    {
      icon: GraduationCap,
      title: "航空教學設備",
      description: "提供專業的飛行訓練課程與模擬器操作培訓，協助航空院校與訓練機構提升教學品質。",
      image: serviceParts,
    },
    {
      icon: Wrench,
      title: "多軸飛行模擬器設計, 維修",
      description: "完善的售後服務體系，提供設備維護、技術諮詢與零件更換服務，確保系統穩定運作。",
      image: serviceSimulator,
    },
  ];

  return (
    <section id="services" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            我們的服務
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            提供全方位的航空科技服務與解決方案
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${
                  isEven ? "" : "md:grid-flow-dense"
                }`}
              >
                {/* Geometric background decoration */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-72 h-72 bg-primary/5 rotate-45 -z-10 ${
                    isEven ? "-left-20" : "-right-20"
                  }`}
                />
                
                {/* Image Section */}
                <div
                  className={`relative group ${isEven ? "" : "md:col-start-2"}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                  <div className="relative overflow-hidden rounded-lg shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`relative ${isEven ? "" : "md:col-start-1 md:row-start-1"}`}
                >
                  <div className="space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg shadow-lg">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent" />
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
