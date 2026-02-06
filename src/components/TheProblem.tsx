import financialHemorrhage from "@/assets/problem/financial-hemorrhage.jpg";
import operationalParalysis from "@/assets/problem/operational-paralysis.jpg";
import brandDeath from "@/assets/problem/brand-death.jpg";

const penalties = [
  {
    number: "1",
    title: "Financial Liability",
    description: "Between €10M regulatory fines, frozen payment rails, and contract clawbacks, weak compliance turns a single incident into a business-ending event.",
    image: financialHemorrhage,
    imageAlt: "Silver coins falling - financial loss concept"
  },
  {
    number: "2",
    title: "Operational Stoppage",
    description: "Under mandates like NIS2 and DORA, regulators can revoke your license to operate. Without proven resilience, you don't have a growth strategy, you have a liability.",
    image: operationalParalysis,
    imageAlt: "Disconnected gears - operational paralysis concept"
  },
  {
    number: "3",
    title: "The Reputation Dead-End",
    description: "In enterprise sales, you don't get a second chance. Once your security posture is flagged as \"high risk,\" future deals quietly disappear.",
    image: brandDeath,
    imageAlt: "Shattered mirror - broken reputation concept"
  }
];

const TheProblem = () => {
  return (
    <section className="py-20 relative bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Section Header - Left Aligned */}
        <div className="max-w-4xl mb-16 mx-0 text-left bg-transparent font-normal">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The High Cost of "Paper-Thin" Compliance
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            A checklist won't stop a breach and it certainly won't satisfy a sophisticated enterprise auditor. Generic box-ticking creates an illusion of safety: compliance that looks fine on paper but collapses under scrutiny.
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground border-l-4 border-primary pl-6">
            If your compliance only exists in documentation, you're one audit away from losing momentum—or worse.
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
              <div className="flex-1 p-6 md:p-8 flex-col flex items-start justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-semibold text-sm shrink-0">
                    {penalty.number}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">
                    {penalty.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {penalty.description}
                </p>
              </div>

              {/* Image - Right Side */}
              <div className="w-full md:w-[35%] shrink-0 relative overflow-hidden">
                <img
                  src={penalty.image}
                  alt={penalty.imageAlt}
                  className="w-full h-48 md:h-full object-cover transition-all duration-500 group-hover:scale-105 img-grayscale-hover"
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
