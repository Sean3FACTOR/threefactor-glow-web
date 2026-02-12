import spyroWorking from "@/assets/homepage/spyro-working.jpg";

const outcomes = [{
  title: "CLOSE DEALS FASTER",
  description: "Security questionnaires completed in days, not quarters. Auditors nod instead of probing."
}, {
  title: "UNRESTRICTED EXPANSION",
  description: "No geography, tender, or enterprise buyer is off-limits when compliance is built right."
}, {
  title: "TOTAL OPERATIONAL VELOCITY",
  description: "Scale confidently knowing your security posture supports growth instead of dragging it down."
}];

const SuccessOutcomes = () => {
  return <section className="py-20" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="container mx-auto px-4">
        <div className="h-px w-full mb-12" style={{ backgroundColor: "rgba(59,59,57,0.12)" }} />
        <div className="max-w-5xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-tight" style={{ color: "#3B3B39" }}>
            From Vendor to Trusted Market Authority
          </h2>
          <p className="text-lg mb-4 leading-relaxed" style={{ color: "#3B3B39" }}>
            Compliance isn't overhead, it's leverage.
          </p>
          <p className="text-lg" style={{ color: "#3B3B39" }}>
            Walk into your next board meeting with proof, not promises.
          </p>
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold mb-10 uppercase tracking-tight" style={{ color: "#3B3B39" }}>
          What Success Looks Like
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left – Vertical outcome cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {outcomes.map(outcome => (
              <div
                key={outcome.title}
                className="p-8 transition-all"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E5E7EB"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#F36F21")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}
              >
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight" style={{ color: "#646464" }}>
                  {outcome.title}
                </h4>
                <p className="leading-relaxed" style={{ color: "#3B3B39" }}>
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right – Spyro image box */}
          <div className="lg:col-span-5 flex">
            <div
              className="w-full overflow-hidden"
              style={{ border: "1px solid #E5E7EB" }}
            >
              <img
                src={spyroWorking}
                alt="3FACTOR team member at work"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SuccessOutcomes;
