import { Card, CardContent } from "@/components/ui/card";
import { Zap, Globe, Rocket } from "lucide-react";

const outcomes = [
  {
    id: "OUT-A",
    icon: Zap,
    title: "CLOSE DEALS FASTER",
    description: "Security questionnaires completed in days, not quarters. Auditors nod instead of probing.",
    colSpan: "md:col-span-5",
    offset: "md:mt-8",
  },
  {
    id: "OUT-B",
    icon: Globe,
    title: "UNRESTRICTED EXPANSION",
    description: "No geography, tender, or enterprise buyer is off-limits when compliance is built right.",
    colSpan: "md:col-span-3",
    offset: "",
  },
  {
    id: "OUT-C",
    icon: Rocket,
    title: "TOTAL OPERATIONAL VELOCITY",
    description: "Scale confidently knowing your security posture supports growth instead of dragging it down.",
    colSpan: "md:col-span-4",
    offset: "md:mt-16",
  },
];

const SuccessOutcomes = () => {
  return (
    <section className="py-20 bg-transparent border-t border-border/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-tight">
            From Vendor to Trusted Market Authority
          </h2>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Compliance isn't overhead, it's leverage.
          </p>
          <p className="text-lg text-foreground">
            Walk into your next board meeting with proof, not promises, that risk is controlled and growth is protected.
          </p>
        </div>

        {/* Section Sub-header */}
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-10 uppercase tracking-tight">
          What Success Looks Like
        </h3>

        {/* Scattered Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {outcomes.map((outcome) => (
            <Card 
              key={outcome.title} 
              className={`${outcome.colSpan} ${outcome.offset} shadow-none border border-border/10 bg-card hover:border-primary transition-colors`}
            >
              <CardContent className="p-8">
                <div className="w-10 h-10 bg-muted flex items-center justify-center mb-6">
                  <outcome.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4 uppercase tracking-tight">
                  {outcome.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {outcome.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Connecting line visual */}
        <div className="hidden md:block relative h-px w-full mt-12">
          <div className="absolute left-[25%] right-[15%] top-0 h-px bg-border/30" />
        </div>
      </div>
    </section>
  );
};

export default SuccessOutcomes;
