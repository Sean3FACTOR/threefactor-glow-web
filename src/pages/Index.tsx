import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Certifications from "@/components/Certifications";
import ServicesBento from "@/components/ServicesBento";
import HowWeWork from "@/components/HowWeWork";
import WhyDifferent from "@/components/WhyDifferent";
import AboutSection from "@/components/AboutSection";
import PricingTable from "@/components/PricingTable";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Certifications />
      <ServicesBento />
      <HowWeWork />
      <WhyDifferent />
      <AboutSection />
      <PricingTable />
      <Philosophy />
      <Footer />
    </div>
  );
};

export default Index;
