import teamWorking from "@/assets/team-working.jpg";
import { Check } from "lucide-react";

const principles = [
  {
    title: "Vendor-Agnostic",
    description: "No product quotas. No commission kickbacks. Our only agenda is your security.",
  },
  {
    title: "Engineering-First",
    description: "Built by practitioners who've done the work, not analysts who've read the reports.",
  },
  {
    title: "Board-Ready",
    description: "We translate technical risk into business language executives understand.",
  },
];

const TheWho = () => {
  return (
    <section className="py-32 relative bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left - Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={teamWorking} 
                alt="Security professionals collaborating" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Accent Line */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-primary/30" />
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-sm text-primary uppercase tracking-[0.3em] font-semibold">
              Our Methodology
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-6 mb-6 leading-tight">
              Powered by People.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We're not a product company with consulting on the side. We're security practitioners who've built and defended the systems that matter most.
            </p>

            {/* Principles */}
            <div className="space-y-6">
              {principles.map((principle) => (
                <div key={principle.title} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{principle.title}</h3>
                    <p className="text-muted-foreground text-sm">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheWho;
