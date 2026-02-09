const LiveBadge = () => <span className="inline-flex items-center ml-2 px-2 py-0.5 text-xs font-medium" style={{
  backgroundColor: "rgba(243,111,33,0.15)",
  color: "#F36F21"
}}>
    LIVE
  </span>;
const steps = [{
  number: "01",
  title: "GAP DISCOVERY",
  description: "We identify the exact compliance gaps blocking RFPs, slowing deals, or triggering auditor escalation.",
  showLiveBadge: false
}, {
  number: "02",
  title: "FRAMEWORK ALIGNMENT",
  description: "We identify the exact certifications (ISO, PCI, SOC 2, FedRAMP) needed to clear your current RFI and future-proof your growth.",
  showLiveBadge: false
}, {
  number: "03",
  title: "THE PROGRAM WRAPPER",
  description: "We build the underlying Maturity Mapping and Risk Architecture. This isn't a one-time fix; it's a flexible system designed to handle the ever-changing regulatory landscape.",
  showLiveBadge: true
}, {
  number: "04",
  title: "CERTIFIED CONFIDENCE",
  description: "We guide you through the audit and the vendor review, defending your posture so you present a calm, expert front to auditors and buyers.",
  showLiveBadge: false
}];
const CompliancePlan = () => {
  return <section className="py-20" style={{
    backgroundColor: "#3B3B39"
  }}>
      <div className="container mx-auto px-4">
        <div className="h-px w-full mb-12" style={{ backgroundColor: "rgba(255,255,255,0.12)" }} />
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight">
            Your Blueprint for Audit-Proof Growth
          </h2>
          <p className="text-lg text-white mb-8 leading-relaxed">
            Navigating global mandates shouldn't be your second job. We simplify compliance into a clear, defensible path to revenue.
          </p>
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-10 uppercase tracking-tight">
          4 Steps to Audit Dominance
        </h3>
        <p className="text-lg text-white mb-10 max-w-2xl leading-relaxed">
          Working with a certification firm shouldn't be a second job. We've simplified the path to turning your RFI into a revenue engine:
        </p>

        {/* Horizontal 4-step workflow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-white/30" />
          
          {steps.map((step, index) => <div key={step.title} className="relative px-4 pb-8 md:pb-0">
              {/* Step number */}
              <div className="w-10 h-10 flex items-center justify-center mb-6 relative z-10" style={{
            backgroundColor: "#646464"
          }}>
                <span className="text-sm font-semibold text-white">{step.number}</span>
              </div>

              <h4 className="text-lg font-bold text-white mb-3 uppercase tracking-tight flex items-center">
                {step.title}
                {step.showLiveBadge && <LiveBadge />}
              </h4>
              <p className="text-white leading-relaxed text-sm">
                {step.description}
              </p>

              {/* Mobile connector */}
              {index < steps.length - 1 && <div className="md:hidden w-px h-8 bg-white/20 ml-5 mt-4" />}
            </div>)}
        </div>
      </div>
    </section>;
};
export default CompliancePlan;