import Navigation from "@/components/Navigation";
import HomepageHero from "@/components/HomepageHero";
import ClientChallenges from "@/components/ClientChallenges";
import FrameworkCards from "@/components/FrameworkCards";
import TriplePenalty from "@/components/TriplePenalty";
import EliteAuthority from "@/components/EliteAuthority";
import Certifications from "@/components/Certifications";
import CompliancePlan from "@/components/CompliancePlan";
import DealBlockers from "@/components/DealBlockers";
import SuccessOutcomes from "@/components/SuccessOutcomes";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F9FA" }}>
      <Navigation />
      <div className="pt-14">
        <HomepageHero />
        <ClientChallenges />
        <FrameworkCards />
        <TriplePenalty />
        <EliteAuthority />
        <CompliancePlan />
        <DealBlockers />
        <SuccessOutcomes />
        <Certifications />
        <FinalCTA />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
