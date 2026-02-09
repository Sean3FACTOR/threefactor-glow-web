import { Card, CardContent } from "@/components/ui/card";

// Custom SVG Illustrations using brand variables
const GapDiscoveryIllustration = () => (
  <svg viewBox="0 0 200 120" className="w-full h-32 mb-6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="160" height="80" stroke="hsl(var(--foreground))" strokeWidth="2" fill="none" />
    <rect x="30" y="30" width="140" height="60" stroke="hsl(var(--muted-foreground))" strokeWidth="1" fill="hsl(var(--muted) / 0.3)" />
    <line x1="50" y1="45" x2="150" y2="45" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 2" />
    <line x1="50" y1="60" x2="150" y2="60" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 2" />
    <line x1="50" y1="75" x2="150" y2="75" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4 2" />
    <rect x="55" y="42" width="12" height="6" fill="hsl(var(--foreground) / 0.3)" />
    <rect x="80" y="57" width="12" height="6" fill="hsl(var(--foreground) / 0.3)" />
    <rect x="130" y="72" width="12" height="6" fill="hsl(var(--foreground) / 0.3)" />
    <rect x="105" y="57" width="12" height="6" fill="hsl(var(--ring))" />
    <circle cx="111" cy="50" r="8" stroke="hsl(var(--ring))" strokeWidth="1.5" fill="none" />
    <path d="M108 50 L111 53 L117 47" stroke="hsl(var(--ring))" strokeWidth="1.5" fill="none" />
    <line x1="40" y1="35" x2="40" y2="85" stroke="hsl(var(--foreground))" strokeWidth="2" />
    <polygon points="40,30 35,38 45,38" fill="hsl(var(--foreground))" />
  </svg>
);

const FrameworkAlignmentIllustration = () => (
  <svg viewBox="0 0 200 120" className="w-full h-32 mb-6" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Alignment grid */}
    <rect x="30" y="20" width="140" height="80" stroke="hsl(var(--muted-foreground))" strokeWidth="1" fill="none" />
    <line x1="30" y1="45" x2="170" y2="45" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" />
    <line x1="30" y1="70" x2="170" y2="70" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" />
    <line x1="80" y1="20" x2="80" y2="100" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" />
    <line x1="130" y1="20" x2="130" y2="100" stroke="hsl(var(--muted-foreground))" strokeWidth="0.5" />
    {/* Checkmarks */}
    <path d="M48 32 L53 37 L62 28" stroke="hsl(var(--foreground))" strokeWidth="2" fill="none" />
    <path d="M98 32 L103 37 L112 28" stroke="hsl(var(--foreground))" strokeWidth="2" fill="none" />
    <path d="M148 57 L153 62 L162 53" stroke="hsl(var(--ring))" strokeWidth="2" fill="none" />
    <path d="M48 82 L53 87 L62 78" stroke="hsl(var(--foreground))" strokeWidth="2" fill="none" />
    {/* Labels */}
    <rect x="95" y="55" width="20" height="10" fill="hsl(var(--ring) / 0.15)" />
    <rect x="45" y="55" width="20" height="10" fill="hsl(var(--foreground) / 0.1)" />
  </svg>
);

const ProgramWrapperIllustration = () => (
  <svg viewBox="0 0 200 120" className="w-full h-32 mb-6" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer wrapper */}
    <rect x="20" y="15" width="160" height="90" stroke="hsl(var(--foreground))" strokeWidth="2" fill="none" />
    <rect x="30" y="25" width="140" height="70" stroke="hsl(var(--muted-foreground))" strokeWidth="1" fill="hsl(var(--muted) / 0.2)" />
    {/* Inner modules */}
    <rect x="40" y="35" width="50" height="20" stroke="hsl(var(--foreground))" strokeWidth="1.5" fill="hsl(var(--foreground) / 0.1)" />
    <rect x="100" y="35" width="60" height="20" stroke="hsl(var(--foreground))" strokeWidth="1.5" fill="hsl(var(--foreground) / 0.1)" />
    <rect x="40" y="65" width="35" height="20" stroke="hsl(var(--foreground))" strokeWidth="1.5" fill="hsl(var(--foreground) / 0.1)" />
    <rect x="85" y="65" width="75" height="20" stroke="hsl(var(--ring))" strokeWidth="1.5" fill="hsl(var(--ring) / 0.1)" />
    {/* Connections */}
    <line x1="65" y1="55" x2="65" y2="65" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 2" />
    <line x1="130" y1="55" x2="130" y2="65" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="3 2" />
  </svg>
);

