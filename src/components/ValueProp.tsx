import { Shield, Search, Compass, ShieldCheck } from "lucide-react";

const threeAs = [
  {
    icon: Search,
    title: "Assessment",
    description: "Get an unvarnished view of your current risk posture.",
  },
  {
    icon: Compass,
    title: "Advisory",
    description: "Implement the specific improvements needed to close gaps.",
  },
  {
    icon: ShieldCheck,
    title: "Assurance",
    description: "Provide the Board with definitive proof that risk is being managed according to policy.",
  },
];

const ValueProp = () => {
  return (
    <section className="py-32 relative bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-8">
            <Shield className="w-8 h-8 text-primary" strokeWidth={1.5} />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Protect Enterprise Value.
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            Cyber risk is business risk. We provide the leadership and clarity needed to translate technical threats into board-level strategy.
          </p>
        </div>

        {/* Experience Statement */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Since 2008, 3<span style={{ color: "#F36F21" }}>FACTOR</span> has served as the trusted advisor to thousands of enterprises across every major industry. We don't guess; we know the specific risks facing your sector. We provide the customized leadership, staffing, and technical skills required to build resilience and secure executive confidence.
          </p>
        </div>

        {/* The 3 A's - Non-clickable */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {threeAs.map((item) => (
            <div
              key={item.title}
              className="p-8 bg-muted/30 border border-border rounded-lg text-center"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center mb-6 mx-auto">
                <item.icon 
                  className="w-7 h-7 text-muted-foreground" 
                  strokeWidth={1.5} 
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
