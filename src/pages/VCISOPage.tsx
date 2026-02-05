import { Check, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlueprintHero from "@/components/BlueprintHero";

const pricingTiers = [
  {
    name: "Bronze",
    subtitle: "The Foundation",
    employees: "(Up to 25 employees)",
    description: "Build your Architecture Blueprint and 1-year Roadmap to prove you aren't a liability.",
    features: [
      "Baseline Risk Assessment",
      "Security Architecture Blueprint",
      "1-year Security Program Roadmap",
      "Security Management Dashboard",
      "Weekly program update meetings",
      "Monthly executive reports",
    ],
    smeRate: "$160/hr",
    highlighted: false,
  },
  {
    name: "Silver",
    subtitle: "Enterprise Readiness",
    employees: "(Up to 100 employees)",
    description: "Everything in Bronze plus a Custom SOC-2 Framework to move you from 'Baseline' to 'Battle-Ready.'",
    features: [
      "Everything in Bronze plus:",
      "Customized SOC-2 Control Framework",
      "Detailed Security Procedures",
      "Weekly implementation working session",
    ],
    smeRate: "$155/hr",
    highlighted: true,
  },
  {
    name: "Gold",
    subtitle: "Total Resilience & Scale",
    employees: "(100+ employees)",
    description: "Everything in Silver plus a Secure Development Program. Your insurance against the 'Triple Penalty.'",
    features: [
      "Everything in Silver plus:",
      "Privacy Management Framework",
      "Secure Development Program",
      "Monthly security assurance review",
    ],
    smeRate: "$150/hr",
    highlighted: false,
  },
];

const VCISOPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Blueprint Hero Section */}
      <BlueprintHero
        breadcrumb="Virtual CISO"
        headline="Elite Security Leadership."
        subhead="Stop carrying the weight of the pen alone. Get strategic leadership for a fraction of the cost of a full-time hire."
        ctaText="Book Your Strategy Session"
        ctaLink="/contact"
      />

      <main className="pb-24">
        <div className="container mx-auto px-4">
          {/* Pricing Tiers */}
          <div className="mb-24 pt-16">
            <h2 className="text-sm text-muted-foreground uppercase tracking-widest font-semibold text-center mb-12">
              Choose Your Right-Sized Plan
            </h2>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-2xl p-8 card-hover ${
                    tier.highlighted
                      ? "bg-card border-2 border-primary scale-105 shadow-xl"
                      : "bg-card border border-border"
                  }`}
                >
                  {/* Tier Header */}
                  <div className="text-center mb-6 pb-6 border-b border-border">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{tier.name}</h3>
                    <p className="text-primary font-semibold text-sm mb-1">{tier.subtitle}</p>
                    <p className="text-muted-foreground text-sm">{tier.employees}</p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Feature List */}
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* SME Rate */}
                  <div className="mb-6 p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground">
                      Additional SME Advisory: <span className="text-foreground font-semibold">{tier.smeRate}</span>
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group"
                  >
                    <Link to="/contact" className="flex items-center justify-center gap-2">
                      Book Your Strategy Session
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* SME Callout */}
          <div className="mb-24">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Access the 'Red Phone'
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Get direct access to the elite architects who secured 90% of the global cloud. Preferential rates of <span className="text-foreground font-semibold">$150–$160/hr</span> for subject matter expert advisory.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center pb-24">
            <div className="bg-card border border-border rounded-2xl p-12 max-w-3xl mx-auto card-hover">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Secure Your Organization?
              </h2>
              <p className="text-muted-foreground mb-8">
                Schedule a discovery call to discuss your security needs and find the right plan for your organization.
              </p>
              <Button asChild className="bg-[#646464] hover:bg-[#f36f21] text-white font-semibold transition-colors">
                <Link to="/contact">Book Your Strategy Session</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VCISOPage;
