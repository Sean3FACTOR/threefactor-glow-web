import cloudArchitects from "@/assets/authority/cloud-architects.jpg";
import battleTested from "@/assets/authority/battle-tested.jpg";
import unbiasedAdvice from "@/assets/authority/unbiased-advice.jpg";

const authorityPoints = [
  {
    number: "1",
    title: "Architects of the Cloud",
    description: "Our team includes the lead architects who secured 9 of the top 10 Cloud Service Providers.",
    image: cloudArchitects,
    imageAlt: "Clean white data center - cloud architecture",
  },
  {
    number: "2",
    title: "Battle-Tested",
    description: "Since 2008, our principals have led the recovery on the frontlines of 6 of the 10 largest security breaches in North America.",
    image: battleTested,
    imageAlt: "Polished silver shield - battle-tested protection",
  },
  {
    number: "3",
    title: "Unbiased Advice",
    description: "As a strictly vendor-agnostic firm, our only agenda is your sustainable security.",
    image: unbiasedAdvice,
    imageAlt: "Balanced silver scales - unbiased fairness",
  },
];

const EmpathyAuthority = () => {
  return (
    <section className="py-20 relative bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Section Header - Left Aligned */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Not Just Your Consultants.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            We know the pressure of keeping a board-level promise while technical threats evolve daily. You shouldn't have to guess at your security posture; you deserve partners who care as much about your mission as you do.
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground border-l-4 border-primary pl-6">
            Elite Authority to Back You Up:
          </h3>
        </div>

        {/* Cascading Cards - Left Aligned */}
        <div className="max-w-5xl space-y-6">
          {authorityPoints.map((point, index) => (
            <div
              key={point.title}
              className="group flex flex-col md:flex-row bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
              style={{ marginLeft: `${index * 1.5}rem` }}
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

export default EmpathyAuthority;
