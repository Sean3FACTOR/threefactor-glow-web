import heroImage from "@/assets/hero-cyber-real.jpg";
import cloudSecurity from "@/assets/cloud-security-real.jpg";
import securityAnalyst from "@/assets/security-analyst-real.jpg";

const steps = [
  {
    title: "Visibility & Assessment",
    description: "We combine comprehensive risk analysis with threat intelligence to deliver customized, high-fidelity assessments tailored to your organization's unique environment.",
    tagline: "UNDERSTAND YOUR RISK",
    image: heroImage,
  },
  {
    title: "Strategy & Implementation",
    description: "Our experts work alongside your team to design and implement security architectures and programs that align with your business objectives and risk appetite.",
    tagline: "BUILD YOUR DEFENSE",
    image: cloudSecurity,
  },
  {
    title: "Management & Improvement",
    description: "We continuously monitor and evolve your security posture, delivering strategic recommendations and improvement plans to stay ahead of emerging threats.",
    tagline: "CONTINUOUS PROTECTION",
    image: securityAnalyst,
  },
];

const HowWeWork = () => {
  return (
    <section className="py-24 relative bg-background">
      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            How We Work With You
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-xl">
            Protection built from an attacker's mindset, delivered with a partner's commitment
          </p>
        </div>

        {/* Steps Grid - Image Card Layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.title} className="group">
              <div className="h-full rounded-xl border border-border bg-card card-hover overflow-hidden">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    {step.description}
                  </p>

                  {/* Tagline */}
                  <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                    {step.tagline}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
