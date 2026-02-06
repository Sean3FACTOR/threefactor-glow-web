import Navigation from "@/components/Navigation";
import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <BentoGrid />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
