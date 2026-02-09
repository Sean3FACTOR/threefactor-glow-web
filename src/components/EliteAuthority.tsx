import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Shield, Scale, Layers } from "lucide-react";

import sectionHandshake from "@/assets/homepage/section-handshake.jpg";

const authorityPoints = [
  {
    icon: Layers,
    title: "BEYOND THE AUDIT",
    description: "We don't just \"get you a certificate.\" We provide Program Architecture and Risk Assessments that set you up for long-term mastery.",
  },
  {
    icon: Cloud,
    title: "ARCHITECTS OF THE CLOUD",
    description: "Our team includes lead architects who secured 9 of the top 10 global Cloud Service Providers. We bring that elite logic to your mid-market firm.",
  },
  {
    icon: Shield,
    title: "BATTLE-TESTED WHERE IT MATTERS",
    description: "We've led recovery efforts on the frontlines of 6 of the 10 largest security breaches in North American history.",
  },
  {
    icon: Scale,
    title: "UNBIASED STRATEGY",
    description: "As a vendor-agnostic firm, our only agenda is your long-term, defensible compliance, not selling tools.",
  },
];

const EliteAuthority = () => {
  return (
    <section className="py-20 bg-transparent border-t border-border/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-tight">
            Expert Leadership for Your Toughest Transitions
          </h2>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            We've Been in Your Chair. We know the pressure of an "overnight" requirement from a high-value lead. We understand that "almost compliant" is a career risk you can't afford. You deserve a partner who provides a program wrapper that works today and stays flexible for tomorrow.
          </p>
        </div>

        {/* Section Sub-header */}
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-10 uppercase tracking-tight">
          Why IT & Ops Leaders Choose 3FACTOR
        </h3>

        {/* Cascading layout - cards and image side by side */}
        <div className="grid grid-cols-12 gap-8">
          {/* Cards - cascading */}
          <div className="col-span-12 lg:col-span-7 space-y-6">
            {authorityPoints.map((point, index) => (
              <Card 
                key={point.title} 
                className="shadow-none border border-border/10 bg-card hover:border-primary transition-colors"
                style={{ marginLeft: `${index * 1.5}rem` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 bg-muted flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-3 uppercase tracking-tight">
                        {point.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Image */}
          <div className="col-span-12 lg:col-span-5 flex items-start">
            <div className="relative group w-full">
              <div className="border border-border/10 hover:border-primary transition-colors overflow-hidden">
                <img 
                  src={sectionHandshake} 
                  alt="Business partnership"
                  className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Connecting line visual */}
        <div className="hidden md:block relative h-px w-full mt-12">
          <div className="absolute left-[10%] right-[40%] top-0 h-px bg-border/30" />
        </div>
      </div>
    </section>
  );
};

export default EliteAuthority;
