import { FileX, Clock, Umbrella } from "lucide-react";

const blockers = [
  {
    icon: FileX,
    title: "THE RFP BLOCKADE",
    description: "Stop watching seven-figure contracts stall because security reviews drag on for months.",
  },
  {
    icon: Clock,
    title: "THE DORA DEADLINE",
    description: "Don't let EU regulatory deadlines freeze your ability to transact.",
  },
  {
    icon: Umbrella,
    title: "THE UNINSURABLE GAP",
    description: "If you can't prove proactive defense, cyber insurers may walk away right when you need coverage most.",
  },
];

const DealBlockers = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-tight" style={{ color: "#3B3B39" }}>
            Don't Let a "Checkbox" Kill Your Biggest Deal
          </h2>
          <p className="text-lg font-medium" style={{ color: "#3B3B39" }}>
            In enterprise sales, compliance isn't optional, it's the gatekeeper.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blockers.map((blocker) => (
            <div
              key={blocker.title}
              className="bg-white p-8 transition-all hover:shadow-lg"
              style={{ border: "1px solid #646464" }}
            >
              <div className="w-10 h-10 flex items-center justify-center mb-6" style={{ backgroundColor: "#F8F9FA" }}>
                <blocker.icon className="w-5 h-5" style={{ color: "#646464" }} />
              </div>
              <h4 className="text-xl font-bold mb-3 uppercase tracking-tight" style={{ color: "#3B3B39" }}>
                {blocker.title}
              </h4>
              <p className="leading-relaxed" style={{ color: "#646464" }}>
                {blocker.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealBlockers;
