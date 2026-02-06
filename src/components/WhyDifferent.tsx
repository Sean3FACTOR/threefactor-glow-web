import securityAnalyst from "@/assets/security-analyst-real.jpg";

const features = [
  {
    number: "01",
    title: "Trusted Advisors",
    description: "We are trusted advisors to global leaders. Our clients include Fortune 500 companies and some of the world's largest organizations.",
  },
  {
    number: "02",
    title: "Deep Experience",
    description: "Consultants with 10+ years average experience. True subject matter experts who have led security programs at major enterprises.",
  },
  {
    number: "03",
    title: "Boutique Service",
    description: "Agile, adaptable, white-glove services. We're small enough to care, but experienced enough to deliver enterprise-grade results.",
  },
  {
    number: "04",
    title: "Global Reach",
    description: "Supporting clients across North America, Europe, and Asia-Pacific. Our distributed team provides coverage across time zones.",
  },
];

const WhyDifferent = () => {
  return (
    <section id="company" className="py-24 relative bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Header + Image */}
          <div className="lg:sticky lg:top-32">
            <span className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
              This is what partnership<br />
              looks like in <span className="text-muted-foreground">cybersecurity</span>
            </h2>
            <p className="text-muted-foreground mt-6 text-lg max-w-md leading-relaxed">
              Real people, real action, no excuses. We're not your typical security vendor, we're partners who understand that every organization's security journey is unique.
            </p>
            
            {/* Security Analyst Image */}
            <div className="mt-8 relative rounded-xl overflow-hidden shadow-xl border border-border">
              <img 
                src={securityAnalyst} 
                alt="Security professional at work" 
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Right - Features Grid */}
          <div className="space-y-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-xl border border-border bg-card card-hover"
              >
                <div className="flex gap-6">
                  {/* Number */}
                  <span className="text-4xl font-bold text-muted-foreground/30 group-hover:text-muted-foreground/60 transition-colors shrink-0">
                    {feature.number}
                  </span>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
