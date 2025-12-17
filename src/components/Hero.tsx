import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroSky1 from "@/assets/hero-sky-1.jpg";
import heroSky2 from "@/assets/hero-sky-2.jpg";
import heroSky3 from "@/assets/hero-sky-3.jpg";
import heroSky4 from "@/assets/hero-sky-4.jpg";
import heroSky5 from "@/assets/hero-sky-5.jpg";

const Hero = () => {
  const { t } = useLanguage();
  const heroImages = [{
    src: heroSky1,
    alt: "Commercial aircraft soaring through blue sky with clouds"
  }, {
    src: heroSky2,
    alt: "Fighter jet flying through dramatic sunset clouds"
  }, {
    src: heroSky3,
    alt: "Business jet above sea of white clouds"
  }, {
    src: heroSky4,
    alt: "Light sport aircraft flying in clear blue sky"
  }, {
    src: heroSky5,
    alt: "Twin-engine aircraft soaring through majestic dusk sky"
  }];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const stats = [
    { number: "15+", label: t("hero.yearsExperience") },
    { number: "100+", label: t("hero.projectsCompleted") },
    { number: "98%", label: t("hero.customerSatisfaction") },
    { number: "10+", label: t("hero.partners") },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Image Slider with Overlay */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-[2000ms] ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}>
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 animate-fade-in">
          {t("hero.title")}
        </h1>
        
        <p className="text-lg md:text-xl text-primary/90 mb-10 max-w-3xl mx-auto leading-relaxed" style={{ textShadow: '0 0 8px rgba(251, 146, 60, 0.8), 0 0 12px rgba(251, 146, 60, 0.6)' }}>
          {t("hero.subtitle")}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="text-lg group bg-gradient-to-r from-accent to-secondary hover:shadow-glow-sm transition-all duration-300"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe2YR642s-VKWJOpoZiqIvEQ30MAcs0_GAFDhmPHcrAhLhp-w/viewform?usp=dialog', '_blank')}
          >
            {t("hero.exploreProducts")}
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg glass-effect text-primary border-primary/50 hover:border-primary transition-all duration-300">
            {t("hero.contactUs")}
          </Button>
        </div>

        {/* Tech Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="glass-effect rounded-lg p-4 animate-fade-in" style={{ animationDelay: `${i * 0.2}s` }}>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-xs md:text-sm text-primary/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
