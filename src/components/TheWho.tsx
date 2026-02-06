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
              The Architects of Your Defense.
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              In a crisis, you don't need a generalist; you need the experts who built the world's most secure clouds.
            </p>

            {/* Three Points */}
            <div className="space-y-8">
              {/* Point 1 */}
              <div className="flex gap-5">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our leaders designed the security frameworks for <span className="text-foreground font-semibold">9 of the top 10 Cloud Service Providers</span>.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-5">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our principals led the response for <span className="text-foreground font-semibold">6 of the 10 largest security breaches in North American history</span>.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex gap-5">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We translate technical intelligence from the lab into clear, actionable strategy for your leadership, <span className="text-foreground font-semibold">without the 'Ivory Tower' ego</span>.
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
