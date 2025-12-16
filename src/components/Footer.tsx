import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";
import lineQRCode from "@/assets/line-qrcode.png";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Aerobatic Logo" className="h-12 w-auto" />
              <div>
                <div className="font-bold text-lg">{t("nav.companyName")}</div>
                <div className="text-xs opacity-90">{t("nav.companyNameEn")}</div>
              </div>
            </div>
            <p className="text-sm opacity-90">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  {t("nav.products")}
                </a>
              </li>
              <li>
                <a href="#news" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  {t("nav.news")}
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  {t("nav.services")}
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  {t("nav.about")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.contactInfo")}</h3>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="opacity-90">{t("contact.address1")}</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone size={16} className="flex-shrink-0" />
                <span className="opacity-90">+886-932 332804</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail size={16} className="flex-shrink-0" />
                <span className="opacity-90">sales@aerobatic-tec.com.tw</span>
              </li>
            </ul>
            <div className="flex flex-col items-start gap-2">
              <p className="text-sm font-medium">{t("footer.lineAccount")}</p>
              <img src={lineQRCode} alt="LINE QR Code" className="w-32 h-32 bg-white p-2 rounded" />
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>&copy; {t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
