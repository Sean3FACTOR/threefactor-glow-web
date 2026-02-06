import { Card, CardContent } from "@/components/ui/card";

// Custom SVG Illustrations using brand variables
const GapDiscoveryIllustration = () => (
  <svg viewBox="0 0 200 120" className="w-full h-32 mb-6" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Scanner frame */}
    <rect x="20" y="20" width="160" height="80" stroke="hsl(var(--foreground))" strokeWidth="2" fill="none" />
    <rect x="30" y="30" width="140" height="60" stroke="hsl(var(--muted-foreground))" strokeWidth="1" fill="hsl(var(--muted) / 0.3)" />
    
    {/* Data stream lines */}
    <line x1="50" y1="45" x2="150" y2="45" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 2" />
    <line x1="50" y1="60" x2="150" y2="60" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 2" />
    <line x1="50" y1="75" x2="150" y2="75" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 2" />
    
    {/* Data packets - grey */}
    <rect x="55" y="42" width="12" height="6" fill="hsl(var(--foreground) / 0.3)" />
    <rect x="80" y="57" width="12" height="6" fill="hsl(var(--foreground) / 0.3)" />
    <rect x="130" y="72" width="12" height="6" fill="hsl(var(--foreground) / 0.3)" />
    
    {/* Flagged data packet - ORANGE highlight */}
    <rect x="105" y="57" width="12" height="6" fill="hsl(var(--ring))" />
    <circle cx="111" cy="50" r="8" stroke="hsl(var(--ring))" strokeWidth="1.5" fill="none" />
    <path d="M108 50 L111 53 L117 47" stroke="hsl(var(--ring))" strokeWidth="1.5" fill="none" />
    
    {/* Scanner beam */}
    <line x1="40" y1="35" x2="40" y2="85" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <polygon points="40,30 35,38 45,38" fill="hsl(var(--foreground))" />
  </svg>
);

const ComplianceShieldIllustration = () => (
  <svg viewBox="0 0 200 120" className="w-full h-32 mb-6" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer shield shape - sharp edges */}
    <path 
      d="M100 10 L160 30 L160 70 L100 115 L40 70 L40 30 Z" 
      stroke="hsl(var(--foreground))" 
      strokeWidth="2" 
      fill="hsl(var(--muted) / 0.2)"
    />
    
    {/* Inner shield layer */}
    <path 
      d="M100 22 L148 38 L148 68 L100 105 L52 68 L52 38 Z" 
      stroke="hsl(var(--muted-foreground))" 
      strokeWidth="1" 
      fill="none"
    />
    
    {/* Technical grid lines */}
    <line x1="70" y1="50" x2="130" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" />
    <line x1="80" y1="65" x2="120" y2="65" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" />
    <line x1="100" y1="35" x2="100" y2="90" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" />
    
    {/* Core pulse - ORANGE glow */}
    <rect x="92" y="52" width="16" height="16" fill="hsl(var(--ring) / 0.15)" />
    <rect x="95" y="55" width="10" height="10" fill="hsl(var(--ring) / 0.3)" />
    <rect x="98" y="58" width="4" height="4" fill="hsl(var(--ring))" />
    
    {/* Corner accents */}
    <rect x="55" y="40" width="8" height="8" stroke="hsl(var(--foreground))" strokeWidth="1" fill="none" />
    <rect x="137" y="40" width="8" height="8" stroke="hsl(var(--foreground))" strokeWidth="1" fill="none" />
  </svg>
);

