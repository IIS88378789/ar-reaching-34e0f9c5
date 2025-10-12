import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-aircraft.jpg";
const Hero = () => {
  return <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Aircraft in hangar - Professional aviation technology solutions" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      {/* Animated Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-glow" style={{
      animationDelay: '1s'
    }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        
        
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
          專業航空科技
          <span className="block mt-2 bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent animate-shimmer">
            解決方案
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          提供創新的飛行訓練系統、運動模擬平台及航空設備代理服務
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg group bg-gradient-to-r from-accent to-secondary hover:shadow-glow-sm transition-all duration-300">
            探索產品
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg glass-effect text-primary-foreground border-accent/50 hover:border-accent hover:shadow-glow-sm transition-all duration-300">
            聯絡我們
          </Button>
        </div>

        {/* Tech Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[{
          number: "15+",
          label: "年經驗"
        }, {
          number: "500+",
          label: "專案實績"
        }, {
          number: "98%",
          label: "客戶滿意度"
        }].map((stat, i) => <div key={i} className="glass-effect rounded-lg p-4 animate-fade-in" style={{
          animationDelay: `${i * 0.2}s`
        }}>
              <div className="text-3xl font-bold text-accent mb-1">{stat.number}</div>
              <div className="text-sm text-primary-foreground/70">{stat.label}</div>
            </div>)}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/60 rounded-full flex items-start justify-center p-2 shadow-glow-sm">
          <div className="w-1 h-3 bg-accent rounded-full animate-pulse-glow" />
        </div>
      </div>
    </section>;
};
export default Hero;