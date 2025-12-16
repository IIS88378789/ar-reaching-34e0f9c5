import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, TrendingUp } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import isoCertificate from "@/assets/iso-certificate.png";

const About = () => {
  const { t } = useLanguage();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const stats = [
    { icon: Award, value: "15+", label: t("about.yearsExperience") },
    { icon: Users, value: "50+", label: t("about.professionalTeam") },
    { icon: Globe, value: "10+", label: t("about.partners") },
    { icon: TrendingUp, value: "100+", label: t("about.successCases") },
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Orange gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/12 to-accent/8">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[80px]" />
      </div>
      
      {/* Dense small circles pattern */}
      <div className="absolute inset-0 opacity-30">
        {/* Top left cluster */}
        <div className="absolute top-20 left-20 w-24 h-24 rounded-full border border-accent/40" />
        <div className="absolute top-32 left-32 w-16 h-16 rounded-full border border-accent/30" />
        <div className="absolute top-28 left-48 w-12 h-12 rounded-full border border-accent/35" />
        <div className="absolute top-44 left-24 w-20 h-20 rounded-full border border-accent/25" />
        <div className="absolute top-52 left-44 w-14 h-14 rounded-full border border-accent/40" />
        
        {/* Top right cluster */}
        <div className="absolute top-16 right-24 w-28 h-28 rounded-full border border-accent/35" />
        <div className="absolute top-36 right-36 w-18 h-18 rounded-full border border-accent/40" />
        <div className="absolute top-28 right-52 w-16 h-16 rounded-full border border-accent/30" />
        <div className="absolute top-48 right-28 w-22 h-22 rounded-full border border-accent/35" />
        <div className="absolute top-60 right-48 w-12 h-12 rounded-full border border-accent/25" />
        
        {/* Middle left cluster */}
        <div className="absolute top-1/3 left-16 w-20 h-20 rounded-full border border-accent/40" />
        <div className="absolute top-1/3 left-40 w-14 h-14 rounded-full border border-accent/30" />
        <div className="absolute top-[40%] left-28 w-16 h-16 rounded-full border border-accent/35" />
        <div className="absolute top-[45%] left-52 w-12 h-12 rounded-full border border-accent/40" />
        
        {/* Middle right cluster */}
        <div className="absolute top-1/3 right-20 w-24 h-24 rounded-full border border-accent/35" />
        <div className="absolute top-[38%] right-44 w-18 h-18 rounded-full border border-accent/30" />
        <div className="absolute top-[43%] right-32 w-14 h-14 rounded-full border border-accent/40" />
        <div className="absolute top-1/2 right-52 w-16 h-16 rounded-full border border-accent/25" />
        
        {/* Bottom left cluster */}
        <div className="absolute bottom-24 left-24 w-22 h-22 rounded-full border border-accent/40" />
        <div className="absolute bottom-36 left-36 w-16 h-16 rounded-full border border-accent/35" />
        <div className="absolute bottom-28 left-52 w-14 h-14 rounded-full border border-accent/30" />
        <div className="absolute bottom-48 left-28 w-18 h-18 rounded-full border border-accent/35" />
        <div className="absolute bottom-56 left-44 w-12 h-12 rounded-full border border-accent/40" />
        
        {/* Bottom right cluster */}
        <div className="absolute bottom-20 right-28 w-26 h-26 rounded-full border border-accent/35" />
        <div className="absolute bottom-32 right-40 w-20 h-20 rounded-full border border-accent/40" />
        <div className="absolute bottom-28 right-56 w-14 h-14 rounded-full border border-accent/30" />
        <div className="absolute bottom-44 right-32 w-16 h-16 rounded-full border border-accent/35" />
        <div className="absolute bottom-52 right-48 w-12 h-12 rounded-full border border-accent/25" />
        
        {/* Center scattered circles */}
        <div className="absolute top-[55%] left-[35%] w-14 h-14 rounded-full border border-accent/30" />
        <div className="absolute top-[48%] left-[60%] w-18 h-18 rounded-full border border-accent/35" />
        <div className="absolute top-[62%] left-[48%] w-12 h-12 rounded-full border border-accent/40" />
        <div className="absolute top-[38%] left-[52%] w-16 h-16 rounded-full border border-accent/25" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("about.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="p-8 md:p-12">
                  <h3 className="text-3xl font-bold mb-6">{t("about.companyIntro")}</h3>
                  <div className="space-y-4 text-lg">
                    <p>{t("about.intro1")}</p>
                    <p>{t("about.intro2")}</p>
                    <p>{t("about.intro3")}</p>
                    <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                      <h4 className="text-xl font-semibold mb-3">{t("about.professionalServices")}</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="mr-2">✈️</span>
                          <span>{t("about.service1")}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">🔧</span>
                          <span>{t("about.service2")}</span>
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm mt-4 opacity-90">{t("about.isoDate")}</p>
                  </div>
                </div>
                <div className="bg-white p-6 md:p-8 h-full flex items-center justify-center">
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <img src={isoCertificate} alt="ISO 9001:2015 Certificate" title="Click to enlarge" className="w-full h-auto max-w-md object-contain animate-fade-in cursor-pointer hover:scale-105 transition-transform duration-300" />
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[90vh] w-full p-4 overflow-auto">
                      <img src={isoCertificate} alt="ISO 9001:2015 Certificate" className="w-full h-auto object-contain" />
                    </DialogContent>
                  </Dialog>
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
                <CardContent className="pt-6">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
