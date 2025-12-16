import { MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const locations = [
    {
      title: t("contact.companyAddress"),
      address: t("contact.address1"),
      mapUrl: "https://www.google.com/maps?q=桃園市桃園區大興西路二段139巷137號3F&output=embed"
    },
    {
      title: t("contact.isoAddress"),
      address: t("contact.address2"),
      mapUrl: "https://www.google.com/maps?q=桃園市大園區五青路312巷51-7號&output=embed"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-muted-foreground">{t("contact.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{location.title}</h3>
                    <p className="text-muted-foreground">{location.address}</p>
                  </div>
                </div>
                
                <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
                  <iframe
                    src={location.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={location.title}
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
