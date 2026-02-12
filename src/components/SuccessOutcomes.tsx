import { Zap, Globe, Rocket } from "lucide-react";
import spyroWorking from "@/assets/homepage/spyro-working.jpg";

const outcomes = [
  {
    title: "CLOSE DEALS FASTER",
    description: "Security questionnaires completed in days, not quarters. Auditors nod instead of probing.",
    icon: Zap,
  },
  {
    title: "UNRESTRICTED EXPANSION",
    description: "No geography, tender, or enterprise buyer is off-limits when compliance is built right.",
    icon: Globe,
  },
  {
    title: "TOTAL OPERATIONAL VELOCITY",
    description: "Scale confidently knowing your security posture supports growth instead of dragging it down.",
    icon: Rocket,
  },
];

const SuccessOutcomes = () => {
  return (
    <section className="py-20" style={{ backgroundColor: "#F8F9FA" }}>
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

        <h3 className="text-3xl md:text-4xl font-extrabold mb-10 uppercase tracking-tight" style={{ color: "#3B3B39" }}>
          What Success Looks Like
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left – Feature cards */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {outcomes.map((outcome) => {
              const Icon = outcome.icon;
              return (
                <div
                  key={outcome.title}
                  className="p-8 transition-all duration-300 cursor-default group hover:scale-[1.02] hover:shadow-lg"
                  style={{
                    backgroundColor: "#F1F2F4",
                    border: "1px solid #E5E7EB",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#F36F21";
                    e.currentTarget.style.backgroundColor = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#E5E7EB";
                    e.currentTarget.style.backgroundColor = "#F1F2F4";
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="shrink-0 w-10 h-10 flex items-center justify-center mt-1"
                      style={{ backgroundColor: "rgba(243,111,33,0.1)" }}
                    >
                      <Icon size={20} style={{ color: "#F36F21" }} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-3 uppercase tracking-tight" style={{ color: "#3B3B39" }}>
                        {outcome.title}
                      </h4>
                      <p className="leading-relaxed" style={{ color: "#646464" }}>
                        {outcome.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right – Stylish image */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            {/* Decorative background element */}
            <div
              className="absolute -top-6 -right-6 w-48 h-48 rounded-full opacity-20"
              style={{ backgroundColor: "#F36F21" }}
            />
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-10"
              style={{ backgroundColor: "#F36F21" }}
            />
            <div className="relative w-4/5 overflow-hidden rounded-2xl shadow-xl">
              <img
                src={spyroWorking}
                alt="3FACTOR team member at work"
                className="w-full h-full object-cover object-center aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessOutcomes;
