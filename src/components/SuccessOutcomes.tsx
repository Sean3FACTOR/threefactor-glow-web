import { Card, CardContent } from "@/components/ui/card";
import { Zap, Globe, Rocket } from "lucide-react";

const outcomes = [
  {
    icon: Zap,
    title: "Close Deals Faster",
    description: "Security questionnaires completed in days, not quarters. Auditors nod instead of probing.",
  },
  {
    icon: Globe,
    title: "Unrestricted Expansion",
    description: "No geography, tender, or enterprise buyer is off-limits when compliance is built right.",
  },
  {
    icon: Rocket,
    title: "Total Operational Velocity",
    description: "Scale confidently knowing your security posture supports growth instead of dragging it down.",
  },
];

const SuccessOutcomes = () => {
  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            From Vendor to Trusted Market Authority
          </h2>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Compliance isn't overhead, it's leverage.
          </p>
          <p className="text-lg text-foreground">
            Walk into your next board meeting with proof, not promises, that risk is controlled and growth is protected.
          </p>
        </div>

        {/* Section Sub-header */}
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-10 border-l-4 border-foreground pl-6">
          What Success Looks Like
        </h3>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          {outcomes.map((outcome) => (
            <Card key={outcome.title} className="shadow-none border border-border bg-card">
              <CardContent className="p-8">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-6">
                  <outcome.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  {outcome.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {outcome.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessOutcomes;
