import { Card, CardContent } from "@/components/ui/card";
import { Search, Shield, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Search,
    title: "Gap Discovery",
    description: "We identify the exact compliance gaps blocking RFPs, slowing deals, or triggering auditor escalation.",
  },
  {
    number: "2",
    icon: Shield,
    title: "The Compliance Shield",
    description: "We design and deploy a tailored roadmap aligned to your market goals: ISO 27001 · SOC 2 · PCI DSS · NIS2 · DORA",
  },
  {
    number: "3",
    icon: TrendingUp,
    title: "Market Defense & Scale",
    description: "We defend your posture during audits, vendor reviews, and due diligence, so security becomes a competitive advantage, not a recurring fire drill.",
  },
];

const CompliancePlan = () => {
  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Your Blueprint for Audit-Proof Growth
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Navigating global mandates shouldn't be your second job. We simplify compliance into a clear, defensible path to revenue.
          </p>
        </div>

        {/* Section Sub-header */}
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-10 border-l-4 border-foreground pl-6">
          Our 3-Step Compliance Plan
        </h3>

        {/* Cards - Horizontal Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          {steps.map((step) => (
            <Card key={step.title} className="shadow-none border border-border bg-card relative">
              <CardContent className="p-8">
                {/* Step Number */}
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-sm font-semibold text-muted-foreground">{step.number}</span>
                </div>
                
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-6">
                  <step.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompliancePlan;
