import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, UserCheck, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const pillars = [
  {
    icon: UserCheck,
    title: "Virtual CISO",
    description: "Get executive-level security leadership without the executive-level price tag. Our vCISOs integrate with your team to provide strategic direction and board-level communication.",
  },
  {
    icon: Target,
    title: "Security Strategy",
    description: "We translate technical threats into business risk. Our frameworks help you prioritize investments and communicate clearly with stakeholders.",
  },
  {
    icon: Users,
    title: "Board Advisory",
    description: "Cyber risk is business risk. We help you build the metrics, dashboards, and narratives that give your board confidence in your security posture.",
  },
];

const CyberDefenseServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
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
              <span className="text-sm font-medium text-primary">Services</span>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm text-muted-foreground">Cyber Risk Advisory</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Translate Technical Threats<br />Into Board-Level Strategy.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Since 2008, 3Factor has served as the trusted advisor to thousands of enterprises. We provide the customized leadership and clarity required to build resilience and secure executive confidence.
            </p>
            
            <Button 
              asChild 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <Link to="/contact">
                Get Strategic Guidance
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

      {/* The 3 A's Framework */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Framework
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach to managing cyber risk at the enterprise level.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-background border border-border rounded-lg text-center">
              <h3 className="text-lg font-bold text-foreground mb-2">Assessment</h3>
              <p className="text-sm text-muted-foreground">Get an unvarnished view of your current risk posture.</p>
            </div>
            <div className="p-6 bg-background border border-border rounded-lg text-center">
              <h3 className="text-lg font-bold text-foreground mb-2">Advisory</h3>
              <p className="text-sm text-muted-foreground">Implement the specific improvements needed to close gaps.</p>
            </div>
            <div className="p-6 bg-background border border-border rounded-lg text-center">
              <h3 className="text-lg font-bold text-foreground mb-2">Assurance</h3>
              <p className="text-sm text-muted-foreground">Provide the Board with definitive proof that risk is being managed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Pillars */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Advisory Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three ways we help you build executive-level security leadership.
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready for Executive-Level Security Leadership?
            </h3>
            <p className="text-muted-foreground mb-8">
              Start with a free discovery call to discuss your advisory needs.
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
