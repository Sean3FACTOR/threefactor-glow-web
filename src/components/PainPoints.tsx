import { XCircle } from "lucide-react";

const painPoints = [
  {
    title: "The \"DORA\" Deadline",
    description: "In the European financial sector, being \"almost compliant\" is the same as being \"not compliant.\" Don't let a regulatory deadline freeze your operations.",
  },
  {
    title: "The SOC2 Roadblock",
    description: "Most SaaS deals now die in the security review phase. If you can't produce a clean SOC2 report, the deal goes to a competitor who can.",
  },
  {
    title: "Lost Revenue",
    description: "Watch high-value contracts stall or vanish because you couldn't meet a vendor's security requirements.",
  },
  {
    title: "Enterprise Devaluation",
    description: "A single regulatory failure or breach during a funding round or acquisition can slash your company's valuation overnight.",
  },
  {
    title: "Personal Professional Risk",
    description: "When the Board asks for answers during a crisis, \"we ticked the boxes\" won't protect your reputation or your job.",
  },
  {
    title: "The Uninsurable Gap",
    description: "If you can't prove proactive defense, your cyber insurance may walk away right when you need the payout most.",
  },
];

const PainPoints = () => {
  return (
    <section className="py-20 relative bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Don't let a "checkbox" kill your biggest deal.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            In enterprise sales, compliance isn't a suggestion—it's a gatekeeper.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="flex gap-4 p-6 bg-card border border-border rounded-lg transition-all duration-300 hover:border-destructive/30"
            >
              <div className="shrink-0">
                <XCircle className="w-5 h-5 text-destructive mt-0.5" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
