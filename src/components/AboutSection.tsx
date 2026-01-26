const pillars = [
  {
    title: "Our Culture",
    description: "Family first and self-care. We believe in flexibility and a 'work hard, play hard' mentality that keeps our team energized and passionate.",
  },
  {
    title: "Our Method",
    description: "Bespoke and agile. We embed directly into your team, adapting to your needs and remaining invaluable in an ever-changing landscape.",
  },
  {
    title: "Our Priority",
    description: "Relationships over invoices. Our clients become our friends — we build unique memories and genuine partnerships that last.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-24 relative bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-widest">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
            Our Biggest Strength Is Our Team
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We're more than consultants — we're partners who genuinely care about your success and become an extension of your team.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-card border border-border card-hover p-8 rounded-xl text-center"
            >
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