const MarketDefenseIllustration = () => (
  <svg viewBox="0 0 200 120" className="w-full h-32 mb-6" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Grid background */}
    <line x1="30" y1="100" x2="170" y2="100" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
    <line x1="30" y1="20" x2="30" y2="100" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
    
    {/* Connecting lines between nodes */}
    <polyline 
      points="40,85 70,70 100,55 130,45 160,25" 
      stroke="hsl(var(--foreground))" 
      strokeWidth="2" 
      fill="none"
    />
    
    {/* Network nodes - grey squares */}
    <rect x="34" y="79" width="12" height="12" fill="hsl(var(--foreground) / 0.3)" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
    <rect x="64" y="64" width="12" height="12" fill="hsl(var(--foreground) / 0.3)" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
    <rect x="94" y="49" width="12" height="12" fill="hsl(var(--foreground) / 0.3)" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
    <rect x="124" y="39" width="12" height="12" fill="hsl(var(--foreground) / 0.3)" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
    
    {/* Peak node - ORANGE highlight */}
    <rect x="152" y="17" width="16" height="16" fill="hsl(var(--ring))" />
    <rect x="148" y="13" width="24" height="24" stroke="hsl(var(--ring))" strokeWidth="1" fill="none" opacity="0.5" />
    
    {/* Branching connections */}
    <line x1="70" y1="70" x2="60" y2="55" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 2" />
    <line x1="100" y1="55" x2="110" y2="40" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 2" />
    <line x1="130" y1="45" x2="145" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 2" />
    
    {/* Secondary nodes */}
    <rect x="57" y="52" width="6" height="6" fill="hsl(var(--muted-foreground))" />
    <rect x="107" y="37" width="6" height="6" fill="hsl(var(--muted-foreground))" />
    <rect x="142" y="47" width="6" height="6" fill="hsl(var(--muted-foreground))" />
  </svg>
);

const LiveBadge = () => (
  <span 
    className="inline-flex items-center ml-2 px-2 py-0.5 text-xs font-medium"
    style={{ backgroundColor: "hsl(var(--ring) / 0.1)", color: "hsl(var(--ring))" }}
  >
    <span className="relative flex h-2 w-2 mr-1">
      <span 
        className="animate-ping absolute inline-flex h-full w-full opacity-75"
        style={{ backgroundColor: "hsl(var(--ring))" }}
      />
      <span 
        className="relative inline-flex h-2 w-2"
        style={{ backgroundColor: "hsl(var(--ring))" }}
      />
    </span>
    LIVE
  </span>
);

const steps = [
  {
    id: "STEP-01",
    number: "1",
    title: "GAP DISCOVERY",
    description: "We identify the exact compliance gaps blocking RFPs, slowing deals, or triggering auditor escalation.",
    Illustration: GapDiscoveryIllustration,
    showLiveBadge: false,
    colSpan: "md:col-span-4",
    offset: "",
  },
  {
    id: "STEP-02",
    number: "2",
    title: "THE COMPLIANCE SHIELD",
    description: "We design and deploy a tailored roadmap aligned to your market goals: ISO 27001 · SOC 2 · PCI DSS · NIS2 · DORA",
    Illustration: ComplianceShieldIllustration,
    showLiveBadge: true,
    colSpan: "md:col-span-5",
    offset: "md:mt-12",
  },
  {
    id: "STEP-03",
    number: "3",
    title: "MARKET DEFENSE & SCALE",
    description: "We defend your posture during audits, vendor reviews, and due diligence, so security becomes a competitive advantage, not a recurring fire drill.",
    Illustration: MarketDefenseIllustration,
    showLiveBadge: false,
    colSpan: "md:col-span-3",
    offset: "md:mt-6",
  },
];

const CompliancePlan = () => {
  return (
    <section className="py-20 bg-transparent border-t border-border/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="tech-id block mb-4">[MOD-BLUEPRINT]</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-tight">
            Your Blueprint for Audit-Proof Growth
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Navigating global mandates shouldn't be your second job. We simplify compliance into a clear, defensible path to revenue.
          </p>
        </div>

        {/* Section Sub-header */}
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-10 uppercase tracking-tight">
          Our 3-Step Compliance Plan
        </h3>

        {/* Scattered Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {steps.map((step) => (
            <Card 
              key={step.title} 
              className={`${step.colSpan} ${step.offset} shadow-none border border-border/10 bg-card relative overflow-hidden hover:border-primary transition-colors`}
            >
              <CardContent className="p-8">
                {/* Technical ID */}
                <span className="tech-id block mb-4">[{step.id}]</span>
                
                {/* Step Number */}
                <div className="absolute top-6 right-6 w-8 h-8 bg-muted flex items-center justify-center">
                  <span className="text-sm font-semibold text-muted-foreground">{step.number}</span>
                </div>
                
                {/* Large Illustration */}
                <step.Illustration />
                
                <h4 className="text-xl font-bold text-foreground mb-4 uppercase tracking-tight flex items-center">
                  {step.title}
                  {step.showLiveBadge && <LiveBadge />}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Connecting line visual */}
        <div className="hidden md:block relative h-px w-full mt-12">
          <div className="absolute left-[5%] right-[35%] top-0 h-px bg-border/30" />
        </div>
      </div>
    </section>
  );
};

export default CompliancePlan;
