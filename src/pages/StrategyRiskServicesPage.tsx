import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Search, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const pillars = [
  {
    icon: Search,
    title: "Cyber Maturity Assessment",
    description: "We identify cyber risks and provide prioritized recommendations for remediation. Our methodology cuts through the noise to show you exactly where you're exposed.",
  },
  {
    icon: Shield,
    title: "Vendor Risk Management",
    description: "We design pragmatic frameworks to help our clients reduce vendor risk. Know exactly who has access to your data and whether they deserve it.",
  },
  {
    icon: TrendingUp,
    title: "Return-on-Investment Analysis",
    description: "We assess processes, tools and vendors to help maximize ROI. Stop spending on security theater and start investing in what actually moves the needle.",
  },
];

const StrategyRiskServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section - Pain Point: Blindness */}
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
              <span className="text-sm font-medium text-primary">Assessment</span>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm text-muted-foreground">Strategy & Risk</span>
            </div>
            
            {/* Pain Point Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              You Can't Protect What You Can't See.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Most organizations are flying blind. We provide the unvarnished truth about your security posture—no sugarcoating, no generic findings.
            </p>
            
            <Button 
              asChild 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <Link to="/contact">
                Get Your Assessment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Visual: Focus imagery - abstract geometric pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-l from-primary/20 to-transparent" />
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
              Three ways we cut through the fog and give you complete visibility.
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
              Ready to See the Full Picture?
            </h3>
            <p className="text-muted-foreground mb-8">
              Start with a free discovery call to discuss your assessment needs.
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

export default StrategyRiskServicesPage;
