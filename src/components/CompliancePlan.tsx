import { Card, CardContent } from "@/components/ui/card";

// Custom SVG Illustrations using brand variables
const GapDiscoveryIllustration = () => (
  <svg viewBox="0 0 200 120" className="w-full h-32 mb-6" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Scanner frame */}
    <rect x="20" y="20" width="160" height="80" rx="4" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
    <rect x="30" y="30" width="140" height="60" rx="2" stroke="hsl(var(--muted-foreground))" strokeWidth="1" fill="hsl(var(--muted) / 0.3)" />
    
    {/* Data stream lines */}
    <line x1="50" y1="45" x2="150" y2="45" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 2" />
    <line x1="50" y1="60" x2="150" y2="60" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 2" />
    <line x1="50" y1="75" x2="150" y2="75" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 2" />
    
    {/* Data packets - grey */}
    <rect x="55" y="42" width="12" height="6" rx="1" fill="hsl(var(--primary) / 0.3)" />
    <rect x="80" y="57" width="12" height="6" rx="1" fill="hsl(var(--primary) / 0.3)" />
    <rect x="130" y="72" width="12" height="6" rx="1" fill="hsl(var(--primary) / 0.3)" />
    
    {/* Flagged data packet - ORANGE highlight */}
    <rect x="105" y="57" width="12" height="6" rx="1" fill="hsl(var(--ring))" />
    <circle cx="111" cy="50" r="8" stroke="hsl(var(--ring))" strokeWidth="1.5" fill="none" />
    <path d="M108 50 L111 53 L117 47" stroke="hsl(var(--ring))" strokeWidth="1.5" fill="none" />
    
    {/* Scanner beam */}
    <line x1="40" y1="35" x2="40" y2="85" stroke="hsl(var(--primary))" strokeWidth="2" />
    <polygon points="40,30 35,38 45,38" fill="hsl(var(--primary))" />
  </svg>
);

const ComplianceShieldIllustration = () => (
  <svg viewBox="0 0 200 120" className="w-full h-32 mb-6" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer shield shape */}
    <path 
      d="M100 10 L160 30 L160 70 Q160 100 100 115 Q40 100 40 70 L40 30 Z" 
      stroke="hsl(var(--primary))" 
      strokeWidth="2" 
      fill="hsl(var(--muted) / 0.2)"
    />
    
    {/* Inner shield layer */}
    <path 
      d="M100 22 L148 38 L148 68 Q148 92 100 105 Q52 92 52 68 L52 38 Z" 
      stroke="hsl(var(--muted-foreground))" 
      strokeWidth="1" 
      fill="none"
    />
    
    {/* Technical grid lines */}
    <line x1="70" y1="50" x2="130" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" />
    <line x1="80" y1="65" x2="120" y2="65" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" />
    <line x1="100" y1="35" x2="100" y2="90" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" />
    
    {/* Core pulse - ORANGE glow */}
    <circle cx="100" cy="60" r="15" fill="hsl(var(--ring) / 0.15)" />
    <circle cx="100" cy="60" r="10" fill="hsl(var(--ring) / 0.3)" />
    <circle cx="100" cy="60" r="5" fill="hsl(var(--ring))" />
    
    {/* Corner accents */}
    <rect x="55" y="40" width="8" height="8" rx="1" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" />
    <rect x="137" y="40" width="8" height="8" rx="1" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" />
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
      stroke="hsl(var(--primary))" 
      strokeWidth="2" 
      fill="none"
    />
    
    {/* Network nodes - grey */}
    <circle cx="40" cy="85" r="6" fill="hsl(var(--primary) / 0.3)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
    <circle cx="70" cy="70" r="6" fill="hsl(var(--primary) / 0.3)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
    <circle cx="100" cy="55" r="6" fill="hsl(var(--primary) / 0.3)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
    <circle cx="130" cy="45" r="6" fill="hsl(var(--primary) / 0.3)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
    
    {/* Peak node - ORANGE highlight */}
    <circle cx="160" cy="25" r="8" fill="hsl(var(--ring))" />
    <circle cx="160" cy="25" r="12" stroke="hsl(var(--ring))" strokeWidth="1" fill="none" opacity="0.5" />
    
    {/* Branching connections */}
    <line x1="70" y1="70" x2="60" y2="55" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 2" />
    <line x1="100" y1="55" x2="110" y2="40" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 2" />
    <line x1="130" y1="45" x2="145" y2="50" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 2" />
    
    {/* Secondary nodes */}
    <circle cx="60" cy="55" r="3" fill="hsl(var(--muted-foreground))" />
    <circle cx="110" cy="40" r="3" fill="hsl(var(--muted-foreground))" />
    <circle cx="145" cy="50" r="3" fill="hsl(var(--muted-foreground))" />
  </svg>
);

const LiveBadge = () => (
  <span 
    className="inline-flex items-center ml-2 px-2 py-0.5 rounded-full text-xs font-medium"
    style={{ backgroundColor: "hsl(var(--ring) / 0.1)", color: "hsl(var(--ring))" }}
  >
    <span className="relative flex h-2 w-2 mr-1">
      <span 
        className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
        style={{ backgroundColor: "hsl(var(--ring))" }}
      />
      <span 
        className="relative inline-flex rounded-full h-2 w-2"
        style={{ backgroundColor: "hsl(var(--ring))" }}
      />
    </span>
    LIVE
  </span>
);

const steps = [
  {
    number: "1",
    title: "Gap Discovery",
    description: "We identify the exact compliance gaps blocking RFPs, slowing deals, or triggering auditor escalation.",
    Illustration: GapDiscoveryIllustration,
    showLiveBadge: false,
  },
  {
    number: "2",
    title: "The Compliance Shield",
    description: "We design and deploy a tailored roadmap aligned to your market goals: ISO 27001 · SOC 2 · PCI DSS · NIS2 · DORA",
    Illustration: ComplianceShieldIllustration,
    showLiveBadge: true,
  },
  {
    number: "3",
    title: "Market Defense & Scale",
    description: "We defend your posture during audits, vendor reviews, and due diligence, so security becomes a competitive advantage, not a recurring fire drill.",
    Illustration: MarketDefenseIllustration,
    showLiveBadge: false,
  },
];

const CompliancePlan = () => {
  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Your Blueprint for Audit-Proof Growth
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Navigating global mandates shouldn't be your second job. We simplify compliance into a clear, defensible path to revenue.
          </p>
        </div>

        {/* Section Sub-header */}
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-10 border-l-4 border-foreground pl-6">
          Our 3-Step Compliance Plan
        </h3>

        {/* Cards - Horizontal Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          {steps.map((step) => (
            <Card key={step.title} className="shadow-none border border-border bg-card relative overflow-hidden">
              <CardContent className="p-8">
                {/* Step Number */}
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-sm font-semibold text-muted-foreground">{step.number}</span>
                </div>
                
                {/* Large Illustration */}
                <step.Illustration />
                
                <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
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
      </div>
    </section>
  );
};

export default CompliancePlan;
