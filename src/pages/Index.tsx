import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TheProblem from "@/components/TheProblem";
import AuthorityBar from "@/components/AuthorityBar";
import TheHow from "@/components/TheHow";
import AboutSection from "@/components/AboutSection";
import TheWho from "@/components/TheWho";
import CTASection from "@/components/CTASection";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TheProblem />
      <AuthorityBar />
      <TheHow />
      <AboutSection />
      <TheWho />
      <CTASection />
      <Certifications />
      <Footer />
    </div>
  );
};

export default Index;
