import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, UserCheck, Cloud, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import chessImage from "@/assets/services/chess-strategy.jpg";

const pillars = [
  {
    icon: UserCheck,
    title: "Virtual CISO",
    description: "Instant access to executive leadership. Our vCISOs integrate with your team to provide strategic direction and board-level communication without the full-time cost.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Design scalable, compliant environments. We help you build cloud infrastructure that meets the most demanding security and regulatory requirements.",
  },
  {
    icon: FileText,
    title: "Policy & Governance",
    description: "Replace red tape with enforceable engineering standards. We create policies that actually work in practice, not just on paper.",
  },
];

const CyberDefenseServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Architectural Split Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Blended Watermark Image - Right Side */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none hidden md:block">
          <img 
            src={chessImage} 
            alt=""
            className="w-full h-full object-cover opacity-[0.18]"
          />
          {/* Gradient fade to blend into white */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="max-w-2xl">
            {/* Breadcrumb Label */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm font-medium text-primary">Services</span>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm text-muted-foreground">Cyber Risk Advisory</span>
            </div>
            
            {/* H1 Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Translate Technical Threats<br />Into Board-Level Strategy.
            </h1>
            
            {/* Subhead */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
              Since 2008, 3Factor has served as the trusted advisor to thousands of enterprises. We provide the clarity required to build resilience and secure executive confidence.
            </p>
            
            {/* CTA Button */}
            <Button 
              asChild 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Get Strategic Guidance
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The Pillars */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
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
                <div className="w-14 h-14 rounded-full bg-muted border border-border flex items-center justify-center mb-6">
                  <pillar.icon className="w-7 h-7 text-muted-foreground" strokeWidth={1.5} />
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
