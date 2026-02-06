import cloudArchitects from "@/assets/authority/cloud-architects.jpg";
import battleTested from "@/assets/authority/battle-tested.jpg";
import unbiasedAdvice from "@/assets/authority/unbiased-advice.jpg";

const authorityPoints = [
  {
    number: "1",
    title: "Architects of the Cloud",
    description: "Our team includes lead architects who secured 9 of the top 10 global Cloud Service Providers.",
    image: cloudArchitects,
    imageAlt: "Clean white data center - cloud architecture"
  },
  {
    number: "2",
    title: "Battle-Tested Where It Matters",
    description: "We've led recovery efforts on the frontlines of 6 of the 10 largest security breaches in North American history.",
    image: battleTested,
    imageAlt: "Polished silver shield - battle-tested protection"
  },
  {
    number: "3",
    title: "Unbiased Strategy",
    description: "As a vendor-agnostic firm, our only agenda is your long-term, defensible compliance, not selling tools.",
    image: unbiasedAdvice,
    imageAlt: "Balanced silver scales - unbiased fairness"
  }
];

const EmpathyAuthority = () => {
  return (
    <section className="py-20 relative bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Section Header - Left Aligned */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Expert Leadership for Your Toughest Transitions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
            We know the pressure of standing in front of a board while growth depends on meeting complex global standards. We understand that "good enough" security is a career risk you can't afford.
          </p>
          <p className="text-lg text-foreground/80 font-medium mb-10">
            If compliance feels like a second full-time job, you're not failing, the system is broken.
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground border-l-4 border-primary pl-6">
            Elite Authority to Back You Up
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
                  <h3 className="text-lg font-semibold text-foreground md:text-2xl">
                    {point.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
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
