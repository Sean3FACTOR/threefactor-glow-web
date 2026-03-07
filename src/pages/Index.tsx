import Navigation from "@/components/Navigation";
import HomepageHero from "@/components/HomepageHero";
import TrustBar from "@/components/TrustBar";
import CustomerProblem from "@/components/CustomerProblem";
import ClientChallenges from "@/components/ClientChallenges";
import ServicesGrid from "@/components/ServicesGrid";
import DealBlockers from "@/components/DealBlockers";
import CompliancePlan from "@/components/CompliancePlan";
import SuccessOutcomes from "@/components/SuccessOutcomes";
import ThreeFactorFramework from "@/components/ThreeFactorFramework";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F9FA" }}>
      <Navigation />
      <div className="pt-14">
        <HomepageHero />
        <TrustBar />
        <CustomerProblem />
        <ClientChallenges />
        <ServicesGrid />
        <DealBlockers />
        <CompliancePlan />
        <SuccessOutcomes />
        <ThreeFactorFramework />
        <FinalCTA />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
