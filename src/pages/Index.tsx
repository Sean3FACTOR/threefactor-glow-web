import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TheProblem from "@/components/TheProblem";
import EmpathyAuthority from "@/components/EmpathyAuthority";
import ThePlan from "@/components/ThePlan";
import PainPoints from "@/components/PainPoints";
import CompetitiveEdge from "@/components/CompetitiveEdge";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TheProblem />
      <EmpathyAuthority />
      <ThePlan />
      <PainPoints />
      <CompetitiveEdge />
      <Certifications />
      <Footer />
    </div>
  );
};

export default Index;
