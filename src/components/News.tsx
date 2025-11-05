import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";
import NewsDetailDialog from "./NewsDetailDialog";
import TowflexxNewsDialog from "./TowflexxNewsDialog";
import TadteNewsDialog from "./TadteNewsDialog";
import newsSimulator from "@/assets/news-simulator-training.jpg";
import newsMotion from "@/assets/news-motion-platform.jpg";
import newsExhibition from "@/assets/news-exhibition.jpg";
import newsPartnership from "@/assets/news-partnership.jpg";
import newsTowflexxDemo from "@/assets/news-towflexx-demo.jpg";
import newsTadte from "@/assets/news-tadte-2025.jpg";
const News = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isTowflexxDialogOpen, setIsTowflexxDialogOpen] = useState(false);
  const [isTadteDialogOpen, setIsTadteDialogOpen] = useState(false);
  
  const plugin = useRef(Autoplay({
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: true
  }));
  const newsItems = [{
    date: "2025年9月18日",
    title: "2025年台北國際航太暨國防工業展（TADTE 2025）",
    excerpt: "",
    category: "展覽活動",
    image: newsTadte
  }, {
    date: "2025年5月21日",
    title: "TOWFLEXX TF5 飛特立航空 DEMO",
    excerpt: "飛特立航空採用 TOWFLEXX TF5 執行拖機工作，減少拖機作業人員負擔和增加機棚場現有區域飛機停放。",
    category: "產品展示",
    image: newsTowflexxDemo
  }, {
    date: "2024年10月7日",
    title: "中華科技大學簽署產學合作,尹航科技有限公司航空人才培育研究案",
    excerpt: "本公司與中華科技大學正式簽署產學合作協議，共同推動航空人才培育研究計畫，結合產業實務與學術研究，培養專業航空技術人才。",
    category: "合作夥伴",
    image: newsPartnership
  }, {
    date: "2024年3月15日",
    title: "中華科技大學簽署 A320 模擬機訓練合作計畫",
    excerpt: "本公司與中華科技大學航空學院簽署合作協議，共同推動專業飛行訓練計畫，提升航空人才培訓品質。",
    category: "合作夥伴",
    image: newsSimulator
  }, {
    date: "2024年2月28日",
    title: "新一代六自由度運動平台正式發表",
    excerpt: "經過兩年研發，最新型六自由度運動平台系統正式發表，具備更高精度與更廣泛的應用範圍。",
    category: "產品發表",
    image: newsMotion
  }, {
    date: "2024年1月10日",
    title: "參展2024亞洲航空技術展覽會",
    excerpt: "本公司將參加年度亞洲最大航空技術展，展示最新的飛行訓練系統與模擬設備解決方案。",
    category: "活動資訊",
    image: newsExhibition
  }, {
    date: "2023年12月20日",
    title: "完成 B737-800 模擬機系統升級專案",
    excerpt: "成功完成某航空公司 B737-800 全動式模擬機的系統升級，提升訓練效能與真實度。",
    category: "專案成果",
    image: newsSimulator
  }, {
    date: "2023年11月8日",
    title: "與國際航空組織簽訂技術合作備忘錄",
    excerpt: "正式與國際航空訓練標準組織簽署技術合作協議，共同推動亞太地區航空訓練標準化。",
    category: "合作夥伴",
    image: newsExhibition
  }, {
    date: "2023年10月15日",
    title: "運動平台系統獲得 FAA 認證",
    excerpt: "本公司最新開發的六自由度運動平台系統通過美國聯邦航空總署 FAA Level D 認證。",
    category: "產品認證",
    image: newsMotion
  }];
  const featuredNews = newsItems[0];
  const secondaryNews = newsItems.slice(1, 3);
  const carouselNews = newsItems.slice(3);

  const renderNewsCard = (item: typeof newsItems[0], index: number, isFeatured = false, isSecondary = false) => (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card border border-border/50 group relative h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className={`relative overflow-hidden bg-muted ${isFeatured ? 'h-72 md:h-96' : isSecondary ? 'h-32' : 'h-40'}`}>
        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-3 left-3 inline-block px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground border border-border rounded text-xs font-semibold tracking-wide">
          {item.category}
        </div>
      </div>
      <CardContent className={`${isFeatured ? 'p-6' : 'p-4'} relative`}>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
          <Calendar size={12} className="text-accent" />
          <span className="font-medium">{item.date}</span>
        </div>
        <h3 className={`${isFeatured ? 'text-xl md:text-2xl' : isSecondary ? 'text-base' : 'text-lg'} font-bold mb-2 text-foreground leading-tight group-hover:text-accent transition-colors duration-300`}>
          {item.title}
        </h3>
        {!isSecondary && (
          <p className={`text-muted-foreground mb-3 ${isFeatured ? 'line-clamp-3 text-sm' : 'line-clamp-2 text-sm'} leading-relaxed`}>
            {item.excerpt}
          </p>
        )}
        <Button 
          variant="link" 
          className="p-0 h-auto text-accent hover:text-accent/80 font-semibold group/btn text-sm"
          onClick={() => {
            if (index === 0) {
              setIsTadteDialogOpen(true);
            } else if (index === 1) {
              setIsTowflexxDialogOpen(true);
            } else if (index === 2) {
              setIsDialogOpen(true);
            }
          }}
        >
          閱讀更多
          <ArrowRight size={14} className="ml-1 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );

  return <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            最新消息
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">掌握尹航科技的最新動態與產業資訊</p>
        </div>

        {/* Featured and Secondary News */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Featured News - Takes 2 columns */}
            <div className="lg:col-span-2">
              {renderNewsCard(featuredNews, 0, true)}
            </div>
            
            {/* Secondary News - Stacked in 1 column */}
            <div className="flex flex-col gap-6">
              {secondaryNews.map((item, idx) => (
                <div key={idx + 1}>
                  {renderNewsCard(item, idx + 1, false, true)}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel for remaining news */}
        {/* {carouselNews.length > 0 && (
          <Carousel opts={{
            align: "start",
            loop: true
          }} plugins={[plugin.current]} className="w-full max-w-6xl mx-auto mb-12">
            <CarouselContent>
              {carouselNews.map((item, index) => (
                <CarouselItem key={index + 3} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    {renderNewsCard(item, index + 3)}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-background/90 backdrop-blur-sm border-border hover:bg-accent hover:text-accent-foreground" />
            <CarouselNext className="right-2 bg-background/90 backdrop-blur-sm border-border hover:bg-accent hover:text-accent-foreground" />
          </Carousel>
        )} */}
      </div>

      <NewsDetailDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      <TowflexxNewsDialog open={isTowflexxDialogOpen} onOpenChange={setIsTowflexxDialogOpen} />
      <TadteNewsDialog open={isTadteDialogOpen} onOpenChange={setIsTadteDialogOpen} />
    </section>;
};
export default News;