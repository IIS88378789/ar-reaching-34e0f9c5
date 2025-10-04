import { Card, CardContent } from "@/components/ui/card";
import simulatorImage from "@/assets/product-simulator.jpg";
import equipmentImage from "@/assets/product-equipment.jpg";
import motionImage from "@/assets/product-motion.jpg";

const Products = () => {
  const products = [
    {
      title: "飛行模擬訓練系統",
      description: "專業級飛行模擬器，提供真實的飛行訓練體驗，配備最先進的控制系統和高解析度視覺系統。",
      image: simulatorImage,
      features: ["高精度控制系統", "沉浸式視覺體驗", "客製化訓練方案"],
    },
    {
      title: "航空維修設備",
      description: "完整的航空維修與工程設備解決方案，確保飛機維護的最高標準和安全性。",
      image: equipmentImage,
      features: ["專業維修工具", "品質檢測設備", "技術支援服務"],
    },
    {
      title: "運動模擬平台",
      description: "六自由度運動平台系統，提供精確的運動模擬，適用於各種訓練場景。",
      image: motionImage,
      features: ["六自由度設計", "高精度控制", "多場景應用"],
    },
  ];

  return (
    <section id="products" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            產品資訊
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            提供業界領先的航空訓練與模擬設備
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
