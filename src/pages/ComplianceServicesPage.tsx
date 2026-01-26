import { Link } from "react-router-dom";
import { ArrowRight, Grid3X3, TrendingUp, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlueprintHero from "@/components/BlueprintHero";

const mazePoints = [
  "Endless checkbox exercises",
  "Compliance as a cost center",
  "Security theater, not substance",
  "Deals stalled by due diligence",
];

const pathPoints = [
  "Certifications that unlock markets",
  "Security as competitive advantage",
  "Programs that withstand scrutiny",
  "Faster sales cycles, bigger deals",
];

const certifications = [
  {
    title: "ISO 27001",
    description: "This internationally recognized security certification helps you gain customer trust worldwide. We guide you through implementation and certification.",
  },
  {
    title: "SOC 2",
    description: "This widely recognized certification is a must-have for any service organization in North America. We get you audit-ready faster than you thought possible.",
  },
  {
    title: "PCI DSS",
    description: "Our Qualified Security Assessors (QSA) are some of the most experienced in the industry. From payment card compliance to complex merchant environments, we've done it all.",
  },
  {
    title: "NIS 2",
    description: "The EU's updated Network and Information Security Directive requires critical infrastructure operators to meet stringent security standards. We help you achieve compliance.",
  },
  {
    title: "DORA",
    description: "The Digital Operational Resilience Act demands financial entities demonstrate robust ICT risk management. Our experts guide you through every requirement.",
  },
];

const ComplianceServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Blueprint Hero Section */}
      <BlueprintHero
        breadcrumb="Compliance"
        headline="Turn Compliance Into Revenue."
        subhead="Don't just tick boxes. We navigate the maze of regulated data to help you achieve the certifications that unlock new markets and close bigger deals."
        ctaText="Explore Compliance"
        ctaLink="/contact"
      />

      {/* Value Proposition Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              The Value Proposition.
            </h2>
          </div>

          {/* Split Layout - The Maze vs The Path */}
          <div className="grid md:grid-cols-2 gap-0 max-w-5xl mx-auto border border-border rounded-lg overflow-hidden">
            {/* Left Side - The Maze */}
            <div className="p-10 md:p-12 bg-muted/30">
              <div className="mb-6">
                <Grid3X3 className="w-10 h-10 text-muted-foreground/50" strokeWidth={1} />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Without Strategy
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mt-3 mb-8">
                The Maze
              </h2>
              <ul className="space-y-4">
                {mazePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/40 mt-2 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side - The Path */}
            <div className="p-10 md:p-12 bg-primary/5 border-l border-primary/20">
              <div className="mb-6">
                <TrendingUp className="w-10 h-10 text-primary" strokeWidth={1} />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
                With 3FACTOR
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-8">
                The Path
              </h2>
              <ul className="space-y-4">
                {pathPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-foreground">
                    <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto text-lg">
            Don't just tick boxes. Get certifications that open doors to new markets and accelerate your revenue.
          </p>
        </div>
      </section>

      {/* Certifications List */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certification Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Frameworks we specialize in to unlock your next level of growth.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {certifications.map((cert) => (
              <div 
                key={cert.title}
                className="border-b border-border last:border-b-0 py-8 first:pt-0 last:pb-0"
              >
                <div className="flex items-start gap-4">
                  <CheckSquare className="w-6 h-6 text-muted-foreground/50 mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Compliance Strategy?
            </h3>
            <p className="text-muted-foreground mb-8">
              Start with a free discovery call to map out your compliance roadmap.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-[#646464] hover:bg-[#f36f21] text-white font-semibold transition-colors"
            >
              <Link to="/contact">
                Schedule a Discovery Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComplianceServicesPage;
