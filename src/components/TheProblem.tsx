import financialHemorrhage from "@/assets/problem/financial-hemorrhage.jpg";
import operationalParalysis from "@/assets/problem/operational-paralysis.jpg";
import brandDeath from "@/assets/problem/brand-death.jpg";

const penalties = [
  {
    number: "1",
    title: "Total Financial Hemorrhage",
    description: "Between €10M regulatory fines (NIS2/DORA) and the immediate blockage of your payment streams (PCI/SOC2), a \"paper-only\" strategy turns a breach into a bankruptcy event. You aren't just losing profit; you're losing the ability to transact.",
    image: financialHemorrhage,
    imageAlt: "Silver coins falling - financial loss concept",
  },
  {
    number: "2",
    title: "Operational Paralysis",
    description: "This isn't just a slow-down. Under NIS2 and DORA, regulators have the teeth to revoke your license to operate in key markets. If you can't prove compliance, you don't have a business. You have a hobby.",
    image: operationalParalysis,
    imageAlt: "Disconnected gears - operational paralysis concept",
  },
  {
    number: "3",
    title: "Irreparable Brand Death",
    description: "It takes a decade to build your reputation and ten minutes of exposure to destroy it. In the enterprise world, you don't get a second chance once the \"Illusion of Safety\" is shattered.",
    image: brandDeath,
    imageAlt: "Shattered mirror - broken reputation concept",
  },
];

const TheProblem = () => {
  return (
    <section className="py-20 relative bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Section Header - Left Aligned */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Revenue-Killing Reality of 'Paper-Thin' Compliance.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            A checklist won't stop a breach. Generic "box-ticking" gives you a paper-thin shield that satisfies an auditor but leaves your actual data exposed. This "Illusion of Safety" is a silent budget-killer that does nothing to actually reduce your risk.
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground border-l-4 border-primary pl-6">
            If your compliance is only "paper-thin," you are one audit, or one breach away from the Triple Penalty:
          </h3>
        </div>

        {/* Cascading Cards - Left Aligned */}
        <div className="max-w-5xl space-y-6">
          {penalties.map((penalty, index) => (
            <div
              key={penalty.title}
              className="group flex flex-col md:flex-row bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
              style={{ marginLeft: `${index * 1.5}rem` }}
            >
              {/* Content - Left Side */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-semibold text-sm shrink-0">
                    {penalty.number}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">
                    {penalty.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {penalty.description}
                </p>
              </div>

              {/* Image - Right Side */}
              <div className="w-full md:w-[35%] shrink-0 relative overflow-hidden">
                <img
                  src={penalty.image}
                  alt={penalty.imageAlt}
                  className="w-full h-48 md:h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheProblem;
