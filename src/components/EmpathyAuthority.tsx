import { Shield, AlertCircle, Scale } from "lucide-react";

const EmpathyAuthority = () => {
  return (
    <section className="py-20 relative bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Empathy Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Not Just Your Consultants.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We know the pressure of keeping a board-level promise while technical threats evolve daily. You shouldn't have to guess at your security posture; you deserve partners who care as much about your mission as you do.
            </p>
          </div>

          {/* Authority Section */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <h3 className="text-xl font-bold text-foreground mb-8 text-center">
              Elite Authority to Back You Up:
            </h3>
            
            <div className="space-y-8">
              {/* Architects of the Cloud */}
              <div className="flex gap-5">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-2">Architects of the Cloud</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Our team includes the lead architects who secured <span className="text-foreground font-semibold">9 of the top 10 Cloud Service Providers</span>.
                  </p>
                </div>
              </div>

              {/* Battle-Tested */}
              <div className="flex gap-5">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-2">Battle-Tested</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Since 2008, our principals have led the recovery on the frontlines of <span className="text-foreground font-semibold">6 of the 10 largest security breaches in North America</span>.
                  </p>
                </div>
              </div>

              {/* Unbiased Advice */}
              <div className="flex gap-5">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Scale className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-2">Unbiased Advice</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    As a strictly vendor-agnostic firm, our only agenda is <span className="text-foreground font-semibold">your sustainable security</span>.
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

export default EmpathyAuthority;
