import { AlertTriangle, DollarSign, Building2, Heart } from "lucide-react";

const penalties = [
  {
    number: "1",
    icon: DollarSign,
    title: "Total Financial Hemorrhage",
    description: "Between €10M regulatory fines (NIS2/DORA) and the immediate blockage of your payment streams (PCI/SOC2), a \"paper-only\" strategy turns a breach into a bankruptcy event. You aren't just losing profit; you're losing the ability to transact.",
  },
  {
    number: "2",
    icon: Building2,
    title: "Operational Paralysis",
    description: "This isn't just a slow-down. Under NIS2 and DORA, regulators have the teeth to revoke your license to operate in key markets. If you can't prove compliance, you don't have a business. You have a hobby.",
  },
  {
    number: "3",
    icon: Heart,
    title: "Irreparable Brand Death",
    description: "It takes a decade to build your reputation and ten minutes of exposure to destroy it. In the enterprise world, you don't get a second chance once the \"Illusion of Safety\" is shattered.",
  },
];

const TheProblem = () => {
  return (
    <section className="py-20 relative bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            The Revenue-Killing Reality of 'Paper-Thin' Compliance.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            A checklist won't stop a breach. Generic "box-ticking" gives you a paper-thin shield that satisfies an auditor but leaves your actual data exposed. This "Illusion of Safety" is a silent budget-killer that does nothing to actually reduce your risk.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 border border-destructive/20 rounded-full">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-semibold text-destructive">
              If your compliance is only "paper-thin," you are one audit, or one breach away from the Triple Penalty:
            </span>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {penalties.map((penalty) => (
            <div
              key={penalty.title}
              className="bg-card border border-border rounded-lg p-8 transition-all duration-300 hover:border-destructive/50 hover:shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center text-destructive font-bold text-lg">
                  {penalty.number}
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {penalty.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {penalty.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheProblem;
