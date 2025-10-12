import { useState } from "react";
import { GraduationCap, Heart, Shield, Target } from "lucide-react";

interface Policy {
  icon: any;
  title: string;
  content: string;
  iconColor: string;
}

const QualityPolicy = () => {
  const [policies] = useState<Policy[]>([
    {
      icon: GraduationCap,
      title: "教育訓練",
      content: "持續投資員工專業培訓，建立完善的風險管理機制，確保團隊具備最新技術知識與安全意識。",
      iconColor: "text-primary",
    },
    {
      icon: Heart,
      title: "服務熱忱",
      content: "以客戶需求為核心，提供即時且完善的技術支援，確保每個環節都達到精準可靠的品質標準。",
      iconColor: "text-accent",
    },
    {
      icon: Shield,
      title: "品質保固",
      content: "採用國際認證標準，提供完整的產品保固服務，讓客戶在使用過程中安心無憂。",
      iconColor: "text-primary",
    },
    {
      icon: Target,
      title: "永續經營",
      content: "持續優化產品與服務，建立長期合作夥伴關係，以客戶滿意度為企業永續發展的核心目標。",
      iconColor: "text-accent",
    },
  ]);

  return (
    <section id="quality-policy" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            品質政策
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            堅持卓越品質，提供最佳服務
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {policies.map((policy, index) => {
            const Icon = policy.icon;
            return (
              <div
                key={index}
                className="group relative animate-fade-in"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Glass card with transparent background */}
                <div className="relative p-8 text-center bg-card/50 backdrop-blur-sm border border-border/30 rounded-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:bg-card/70">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                      <Icon className={`w-8 h-8 ${policy.iconColor} transition-transform duration-300`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {policy.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm text-left">
                    {policy.content}
                  </p>

                  {/* Subtle hover indicator */}
                  <div className="mt-6 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 transition-all duration-500 mx-auto" />
                </div>

                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 blur-xl" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QualityPolicy;
