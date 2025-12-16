import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "zh" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  zh: {
    // Navigation
    "nav.products": "產品資訊",
    "nav.news": "最新消息",
    "nav.services": "我們的服務",
    "nav.about": "關於我們",
    "nav.contact": "聯絡我們",
    "nav.companyName": "尹航科技有限公司",
    "nav.companyNameEn": "Aerobatic Technologies Ltd.",
    
    // Hero
    "hero.title": "專業航空科技解決方案",
    "hero.subtitle": "提供創新的飛行訓練系統、活動模擬平臺及航空設備專業維修",
    "hero.exploreProducts": "探索產品",
    "hero.contactUs": "聯絡我們",
    "hero.yearsExperience": "年經驗",
    "hero.projectsCompleted": "專案實績",
    "hero.customerSatisfaction": "客戶滿意度",
    "hero.partners": "合作夥伴",
    
    // Products
    "products.title": "產品代理",
    "products.subtitle": "國際頂尖航太科技品牌授權代理",
    "products.socomore.desc": "SOCOMORE 為金屬和複合材料的製備和清潔提供廣泛的解決方案，用於運輸工具（包括鐵路）的建造和維護。我們的產品範圍涵蓋不同的領域，例如塗鴉去除、粘合和噴漆前表面的準備和清潔、外表面脫脂、內表面消毒、脫漆等專業服務。",
    "products.towflexx.desc": "TowFLEXX 的大型無牽引桿拖飛機是完全遙控的，並配備了獨特的 360° 旋轉轉盤。這項技術確保了最大的安全性並提供了卓越的機動性，大大簡化了地面作業。這一獨家功能使 TowFLEXX 成為現代地勤解決方案的領先供應商。",
    "products.motionSystems.desc": "Motion Systems 廣泛的專業運動平台和模擬器組件，專門針對期望運動系統不僅具有高品質和可靠性，還包括驚人的運動精度、卓越的動態性能和表現的客戶。運動平台非常適合構建全運動模擬器，用於研究、教育、設備測試或專業飛行和駕駛訓練。從2DOF、3DOF到6DOF的大量選擇，完美適應運動模擬領域中最尖端的項目和應用。",
    "products.testFuchs.desc": "Test-Fuchs專精於設計與生產飛機及直升機用測試系統、液壓與燃油測試設備及地面支援裝備。其產品廣泛應用於民航及軍用領域，客戶包括波音、空中巴士與各國空軍。公司以高精度研發與客製化解決方案著稱，通過多項國際航空品質認證，在歐洲、美洲與亞洲皆設有據點，為全球航空測試技術領導者之一。",
    "products.gallery": "產品展示",
    
    // Services
    "services.title": "我們的服務",
    "services.subtitle": "提供全方位的航空科技服務與解決方案",
    "services.1.title": "航空器材裝備銷售",
    "services.1.desc": "代理國際知名航空設備品牌，包括 TowFLEX、Motion Systems 等專業產品，提供完整的產品線與技術支援。",
    "services.2.title": "航空教學設備",
    "services.2.desc": "根據客戶需求設計與開發專屬的飛行訓練系統，從規劃、設計到安裝，提供一站式整合服務。",
    "services.3.title": "多軸飛行器",
    "services.3.desc": "完善的售後服務體系，提供設備維護、技術諮詢與零件更換服務，確保系統穩定運作。",
    "services.4.title": "A320 飛行模擬機維修",
    "services.4.desc": "各項硬體, 電腦軟體設定, 消耗器材更換等",
    "services.5.title": "帷幕測試發動機組裝維修",
    "services.5.desc": "風雨測試發動機試車臺, 提供700 PA, 1000 PA ,13級風速測試, 達到TAF 標準測試",
    "services.6.title": "複合材料零組件檢查，維修，製造",
    "services.6.desc": "在航空航太工業中至關重要。這些流程需要遵循嚴格的標準和採用專門技術，針對性修補方法和多樣化的製造工藝。",
    
    // News
    "news.title": "最新消息",
    "news.subtitle": "掌握尹航科技的最新動態與產業資訊",
    "news.readMore": "閱讀更多",
    
    // About
    "about.title": "關於我們",
    "about.subtitle": "專注於航空科技領域的專業服務公司",
    "about.companyIntro": "公司簡介",
    "about.intro1": "尹航科技有限公司於2017年成立，以從事民航，軍用和教學航空器提供航空器材相關供應和服務。",
    "about.intro2": "尹航科技有限公司之核心競爭力包含豐富的航空產業知識及銷售，資訊迅速流通成為我們最大競爭優勢，對市場需求的深入度，與客戶緊密的結合，是我們的目標，也是我們賴以生存的最佳利器。",
    "about.intro3": "二十年戰鬥機，客機飛機組裝經驗。民航局合格飛行，維修証照。",
    "about.professionalServices": "專業服務",
    "about.service1": "飛行模擬機訓練，資深教官指導教學",
    "about.service2": "飛機修護乙，丙級技術士證照輔導",
    "about.isoDate": "2025年8月18日 ISO 9001:2015 核發",
    "about.yearsExperience": "年專業經驗",
    "about.professionalTeam": "專業團隊",
    "about.partners": "合作夥伴",
    "about.successCases": "成功案例",
    
    // Quality Policy
    "quality.title": "品質政策",
    "quality.subtitle": "堅持卓越品質，提供最佳服務",
    "quality.training.title": "教育訓練",
    "quality.training.content": "持續投資員工專業培訓，建立完善的風險管理機制，確保團隊具備最新技術知識與安全意識。",
    "quality.service.title": "服務熱忱",
    "quality.service.content": "以客戶需求為核心，提供即時且完善的技術支援，確保每個環節都達到精準可靠的品質標準。",
    "quality.guarantee.title": "品質保固",
    "quality.guarantee.content": "採用國際認證標準，提供完整的產品保固服務，讓客戶在使用過程中安心無憂。",
    "quality.sustainable.title": "永續經營",
    "quality.sustainable.content": "持續優化產品與服務，建立長期合作夥伴關係，以客戶滿意度為企業永續發展的核心目標。",
    
    // Contact
    "contact.title": "聯絡地址",
    "contact.subtitle": "歡迎蒞臨參觀",
    "contact.companyAddress": "公司地址",
    "contact.isoAddress": "ISO 9001 維修廠地址",
    "contact.address1": "桃園市桃園區大興西路二段139巷137號3F",
    "contact.address2": "桃園市大園區五青路312巷51-7號",
    
    // Footer
    "footer.description": "專業的航空訓練系統與模擬設備供應商，致力於提供最優質的產品與服務。",
    "footer.quickLinks": "快速連結",
    "footer.contactInfo": "聯絡資訊",
    "footer.lineAccount": "LINE 官方帳號",
    "footer.copyright": "2024 尹航科技有限公司 Aerobatic Technologies Ltd. 版權所有",
  },
  en: {
    // Navigation
    "nav.products": "Products",
    "nav.news": "News",
    "nav.services": "Services",
    "nav.about": "About Us",
    "nav.contact": "Contact Us",
    "nav.companyName": "Aerobatic Technologies Ltd.",
    "nav.companyNameEn": "Aerobatic Technologies Ltd.",
    
    // Hero
    "hero.title": "Professional Aviation Technology Solutions",
    "hero.subtitle": "Providing innovative flight training systems, motion simulation platforms, and professional aviation equipment maintenance",
    "hero.exploreProducts": "Explore Products",
    "hero.contactUs": "Contact Us",
    "hero.yearsExperience": "Years Experience",
    "hero.projectsCompleted": "Projects Completed",
    "hero.customerSatisfaction": "Customer Satisfaction",
    "hero.partners": "Partners",
    
    // Products
    "products.title": "Product Agency",
    "products.subtitle": "Authorized distributor of top international aerospace technology brands",
    "products.socomore.desc": "SOCOMORE provides a wide range of solutions for the preparation and cleaning of metals and composites for the construction and maintenance of transportation vehicles including railways. Our product range covers different areas such as graffiti removal, surface preparation and cleaning before bonding and painting, exterior surface degreasing, interior surface disinfection, paint stripping and other professional services.",
    "products.towflexx.desc": "TowFLEXX's large towbarless aircraft tugs are fully remote controlled and equipped with a unique 360° rotating turntable. This technology ensures maximum safety and provides excellent maneuverability, greatly simplifying ground operations. This exclusive feature makes TowFLEXX a leading provider of modern ground handling solutions.",
    "products.motionSystems.desc": "Motion Systems offers an extensive range of professional motion platforms and simulator components, specifically designed for customers who demand not only high quality and reliability, but also impressive motion precision, outstanding dynamic performance and results. Motion platforms are ideal for building full-motion simulators for research, education, equipment testing, or professional flight and driving training. A wide selection from 2DOF, 3DOF to 6DOF, perfectly adapted to the most cutting-edge projects and applications in the field of motion simulation.",
    "products.testFuchs.desc": "Test-Fuchs specializes in designing and producing test systems for aircraft and helicopters, hydraulic and fuel test equipment, and ground support equipment. Its products are widely used in civil aviation and military fields, with customers including Boeing, Airbus, and air forces of various countries. The company is renowned for its high-precision R&D and customized solutions, has passed multiple international aviation quality certifications, and has operations in Europe, Americas, and Asia, making it one of the global leaders in aviation test technology.",
    "products.gallery": "Product Gallery",
    
    // Services
    "services.title": "Our Services",
    "services.subtitle": "Providing comprehensive aviation technology services and solutions",
    "services.1.title": "Aviation Equipment Sales",
    "services.1.desc": "Authorized distributor of internationally renowned aviation equipment brands, including TowFLEX, Motion Systems and other professional products, providing complete product lines and technical support.",
    "services.2.title": "Aviation Training Equipment",
    "services.2.desc": "Design and develop customized flight training systems according to customer needs, providing one-stop integrated services from planning, design to installation.",
    "services.3.title": "Multi-Axis Aircraft",
    "services.3.desc": "Complete after-sales service system, providing equipment maintenance, technical consultation and parts replacement services to ensure stable system operation.",
    "services.4.title": "A320 Flight Simulator Maintenance",
    "services.4.desc": "Hardware components, computer software configuration, consumable parts replacement, etc.",
    "services.5.title": "Environmental Engine Test Cell Assembly & Maintenance",
    "services.5.desc": "Rain and wind test engine test stand, providing 700 PA, 1000 PA, 13-level wind speed testing, meeting TAF standard testing requirements.",
    "services.6.title": "Composite Component Inspection, Repair & Manufacturing",
    "services.6.desc": "Critical in the aerospace industry. These processes require strict standards and specialized techniques, targeted repair methods and diverse manufacturing processes.",
    
    // News
    "news.title": "Latest News",
    "news.subtitle": "Stay updated with Aerobatic Technologies' latest developments and industry news",
    "news.readMore": "Read More",
    
    // About
    "about.title": "About Us",
    "about.subtitle": "A professional service company focused on aviation technology",
    "about.companyIntro": "Company Profile",
    "about.intro1": "Aerobatic Technologies Ltd. was established in 2017, engaged in providing aviation equipment supplies and services for civil aviation, military and training aircraft.",
    "about.intro2": "The core competitiveness of Aerobatic Technologies Ltd. includes rich aviation industry knowledge and sales. Rapid information circulation has become our greatest competitive advantage. Our goal is to deeply understand market needs and closely integrate with customers, which is also the best tool for our survival.",
    "about.intro3": "Twenty years of fighter jet and commercial aircraft assembly experience. Civil Aviation Administration certified flight and maintenance licenses.",
    "about.professionalServices": "Professional Services",
    "about.service1": "Flight simulator training, guided by senior instructors",
    "about.service2": "Aircraft maintenance technician certification guidance (Level B and C)",
    "about.isoDate": "ISO 9001:2015 issued on August 18, 2025",
    "about.yearsExperience": "Years Professional Experience",
    "about.professionalTeam": "Professional Team",
    "about.partners": "Partners",
    "about.successCases": "Success Cases",
    
    // Quality Policy
    "quality.title": "Quality Policy",
    "quality.subtitle": "Committed to excellence, providing the best service",
    "quality.training.title": "Training & Education",
    "quality.training.content": "Continuously invest in employee professional training, establish comprehensive risk management mechanisms, ensuring the team has the latest technical knowledge and safety awareness.",
    "quality.service.title": "Service Passion",
    "quality.service.content": "Customer needs as the core, providing timely and comprehensive technical support, ensuring every aspect meets precise and reliable quality standards.",
    "quality.guarantee.title": "Quality Assurance",
    "quality.guarantee.content": "Adopting international certification standards, providing complete product warranty services, allowing customers to use with peace of mind.",
    "quality.sustainable.title": "Sustainable Operations",
    "quality.sustainable.content": "Continuously optimize products and services, establish long-term partnership relationships, with customer satisfaction as the core goal of enterprise sustainable development.",
    
    // Contact
    "contact.title": "Contact Address",
    "contact.subtitle": "Welcome to visit",
    "contact.companyAddress": "Company Address",
    "contact.isoAddress": "ISO 9001 Repair Facility Address",
    "contact.address1": "3F, No. 137, Lane 139, Sec. 2, Daxing W. Rd., Taoyuan Dist., Taoyuan City",
    "contact.address2": "No. 51-7, Lane 312, Wuqing Rd., Dayuan Dist., Taoyuan City",
    
    // Footer
    "footer.description": "Professional aviation training system and simulation equipment supplier, committed to providing the highest quality products and services.",
    "footer.quickLinks": "Quick Links",
    "footer.contactInfo": "Contact Information",
    "footer.lineAccount": "LINE Official Account",
    "footer.copyright": "2024 Aerobatic Technologies Ltd. All Rights Reserved",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "zh";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.zh] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
