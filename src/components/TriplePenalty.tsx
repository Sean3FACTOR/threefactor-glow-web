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
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight">
            The High Cost of "Paper-Thin" Compliance
          </h2>
          <p className="text-lg mb-4 leading-relaxed text-primary-foreground">
            A checklist won't stop a breach and it certainly won't satisfy a sophisticated enterprise auditor. Generic box-ticking creates an illusion of safety: compliance that looks fine on paper but collapses under scrutiny.
          </p>
          <p className="text-lg font-medium text-white">
            If your compliance only exists in documentation, you're one audit away from losing momentum, or worse.
          </p>
        </div>

        {/* Sub-header */}
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-10 uppercase tracking-tight">
          The Triple Penalty of Weak Compliance
        </h3>

        {/* Penalty cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {penalties.map(penalty => <div key={penalty.title} className="p-8 relative" style={{
          backgroundColor: "#646464",
          borderTop: "2px solid #F36F21"
        }}>
              <div className="w-10 h-10 flex items-center justify-center mb-6">
                <penalty.icon className="w-5 h-5 text-white/80" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">
                {penalty.title}
              </h4>
              <p className="leading-relaxed text-primary-foreground">
                {penalty.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default TriplePenalty;