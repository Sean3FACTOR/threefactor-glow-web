import globalSkyline from "@/assets/about/global-skyline.jpg";
import steelResilience from "@/assets/about/steel-resilience.jpg";
import blueprintClarity from "@/assets/about/blueprint-clarity.jpg";
import trustedPartnership from "@/assets/about/trusted-partnership.jpg";

const aboutRows = [
  {
    headline: "Veteran Expertise. Global Experience.",
    copy: [
      "A consulting firm is only as strong as its people.",
      "Our consultants possess deep technical and management experience dating back to 2001.",
      "Hailing from the world's most respected global security firms, we bring decades of practical, hands-on leadership to your organization.",
    ],
    image: globalSkyline,
    imageAlt: "Global city skyline representing worldwide reach",
    imageFirst: false,
  },
  {
    headline: "Battle-Tested in the Biggest Breaches.",
    copy: [
      "Theory is different from reality.",
      "Since 2008, our principals led the recovery on the frontlines of 6 of the 10 largest security breaches in North America.",
      "We advise clients based on what actually works during a crisis, not what theory says should work.",
    ],
    image: steelResilience,
    imageAlt: "Steel beam connection representing unshakeable resilience",
    imageFirst: true,
  },
  {
    headline: "Security That Speaks Your Language.",
    copy: [
      "We believe security must be understood to be effective.",
      "We translate complex technical data into clear, meaningful metrics that business leaders can act on.",
      "Transform your organization from a target into a vertical leader.",
    ],
    image: blueprintClarity,
    imageAlt: "Blueprint schematic representing clarity and planning",
    imageFirst: false,
  },
  {
    headline: "A True Trusted Advisor.",
    copy: [
      "Our impact goes beyond the project scope.",
      "The transformation we deliver is often so significant that we become an extension of your internal team.",
      "We don't just fix the immediate problem; we remain as long-term partners to ensure your security posture stays resilient.",
    ],
    image: trustedPartnership,
    imageAlt: "Two professionals in strategic conversation",
    imageFirst: true,
  },
];

const AboutSection = () => {
  return (
    <section id="company" className="py-32 relative bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-24">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            Why 3Factor?
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            True security requires objectivity. Since 2008, we have operated as a strictly vendor-agnostic firm, delivering programs based on your needs, not sales quotas.
          </p>
        </div>

        {/* Zig-Zag Feature Rows */}
        <div className="space-y-24 max-w-6xl mx-auto">
          {aboutRows.map((row, index) => (
            <div
              key={row.headline}
              className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${
                row.imageFirst ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              {/* Image */}
              <div className={`${row.imageFirst ? "" : "md:order-1"}`}>
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={row.image}
                    alt={row.imageAlt}
                    className="w-full h-auto object-cover aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Orange accent line */}
                  <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-primary" />
                </div>
              </div>

              {/* Text Content */}
              <div className={`${row.imageFirst ? "" : "md:order-2"}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {row.headline}
                </h3>
                <div className="space-y-4">
                  {row.copy.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className={`text-lg leading-relaxed ${
                        pIndex === 0
                          ? "text-foreground font-medium"
                          : "text-muted-foreground"
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {/* Subtle row number indicator */}
                <div className="mt-8 flex items-center gap-3">
                  <span className="text-5xl font-bold text-muted/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-grow bg-border" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;