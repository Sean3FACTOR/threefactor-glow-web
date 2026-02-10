const blockers = [{
  title: "THE RFP BLOCKADE",
  description: "Stop watching seven-figure contracts stall because security reviews drag on for months."
}, {
  title: "THE DORA DEADLINE",
  description: "Don't let EU regulatory deadlines freeze your ability to transact."
}, {
  title: "THE UNINSURABLE GAP",
  description: "If you can't prove proactive defense, cyber insurers may walk away right when you need coverage most."
}];
const DealBlockers = () => {
  return <section className="py-20" style={{
    backgroundColor: "#3B3B39",
    borderTop: "1px solid rgba(255,255,255,0.08)"
  }}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight">
            Don't Let a "Checkbox" Kill Your Biggest Deal
          </h2>
          <p className="font-medium text-white text-xl md:text-2xl">
            In enterprise sales, compliance isn't optional, it's the gatekeeper.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blockers.map(blocker => <div key={blocker.title} className="p-8 transition-all hover:shadow-lg" style={{
          backgroundColor: "#F8F9FA",
          border: "1px solid #E5E7EB"
        }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#F36F21")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}
        >
              <h4 className="text-xl font-bold mb-3 uppercase tracking-tight" style={{ color: "#646464" }}>
                {blocker.title}
              </h4>
              <p className="leading-relaxed" style={{ color: "#1a1a1a" }}>
                {blocker.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default DealBlockers;