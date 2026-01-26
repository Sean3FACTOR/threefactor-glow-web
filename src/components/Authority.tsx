import { Cloud, Shield, AlertTriangle } from "lucide-react";

const stats = [
  {
    icon: Cloud,
    stat: "9 of 10",
    label: "Top Cloud Providers",
    description: "Our team includes the lead architects who secured 9 of the top 10 Cloud Service Providers.",
  },
  {
    icon: Shield,
    stat: "FedRAMP",
    label: "Industry Standard",
    description: "Navigate FedRAMP with a leadership team that defined the industry standard for cloud authorization.",
  },
  {
    icon: AlertTriangle,
    stat: "6 of 10",
    label: "Major Breaches",
    description: "Our principals led the recovery on the frontlines of 6 of the 10 largest security breaches in North America.",
  },
];

const Authority = () => {
  return (
    <section className="py-32 relative bg-card border-y border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-sm text-primary uppercase tracking-[0.3em] font-semibold">
            Proven Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-6">
            We've Been There.
          </h2>
        </div>

        {/* Trust Grid */}
        <div className="grid md:grid-cols-3 gap-px bg-border max-w-6xl mx-auto">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-card p-10 md:p-12 text-center group hover:bg-muted/30 transition-colors"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <item.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" strokeWidth={1.5} />
                </div>
              </div>

              {/* Stat */}
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {item.stat}
              </div>

              {/* Label */}
              <div className="text-sm uppercase tracking-[0.15em] text-primary font-semibold mb-6">
                {item.label}
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authority;
