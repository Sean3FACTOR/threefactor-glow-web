import { Card, CardContent } from "@/components/ui/card";
import { FileX, Clock, Umbrella } from "lucide-react";

const blockers = [
  {
    icon: FileX,
    title: "The RFP Blockade",
    description: "Stop watching seven-figure contracts stall because security reviews drag on for months.",
  },
  {
    icon: Clock,
    title: "The DORA Deadline",
    description: "Don't let EU regulatory deadlines freeze your ability to transact.",
  },
  {
    icon: Umbrella,
    title: "The Uninsurable Gap",
    description: "If you can't prove proactive defense, cyber insurers may walk away right when you need coverage most.",
  },
];

const DealBlockers = () => {
  return (
    <section className="py-20 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Don't Let a "Checkbox" Kill Your Biggest Deal
          </h2>
          <p className="text-lg font-medium text-foreground border-l-4 border-foreground pl-6">
            In enterprise sales, compliance isn't optional, it's the gatekeeper.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          {blockers.map((blocker) => (
            <Card key={blocker.title} className="shadow-none border border-border bg-card">
              <CardContent className="p-8">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-6">
                  <blocker.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  {blocker.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {blocker.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealBlockers;
