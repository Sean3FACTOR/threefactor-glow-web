import teamWorking from "@/assets/team-working.jpg";
import { Users, Wrench } from "lucide-react";

const TheWho = () => {
  return (
    <section className="py-16 relative bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Image (Grainy, Documentary Style) */}
          <div className="relative group">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={teamWorking} 
                alt="Team working at whiteboard" 
                className="w-full h-full object-cover img-grayscale-hover contrast-125"
              />
            </div>
            {/* Accent Line */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-primary/50" />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Powered by People.<br />
              <span className="text-muted-foreground">Driven by Results.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              We combine seasoned leadership with technical deep-divers to solve your most complex security challenges.
            </p>

            {/* Two Points */}
            <div className="space-y-10">
              {/* Point 1 - Proven Leadership */}
              <div className="flex gap-5">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2">Proven Leadership</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our leadership team defines the strategy. With decades of management experience and a lineage from the world's top security firms, we provide the direction and governance required to ensure every project delivers real business value.
                  </p>
                </div>
              </div>

              {/* Point 2 - Technical Execution */}
              <div className="flex gap-5">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2">Technical Execution</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our consultants are the boots on the ground. They bring the technical expertise, enthusiasm, and frontline experience needed to execute your security roadmap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheWho;
