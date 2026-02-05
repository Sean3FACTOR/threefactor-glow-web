import { AlertTriangle, DollarSign, Building2, Heart } from "lucide-react";

const penalties = [
  {
    icon: DollarSign,
    title: "Total Financial Hemorrhage",
    description: "Between €10M regulatory fines (NIS2/DORA) and the immediate blockage of your payment streams (PCI/SOC2), a 'paper-only' strategy turns a breach into a bankruptcy event. You aren't just losing profit; you're losing the ability to transact.",
  },
  {
    icon: Building2,
    title: "Operational Paralysis",
    description: "This isn't just a slow-down. Under NIS2 and DORA, regulators have the teeth to revoke your license to operate in key markets. If you can't prove compliance, you don't have a business. You have a hobby.",
  },
  {
    icon: Heart,
    title: "Irreparable Brand Death",
    description: "It takes a decade to build your reputation and ten minutes of exposure to destroy it. In the enterprise world, you don't get a second chance once the 'Illusion of Safety' is shattered.",
  },
];

const TheProblem = () => {
  return (
    <section className="py-16 relative bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <span className="text-xs uppercase tracking-[0.2em] text-destructive font-semibold">
              The Triple Penalty
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            The Revenue-Killing Reality of 'Paper-Thin' Compliance.
          </h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            A checklist won't stop a breach. Generic 'box-ticking' gives you a paper-thin shield that satisfies an auditor but leaves your actual data exposed. This 'Illusion of Safety' is a silent budget-killer that does nothing to actually reduce your risk.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {penalties.map((penalty) => (
            <div
              key={penalty.title}
              className="bg-card border border-border rounded-lg p-8 transition-all duration-300 hover:border-destructive/50 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-6">
                <penalty.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {penalty.title}
              </h3>
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
