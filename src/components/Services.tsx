import { Plane, Settings, GraduationCap, Wrench } from "lucide-react";
import serviceAircraft1 from "@/assets/service-aircraft-1.jpg";
import serviceAircraft2 from "@/assets/service-aircraft-2.jpg";
import serviceTeaching1 from "@/assets/service-teaching-1.jpg";
import serviceTeaching2 from "@/assets/service-teaching-2.jpg";
import serviceMaintenance from "@/assets/service-maintenance.png";
import serviceParts from "@/assets/service-parts.png";
import serviceSimulator1 from "@/assets/service-simulator-1.jpg";
import serviceSimulator2 from "@/assets/service-simulator-2.jpg";
import serviceSimulator3 from "@/assets/service-simulator-3.jpg";
import serviceSimulator4 from "@/assets/service-simulator-4.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "航空器材裝備銷售",
      description: "代理國際知名航空設備品牌，包括 TowFLEX、Motion Systems 等專業產品，提供完整的產品線與技術支援。",
      images: [serviceAircraft1, serviceAircraft2],
    },
    {
      icon: Settings,
      title: "航空教學設備",
      description: "根據客戶需求設計與開發專屬的飛行訓練系統，從規劃、設計到安裝，提供一站式整合服務。",
      images: [serviceTeaching1, serviceTeaching2],
    },
    {
      icon: GraduationCap,
      title: "多軸飛行器",
      description: "完善的售後服務體系，提供設備維護、技術諮詢與零件更換服務，確保系統穩定運作。",
      images: [serviceSimulator1, serviceSimulator2, serviceSimulator3, serviceSimulator4],
    },
    {
      icon: Wrench,
      title: "A320 飛行模擬機維修",
      description: "各項硬體, 電腦軟體設定, 消耗器材更換等",
      images: [serviceParts, serviceParts],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background overflow-hidden relative">
      {/* Tech Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              我們的服務
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent mb-6" />
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
                className={`relative grid md:grid-cols-2 gap-12 items-center ${
                  isEven ? "" : "md:grid-flow-dense"
                }`}
              >
                {/* Geometric background decoration */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-full blur-3xl ${
                    isEven ? "-left-32" : "-right-32"
                  }`}
                />
                
                {/* Image Section - Static or Carousel based on image count */}
                <div
                  className={`relative group ${isEven ? "" : "md:col-start-2"}`}
                >
                  {/* Floating geometric shapes */}
                  <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-accent/30 rounded-lg rotate-12 group-hover:rotate-45 transition-transform duration-500 z-20" />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-secondary/30 rounded-lg -rotate-12 group-hover:-rotate-45 transition-transform duration-500 z-20" />
                  
                  {service.images.length <= 2 ? (
                    // Static display for 2 or fewer images
                    <div className="grid grid-cols-2 gap-4">
                      {service.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-glow transition-all duration-500"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-secondary/20 z-10 pointer-events-none" />
                          <img
                            src={image}
                            alt={`${service.title} ${imgIndex + 1}`}
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/30 to-transparent z-10 pointer-events-none" />
                          
                          {/* Glowing border effect */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                            <div className="absolute inset-0 rounded-2xl border-2 border-accent/50 animate-pulse-glow" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Carousel for more than 2 images
                    <Carousel
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                      plugins={[
                        Autoplay({
                          delay: 3000,
                        }),
                      ]}
                      className="w-full"
                    >
                      <CarouselContent>
                        {service.images.map((image, imgIndex) => (
                          <CarouselItem key={imgIndex} className="md:basis-1/2">
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-glow transition-all duration-500">
                              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-secondary/20 z-10 pointer-events-none" />
                              <img
                                src={image}
                                alt={`${service.title} ${imgIndex + 1}`}
                                className="w-full h-64 object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/30 to-transparent z-10 pointer-events-none" />
                              
                              {/* Glowing border effect */}
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute inset-0 rounded-2xl border-2 border-accent/50 animate-pulse-glow" />
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                  )}
                </div>

                {/* Content Section */}
                <div
                  className={`relative ${isEven ? "" : "md:col-start-1 md:row-start-1"}`}
                >
                  <div className="space-y-6">
                    {/* Icon with glow effect */}
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent via-secondary to-primary rounded-2xl shadow-lg group hover:shadow-glow-sm transition-all duration-300 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                      <Icon className="w-10 h-10 text-primary-foreground relative z-10" />
                    </div>
                    
                    {/* Title with gradient */}
                    <h3 className="text-3xl md:text-4xl font-bold">
                      <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                        {index + 1}. {service.title}
                      </span>
                    </h3>
                    
                    {/* Animated divider */}
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
                      <div className="w-24 h-1 bg-gradient-to-r from-accent via-secondary to-transparent" />
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* Tech decoration lines */}
                    <div className="flex gap-2 pt-4">
                      <div className="h-1 w-12 bg-accent/50 rounded" />
                      <div className="h-1 w-8 bg-secondary/50 rounded" />
                      <div className="h-1 w-6 bg-accent/30 rounded" />
                    </div>
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
