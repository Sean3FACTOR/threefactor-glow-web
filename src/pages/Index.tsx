import Navigation from "@/components/Navigation";
import HomepageHero from "@/components/HomepageHero";
import TriplePenalty from "@/components/TriplePenalty";
import EliteAuthority from "@/components/EliteAuthority";
import CompliancePlan from "@/components/CompliancePlan";
import DealBlockers from "@/components/DealBlockers";
import SuccessOutcomes from "@/components/SuccessOutcomes";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <HomepageHero />
        <TriplePenalty />
        <EliteAuthority />
        <CompliancePlan />
        <DealBlockers />
        <SuccessOutcomes />
        <FinalCTA />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
