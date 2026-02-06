import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Shield, Scale } from "lucide-react";

import sectionHandshake from "@/assets/homepage/section-handshake.jpg";

const authorityPoints = [
  {
    id: "AUTH-A",
    icon: Cloud,
    title: "ARCHITECTS OF THE CLOUD",
    description: "Our team includes lead architects who secured 9 of the top 10 global Cloud Service Providers.",
  },
  {
    id: "AUTH-B",
    icon: Shield,
    title: "BATTLE-TESTED",
    description: "We've led recovery efforts on the frontlines of 6 of the 10 largest security breaches in North American history.",
  },
  {
    id: "AUTH-C",
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
          <span className="tech-id block mb-4">[MOD-AUTHORITY]</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-tight">
            Expert Leadership for Your Toughest Transitions
          </h2>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            We know the pressure of standing in front of a board while growth depends on meeting complex global standards. We understand that "good enough" security is a career risk you can't afford.
          </p>
          <p className="text-lg text-foreground mb-4">
            If compliance feels like a second full-time job, you're not failing, the system is broken.
          </p>
          <p className="text-lg font-medium text-foreground">
            You deserve a partner who builds compliance that actually works under pressure.
          </p>
        </div>

        {/* Section Sub-header */}
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-10 uppercase tracking-tight">
          Elite Authority to Back You Up
        </h3>

        {/* Cascading layout - cards and image side by side */}
        <div className="grid grid-cols-12 gap-8">
          {/* Cards - cascading */}
          <div className="col-span-12 lg:col-span-7 space-y-6">
            {authorityPoints.map((point, index) => (
              <Card 
                key={point.title} 
                className="shadow-none border border-border/10 bg-card hover:border-primary transition-colors"
                style={{ marginLeft: `${index * 2}rem` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 bg-muted flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <span className="tech-id block mb-2">[{point.id}]</span>
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

          {/* Image - aligned with first card */}
          <div className="col-span-12 lg:col-span-5 flex items-start">
            <div className="relative group w-full">
              <span className="absolute top-4 left-4 z-10 tech-id bg-card/90 px-2 py-1">[IMG-AUTH]</span>
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
