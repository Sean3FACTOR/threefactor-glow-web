import { Card, CardContent } from "@/components/ui/card";
import { FileX, Clock, Umbrella } from "lucide-react";

const blockers = [
  {
    id: "BLK-01",
    icon: FileX,
    title: "THE RFP BLOCKADE",
    description: "Stop watching seven-figure contracts stall because security reviews drag on for months.",
    colSpan: "md:col-span-3",
    offset: "md:mt-4",
  },
  {
    id: "BLK-02",
    icon: Clock,
    title: "THE DORA DEADLINE",
    description: "Don't let EU regulatory deadlines freeze your ability to transact.",
    colSpan: "md:col-span-5",
    offset: "md:mt-14",
  },
  {
    id: "BLK-03",
    icon: Umbrella,
    title: "THE UNINSURABLE GAP",
    description: "If you can't prove proactive defense, cyber insurers may walk away right when you need coverage most.",
    colSpan: "md:col-span-4",
    offset: "",
  },
];

const DealBlockers = () => {
  return (
    <section className="py-20 bg-transparent border-t border-border/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="tech-id block mb-4">[SYS-BLOCKERS]</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-tight">
            Don't Let a "Checkbox" Kill Your Biggest Deal
          </h2>
          <p className="text-lg font-medium text-foreground">
            In enterprise sales, compliance isn't optional, it's the gatekeeper.
          </p>
        </div>

        {/* Scattered Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {blockers.map((blocker) => (
            <Card 
              key={blocker.title} 
              className={`${blocker.colSpan} ${blocker.offset} shadow-none border border-border/10 bg-card hover:border-primary transition-colors`}
            >
              <CardContent className="p-8">
                {/* Technical ID */}
                <span className="tech-id block mb-4">[{blocker.id}]</span>
                
                <div className="w-10 h-10 bg-muted flex items-center justify-center mb-6">
                  <blocker.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4 uppercase tracking-tight">
                  {blocker.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {blocker.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Connecting line visual */}
        <div className="hidden md:block relative h-px w-full mt-12">
          <div className="absolute left-[15%] right-[25%] top-0 h-px bg-border/30" />
        </div>
      </div>
    </section>
  );
};

export default DealBlockers;
