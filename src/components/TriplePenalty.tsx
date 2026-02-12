import enterpriseSkyline from "@/assets/homepage/enterprise-skyline.jpg";

const penalties = [
  {
    title: "CRITICAL FINANCIAL LIABILITY",
    description:
      "Between €10M regulatory fines, frozen payment rails, and contract clawbacks, weak compliance turns a single incident into a catastrophe.",
  },
  {
    title: "TOTAL OPERATIONAL STOPPAGE",
    description:
      "Under mandates like NIS2 and DORA, regulators can revoke your license to operate. Without proven resilience, you have a liability.",
  },
  {
    title: "IRREVERSIBLE REPUTATION LOSS",
    description:
      "In enterprise sales, you don't get a second chance. Once your security posture is flagged as 'high risk,' future deals quietly disappear.",
  },
];

const TriplePenalty = () => {
  return (
    <section className="py-20" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="container mx-auto px-4">
        {/* Skyline image banner */}
        <div className="w-full h-48 md:h-64 mb-12 overflow-hidden" style={{ border: "1px solid #E5E7EB" }}>
          <img
            src={enterpriseSkyline}
            alt="Enterprise skyline"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="max-w-5xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-tight" style={{ color: "#3B3B39" }}>
            The High Cost of "Paper-Thin" Compliance
          </h2>
          <p className="text-lg mb-4 leading-relaxed" style={{ color: "#3B3B39" }}>
            A checklist won't stop a breach and it certainly won't satisfy a
            sophisticated enterprise auditor. Generic box-ticking creates an
            illusion of safety: compliance that looks fine on paper but collapses
            under scrutiny.
          </p>
          <p className="text-lg font-medium" style={{ color: "#3B3B39" }}>
            If your compliance only exists in documentation, you're one audit
            away from losing momentum, or worse.
          </p>
        </div>

        <div
          className="h-px w-full my-12"
          style={{ backgroundColor: "rgba(59,59,57,0.12)" }}
        />

        <h3 className="text-2xl md:text-3xl font-semibold mb-10 uppercase tracking-tight" style={{ color: "#3B3B39" }}>
          The Triple Penalty of Weak Compliance
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {penalties.map((penalty, index) => (
            <div
              key={index}
              className="p-8 transition-all"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E7EB",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "#F36F21")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#E5E7EB")
              }
            >
              <h4 className="text-lg font-bold uppercase tracking-tight mb-4" style={{ color: "#646464" }}>
                {penalty.title}
              </h4>
              <p className="text-base leading-relaxed" style={{ color: "#3B3B39" }}>
                {penalty.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TriplePenalty;
