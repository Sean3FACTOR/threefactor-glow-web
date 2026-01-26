import { Shield, Target, Languages, Handshake } from "lucide-react";

const aboutPoints = [
  {
    icon: Shield,
    title: "Veteran Expertise. Global Experience.",
    description: "A consulting firm is only as strong as its people. 3Factor consultants possess deep technical and management experience dating back to 2001, hailing from the world's most respected global security firms. We don't just bring tools; we bring decades of practical, hands-on leadership to your organization.",
  },
  {
    icon: Target,
    title: "Battle-Tested in the Biggest Breaches.",
    description: "Theory is different from reality. Since 2008, our principals led the recovery on the frontlines of 6 of the 10 largest security breaches in North America. This frontline experience gives us a unique edge. We advise clients, attorneys, and public officials based on what actually works during a crisis, not what theory says should work.",
  },
  {
    icon: Languages,
    title: "Security That Speaks Your Language.",
    description: "We believe security must be understood to be effective. We translate complex technical data into clear, meaningful metrics that business leaders can act on. We educate your team and evolve your security culture, transforming your organization from a target into a vertical leader.",
  },
  {
    icon: Handshake,
    title: "A True Trusted Advisor.",
    description: "Our impact goes beyond the project scope. The transformation we deliver is often so significant that we become an extension of your internal team. We don't just fix the immediate problem; we remain as long-term partners to ensure your security posture stays resilient.",
  },
];

const AboutSection = () => {
  return (
    <section id="company" className="py-32 relative bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            Why 3Factor?
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            True security requires objectivity. Since 2008, 3Factor has operated as a strictly vendor-agnostic firm. We act as an extension of your leadership team, delivering sustainable security programs based on your needs, not sales quotas.
          </p>
        </div>

        {/* About Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {aboutPoints.map((point) => (
            <div 
              key={point.title}
              className="p-8 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <point.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
