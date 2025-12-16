import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface LanguageToggleProps {
  variant?: "default" | "scrolled";
}

const LanguageToggle = ({ variant = "default" }: LanguageToggleProps) => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "zh" ? "en" : "zh");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className={`flex items-center gap-1.5 font-medium ${
        variant === "scrolled"
          ? "hover:bg-accent"
          : "hover:bg-white/10 text-primary-foreground"
      }`}
    >
      <Globe size={16} />
      <span>{language === "zh" ? "EN" : "中文"}</span>
    </Button>
  );
};

export default LanguageToggle;
