import { Search, Compass, ShieldCheck } from "lucide-react";

const steps = [
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

const TheHow = () => {
  return (
    <section className="py-32 relative bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            The Service Breakdown.
          </h2>
        </div>

        {/* Three Columns with Connecting Orange Line */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Orange Line - Desktop */}
          <div className="hidden md:block absolute top-[60px] left-[16.67%] right-[16.67%] h-[3px] bg-primary" />

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center relative">
                {/* Icon Circle with Orange Border */}
                <div className="relative z-10 mb-8 flex justify-center">
                  <div className="w-[120px] h-[120px] rounded-full border-[3px] border-primary bg-background flex items-center justify-center shadow-lg">
                    <step.icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Step Number Badge */}
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-4">
                  {index + 1}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheHow;
