import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import logo from "@/assets/logo.png";
import iso9001Logo from "@/assets/iso-9001-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("nav.products"), href: "#products" },
    { name: t("nav.news"), href: "#news" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.about"), href: "#about" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 shadow-md transition-all duration-300 ${
      scrolled ? "bg-background text-foreground" : "bg-primary text-primary-foreground"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Aerobatic Logo" className="h-12 w-auto" />
            <div>
              <div className="font-bold text-lg leading-tight">{t("nav.companyName")}</div>
              <div className="text-xs opacity-90">{t("nav.companyNameEn")}</div>
            </div>
            <img src={iso9001Logo} alt="ISO 9001 Certification" className="h-12 w-auto ml-2" title="ISO 9001:2015 認證" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-md transition-colors ${
                  scrolled ? "hover:bg-accent" : "hover:bg-white/10"
                }`}
              >
                {item.name}
              </a>
            ))}
            <LanguageToggle variant={scrolled ? "scrolled" : "default"} />
            <Button 
              variant="secondary" 
              className="ml-4"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe2YR642s-VKWJOpoZiqIvEQ30MAcs0_GAFDhmPHcrAhLhp-w/viewform?usp=dialog', '_blank')}
            >
              {t("nav.contact")}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-md transition-colors ${
                  scrolled ? "hover:bg-accent" : "hover:bg-white/10"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-2 flex items-center gap-2">
              <LanguageToggle variant={scrolled ? "scrolled" : "default"} />
              <Button 
                variant="secondary" 
                className="flex-1"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe2YR642s-VKWJOpoZiqIvEQ30MAcs0_GAFDhmPHcrAhLhp-w/viewform?usp=dialog', '_blank')}
              >
                {t("nav.contact")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
