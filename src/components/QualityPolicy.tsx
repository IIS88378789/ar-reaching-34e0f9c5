import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Shield, Target } from "lucide-react";

const QualityPolicy = () => {
  const policies = [
    {
      icon: GraduationCap,
      title: "教育訓練",
      subtitle: "能力提昇、風險預防",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-500",
    },
    {
      icon: Heart,
      title: "服務熱忱",
      subtitle: "完善服務、精度可靠",
      bgGradient: "from-red-500/10 to-pink-500/10",
      iconColor: "text-red-500",
    },
    {
      icon: Shield,
      title: "品質保固",
      subtitle: "專業用心、保固放心",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-500",
    },
    {
      icon: Target,
      title: "永續經營",
      subtitle: "不斷提昇、客戶滿意",
      bgGradient: "from-purple-500/10 to-violet-500/10",
      iconColor: "text-purple-500",
    },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {policies.map((policy, index) => {
            const Icon = policy.icon;
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 bg-gradient-to-br ${policy.bgGradient} backdrop-blur-sm`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardContent className="p-8 text-center">
                  {/* Icon container with animation */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-background rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <Icon className={`w-10 h-10 ${policy.iconColor} transition-transform duration-300 group-hover:rotate-12`} />
                    </div>
                    {/* Animated ring */}
                    <div className="absolute inset-0 mx-auto w-20 h-20 rounded-full border-2 border-accent/20 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {policy.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {policy.subtitle}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-accent to-primary transition-all duration-500 rounded-full mx-auto" />
                </CardContent>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QualityPolicy;
