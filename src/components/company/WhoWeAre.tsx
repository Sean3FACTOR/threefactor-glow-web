import { Heart, Zap, Users } from "lucide-react";

const glassCard =
  "bg-white/60 backdrop-blur-[20px] border border-[rgba(59,59,57,0.08)] rounded-none";

const pillars = [
  {
    id: "[CUL-01]",
    icon: Heart,
    label: "OUR CULTURE",
    subtitle: "Your Support System",
    body: "We maintain a "Work hard, play hard" energy to ensure our team is always sharp and energized for your mission. By encouraging family-first values and self-care, we provide you with a stable, long-term partnership built on flexibility and peak performance.",
  },
  {
    id: "[MTH-02]",
    icon: Zap,
    label: "OUR METHOD",
    subtitle: "Your Agile Roadmap",
    body: "Everything we do is bespoke and agile, because your path to growth is unique. We don't just consult from the outside; we embed ourselves into your team to evaluate and evolve your practices. This ensures you remain invaluable and secure within the ever-changing cyber landscape.",
  },
  {
    id: "[PRI-03]",
    icon: Users,
    label: "OUR PRIORITY",
    subtitle: "Your Success Standard",
    body: "We value relationships over invoices. Our goal is for our clients to become our friends, building trust through unique memories and a partnership that goes deeper than a standard audit. Your success is the only metric that matters to us.",
  },
];

const WhoWeAre = () => {
  return (
    <section
      className="py-16 md:py-24 px-4"
      style={{ backgroundColor: "#F9FAFB" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.2em] font-mono"
            style={{ color: "#F36F21" }}
          >
            [SEC-01] — Who We Are
          </span>
          <h2
            className="text-2xl md:text-4xl font-bold mt-4 uppercase"
            style={{ color: "#3B3B39" }}
          >
            Who We Are
          </h2>
        </div>

        {/* Three-column grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`${glassCard} p-8 flex flex-col group transition-all duration-200 hover:border-[#F36F21]`}
            >
              {/* Technical ID */}
              <span
                className="text-[10px] font-mono mb-6"
                style={{ color: "#9CA3AF" }}
              >
                {pillar.id}
              </span>

              {/* Icon */}
              <div className="mb-5">
                <pillar.icon size={24} style={{ color: "#F36F21" }} />
              </div>

              {/* Label */}
              <h3
                className="text-sm font-bold uppercase tracking-[0.15em] mb-1"
                style={{ color: "#3B3B39" }}
              >
                {pillar.label}
              </h3>
              <span
                className="text-xs font-mono mb-6"
                style={{ color: "#F36F21" }}
              >
                {pillar.subtitle}
              </span>

              {/* Divider */}
              <div
                className="w-8 h-px mb-6"
                style={{ backgroundColor: "rgba(59,59,57,0.15)" }}
              />

              {/* Body */}
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "#5A5A58" }}
              >
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
