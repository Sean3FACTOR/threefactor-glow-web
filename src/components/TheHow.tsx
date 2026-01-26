import { Search, Compass, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Search,
    title: "Assessment",
    description: "Get an unvarnished view of your current risk posture.",
    linkText: "Explore Assessments",
    href: "/services/strategy-risk",
  },
  {
    icon: Compass,
    title: "Advisory",
    description: "Implement the specific improvements needed to close gaps.",
    linkText: "View Advisory Services",
    href: "/services/cyber-defense",
  },
  {
    icon: ShieldCheck,
    title: "Assurance",
    description: "Provide the Board with definitive proof that risk is being managed according to policy.",
    linkText: "See Compliance Solutions",
    href: "/services/compliance",
  },
];

const TheHow = () => {
  return (
    <section className="py-32 relative bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            The Service Breakdown.
          </h2>
        </div>

        {/* Clickable Card Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="group block"
            >
              <div className="h-full p-8 bg-background border border-border rounded-lg transition-all duration-300 hover:border-primary hover:shadow-lg">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-muted border border-border flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/10 group-hover:border-primary">
                  <service.icon 
                    className="w-8 h-8 text-muted-foreground transition-colors duration-300 group-hover:text-primary" 
                    strokeWidth={1.5} 
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <span className="inline-flex items-center text-muted-foreground font-medium transition-all duration-300 group-hover:text-primary group-hover:underline">
                  {service.linkText}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheHow;
