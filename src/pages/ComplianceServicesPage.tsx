import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, FileCheck, Globe, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
      
      {/* Hero Section - Pain Point: Blocked Sales */}
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
              <span className="text-sm font-medium text-primary">Assurance</span>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm text-muted-foreground">Compliance</span>
            </div>
            
            {/* Pain Point Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Turn "No" into<br />"When Can We Start?"
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Losing deals because you don't have the right certifications? We help you achieve compliance quickly, so you can close bigger deals and unlock new markets.
            </p>
            
            <Button 
              asChild 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <Link to="/contact">
                Start Your Certification
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Visual: Stability imagery - solid block pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-l from-foreground/20 to-transparent" />
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
              Ready to Stop Losing Deals?
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
