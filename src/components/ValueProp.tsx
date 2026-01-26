import { ArrowRight, Grid3X3, TrendingUp } from "lucide-react";

const ValueProp = () => {
  return (
    <section className="py-32 relative bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-sm text-primary uppercase tracking-[0.3em] font-semibold">
            The Value Proposition
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-6 leading-tight">
            Turn Compliance<br />
            <span className="text-muted-foreground">Into Revenue.</span>
          </h2>
        </div>

        {/* Before/After Split */}
        <div className="grid md:grid-cols-2 gap-0 max-w-5xl mx-auto">
          {/* The Maze - Before */}
          <div className="relative p-12 md:p-16 border border-border bg-muted/30">
            <div className="absolute top-6 left-8">
              <Grid3X3 className="w-8 h-8 text-muted-foreground/40" strokeWidth={1} />
            </div>
            <div className="pt-8">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">Without Strategy</span>
              <h3 className="text-3xl md:text-4xl font-bold text-muted-foreground mt-4 mb-6">The Maze</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 shrink-0" />
                  <span>Endless checkbox exercises</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 shrink-0" />
                  <span>Compliance as a cost center</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 shrink-0" />
                  <span>Security theater, not substance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 mt-2 shrink-0" />
                  <span>Deals stalled by due diligence</span>
                </li>
              </ul>
            </div>
          </div>

          {/* The Path - After */}
          <div className="relative p-12 md:p-16 border border-primary/30 bg-primary/5">
            <div className="absolute top-6 left-8">
              <TrendingUp className="w-8 h-8 text-primary/60" strokeWidth={1} />
            </div>
            <div className="pt-8">
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">With 3Factor</span>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">The Path</h3>
              <ul className="space-y-4 text-foreground">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Certifications that unlock markets</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Security as competitive advantage</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Programs that withstand scrutiny</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Faster sales cycles, bigger deals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Tagline */}
        <p className="text-center text-lg text-muted-foreground mt-16 max-w-2xl mx-auto">
          Don't just tick boxes. Get certifications that open doors to new markets and accelerate your revenue.
        </p>
      </div>
    </section>
  );
};

export default ValueProp;
