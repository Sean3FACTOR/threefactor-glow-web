import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Shield, FileCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import keyImage from "@/assets/services/key-unlock.jpg";

const pillars = [
  {
    icon: Shield,
    title: "FedRAMP & 3PAO",
    description: "Navigate the highest bar in cloud security. Our team has the pedigree and experience to guide you through the most rigorous federal authorization process.",
  },
  {
    icon: FileCheck,
    title: "Commercial Compliance (SOC 2, ISO)",
    description: "Streamline audits to close deals faster. We help you achieve the certifications that enterprise customers demand, turning compliance into a competitive advantage.",
  },
  {
    icon: Users,
    title: "Audit Defense",
    description: "We stand beside you to answer the auditor's toughest questions. Our experts have sat on both sides of the table and know exactly what auditors are looking for.",
  },
];

const ComplianceServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Architectural Split Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Blended Watermark Image - Right Side */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none hidden md:block">
          <img 
            src={keyImage} 
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
              <span className="text-sm text-muted-foreground">Compliance & Authorization</span>
            </div>
            
            {/* H1 Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Turn Compliance<br />Into Revenue.
            </h1>
            
            {/* Subhead */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
              Don't just tick boxes. We navigate the maze of regulated data to help you achieve the certifications that unlock new markets and close bigger deals.
            </p>
            
            {/* CTA Button */}
            <Button 
              asChild 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Get Certified
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
              Compliance Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three ways we help you turn compliance from a cost center into a revenue driver.
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
