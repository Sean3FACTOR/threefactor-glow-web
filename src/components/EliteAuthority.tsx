import { Cloud, Shield, Scale, Layers, ChevronDown } from "lucide-react";

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

const ProgramWrapperDiagram = () => (
  <div className="flex flex-col items-center w-full">
    {/* Program Wrapper outer container */}
    <div className="w-full relative p-6 pb-10" style={{ border: "1px dashed rgba(59,59,57,0.25)" }}>
      <h4 className="text-center text-sm font-bold uppercase tracking-widest mb-6 font-mono" style={{ color: "#3B3B39" }}>
        PROGRAM WRAPPER
      </h4>

      {/* Row 1: Risk Architecture + Maturity Mapping */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-4 flex items-center justify-center text-center" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}>
          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#3B3B39" }}>Risk Architecture</span>
        </div>
        <div className="p-4 flex items-center justify-center text-center" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}>
          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#3B3B39" }}>Maturity Mapping</span>
        </div>
      </div>

      {/* Connector line down */}
      <div className="flex justify-center mb-4">
        <div className="w-px h-6" style={{ backgroundColor: "#3B3B39" }} />
      </div>

      {/* Row 2: Framework Alignment */}
      <div className="p-4 flex items-center justify-center text-center mb-4" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}>
        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#3B3B39" }}>
          Framework Alignment
        </span>
      </div>

      {/* V-shape connector */}
      <div className="flex justify-center mb-4">
        <svg width="200" height="30" viewBox="0 0 200 30" fill="none" className="overflow-visible">
          <line x1="100" y1="0" x2="40" y2="28" stroke="#3B3B39" strokeWidth="1" strokeDasharray="4 3" />
          <line x1="100" y1="0" x2="160" y2="28" stroke="#3B3B39" strokeWidth="1" strokeDasharray="4 3" />
        </svg>
      </div>

      {/* Row 3: Gap Discovery + Audit Defense */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 flex items-center justify-center text-center" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}>
          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#3B3B39" }}>Gap Discovery</span>
        </div>
        <div className="p-4 flex items-center justify-center text-center" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}>
          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#3B3B39" }}>Audit Defense</span>
        </div>
      </div>
    </div>

    {/* Arrow down to Certified Confidence */}
    <div className="flex flex-col items-center py-3">
      <div className="w-px h-6" style={{ backgroundColor: "#3B3B39" }} />
      <ChevronDown size={20} style={{ color: "#3B3B39" }} className="-mt-1" />
    </div>

    <h4 className="text-sm font-bold uppercase tracking-widest font-mono text-center" style={{ color: "#3B3B39" }}>
      CERTIFIED CONFIDENCE
    </h4>
  </div>
);

const EliteAuthority = () => {
  return (
    <>
      <section className="pb-20" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight" style={{ color: "#3B3B39" }}>
              Expert Leadership for Your Toughest Transitions
            </h2>
            <p className="text-lg mb-4 leading-relaxed" style={{ color: "#646464" }}>
              We've Been in Your Chair. We know the pressure of an "overnight" requirement from a high-value lead. We understand that "almost compliant" is a career risk you can't afford. You deserve a partner who provides a program wrapper that works today and stays flexible for tomorrow.
            </p>
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold mb-3 uppercase tracking-tight" style={{ color: "#3B3B39" }}>
            Why IT & Ops Leaders Choose 3<span style={{ color: "#F36F21" }}>FACTOR</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Program Wrapper Diagram */}
            <div className="lg:col-span-5 flex items-center">
              <ProgramWrapperDiagram />
            </div>

            {/* Right: Authority boxes */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              {authorityPoints.map(point => (
                <div
                  key={point.title}
                  className="p-6 transition-all"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E5E7EB"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#F36F21")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}
                >
                  <h4 className="text-lg font-bold mb-2 uppercase tracking-tight" style={{ color: "#646464" }}>
                    {point.title}
                  </h4>
                  <p className="leading-relaxed" style={{ color: "#3B3B39" }}>
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EliteAuthority;
