import { Cloud, Shield, Scale, Layers } from "lucide-react";

const steps = [
  { number: "01", title: "GAP DISCOVERY", description: "We identify the exact compliance gaps blocking RFPs, slowing deals, or triggering auditor escalation." },
  { number: "02", title: "FRAMEWORK ALIGNMENT", description: "We identify the exact certifications needed to clear your current RFI and future-proof your growth." },
  { number: "03", title: "THE PROGRAM WRAPPER", description: "We build the underlying Maturity Mapping and Risk Architecture — a flexible system for the ever-changing regulatory landscape.", showLiveBadge: true },
  { number: "04", title: "CERTIFIED CONFIDENCE", description: "We guide you through the audit and the vendor review, defending your posture to auditors and buyers." },
];

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
            {/* Left: 4-step plan diagram */}
            <div className="lg:col-span-4 relative">
              <div className="relative">
                {/* Vertical connecting line */}
                <div className="absolute left-5 top-5 bottom-5 w-px" style={{ backgroundColor: "rgba(59,59,57,0.2)" }} />
                <div className="space-y-0">
                  {steps.map((step) => (
                    <div key={step.number} className="relative flex items-start gap-4 p-4">
                      <div
                        className="w-10 h-10 flex-shrink-0 flex items-center justify-center relative z-10"
                        style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }}
                      >
                        <span className="text-sm font-semibold font-mono" style={{ color: "#3B3B39" }}>{step.number}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold uppercase tracking-tight" style={{ color: "#3B3B39" }}>
                            {step.title}
                          </h4>
                          {step.showLiveBadge && (
                            <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 uppercase tracking-wider" style={{ backgroundColor: "#F36F21", color: "#FFFFFF" }}>
                              LIVE
                            </span>
                          )}
                        </div>
                        <p className="text-xs leading-relaxed mt-1" style={{ color: "#646464" }}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Authority boxes */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
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
