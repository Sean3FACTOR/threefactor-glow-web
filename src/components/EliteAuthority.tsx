import { Cloud, Shield, Scale, Layers } from "lucide-react";

const authorityPoints = [
  {
    icon: Layers,
    title: "BEYOND THE AUDIT",
    description: "We don't just \"get you a certificate.\" We provide Program Architecture and Risk Assessments that set you up for long-term mastery.",
  },
  {
    icon: Cloud,
    title: "ARCHITECTS OF THE CLOUD",
    description: "Our team includes lead architects who secured 9 of the top 10 global Cloud Service Providers. We bring that elite logic to your mid-market firm.",
  },
  {
    icon: Shield,
    title: "BATTLE-TESTED WHERE IT MATTERS",
    description: "We've led recovery efforts on the frontlines of 6 of the 10 largest security breaches in North American history.",
  },
  {
    icon: Scale,
    title: "UNBIASED STRATEGY",
    description: "As a vendor-agnostic firm, our only agenda is your long-term, defensible compliance, not selling tools.",
  },
];

const ProgramWrapperDiagram = () => (
  <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="20" y="20" width="360" height="320" stroke="white" strokeWidth="1.5" opacity="0.2" fill="none" />
    <rect x="30" y="30" width="340" height="300" stroke="white" strokeWidth="0.5" opacity="0.1" fill="none" strokeDasharray="6 3" />
    <rect x="130" y="10" width="140" height="24" fill="#3B3B39" />
    <text x="200" y="26" textAnchor="middle" fill="white" opacity="0.8" fontSize="11" fontWeight="bold" fontFamily="sans-serif">PROGRAM WRAPPER</text>
    <rect x="50" y="60" width="140" height="50" stroke="white" strokeWidth="1" opacity="0.2" fill="white" fillOpacity="0.05" />
    <text x="120" y="88" textAnchor="middle" fill="white" opacity="0.7" fontSize="10" fontWeight="600" fontFamily="sans-serif">RISK ARCHITECTURE</text>
    <rect x="210" y="60" width="150" height="50" stroke="white" strokeWidth="1" opacity="0.2" fill="white" fillOpacity="0.05" />
    <text x="285" y="88" textAnchor="middle" fill="white" opacity="0.7" fontSize="10" fontWeight="600" fontFamily="sans-serif">MATURITY MAPPING</text>
    <rect x="50" y="140" width="310" height="50" stroke="white" strokeWidth="0.8" opacity="0.15" fill="white" fillOpacity="0.03" />
    <text x="205" y="168" textAnchor="middle" fill="white" opacity="0.6" fontSize="10" fontWeight="600" fontFamily="sans-serif">FRAMEWORK ALIGNMENT (ISO · PCI · SOC 2 · FEDRAMP)</text>
    <rect x="50" y="220" width="145" height="50" stroke="white" strokeWidth="0.8" opacity="0.15" fill="white" fillOpacity="0.03" />
    <text x="122" y="248" textAnchor="middle" fill="white" opacity="0.6" fontSize="10" fontWeight="600" fontFamily="sans-serif">GAP DISCOVERY</text>
    <rect x="215" y="220" width="145" height="50" stroke="white" strokeWidth="0.8" opacity="0.15" fill="white" fillOpacity="0.03" />
    <text x="287" y="248" textAnchor="middle" fill="white" opacity="0.6" fontSize="10" fontWeight="600" fontFamily="sans-serif">AUDIT DEFENSE</text>
    <line x1="120" y1="110" x2="120" y2="140" stroke="white" strokeWidth="0.8" opacity="0.15" strokeDasharray="4 2" />
    <line x1="285" y1="110" x2="285" y2="140" stroke="white" strokeWidth="0.8" opacity="0.15" strokeDasharray="4 2" />
    <line x1="205" y1="190" x2="122" y2="220" stroke="white" strokeWidth="0.8" opacity="0.15" strokeDasharray="4 2" />
    <line x1="205" y1="190" x2="287" y2="220" stroke="white" strokeWidth="0.8" opacity="0.15" strokeDasharray="4 2" />
    <line x1="205" y1="290" x2="205" y2="320" stroke="white" strokeWidth="1" opacity="0.25" />
    <polygon points="200,320 210,320 205,330" fill="white" opacity="0.25" />
    <text x="205" y="350" textAnchor="middle" fill="white" opacity="0.7" fontSize="10" fontWeight="bold" fontFamily="sans-serif">CERTIFIED CONFIDENCE</text>
  </svg>
);

const EliteAuthority = () => {
  return (
    <section className="py-20" style={{ backgroundColor: "#3B3B39", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight">
            Expert Leadership for Your Toughest Transitions
          </h2>
          <p className="text-lg text-white/60 mb-4 leading-relaxed">
            We've Been in Your Chair. We know the pressure of an "overnight" requirement from a high-value lead. We understand that "almost compliant" is a career risk you can't afford. You deserve a partner who provides a program wrapper that works today and stays flexible for tomorrow.
          </p>
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-10 uppercase tracking-tight">
          Why IT & Ops Leaders Choose 3FACTOR
        </h3>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-6 space-y-6">
            {authorityPoints.map((point) => (
              <div
                key={point.title}
                className="p-6 transition-all hover:shadow-lg"
                style={{ backgroundColor: "#646464", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                    <point.icon className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">
                      {point.title}
                    </h4>
                    <p className="text-white/60 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
            <div className="w-full max-w-3xl">
              <ProgramWrapperDiagram />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EliteAuthority;
