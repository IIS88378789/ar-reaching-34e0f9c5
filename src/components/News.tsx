import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const News = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const newsItems = [
    {
      date: "2024年3月15日",
      title: "中華科技大學簽署 A320 模擬機訓練合作計畫",
      excerpt: "本公司與中華科技大學航空學院簽署合作協議，共同推動專業飛行訓練計畫，提升航空人才培訓品質。",
      category: "合作夥伴",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      date: "2024年2月28日",
      title: "新一代六自由度運動平台正式發表",
      excerpt: "經過兩年研發，最新型六自由度運動平台系統正式發表，具備更高精度與更廣泛的應用範圍。",
      category: "產品發表",
      bgGradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      date: "2024年1月10日",
      title: "參展2024亞洲航空技術展覽會",
      excerpt: "本公司將參加年度亞洲最大航空技術展，展示最新的飛行訓練系統與模擬設備解決方案。",
      category: "活動資訊",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
    },
  ];

  return (
    <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            最新消息
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            掌握宇航科技的最新動態與產業資訊
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full max-w-6xl mx-auto mb-12"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {newsItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card
                    className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br ${item.bgGradient} border-2`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar size={16} />
                        <span>{item.date}</span>
                      </div>
                      <div className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium mb-3">
                        {item.category}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {item.excerpt}
                      </p>
                      <Button variant="link" className="p-0 h-auto text-accent hover:text-accent/80">
                        閱讀更多
                        <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="text-center">
          <Button variant="outline" size="lg">
            查看所有消息
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
