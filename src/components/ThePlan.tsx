import { ArrowRight, Search, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

import enterpriseTrust from "@/assets/plan/enterprise-trust.jpg";
import transactionalSecurity from "@/assets/plan/transactional-security.jpg";
import criticalResilience from "@/assets/plan/critical-resilience.jpg";

const steps = [
  {
    number: "1",
    title: "Gap Discovery",
    description: "We identify the exact compliance gaps blocking RFPs, slowing deals, or triggering auditor escalation.",
    image: enterpriseTrust,
    imageAlt: "Discovery and analysis",
    icon: Search,
    href: "/services/compliance",
  },
  {
    number: "2",
    title: "The Compliance Shield",
    description: "We design and deploy a tailored roadmap aligned to your market goals: ISO 27001 · SOC 2 · PCI DSS · NIS2 · DORA",
    image: transactionalSecurity,
    imageAlt: "Compliance framework implementation",
    icon: Shield,
    href: "/services/compliance",
  },
  {
    number: "3",
    title: "Market Defense & Scale",
    description: "We defend your posture during audits, vendor reviews, and due diligence—so security becomes a competitive advantage, not a recurring fire drill.",
    image: criticalResilience,
    imageAlt: "Market expansion and growth",
    icon: TrendingUp,
    href: "/services/compliance",
  },
];

const ThePlan = () => {
  return (
    <section className="py-20 relative bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Section Header - Left Aligned */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Blueprint for Audit-Proof Growth
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            Navigating global mandates shouldn't be your second job. We simplify compliance into a clear, defensible path to revenue.
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground border-l-4 border-primary pl-6">
            Our 3-Step Compliance Plan
          </h3>
        </div>

        {/* Cascading Cards - Left Aligned */}
        <div className="max-w-5xl space-y-6">
          {steps.map((step, index) => (
            <Link
              key={step.title}
              to={step.href}
              className="group block"
              style={{ marginLeft: `${index * 1.5}rem` }}
            >
              <div className="flex flex-col md:flex-row bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                {/* Content - Left Side */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-semibold text-sm shrink-0">
                      {step.number}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                    {step.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>

                {/* Image - Right Side */}
                <div className="w-full md:w-[35%] shrink-0 relative overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.imageAlt}
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
