import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, value: "15+", label: "年專業經驗" },
    { icon: Users, value: "50+", label: "專業團隊" },
    { icon: Globe, value: "10+", label: "合作夥伴" },
    { icon: TrendingUp, value: "100+", label: "成功案例" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            關於我們
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            專注於航空科技領域的專業服務公司
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-6">公司簡介</h3>
              <div className="space-y-4 text-lg">
                <p>
                  宇航科技有限公司成立於2009年，是台灣領先的航空訓練系統與模擬設備供應商。
                  我們專注於提供高品質的飛行訓練解決方案，服務範圍涵蓋飛行模擬器、運動平台系統及相關航空設備的代理與技術服務。
                </p>
                <p>
                  多年來，我們與國內外多所航空學院、飛行訓練中心建立長期合作關係，
                  致力於推動航空教育的發展，培育優秀的航空專業人才。
                </p>
                <p>
                  我們秉持「專業、創新、服務」的經營理念，持續引進國際先進技術，
                  為客戶提供最優質的產品與最完善的服務。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
