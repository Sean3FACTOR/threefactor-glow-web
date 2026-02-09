import { Cloud, Shield, Scale, Layers } from "lucide-react";
const authorityPoints = [{
  icon: Layers,
  title: "BEYOND THE AUDIT",
  description: "We don't just \"get you a certificate.\" We provide Program Architecture and Risk Assessments that set you up for long-term mastery."
}, {
  icon: Cloud,
  title: "ARCHITECTS OF THE CLOUD",
  description: "Our team includes lead architects who secured 9 of the top 10 global Cloud Service Providers. We bring that elite logic to your mid-market firm."
}, {
  icon: Shield,
  title: "BATTLE-TESTED WHERE IT MATTERS",
  description: "We've led recovery efforts on the frontlines of 6 of the 10 largest security breaches in North American history."
}, {
  icon: Scale,
  title: "UNBIASED STRATEGY",
  description: "As a vendor-agnostic firm, our only agenda is your long-term, defensible compliance, not selling tools."
}];
const ProgramWrapperDiagram = () => <svg viewBox="0 0 1200 1080" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-secondary-foreground">
    {/* Outer solid orange border */}
    <rect x="60" y="30" width="1080" height="990" stroke="#F36F21" strokeWidth="2" opacity="1" fill="none" />
    {/* Inner dashed orange border */}
    <rect x="90" y="90" width="1020" height="900" stroke="#F36F21" strokeWidth="1" opacity="0.6" fill="none" strokeDasharray="12 6" />

    {/* Top: mask + text for PROGRAM WRAPPER */}
    <rect x="300" y="16" width="600" height="72" fill="#3B3B39" />
    <text x="600" y="78" textAnchor="middle" fill="white" opacity="1" fontSize="38" fontWeight="bold" fontFamily="sans-serif">PROGRAM WRAPPER</text>

    {/* Bottom: mask + text for CERTIFIED CONFIDENCE (mirroring top) */}
    <rect x="270" y="984" width="660" height="72" fill="#3B3B39" />
    <text x="600" y="1032" textAnchor="middle" fill="white" opacity="1" fontSize="38" fontWeight="bold" fontFamily="sans-serif">CERTIFIED CONFIDENCE</text>

    {/* Inner content boxes */}
    <rect x="150" y="180" width="420" height="150" stroke="#F36F21" strokeWidth="1.5" opacity="1" fill="white" fillOpacity="0.05" />
    <text x="360" y="268" textAnchor="middle" fill="white" opacity="1" fontSize="34" fontWeight="600" fontFamily="sans-serif">RISK ARCHITECTURE</text>
    <rect x="630" y="180" width="450" height="150" stroke="#F36F21" strokeWidth="1.5" opacity="1" fill="white" fillOpacity="0.05" />
    <text x="855" y="268" textAnchor="middle" fill="white" opacity="1" fontSize="34" fontWeight="600" fontFamily="sans-serif">MATURITY MAPPING</text>
    <rect x="150" y="420" width="930" height="150" stroke="#F36F21" strokeWidth="1.2" opacity="1" fill="white" fillOpacity="0.03" />
    <text x="615" y="508" textAnchor="middle" fill="white" opacity="1" fontSize="34" fontWeight="600" fontFamily="sans-serif">FRAMEWORK ALIGNMENT</text>
    <rect x="150" y="660" width="435" height="150" stroke="#F36F21" strokeWidth="1.2" opacity="1" fill="white" fillOpacity="0.03" />
    <text x="366" y="748" textAnchor="middle" fill="white" opacity="1" fontSize="34" fontWeight="600" fontFamily="sans-serif">GAP DISCOVERY</text>
    <rect x="645" y="660" width="435" height="150" stroke="#F36F21" strokeWidth="1.2" opacity="1" fill="white" fillOpacity="0.03" />
    <text x="861" y="748" textAnchor="middle" fill="white" opacity="1" fontSize="34" fontWeight="600" fontFamily="sans-serif">AUDIT DEFENSE</text>

    {/* Connector lines */}
    <line x1="360" y1="330" x2="360" y2="420" stroke="white" strokeWidth="1.2" opacity="0.6" strokeDasharray="8 4" />
    <line x1="855" y1="330" x2="855" y2="420" stroke="white" strokeWidth="1.2" opacity="0.6" strokeDasharray="8 4" />
    <line x1="615" y1="570" x2="366" y2="660" stroke="white" strokeWidth="1.2" opacity="0.6" strokeDasharray="8 4" />
    <line x1="615" y1="570" x2="861" y2="660" stroke="white" strokeWidth="1.2" opacity="0.6" strokeDasharray="8 4" />
  </svg>;
const EliteAuthority = () => {
  return <section className="py-20" style={{
    backgroundColor: "#3B3B39",
    borderTop: "1px solid rgba(255,255,255,0.08)"
  }}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight">
            Expert Leadership for Your Toughest Transitions
          </h2>
          <p className="text-lg mb-4 leading-relaxed text-primary-foreground">
            We've Been in Your Chair. We know the pressure of an "overnight" requirement from a high-value lead. We understand that "almost compliant" is a career risk you can't afford. You deserve a partner who provides a program wrapper that works today and stays flexible for tomorrow.
          </p>
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-10 uppercase tracking-tight">
          Why IT & Ops Leaders Choose 3<span style={{ color: "#F36F21" }}>FACTOR</span>
        </h3>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-6 space-y-6">
            {authorityPoints.map(point => <div key={point.title} className="p-6 transition-all hover:shadow-lg" style={{
            backgroundColor: "#646464",
            border: "1px solid rgba(255,255,255,0.08)"
          }}>
                <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">
                  {point.title}
                </h4>
                <p className="leading-relaxed text-primary-foreground">
                  {point.description}
                </p>
              </div>)}
          </div>
          <div className="col-span-12 lg:col-span-6 flex items-stretch">
            <div className="w-full">
              <ProgramWrapperDiagram />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default EliteAuthority;