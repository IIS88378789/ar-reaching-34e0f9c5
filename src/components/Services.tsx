import { Plane, Settings, GraduationCap, Wrench, Cog, Layers } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
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
import serviceEngineTest1 from "@/assets/service-engine-test-1.jpg";
import serviceEngineTest2 from "@/assets/service-engine-test-2.jpg";
import serviceA320_1 from "@/assets/service-a320-1.jpg";
import serviceA320_2 from "@/assets/service-a320-2.jpg";
import serviceA320_3 from "@/assets/service-a320-3.jpg";
import serviceComposite1 from "@/assets/service-composite-1.jpg";
import serviceComposite2 from "@/assets/service-composite-2.jpg";
import serviceComposite3 from "@/assets/service-composite-3.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Plane,
      title: t("services.1.title"),
      description: t("services.1.desc"),
      images: [serviceAircraft1, serviceAircraft2],
    },
    {
      icon: Settings,
      title: t("services.2.title"),
      description: t("services.2.desc"),
      images: [serviceTeaching1, serviceTeaching2],
    },
    {
      icon: GraduationCap,
      title: t("services.3.title"),
      description: t("services.3.desc"),
      images: [serviceSimulator1, serviceSimulator2, serviceSimulator3, serviceSimulator4],
    },
    {
      icon: Wrench,
      title: t("services.4.title"),
      description: t("services.4.desc"),
      images: [serviceA320_1, serviceA320_2, serviceA320_3],
    },
    {
      icon: Cog,
      title: t("services.5.title"),
      description: t("services.5.desc"),
      images: [serviceEngineTest1, serviceEngineTest2],
    },
    {
      icon: Layers,
      title: t("services.6.title"),
      description: t("services.6.desc"),
      images: [serviceComposite1, serviceComposite2, serviceComposite3],
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
              {t("services.title")}
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
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
