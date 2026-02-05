import doraDeadline from "@/assets/painpoints/dora-deadline.jpg";
import soc2Roadblock from "@/assets/painpoints/soc2-roadblock.jpg";
import lostRevenue from "@/assets/painpoints/lost-revenue.jpg";
import enterpriseDevaluation from "@/assets/painpoints/enterprise-devaluation.jpg";
import professionalRisk from "@/assets/painpoints/professional-risk.jpg";
import uninsurableGap from "@/assets/painpoints/uninsurable-gap.jpg";

const painPoints = [
  {
    number: "1",
    title: "The \"DORA\" Deadline",
    description: "In the European financial sector, being \"almost compliant\" is the same as being \"not compliant.\" Don't let a regulatory deadline freeze your operations.",
    image: doraDeadline,
    imageAlt: "Silver hourglass - deadline urgency",
  },
  {
    number: "2",
    title: "The SOC2 Roadblock",
    description: "Most SaaS deals now die in the security review phase. If you can't produce a clean SOC2 report, the deal goes to a competitor who can.",
    image: soc2Roadblock,
    imageAlt: "Silver padlock - locked access",
  },
  {
    number: "3",
    title: "Lost Revenue",
    description: "Watch high-value contracts stall or vanish because you couldn't meet a vendor's security requirements.",
    image: lostRevenue,
    imageAlt: "Empty silver safe - lost revenue",
  },
  {
    number: "4",
    title: "Enterprise Devaluation",
    description: "A single regulatory failure or breach during a funding round or acquisition can slash your company's valuation overnight.",
    image: enterpriseDevaluation,
    imageAlt: "Silver arrow pointing down - devaluation",
  },
  {
    number: "5",
    title: "Personal Professional Risk",
    description: "When the Board asks for answers during a crisis, \"we ticked the boxes\" won't protect your reputation or your job.",
    image: professionalRisk,
    imageAlt: "Empty executive chair - professional risk",
  },
  {
    number: "6",
    title: "The Uninsurable Gap",
    description: "If you can't prove proactive defense, your cyber insurance may walk away right when you need the payout most.",
    image: uninsurableGap,
    imageAlt: "Broken umbrella - insurance gap",
  },
];

const PainPoints = () => {
  return (
    <section className="py-20 relative bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Section Header - Left Aligned */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Don't let a "checkbox" kill your biggest deal.
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground border-l-4 border-primary pl-6">
            In enterprise sales, compliance isn't a suggestion—it's a gatekeeper.
          </h3>
        </div>

        {/* Cascading Cards - Left Aligned */}
        <div className="max-w-5xl space-y-6">
          {painPoints.map((point, index) => (
            <div
              key={point.title}
              className="group flex flex-col md:flex-row bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
              style={{ marginLeft: `${(index % 3) * 1.5}rem` }}
            >
              {/* Content - Left Side */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-semibold text-sm shrink-0">
                    {point.number}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">
                    {point.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>

              {/* Image - Right Side */}
              <div className="w-full md:w-[35%] shrink-0 relative overflow-hidden">
                <img
                  src={point.image}
                  alt={point.imageAlt}
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

export default PainPoints;
