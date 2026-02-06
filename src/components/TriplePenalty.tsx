import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Pause, AlertTriangle } from "lucide-react";

import sectionConference from "@/assets/homepage/section-conference.jpg";

const penalties = [
  {
    id: "PEN-01",
    icon: DollarSign,
    title: "FINANCIAL LIABILITY",
    description: "Between €10M regulatory fines, frozen payment rails, and contract clawbacks, weak compliance turns a single incident into a business-ending event.",
  },
  {
    id: "PEN-02",
    icon: Pause,
    title: "OPERATIONAL STOPPAGE",
    description: "Under mandates like NIS2 and DORA, regulators can revoke your license to operate. Without proven resilience, you don't have a growth strategy, you have a liability.",
  },
  {
    id: "PEN-03",
    icon: AlertTriangle,
    title: "REPUTATION DEAD-END",
    description: "In enterprise sales, you don't get a second chance. Once your security posture is flagged as \"high risk,\" future deals quietly disappear.",
  },
];

const TriplePenalty = () => {
  return (
    <section className="py-20 bg-transparent border-t border-border/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-12">
          {/* Left side - Content */}
          <div className="col-span-12 lg:col-span-7">
            {/* Section Header */}
            <div className="max-w-3xl mb-16">
              <span className="tech-id block mb-4">[SYS-THREAT-ANALYSIS]</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-tight">
                The High Cost of "Paper-Thin" Compliance
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                A checklist won't stop a breach and it certainly won't satisfy a sophisticated enterprise auditor. Generic box-ticking creates an illusion of safety: compliance that looks fine on paper but collapses under scrutiny.
              </p>
              <p className="text-lg font-medium text-foreground">
                If your compliance only exists in documentation, you're one audit away from losing momentum, or worse.
              </p>
            </div>

            {/* Section Sub-header */}
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-10 uppercase tracking-tight">
              The Triple Penalty of Weak Compliance
            </h3>

            {/* Cards - Stacked vertically */}
            <div className="space-y-6">
              {penalties.map((penalty) => (
                <Card 
                  key={penalty.title} 
                  className="shadow-none border border-border/10 bg-card hover:border-primary transition-colors"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-10 h-10 bg-muted flex items-center justify-center flex-shrink-0">
                        <penalty.icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div>
                        <span className="tech-id block mb-2">[{penalty.id}]</span>
                        <h4 className="text-xl font-bold text-foreground mb-3 uppercase tracking-tight">
                          {penalty.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {penalty.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="col-span-12 lg:col-span-5 lg:mt-24">
            <div className="sticky top-24">
              <div className="relative group">
                <span className="absolute top-4 left-4 z-10 tech-id bg-card/90 px-2 py-1">[IMG-THREAT]</span>
                <div className="border border-border/10 hover:border-primary transition-colors overflow-hidden">
                  <img 
                    src={sectionConference} 
                    alt="Executive conference"
                    className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connecting line visual */}
        <div className="hidden md:block relative h-px w-full mt-12">
          <div className="absolute left-[20%] right-[30%] top-0 h-px bg-border/30" />
        </div>
      </div>
    </section>
  );
};

export default TriplePenalty;
