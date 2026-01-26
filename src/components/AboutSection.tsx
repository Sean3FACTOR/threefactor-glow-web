import globeExperience from "@/assets/about/globe-experience.jpg";
import shieldProtection from "@/assets/about/shield-protection.jpg";
import lensClarity from "@/assets/about/lens-clarity.jpg";
import partnershipInterlock from "@/assets/about/partnership-interlock.jpg";

const aboutCards = [
  {
    headline: "Veteran Expertise. Global Experience.",
    bullets: [
      "Consultants with deep technical roots dating back to 2001.",
      "Lineage from the world's most respected global security firms.",
      "Decades of practical, hands-on leadership—not just theory.",
    ],
    image: globeExperience,
    imageAlt: "Professional hand spinning a silver globe representing global experience",
  },
  {
    headline: "Battle-Tested in the Biggest Breaches.",
    bullets: [
      "Principals who led recovery for 6 of the 10 largest N.A. breaches.",
      "Strategies based on frontline reality, not textbook theory.",
      "Proven crisis management for attorneys and public officials.",
    ],
    image: shieldProtection,
    imageAlt: "Hand with magnifying glass investigating documents representing battle-tested analysis",
  },
  {
    headline: "Security That Speaks Your Language.",
    bullets: [
      "Translate complex technical data into Board-ready metrics.",
      "Evolve your culture from 'security as a blocker' to 'security as an asset.'",
      "Transform your organization into a vertical leader.",
    ],
    image: lensClarity,
    imageAlt: "Hand drawing upward trend graph representing clarity and business metrics",
  },
  {
    headline: "A True Trusted Advisor.",
    bullets: [
      "An immediate extension of your internal leadership team.",
      "Long-term partnership beyond the immediate project scope.",
      "Vendor-agnostic advice with zero product sales agendas.",
    ],
    image: partnershipInterlock,
    imageAlt: "Professional handshake representing trusted partnership",
  },
];

const AboutSection = () => {
  return (
    <section id="company" className="py-24 relative bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            Why 3Factor?
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            True security requires objectivity. We act as an extension of your leadership team, delivering programs based on your needs, not sales quotas.
          </p>
        </div>

        {/* 2x2 Compact Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {aboutCards.map((card) => (
            <div
              key={card.headline}
              className="group flex h-full bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-lg"
            >
              {/* Image - Left Side (35%) */}
              <div className="w-[35%] shrink-0 relative overflow-hidden">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Orange accent line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content - Right Side (65%) */}
              <div className="flex-1 p-6 lg:p-8 flex flex-col">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {card.headline}
                </h3>

                {/* Bullet Points - Dark Charcoal #333333 */}
                <ul className="space-y-2 flex-grow">
                  {card.bullets.map((bullet, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#333333] mt-1.5 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
