import { Grid3X3, TrendingUp, Shield } from "lucide-react";

const ValueProp = () => {
  return (
    <section className="py-32 relative bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Turn Compliance<br />
            <span className="text-primary">Into Revenue.</span>
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            Don't just tick boxes. We help you achieve the certifications that unlock new markets and close bigger deals.
          </p>
        </div>

        {/* Split Layout - Before/After */}
        <div className="grid md:grid-cols-2 gap-0 max-w-6xl mx-auto">
          {/* Left Side - The Maze (Compliance - Static) */}
          <div className="relative p-12 md:p-16 border border-border bg-muted/30">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
            </div>
            
            <div className="relative z-10">
              <div className="mb-8">
                <Grid3X3 className="w-12 h-12 text-muted-foreground/60" strokeWidth={1} />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">The Challenge</span>
              <h3 className="text-3xl md:text-4xl font-bold text-muted-foreground mt-4 mb-6">Compliance</h3>
              <p className="text-muted-foreground leading-relaxed">
                We don't believe in generic checklists. We build risk-based compliance programs that satisfy strict regulatory requirements while positioning your security posture as a competitive advantage.
              </p>
            </div>
          </div>

          {/* Right Side - The Path (Revenue - Dynamic) */}
          <div className="relative p-12 md:p-16 border border-primary/30 bg-primary/5">
            <div className="relative z-10">
              <div className="mb-8">
                <TrendingUp className="w-12 h-12 text-primary" strokeWidth={1} />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">The Outcome</span>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">Revenue</h3>
              <p className="text-foreground leading-relaxed">
                Cyber risk is business risk. We provide the leadership and clarity needed to translate technical threats into board-level strategy.
              </p>
            </div>
          </div>
        </div>

        {/* Secondary Section - Protect Enterprise Value */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-8">
            <Shield className="w-8 h-8 text-primary" strokeWidth={1.5} />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Protect Enterprise Value.
          </h3>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Cyber risk is business risk. We provide the leadership and clarity needed to translate technical threats into board-level strategy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
