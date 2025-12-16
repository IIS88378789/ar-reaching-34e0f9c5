import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import socomorelogo from "@/assets/socomore-logo.png";
import towflexxLogo from "@/assets/towflexx-logo.png";
import motionPlatform from "@/assets/motion-platform-1.png";
import motionSimulator from "@/assets/motion-simulator.png";
import motionSystemsLogo from "@/assets/motion-systems-logo.png";
import testfuchsLogo from "@/assets/testfuchs-logo.svg";
import motionSimulatorDetail from "@/assets/motion-simulator-detail.png";
import motionPlatformDetail from "@/assets/motion-platform-detail.png";
import socomoreRailway from "@/assets/socomore-railway.jpg";
import towflexxModels from "@/assets/towflexx-models.png";
import towflexxBlueAngels from "@/assets/towflexx-blue-angels.png";
import towflexxF16 from "@/assets/towflexx-f16.jpg";
import testfuchsCustom from "@/assets/testfuchs-custom.png";
import testfuchsModular from "@/assets/testfuchs-modular.png";
import testfuchsCommercial from "@/assets/testfuchs-commercial.png";

const Products = () => {
  const { t } = useLanguage();
  const [isMotionGalleryOpen, setIsMotionGalleryOpen] = useState(false);
  const [isSocomoreGalleryOpen, setIsSocomoreGalleryOpen] = useState(false);
  const [isTowflexxGalleryOpen, setIsTowflexxGalleryOpen] = useState(false);
  const [isTestfuchsGalleryOpen, setIsTestfuchsGalleryOpen] = useState(false);
  const [motionImageIndex, setMotionImageIndex] = useState(0);
  const [socomoreImageIndex, setSocomoreImageIndex] = useState(0);
  const [towflexxImageIndex, setTowflexxImageIndex] = useState(0);
  const [testfuchsImageIndex, setTestfuchsImageIndex] = useState(0);

  const motionSystemsGallery = [
    { src: motionSimulatorDetail, alt: "Motion Systems Simulator QS-S25" },
    { src: motionPlatformDetail, alt: "Motion Systems Platform PS-6TL-350" },
  ];

  const socomoreGallery = [
    { src: socomoreRailway, alt: "SOCOMORE Railway Application" },
  ];

  const towflexxGallery = [
    { src: towflexxModels, alt: "TowFLEXX Product Line" },
    { src: towflexxBlueAngels, alt: "TowFLEXX Application" },
    { src: towflexxF16, alt: "TowFLEXX F-16 Application" },
  ];

  const testfuchsGallery = [
    { src: testfuchsCustom, alt: "Test Fuchs Custom Test Stand" },
    { src: testfuchsModular, alt: "Test Fuchs Standard Test Stand" },
    { src: testfuchsCommercial, alt: "Test Fuchs Commercial Solution" },
  ];

  const products = [
    {
      title: "SOCOMORE",
      logo: socomorelogo,
      description: t("products.socomore.desc"),
      image: null,
      bgColor: "from-primary/20 to-accent/20",
      hasGallery: true,
    },
    {
      title: "TowFLEXX",
      logo: towflexxLogo,
      description: t("products.towflexx.desc"),
      image: null,
      bgColor: "from-destructive/20 to-primary/20",
      hasGallery: true,
    },
    {
      title: "Motion Systems",
      logo: motionSystemsLogo,
      description: t("products.motionSystems.desc"),
      image: motionSystemsLogo,
      bgColor: "from-accent/20 to-secondary/20",
      hasGallery: true,
    },
    {
      title: "Test Fuchs",
      logo: testfuchsLogo,
      description: t("products.testFuchs.desc"),
      image: null,
      bgColor: "from-primary/20 to-destructive/20",
      hasGallery: true,
    },
  ];

  return (
    <section id="products" className="py-20 bg-muted relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("products.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("products.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-accent/50 bg-card/50 backdrop-blur-sm ${
                product.hasGallery ? "cursor-pointer" : ""
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
              onClick={() => {
                if (product.hasGallery) {
                  if (product.title === "Motion Systems") {
                    setMotionImageIndex(0);
                    setIsMotionGalleryOpen(true);
                  } else if (product.title === "SOCOMORE") {
                    setSocomoreImageIndex(0);
                    setIsSocomoreGalleryOpen(true);
                  } else if (product.title === "TowFLEXX") {
                    setTowflexxImageIndex(0);
                    setIsTowflexxGalleryOpen(true);
                  } else if (product.title === "Test Fuchs") {
                    setTestfuchsImageIndex(0);
                    setIsTestfuchsGalleryOpen(true);
                  }
                }
              }}
            >
              {product.image ? (
                <div className="relative h-44 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ) : (
                <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${product.bgColor} flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] animate-pulse" />
                  {product.logo && (
                    <img
                      src={product.logo}
                      alt={product.title}
                      className="max-w-[70%] max-h-[50%] object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                </div>
              )}
              
              <CardContent className="p-6">
                {!product.logo && (
                  <h3 className="text-2xl font-bold mb-4 text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {product.title}
                  </h3>
                )}
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                
                {/* Tech accent line */}
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-accent to-primary transition-all duration-500 rounded-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Motion Systems Gallery Dialog */}
      <Dialog open={isMotionGalleryOpen} onOpenChange={setIsMotionGalleryOpen}>
        <DialogContent className="max-w-5xl">
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            Motion Systems {t("products.gallery")}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Motion Systems product gallery
          </DialogDescription>
          <div className="flex gap-4">
            {/* Main Image */}
            <div className="flex-1 relative aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src={motionSystemsGallery[motionImageIndex].src}
                alt={motionSystemsGallery[motionImageIndex].alt}
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Thumbnail Gallery on Right */}
            <div className="flex flex-col gap-3 w-32">
              {motionSystemsGallery.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setMotionImageIndex(idx)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    motionImageIndex === idx
                      ? "border-primary ring-2 ring-primary/50"
                      : "border-muted hover:border-accent"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain bg-muted"
                  />
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* SOCOMORE Gallery Dialog */}
      <Dialog open={isSocomoreGalleryOpen} onOpenChange={setIsSocomoreGalleryOpen}>
        <DialogContent className="max-w-5xl">
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            SOCOMORE {t("products.gallery")}
          </DialogTitle>
          <DialogDescription className="sr-only">
            SOCOMORE product gallery
          </DialogDescription>
          <div className="flex gap-4">
            {/* Main Image */}
            <div className="flex-1 relative aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src={socomoreGallery[socomoreImageIndex].src}
                alt={socomoreGallery[socomoreImageIndex].alt}
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Thumbnail Gallery on Right */}
            <div className="flex flex-col gap-3 w-32">
              {socomoreGallery.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setSocomoreImageIndex(idx)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    socomoreImageIndex === idx
                      ? "border-primary ring-2 ring-primary/50"
                      : "border-muted hover:border-accent"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain bg-muted"
                  />
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* TowFLEXX Gallery Dialog */}
      <Dialog open={isTowflexxGalleryOpen} onOpenChange={setIsTowflexxGalleryOpen}>
        <DialogContent className="max-w-5xl">
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            TowFLEXX {t("products.gallery")}
          </DialogTitle>
          <DialogDescription className="sr-only">
            TowFLEXX product gallery
          </DialogDescription>
          <div className="flex gap-4">
            {/* Main Image */}
            <div className="flex-1 relative aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src={towflexxGallery[towflexxImageIndex].src}
                alt={towflexxGallery[towflexxImageIndex].alt}
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Thumbnail Gallery on Right */}
            <div className="flex flex-col gap-3 w-32">
              {towflexxGallery.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setTowflexxImageIndex(idx)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    towflexxImageIndex === idx
                      ? "border-primary ring-2 ring-primary/50"
                      : "border-muted hover:border-accent"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain bg-muted"
                  />
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Test Fuchs Gallery Dialog */}
      <Dialog open={isTestfuchsGalleryOpen} onOpenChange={setIsTestfuchsGalleryOpen}>
        <DialogContent className="max-w-5xl">
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            Test Fuchs {t("products.gallery")}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Test Fuchs product gallery
          </DialogDescription>
          <div className="flex gap-4">
            {/* Main Image */}
            <div className="flex-1 relative aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src={testfuchsGallery[testfuchsImageIndex].src}
                alt={testfuchsGallery[testfuchsImageIndex].alt}
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Thumbnail Gallery on Right */}
            <div className="flex flex-col gap-3 w-32">
              {testfuchsGallery.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setTestfuchsImageIndex(idx)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    testfuchsImageIndex === idx
                      ? "border-primary ring-2 ring-primary/50"
                      : "border-muted hover:border-accent"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain bg-muted"
                  />
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Products;
