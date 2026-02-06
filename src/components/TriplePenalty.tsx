import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Pause, AlertTriangle } from "lucide-react";

const penalties = [
  {
    icon: DollarSign,
    title: "Financial Liability",
    description: "Between €10M regulatory fines, frozen payment rails, and contract clawbacks, weak compliance turns a single incident into a business-ending event.",
  },
  {
    icon: Pause,
    title: "Operational Stoppage",
    description: "Under mandates like NIS2 and DORA, regulators can revoke your license to operate. Without proven resilience, you don't have a growth strategy, you have a liability.",
  },
  {
    icon: AlertTriangle,
    title: "The Reputation Dead-End",
    description: "In enterprise sales, you don't get a second chance. Once your security posture is flagged as \"high risk,\" future deals quietly disappear.",
  },
];

const TriplePenalty = () => {
  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            The High Cost of "Paper-Thin" Compliance
          </h2>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            A checklist won't stop a breach and it certainly won't satisfy a sophisticated enterprise auditor. Generic box-ticking creates an illusion of safety: compliance that looks fine on paper but collapses under scrutiny.
          </p>
          <p className="text-lg font-medium text-foreground">
            If your compliance only exists in documentation, you're one audit away from losing momentum, or worse.
          </p>
        </div>

        {/* Section Sub-header */}
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-10 border-l-4 border-foreground pl-6">
          The Triple Penalty of Weak Compliance
        </h3>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          {penalties.map((penalty) => (
            <Card key={penalty.title} className="shadow-none border border-border bg-card">
              <CardContent className="p-8">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-6">
                  <penalty.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  {penalty.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {penalty.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TriplePenalty;
