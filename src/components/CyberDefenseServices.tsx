import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const cyberDefenseServices = [
  {
    title: "Secure Cloud Transformation",
    description: "Whether your are new to the cloud, migrating or developing a new architecture, our certified cloud security experts can help you to implement, maintain and optimize the security of your cloud environments.",
  },
  {
    title: "Secure Architecture Optimization",
    description: "Achieving security in the cloud requires a well-designed security architecture that understands and uses the shared responsibility model correctly. Our cloud-agnostic services can help you design and implement security architectures in any cloud.",
  },
  {
    title: "Application Security",
    description: "Applications have become the security Achilles heel in most organizations. Our Secure Software Development (SSDLC) experts will help you build and maintain secure applications by 'shifting security left'.",
  },
  {
    title: "Penetration Testing",
    description: "Security assurance requires looking at applications from an attackers perspective. Our experienced testers can help you identify critical security flaws across the entire technology stack.",
  },
  {
    title: "Cyber Incident Response",
    description: "Our consultants have helped managed some of the biggest breaches of the past decade. We leverage this unparalleled experience to help our clients to recover quickly and fully from incidents.",
  },
];

const CyberDefenseServices = () => {
  return (
    <section id="cyber-defense-services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Cyber Defense Services
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-semibold mb-6">
            Identify. Protect. Detect. Respond. Recover.
          </p>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
            To be effective, any strategy needs the right execution. It begins with a robust security architecture that includes strong technical controls and effective operational processes. Our experts can help you navigate through the many pitfalls when building and maintaining secure systems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cyberDefenseServices.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border card-hover"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-muted-foreground font-medium group-hover:text-foreground group-hover:gap-3 gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyberDefenseServices;
