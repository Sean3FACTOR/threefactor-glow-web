import { DollarSign, Pause, AlertTriangle } from "lucide-react";
const penalties = [{
  icon: DollarSign,
  title: "FINANCIAL LIABILITY",
  description: "Between €10M regulatory fines, frozen payment rails, and contract clawbacks, weak compliance turns a single incident into a catastrophe."
}, {
  icon: Pause,
  title: "OPERATIONAL STOPPAGE",
  description: "Under mandates like NIS2 and DORA, regulators can revoke your license to operate. Without proven resilience, you don't have a growth strategy, you have a liability."
}, {
  icon: AlertTriangle,
  title: "THE REPUTATION DEAD-END",
  description: "In enterprise sales, you don't get a second chance. Once your security posture is flagged as \"high risk,\" future deals quietly disappear."
}];
const TriplePenalty = () => {
  return <section className="py-20" style={{
    backgroundColor: "#3B3B39"
  }}>
      <div className="container mx-auto px-4">
        <div className="h-px w-full mb-12" style={{ backgroundColor: "rgba(255,255,255,0.12)" }} />

        {/* Section Header */}
        <div className="max-w-5xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight">
            The High Cost of "Paper-Thin" Compliance
          </h2>
          <p className="text-lg text-white mb-4 leading-relaxed">
            A checklist won't stop a breach and it certainly won't satisfy a sophisticated enterprise auditor. Generic box-ticking creates an illusion of safety: compliance that looks fine on paper but collapses under scrutiny.
          </p>
          <p className="text-lg font-medium text-white">
            If your compliance only exists in documentation, you're one audit away from losing momentum, or worse.
          </p>
        </div>

        <div className="h-px w-full my-12" style={{ backgroundColor: "rgba(255,255,255,0.12)" }} />

        {/* Sub-header */}
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-10 uppercase tracking-tight">
          The Triple Penalty of Weak Compliance
        </h3>

        {/* Penalty cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {penalties.map((penalty, index) => (
            <div
              key={index}
              className="p-8 transition-all group"
              style={{
                backgroundColor: "#646464",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#F36F21")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
            >
              <h4 className="text-lg font-bold text-white uppercase tracking-tight mb-4">{penalty.title}</h4>
              <p className="text-base text-white leading-relaxed">{penalty.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>;
};
export default TriplePenalty;