import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, FileCheck, Globe, CreditCard, Grid3X3, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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

const pillars = [
  {
    icon: FileCheck,
    title: "SOC 2",
    description: "This widely recognized certification is a must-have for any service organization in North America. We get you audit-ready faster than you thought possible.",
  },
  {
    icon: Globe,
    title: "ISO 27001",
    description: "This internationally recognized security certification helps you gain customer trust worldwide. We guide you through implementation and certification.",
  },
  {
    icon: CreditCard,
    title: "PCI DSS & FedRAMP",
    description: "Our Qualified Security Assessors (QSA) are some of the most experienced in the industry. From payment card compliance to federal authorization, we've done it all.",
  },
];

const ComplianceServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Back Link */}
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-medium">
              The Value Proposition
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 leading-tight">
              Turn Compliance<br />
              <span className="text-muted-foreground">Into Revenue.</span>
            </h1>
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
                With 3Factor
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

      {/* The Pillars */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certification Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three frameworks we specialize in to unlock your next level of growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pillars.map((pillar) => (
              <div 
                key={pillar.title}
                className="bg-background border border-border rounded-lg p-8 transition-all duration-300 hover:border-primary hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <pillar.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {pillar.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
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
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
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
