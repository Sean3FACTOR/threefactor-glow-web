import { Search, Compass, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Assessment",
    tagline: "Unvarnished Truth",
    description: "We deliver a clear-eyed view of your security posture. No sugar-coating. No vendor bias. Just the facts your board needs to make decisions.",
  },
  {
    icon: Compass,
    title: "Advisory",
    tagline: "Closing the Gaps",
    description: "We architect practical solutions that align with your business reality. Prioritized roadmaps that balance risk reduction with operational feasibility.",
  },
  {
    icon: ShieldCheck,
    title: "Assurance",
    tagline: "Proof for the Board",
    description: "We provide the evidence and certifications that stakeholders, customers, and regulators demand. Defensible security that stands up to scrutiny.",
  },
];

const TheHow = () => {
  return (
    <section className="py-32 relative bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-sm text-primary uppercase tracking-[0.3em] font-semibold">
            The 3 A's
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-6">
            How We Work.
          </h2>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            A proven methodology that transforms security from a problem into a strategic advantage.
          </p>
        </div>

        {/* Three Columns with Connecting Line */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line - Desktop */}
          <div className="hidden md:block absolute top-[72px] left-[16.67%] right-[16.67%] h-[1px] bg-gradient-to-r from-border via-primary/30 to-border" />

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center relative">
                {/* Icon Circle */}
                <div className="relative z-10 mb-8 flex justify-center">
                  <div className="w-36 h-36 rounded-full border-2 border-border bg-background flex items-center justify-center shadow-lg">
                    <step.icon className="w-14 h-14 text-primary" strokeWidth={1.25} />
                  </div>
                </div>

                {/* Step Number */}
                <span className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-medium">
                  Step {index + 1}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mt-2 mb-2">
                  {step.title}
                </h3>

                {/* Tagline */}
                <span className="text-sm text-primary font-semibold uppercase tracking-wider">
                  {step.tagline}
                </span>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mt-4 text-sm">
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
