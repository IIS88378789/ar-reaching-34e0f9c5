import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, TrendingUp } from "lucide-react";
import isoCertificate from "@/assets/iso-certificate.png";
const About = () => {
  const stats = [{
    icon: Award,
    value: "15+",
    label: "年專業經驗"
  }, {
    icon: Users,
    value: "50+",
    label: "專業團隊"
  }, {
    icon: Globe,
    value: "10+",
    label: "合作夥伴"
  }, {
    icon: TrendingUp,
    value: "100+",
    label: "成功案例"
  }];
  return <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Aircraft and maintenance themed background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-10 left-10 text-8xl">✈️</div>
        <div className="absolute top-20 right-20 text-7xl rotate-45">🔧</div>
        <div className="absolute bottom-32 left-1/4 text-6xl -rotate-12">⚙️</div>
        <div className="absolute top-1/3 right-1/4 text-9xl rotate-12">✈️</div>
        <div className="absolute bottom-20 right-10 text-7xl">🛠️</div>
        <div className="absolute top-1/2 left-10 text-6xl rotate-90">⚡</div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            關於我們
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            專注於航空科技領域的專業服務公司
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="p-8 md:p-12">
                  <h3 className="text-3xl font-bold mb-6">公司簡介</h3>
                  <div className="space-y-4 text-lg">
                    <p>尹航科技有限公司於2017年成立，以從事民航，軍用和教學航空器提供航空器材相關供應和服務。</p>
                    <p>尹航科技有限公司之核心競爭力包含豐富的航空產業知識及銷售，資訊迅速流通成為我們最大競爭優勢，對市場需求的深入度，與客戶緊密的結合，是我們的目標，也是我們賴以生存的最佳利器。</p>
                    <p>二十年戰鬥機，客機飛機組裝經驗。民航局合格飛行，維修証照。</p>
                    <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                      <h4 className="text-xl font-semibold mb-3">專業服務</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="mr-2">✈️</span>
                          <span>飛行模擬機訓練，資深教官指導教學</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">🔧</span>
                          <span>飛機修護乙，丙級技術士證照輔導</span>
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm mt-4 opacity-90">2025年8月18日 ISO 9001:2015 核發</p>
                  </div>
                </div>
                <div className="bg-white p-6 md:p-8 h-full flex items-center justify-center">
                  <img src={isoCertificate} alt="ISO 9001:2015 證書" title="2025年8月18日 ISO 9001:2015 核發" className="w-full h-auto max-w-md object-contain animate-fade-in" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Icon className="mx-auto mb-4 text-primary" size={48} />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>;
};
export default About;