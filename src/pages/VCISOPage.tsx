import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlueprintHero from "@/components/BlueprintHero";

const managedSecurityPlans = [
  {
    title: "Define",
    description: "We help you define a risk profile and use it to build a security improvement roadmap",
  },
  {
    title: "Implement",
    description: "We guide your team through the implementation of your new security program roadmap",
  },
  {
    title: "Manage",
    description: "We provide ongoing security program monitoring and guidance",
  },
  {
    title: "Improve",
    description: "We provide ongoing leadership and strategy for continuous evolution of your program",
  },
];

const pricingTiers = [
  {
    name: "Bronze",
    subtitle: "Ideal for small startups",
    employees: "(Up to 25 employees)",
    sections: [
      {
        title: "Security Management Framework:",
        features: [
          "Baseline Risk Assessment",
          "Customized Information Security Management Framework*",
          "Security Architecture Blueprint",
          "1-year Security Program Roadmap",
          "Security Management Dashboard",
        ],
      },
      {
        title: "Program Management:",
        features: [
          "Ongoing progress monitoring",
          "Weekly program update meetings",
          "Monthly executive reports",
          "Knowledge Transfer",
        ],
      },
      {
        title: "Additional Subject Matter Expert Advisory:",
        features: ["Discounted rate ($160/hr)"],
      },
    ],
    highlighted: false,
  },
  {
    name: "Silver",
    subtitle: "Ideal for growing startups",
    employees: "(Up to 100 employees)",
    sections: [
      {
        title: "Security Management Framework:",
        features: [
          "Everything in Bronze plus:",
          "Customized SOC-2 Control Framework",
          "Detailed Security Procedures",
        ],
      },
      {
        title: "Program Management:",
        features: [
          "Everything in Bronze plus:",
          "Weekly implementation working session",
        ],
      },
      {
        title: "Additional Subject Matter Expert Advisory:",
        features: ["Discounted rate ($155/hr)"],
      },
    ],
    highlighted: true,
  },
  {
    name: "Gold",
    subtitle: "Ideal for established startups",
    employees: "(100+ employees)",
    sections: [
      {
        title: "Security Management Framework:",
        features: [
          "Everything in Silver plus:",
          "Privacy Management Framework",
          "Secure Development Program",
        ],
      },
      {
        title: "Program Management:",
        features: [
          "Everything in Silver plus:",
          "Monthly security assurance review (security health check)",
        ],
      },
      {
        title: "Additional Subject Matter Expert Advisory:",
        features: ["Discounted rate ($150/hr)"],
      },
    ],
    highlighted: false,
  },
];

const approachSteps = [
  {
    title: "Baseline",
    description: "Find out where you are now and what your capabilities are. We perform a baseline risk assessment of your current security posture.",
  },
  {
    title: "Plan",
    description: "Define where you need to be and how to get there based on your unique business needs. We build a security roadmap tailored to your unique needs and capabilities.",
  },
  {
    title: "Execute",
    description: "Implement a Security Architecture. We combine decades of experience, best of breed technologies and agile implementation methods to get you there faster.",
  },
  {
    title: "Fine Tune",
    description: "Even the best architecture needs to be constantly refined and maintained. We provide Security and Privacy Advisory service to help you keep up with constant changes in the business, regulatory and technology threat landscape.",
  },
  {
    title: "Monitor",
    description: "Good security and compliance require constant vigilance. We provide Partner Solutions to help you sleep well knowing your systems and data are being constantly monitored against ongoing threats.",
  },
  {
    title: "Respond",
    description: "Breaches are inevitable. The key is to be ready to respond quickly and appropriately to minimize the financial, reputational and other negative impacts of a breach. We provide Incident Remediation support.",
  },
];

const VCISOPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Blueprint Hero Section */}
      <BlueprintHero
        breadcrumb="Virtual CISO"
        headline="Executive Leadership Without the Headcount."
        subhead="Get an immediate extension of your leadership team. We provide the governance, budget management, and board reporting you need—at a fixed monthly cost."
        ctaText="Explore vCISO Plans"
        ctaLink="/contact"
      />

      <main className="pb-24">
        <div className="container mx-auto px-4">
          <div className="mb-24">
            <h2 className="text-sm text-muted-foreground uppercase tracking-widest font-semibold text-center mb-12">
              Managed Security Plans
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {managedSecurityPlans.map((plan) => (
                <div
                  key={plan.title}
                  className="bg-card border border-border p-6 rounded-xl card-hover"
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">{plan.title}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Tiers */}
          <div className="mb-24">
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
                    <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                    <p className="text-muted-foreground text-sm">{tier.subtitle}</p>
                    <p className="text-muted-foreground text-sm">{tier.employees}</p>
                  </div>

                  {/* Feature Sections */}
                  <div className="space-y-6 mb-8">
                    {tier.sections.map((section) => (
                      <div key={section.title}>
                        <h4 className="text-sm font-semibold text-foreground mb-3">{section.title}</h4>
                        <ul className="space-y-2">
                          {section.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                              <span className="text-xs text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group"
                  >
                    <Link to="/contact" className="flex items-center justify-center gap-2">
                      Find out more
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Our Approach */}
          <div className="mb-24">
            <h2 className="text-sm text-muted-foreground uppercase tracking-widest font-semibold text-center mb-12">
              Our Approach
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {approachSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="bg-card border border-border p-6 rounded-xl card-hover group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-muted text-muted-foreground font-bold text-sm flex items-center justify-center">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
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
              <Button asChild className="glow-button bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/contact">Schedule a Discovery Call</Link>
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
