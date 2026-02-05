import { ArrowRight, Award, Shield, CreditCard, Users } from "lucide-react";
import { Link } from "react-router-dom";

const blueprints = [
  {
    icon: Award,
    title: "Enterprise Trust (ISO 27001 & SOC2)",
    description: "We turn these grueling audits into a streamlined process that proves your reliability to global partners.",
    href: "/services/compliance",
  },
  {
    icon: Shield,
    title: "Critical Resilience (NIS2 & DORA)",
    description: "We navigate the complex new requirements for infrastructure and finance, protecting you from aggressive EU-wide penalties.",
    href: "/services/compliance",
  },
  {
    icon: CreditCard,
    title: "Transactional Security (PCI DSS)",
    description: "We harden your payment environments to ensure your revenue stream is never interrupted by a compliance failure.",
    href: "/services/compliance",
  },
  {
    icon: Users,
    title: "vCISO Leadership",
    description: "For firms that need board-level strategy without the $300k/year headcount.",
    href: "/services/vciso",
  },
];

const ThePlan = () => {
  return (
    <section className="py-20 relative bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            The Plan: Your Path to Audit-Proof Growth
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Working with a security firm shouldn't be a second job. We've removed the complexity to give you a clear path out of the "Checkbox Trap" and into the market.
          </p>
        </div>

        {/* Deploy Your Security Shield */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Deploy Your Security Shield
            </span>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              You receive a customized roadmap to ensure your compliance is unshakeable. Whether you need to secure a specific market or provide ongoing leadership, we have the blueprint:
            </p>
          </div>

          {/* 2x2 Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {blueprints.map((blueprint) => (
              <Link
                key={blueprint.title}
                to={blueprint.href}
                className="group block"
              >
                <div className="flex h-full bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:border-primary hover:shadow-lg">
                  <div className="shrink-0 mr-5">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <blueprint.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {blueprint.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {blueprint.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThePlan;
