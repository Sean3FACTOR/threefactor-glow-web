import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const complianceServices = [
  {
    title: "ISO 27001/2",
    description: "This internationally recognized security certification can help you gain customer trust worldwide. We are experts at designing and implementing tailored information security management systems (ISMS) that accelerate compliance efforts.",
  },
  {
    title: "Privacy",
    description: "No matter where you are, privacy regulations are constantly expanding worldwide. The right privacy management framework can help you achieve compliance with current and upcoming privacy regulations such as GDPR, CPRA and LGPD.",
  },
  {
    title: "Emerging Compliance",
    description: "New security and privacy regulations, frameworks and standards are being created all the time. We use our extensive experience of compliance standards to help our clients navigate the uncertainty of this ever changing landscape.",
  },
  {
    title: "PCI DSS",
    description: "Our Qualified Security Assessors (QSA) are some of the most experienced in the industry, having worked with this standard since its inception. Our unparalleled expertise can help you minimize PCI scope and achieve compliance the right way.",
  },
  {
    title: "SOC 2",
    description: "This widely recognized certification is a must-have for any service organization in North America. With the right expertise, achieving SOC 2 can be done with minimal operational impacts and be the launching pad for more complex certifications.",
  },
];

const ComplianceServices = () => {
  return (
    <section id="compliance-services" className="py-24 relative bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-widest">Compliance Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
            Achieve Certifications Quickly and Efficiently
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            Compliance builds trust. Having the right certifications can be a key business enabler. 
            We have a track record of helping our clients achieve lasting compliance programs that emerge 
            from a strong security posture. <span className="text-foreground font-medium">Ask us how.</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {complianceServices.map((service, index) => (
            <div
              key={service.title}
              className={`group relative p-8 rounded-2xl bg-card border border-border card-hover ${
                index === 4 ? "lg:col-start-2" : ""
              }`}
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Learn More Link */}
              <Link to="/contact" className="inline-flex items-center text-muted-foreground font-medium group-hover:text-foreground group-hover:gap-3 gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/contact">
            <Button className="glow-button bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg">
              Discuss Your Compliance Needs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComplianceServices;
