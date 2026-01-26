import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import vaultCompliance from "@/assets/services/vault-compliance.jpg";
import boardroomStrategy from "@/assets/services/boardroom-strategy.jpg";
import cloudInfrastructure from "@/assets/services/cloud-infrastructure.jpg";
import compassLeadership from "@/assets/services/compass-leadership.jpg";

const serviceRows = [
  {
    headline: "Turn Compliance into Revenue.",
    copy: [
      "Don't just tick boxes. Achieve the certifications that unlock new markets and close bigger deals.",
      "We navigate the maze of regulated data for you.",
      "Our risk-based programs satisfy strict requirements while positioning your security posture as a competitive advantage.",
    ],
    linkText: "Explore Compliance",
    href: "/services/compliance",
    image: vaultCompliance,
    imageAlt: "Vault door representing structure and access",
    imageFirst: false,
  },
  {
    headline: "Protect Enterprise Value.",
    copy: [
      "Cyber risk is business risk.",
      "We provide the leadership needed to translate technical threats into board-level strategy.",
      "Get customized leadership, staffing, and technical skills required to build resilience and secure executive confidence.",
    ],
    linkText: "View Advisory Services",
    href: "/services/cyber-defense",
    image: boardroomStrategy,
    imageAlt: "Modern boardroom representing strategy and foresight",
    imageFirst: true,
  },
  {
    headline: "Proven Cloud Security.",
    copy: [
      "We don't just secure the cloud; we secure the providers who build it.",
      "From strategy to FedRAMP authorization, we provide the architecture you need.",
      "We help you build security into every layer of your environment—from initial strategy to final implementation.",
    ],
    linkText: "See Cloud Solutions",
    href: "/services/strategy-risk",
    image: cloudInfrastructure,
    imageAlt: "Server infrastructure representing cloud connection",
    imageFirst: false,
  },
  {
    headline: "Executive Leadership on Demand.",
    copy: [
      "Get executive-level security leadership without the executive-level price tag.",
      "We act as an extension of your leadership team.",
      "Deliver sustainable security programs based on your needs, not sales quotas. Fixed monthly cost, no surprises.",
    ],
    linkText: "Explore vCISO Plans",
    href: "/services/vciso",
    image: compassLeadership,
    imageAlt: "Compass representing guidance and direction",
    imageFirst: true,
  },
];

const TheHow = () => {
  return (
    <section className="py-32 relative bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Services.
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            We don't just fix the immediate problem; we remain as long-term partners to ensure your security posture stays resilient.
          </p>
        </div>

        {/* Zig-Zag Service Rows */}
        <div className="space-y-24 max-w-6xl mx-auto">
          {serviceRows.map((row, index) => (
            <div
              key={row.headline}
              className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${
                row.imageFirst ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              {/* Image */}
              <div className={`${row.imageFirst ? "" : "md:order-1"}`}>
                <div className="relative overflow-hidden rounded-lg group">
                  <img
                    src={row.image}
                    alt={row.imageAlt}
                    className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Orange accent line */}
                  <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-primary" />
                </div>
              </div>

              {/* Text Content */}
              <div className={`${row.imageFirst ? "" : "md:order-2"}`}>
                {/* Row number indicator */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl font-bold text-muted/20 leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-grow bg-border" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {row.headline}
                </h3>

                <div className="space-y-4 mb-8">
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

                {/* CTA Link */}
                <Link
                  to={row.href}
                  className="inline-flex items-center text-primary font-semibold group/link hover:underline"
                >
                  {row.linkText}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheHow;