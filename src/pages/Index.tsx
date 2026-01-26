import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import Authority from "@/components/Authority";
import TheHow from "@/components/TheHow";
import TheWho from "@/components/TheWho";
import CTASection from "@/components/CTASection";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ValueProp />
      <Authority />
      <TheHow />
      <TheWho />
      <CTASection />
      <Certifications />
      <Footer />
    </div>
  );
};

export default Index;
