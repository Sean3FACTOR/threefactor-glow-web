import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import enterpriseTrust from "@/assets/plan/enterprise-trust.jpg";
import criticalResilience from "@/assets/plan/critical-resilience.jpg";
import transactionalSecurity from "@/assets/plan/transactional-security.jpg";
import vcisoLeadership from "@/assets/plan/vciso-leadership.jpg";

const blueprints = [
  {
    number: "1",
    title: "Enterprise Trust (ISO 27001 & SOC2)",
    description: "We turn these grueling audits into a streamlined process that proves your reliability to global partners.",
    image: enterpriseTrust,
    imageAlt: "Silver certification seal - enterprise trust",
    href: "/services/compliance",
  },
  {
    number: "2",
    title: "Transactional Security (PCI DSS)",
    description: "We harden your payment environments to ensure your revenue stream is never interrupted by a compliance failure.",
    image: transactionalSecurity,
    imageAlt: "Silver payment device - transactional security",
    href: "/services/compliance",
  },
  {
    number: "3",
    title: "Critical Resilience (NIS2 & DORA)",
    description: "We navigate the complex new requirements for infrastructure and finance, protecting you from aggressive EU-wide penalties.",
    image: criticalResilience,
    imageAlt: "Silver fortress model - critical resilience",
    href: "/services/compliance",
  },
  {
    number: "4",
    title: "vCISO Leadership",
    description: "For firms that need board-level strategy without the $300k/year headcount.",
    image: vcisoLeadership,
    imageAlt: "Silver compass - executive leadership direction",
    href: "/services/vciso",
  },
];

const ThePlan = () => {
  return (
    <section className="py-20 relative bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Section Header - Left Aligned */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Plan: Your Path to Audit-Proof Growth
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            Working with a security firm shouldn't be a second job. We've removed the complexity to give you a clear path out of the "Checkbox Trap" and into the market.
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground border-l-4 border-primary pl-6">
            Deploy Your Security Shield
          </h3>
          <p className="text-muted-foreground mt-4 pl-6 border-l-4 border-transparent">
            You receive a customized roadmap to ensure your compliance is unshakeable. Whether you need to secure a specific market or provide ongoing leadership, we have the blueprint:
          </p>
        </div>

        {/* Cascading Cards - Left Aligned */}
        <div className="max-w-5xl space-y-6">
          {blueprints.map((blueprint, index) => (
            <Link
              key={blueprint.title}
              to={blueprint.href}
              className="group block"
              style={{ marginLeft: `${index * 1.5}rem` }}
            >
              <div className="flex flex-col md:flex-row bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                {/* Content - Left Side */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-semibold text-sm shrink-0">
                      {blueprint.number}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {blueprint.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {blueprint.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>

                {/* Image - Right Side */}
                <div className="w-full md:w-[35%] shrink-0 relative overflow-hidden">
                  <img
                    src={blueprint.image}
                    alt={blueprint.imageAlt}
                    className="w-full h-48 md:h-full object-cover transition-all duration-500 group-hover:scale-105 img-grayscale-hover"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThePlan;