const CertifiedConfidenceIllustration = () => (
  <svg viewBox="0 0 200 120" className="w-full h-32 mb-6" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Shield */}
    <path d="M100 10 L160 30 L160 70 L100 115 L40 70 L40 30 Z" stroke="hsl(var(--foreground))" strokeWidth="2" fill="hsl(var(--muted) / 0.2)" />
    <path d="M100 22 L148 38 L148 68 L100 105 L52 68 L52 38 Z" stroke="hsl(var(--muted-foreground))" strokeWidth="1" fill="none" />
    {/* Central checkmark */}
    <path d="M85 60 L95 70 L118 47" stroke="hsl(var(--ring))" strokeWidth="3" fill="none" />
    {/* Corner accents */}
    <rect x="55" y="40" width="8" height="8" stroke="hsl(var(--foreground))" strokeWidth="1" fill="none" />
    <rect x="137" y="40" width="8" height="8" stroke="hsl(var(--foreground))" strokeWidth="1" fill="none" />
  </svg>
);

const LiveBadge = () => (
  <span 
    className="inline-flex items-center ml-2 px-2 py-0.5 text-xs font-medium"
    style={{ backgroundColor: "hsl(var(--ring) / 0.1)", color: "hsl(var(--ring))" }}
  >
    <span className="relative flex h-2 w-2 mr-1">
      <span className="animate-ping absolute inline-flex h-full w-full opacity-75" style={{ backgroundColor: "hsl(var(--ring))" }} />
      <span className="relative inline-flex h-2 w-2" style={{ backgroundColor: "hsl(var(--ring))" }} />
    </span>
    LIVE
  </span>
);

const steps = [
  {
    number: "1",
    title: "GAP DISCOVERY",
    description: "We identify the exact compliance gaps blocking RFPs, slowing deals, or triggering auditor escalation.",
    Illustration: GapDiscoveryIllustration,
    showLiveBadge: false,
    colSpan: "md:col-span-6 lg:col-span-3",
    offset: "",
  },
  {
    number: "2",
    title: "FRAMEWORK ALIGNMENT",
    description: "We identify the exact certifications (ISO, PCI, SOC 2, FedRAMP) needed to clear your current RFI and future-proof your growth.",
    Illustration: FrameworkAlignmentIllustration,
    showLiveBadge: false,
    colSpan: "md:col-span-6 lg:col-span-3",
    offset: "md:mt-8",
  },
  {
    number: "3",
    title: "THE PROGRAM WRAPPER",
    description: "We build the underlying Maturity Mapping and Risk Architecture. This isn't a one-time fix; it's a flexible system designed to handle the ever-changing regulatory landscape.",
    Illustration: ProgramWrapperIllustration,
    showLiveBadge: true,
    colSpan: "md:col-span-6 lg:col-span-3",
    offset: "lg:mt-4",
  },
  {
    number: "4",
    title: "CERTIFIED CONFIDENCE",
    description: "We guide you through the audit and the vendor review, defending your posture so you present a calm, expert front to auditors and buyers.",
    Illustration: CertifiedConfidenceIllustration,
    showLiveBadge: false,
    colSpan: "md:col-span-6 lg:col-span-3",
    offset: "md:mt-12",
  },
];

const CompliancePlan = () => {
  return (
    <section className="py-20 bg-transparent border-t border-border/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-tight">
            Your Blueprint for Audit-Proof Growth
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Navigating global mandates shouldn't be your second job. We simplify compliance into a clear, defensible path to revenue.
          </p>
        </div>

        {/* Section Sub-header */}
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-10 uppercase tracking-tight">
          4 Steps to Audit Dominance
        </h3>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
          Working with a certification firm shouldn't be a second job. We've simplified the path to turning your RFI into a revenue engine:
        </p>

        {/* 4-column Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {steps.map((step) => (
            <div key={step.title} className={`col-span-12 ${step.colSpan} ${step.offset}`}>
              <div className="shadow-none border border-border/10 bg-card relative overflow-hidden hover:border-primary transition-colors p-8">
                {/* Step Number */}
                <div className="absolute top-6 right-6 w-8 h-8 bg-muted flex items-center justify-center">
                  <span className="text-sm font-semibold text-muted-foreground">{step.number}</span>
                </div>
                
                <step.Illustration />
                
                <h4 className="text-xl font-bold text-foreground mb-4 uppercase tracking-tight flex items-center">
                  {step.title}
                  {step.showLiveBadge && <LiveBadge />}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
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
