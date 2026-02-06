import { Card, CardContent } from "@/components/ui/card";
import { FileX, Clock, Umbrella } from "lucide-react";

import sectionExecutives from "@/assets/homepage/section-executives.jpg";

const blockers = [
  {
    id: "BLK-01",
    icon: FileX,
    title: "THE RFP BLOCKADE",
    description: "Stop watching seven-figure contracts stall because security reviews drag on for months.",
  },
  {
    id: "BLK-02",
    icon: Clock,
    title: "THE DORA DEADLINE",
    description: "Don't let EU regulatory deadlines freeze your ability to transact.",
  },
  {
    id: "BLK-03",
    icon: Umbrella,
    title: "THE UNINSURABLE GAP",
    description: "If you can't prove proactive defense, cyber insurers may walk away right when you need coverage most.",
  },
];

const DealBlockers = () => {
  return (
    <section className="py-20 bg-transparent border-t border-border/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-12">
          {/* Left side - Content */}
          <div className="col-span-12 lg:col-span-7">
            {/* Section Header */}
            <div className="max-w-3xl mb-12">
              <span className="tech-id block mb-4">[SYS-BLOCKERS]</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-tight">
                Don't Let a "Checkbox" Kill Your Biggest Deal
              </h2>
              <p className="text-lg font-medium text-foreground">
                In enterprise sales, compliance isn't optional—it's the gatekeeper.
              </p>
            </div>

            {/* Cards - Stacked vertically */}
            <div className="space-y-6">
              {blockers.map((blocker) => (
                <Card 
                  key={blocker.title} 
                  className="shadow-none border border-border/10 bg-card hover:border-primary transition-colors"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-10 h-10 bg-muted flex items-center justify-center flex-shrink-0">
                        <blocker.icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div>
                        <span className="tech-id block mb-2">[{blocker.id}]</span>
                        <h4 className="text-xl font-bold text-foreground mb-3 uppercase tracking-tight">
                          {blocker.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {blocker.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="col-span-12 lg:col-span-5 flex items-start">
            <div className="relative group w-full">
              <span className="absolute top-4 left-4 z-10 tech-id bg-card/90 px-2 py-1">[IMG-BLOCK]</span>
              <div className="border border-border/10 hover:border-primary transition-colors overflow-hidden">
                <img 
                  src={sectionExecutives} 
                  alt="Executive discussion"
                  className="w-full h-[450px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
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
