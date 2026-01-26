import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Cloud, Code, Siren } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const pillars = [
  {
    icon: Cloud,
    title: "Secure Cloud Transformation",
    description: "Whether you are new to the cloud, migrating or developing a new architecture, our certified cloud security experts help you implement, maintain and optimize the security of your cloud environments.",
  },
  {
    icon: Code,
    title: "Application Security",
    description: "Applications have become the security Achilles heel in most organizations. Our Secure Software Development (SSDLC) experts will help you build and maintain secure applications from the ground up.",
  },
  {
    icon: Siren,
    title: "Cyber Incident Response",
    description: "Our consultants have helped manage some of the biggest breaches of the past decade. We leverage this unparalleled experience to help our clients recover quickly and emerge stronger.",
  },
];

const CyberDefenseServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Pain Point: Chaos */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm font-medium text-primary">Advisory</span>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm text-muted-foreground">Cyber Defense</span>
            </div>
            
            {/* Pain Point Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Stop Fighting Fires.<br />Start Building Firebreaks.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Reactive security is expensive security. We help you build the architecture, processes, and defenses that prevent incidents before they happen.
            </p>
            
            <Button 
              asChild 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <Link to="/contact">
                Build Your Defenses
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Visual: Architecture imagery - grid pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
                               linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>
      </section>

      {/* The Pillars */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three ways we help you build proactive, resilient defenses.
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
              Ready to Move from Reactive to Proactive?
            </h3>
            <p className="text-muted-foreground mb-8">
              Start with a free discovery call to discuss your defense architecture.
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

export default CyberDefenseServicesPage;
