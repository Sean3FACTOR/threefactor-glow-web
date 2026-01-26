import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cyber-real.jpg";
import cloudSecurity from "@/assets/cloud-security-real.jpg";
import securityAnalyst from "@/assets/security-analyst-real.jpg";

const services = [
  {
    title: "Cyber Risk & Strategy",
    description: "We help executives understand and manage cyber risk with pragmatic strategies. Build a believable security culture that drives business value and positions security as a competitive differentiator.",
    tagline: "STRATEGIC LEADERSHIP",
    image: heroImage,
    link: "/services/strategy-risk",
  },
  {
    title: "Compliance",
    description: "Navigate complex regulatory requirements without the tick-box approach. We focus on building sustainable compliance programs that minimize business disruption while meeting your obligations.",
    tagline: "REGULATORY EXCELLENCE",
    image: cloudSecurity,
    link: "/services/compliance",
  },
  {
    title: "Cyber Defense",
    description: "Protect your organization with hands-on technical expertise. From secure cloud transformation to penetration testing and incident response, we've got you covered.",
    tagline: "TECHNICAL PROTECTION",
    image: securityAnalyst,
    link: "/services/cyber-defense",
  },
];

const ServicesBento = () => {
  return (
    <section id="services" className="py-24 relative bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 max-w-2xl">
            Comprehensive Security Services
          </h2>
        </div>

        {/* Services Grid - Image Card Layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link 
              key={service.title}
              to={service.link} 
              className="block group"
            >
              <div className="h-full rounded-xl border border-border bg-card card-hover overflow-hidden">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-foreground/80 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    {service.description}
                  </p>

                  {/* Tagline */}
                  <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                    {service.tagline}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* AWS Link */}
        <div className="mt-8">
          <Link 
            to="/services/cyber-maturity-aws" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground font-medium gap-2 hover:gap-3 transition-all"
          >
            View AWS Cyber Maturity Assessment
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesBento;
