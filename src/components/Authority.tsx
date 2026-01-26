import { Cloud, Shield, FileStack } from "lucide-react";

const stats = [
  {
    icon: Cloud,
    stat: "9 of 10",
    label: "Top Cloud Providers",
    context: "Our team includes the lead architects who secured 9 of the top 10 Cloud Service Providers.",
  },
  {
    icon: Shield,
    stat: "FedRAMP",
    label: "Industry Standard",
    context: "Navigate FedRAMP with a leadership team that defined the industry standard for cloud authorization.",
  },
  {
    icon: FileStack,
    stat: "Architecture",
    label: "First",
    context: "We built the security standards the big cloud providers use. Now, we use those same standards to build yours.",
  },
];

const Authority = () => {
  return (
    <section className="py-32 relative bg-card border-y border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Proven Cloud Security.
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            We don't just secure the cloud; we secure the providers who build it. From strategy to FedRAMP authorization, we provide the architecture and confidence you need. Securing the cloud requires more than just tools; it requires architectural expertise. As the largest provider of advisory and engineering services to the cloud market, we help you build security into every layer of your environment.
          </p>
        </div>

        {/* Trust Grid - Three Columns */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((item) => (
            <div key={item.label} className="text-center">
              {/* Icon in Light Grey Circle */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted border border-border mb-8">
                <item.icon className="w-10 h-10 text-muted-foreground" strokeWidth={1} />
              </div>
              
              {/* Massive Bold Stat */}
              <div className="mb-2">
                <span className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
                  {item.stat}
                </span>
              </div>
              
              {/* Label */}
              <span className="text-lg font-semibold text-foreground">
                {item.label}
              </span>
              
              {/* Context - Small and Crisp */}
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-xs mx-auto">
                {item.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authority;
