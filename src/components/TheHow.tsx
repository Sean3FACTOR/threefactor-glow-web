import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import glassGeometric from "@/assets/services/glass-geometric.jpg";
import skyscraperVision from "@/assets/services/skyscraper-vision.jpg";
import whiteServer from "@/assets/services/white-server.jpg";
import bridgeSupport from "@/assets/services/bridge-support.jpg";

const services = [
  {
    headline: "Turn Compliance into Revenue.",
    bullets: [
      "Don't just tick boxes; unlock new markets.",
      "Navigate complex regulatory mazes with ease.",
      "Turn security posture into a competitive sales advantage.",
    ],
    linkText: "Explore Compliance",
    href: "/services/compliance",
    image: glassGeometric,
    imageAlt: "Abstract geometric glass facade representing transparency and structure",
  },
  {
    headline: "Protect Enterprise Value.",
    bullets: [
      "Translate technical threats into Board-level strategy.",
      "Get customized leadership and staffing.",
      "Secure executive confidence with clear metrics.",
    ],
    linkText: "View Advisory Services",
    href: "/services/cyber-defense",
    image: skyscraperVision,
    imageAlt: "Skyscraper view representing vision and strategy",
  },
  {
    headline: "Proven Cloud Security.",
    bullets: [
      "Secure the providers who build the cloud.",
      "Achieve FedRAMP authorization with proven architects.",
      "Embed security from initial strategy to final code.",
    ],
    linkText: "See Cloud Solutions",
    href: "/services/strategy-risk",
    image: whiteServer,
    imageAlt: "White server room representing precision infrastructure",
  },
  {
    headline: "Executive Leadership on Demand.",
    bullets: [
      "Executive leadership without the full-time cost.",
      "An immediate extension of your internal team.",
      "Fixed monthly costs. No surprises.",
    ],
    linkText: "Explore vCISO Plans",
    href: "/services/vciso",
    image: bridgeSupport,
    imageAlt: "Bridge support cables representing structural guidance",
  },
];

const TheHow = () => {
  return (
    <section className="py-24 relative bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Services.
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            We don't just fix the immediate problem; we remain as long-term partners to ensure your security posture stays resilient.
          </p>
        </div>

        {/* 2x2 Compact Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <Link
              key={service.headline}
              to={service.href}
              className="group block"
            >
              <div className="flex h-full bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-lg">
                {/* Image - Left Side (30%) */}
                <div className="w-[35%] shrink-0 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Orange accent line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content - Right Side (70%) */}
                <div className="flex-1 p-6 lg:p-8 flex flex-col">
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.headline}
                  </h3>

                  {/* Bullet Points */}
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.bullets.map((bullet, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Link */}
                  <span className="inline-flex items-center text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors mt-auto">
                    {service.linkText}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheHow;