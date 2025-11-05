import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import News from "@/components/News";
import Services from "@/components/Services";
import QualityPolicy from "@/components/QualityPolicy";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Products />
      <News />
      <Services />
      <QualityPolicy />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
