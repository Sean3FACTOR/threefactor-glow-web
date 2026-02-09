import { Zap, Globe, Rocket } from "lucide-react";

const outcomes = [
  {
    icon: Zap,
    title: "CLOSE DEALS FASTER",
    description: "Security questionnaires completed in days, not quarters. Auditors nod instead of probing.",
  },
  {
    icon: Globe,
    title: "UNRESTRICTED EXPANSION",
    description: "No geography, tender, or enterprise buyer is off-limits when compliance is built right.",
  },
  {
    icon: Rocket,
    title: "TOTAL OPERATIONAL VELOCITY",
    description: "Scale confidently knowing your security posture supports growth instead of dragging it down.",
  },
];

const SuccessOutcomes = () => {
  return (
    <section className="py-20" style={{ backgroundColor: "#3B3B39" }}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight">
            From Vendor to Trusted Market Authority
          </h2>
          <p className="text-lg text-white/70 mb-4 leading-relaxed">
            Compliance isn't overhead, it's leverage.
          </p>
          <p className="text-lg text-white">
            Walk into your next board meeting with proof, not promises, that risk is controlled and growth is protected.
          </p>
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-10 uppercase tracking-tight">
          What Success Looks Like
        </h3>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outcomes.map((outcome) => (
            <div
              key={outcome.title}
              className="p-8"
              style={{ backgroundColor: "#646464" }}
            >
              <div className="w-10 h-10 flex items-center justify-center mb-6">
                <outcome.icon className="w-5 h-5 text-white/80" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">
                {outcome.title}
              </h4>
              <p className="text-white/70 leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessOutcomes;
