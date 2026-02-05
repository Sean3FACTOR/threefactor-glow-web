import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlueprintHero from "@/components/BlueprintHero";

const frameworks = [
  {
    name: "SOC2",
    win: "The SaaS Gold Standard: Instant credibility.",
    risk: "The Security Review Dead-End: Sales teams drown in 300-row questionnaires and lose to competitors.",
  },
  {
    name: "ISO 27001",
    win: "Global Market Access.",
    risk: "The Border Closure: Effectively blacklisted from European and Asian enterprise markets.",
  },
  {
    name: "NIS2 & DORA",
    win: "Regulatory Immunity.",
    risk: "The €10M 'Negligence' Fine: Fines up to 2% of global turnover; directors held personally liable.",
  },
  {
    name: "PCI DSS",
    win: "The Transaction Engine.",
    risk: "The Revenue Blackout: Merchant account suspension freezes cash flow instantly.",
  },
];

const ComplianceServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Blueprint Hero Section */}
      <BlueprintHero
        breadcrumb="Compliance"
        headline="The Keys to the Market."
        subhead="Stop treating compliance like a chore. Start treating it like a competitive advantage. We help you navigate the world's most rigorous frameworks to unlock new revenue."
        ctaText="Book Your Strategy Session"
        ctaLink="/contact"
      />

      {/* Framework Table Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Framework Table
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every framework is a door to new markets. Here's what's at stake.
            </p>
          </div>
          
          {/* Table */}
          <div className="max-w-5xl mx-auto overflow-hidden rounded-lg border border-border">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-muted/50 border-b border-border">
              <div className="p-4 font-bold text-foreground text-sm">Framework</div>
              <div className="p-4 font-bold text-foreground text-sm flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                The Win
              </div>
              <div className="p-4 font-bold text-foreground text-sm flex items-center gap-2">
                <XCircle className="w-4 h-4 text-destructive" />
                The Risk
              </div>
            </div>
            
            {/* Table Rows */}
            {frameworks.map((framework) => (
              <div 
                key={framework.name}
                className="grid grid-cols-3 border-b border-border last:border-b-0 hover:bg-muted/20 transition-colors"
              >
                <div className="p-6 font-bold text-foreground">{framework.name}</div>
                <div className="p-6 text-muted-foreground text-sm">{framework.win}</div>
                <div className="p-6 text-muted-foreground text-sm">{framework.risk}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Unlock New Markets?
            </h3>
            <p className="text-muted-foreground mb-8">
              Start with a free discovery call to map out your compliance roadmap.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-[#646464] hover:bg-[#f36f21] text-white font-semibold transition-colors"
            >
              <Link to="/contact">
                Book Your Strategy Session
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComplianceServicesPage;
