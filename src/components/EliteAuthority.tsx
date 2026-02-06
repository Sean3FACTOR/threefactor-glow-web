import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Shield, Scale } from "lucide-react";

const authorityPoints = [
  {
    icon: Cloud,
    title: "Architects of the Cloud",
    description: "Our team includes lead architects who secured 9 of the top 10 global Cloud Service Providers.",
  },
  {
    icon: Shield,
    title: "Battle-Tested Where It Matters",
    description: "We've led recovery efforts on the frontlines of 6 of the 10 largest security breaches in North American history.",
  },
  {
    icon: Scale,
    title: "Unbiased Strategy",
    description: "As a vendor-agnostic firm, our only agenda is your long-term, defensible compliance, not selling tools.",
  },
];

const EliteAuthority = () => {
  return (
    <section className="py-20 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
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
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-10 border-l-4 border-foreground pl-6">
          Elite Authority to Back You Up
        </h3>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          {authorityPoints.map((point) => (
            <Card key={point.title} className="shadow-none border border-border bg-card">
              <CardContent className="p-8">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-6">
                  <point.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  {point.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EliteAuthority;
