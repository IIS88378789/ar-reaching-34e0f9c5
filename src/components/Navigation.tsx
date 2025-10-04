import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "產品資訊", href: "#products" },
    { name: "最新消息", href: "#news" },
    { name: "我們的服務", href: "#services" },
    { name: "關於我們", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Aerobatic Logo" className="h-12 w-auto" />
            <div className="text-primary-foreground">
              <div className="font-bold text-lg leading-tight">宇航科技有限公司</div>
              <div className="text-xs opacity-90">Aerobatic Technologies Ltd.</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-primary-foreground hover:bg-white/10 rounded-md transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button variant="secondary" className="ml-4">
              聯絡我們
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-foreground p-2"
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
                className="block px-4 py-3 text-primary-foreground hover:bg-white/10 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-2">
              <Button variant="secondary" className="w-full">
                聯絡我們
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
