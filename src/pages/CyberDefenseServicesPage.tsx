import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Logo from "@/assets/3F_Grey.png";

const cyberDefenseServices = [
  { title: "Secure Cloud Transformation", description: "Whether you are new to the cloud, migrating or developing a new architecture, our certified cloud security experts can help you to implement, maintain and optimize the security of your cloud environments." },
  { title: "Secure Architecture Optimization", description: "Achieving security in the cloud requires a well-designed security architecture that understands and uses the shared responsibility model correctly." },
  { title: "Application Security", description: "Applications have become the security Achilles heel in most organizations. Our Secure Software Development (SSDLC) experts will help you build and maintain secure applications." },
  { title: "Penetration Testing", description: "Security assurance requires looking at applications from an attacker's perspective. Our experienced testers can help you identify critical security flaws." },
  { title: "Cyber Incident Response", description: "Our consultants have helped manage some of the biggest breaches of the past decade. We leverage this unparalleled experience to help our clients recover quickly." },
];

const CyberDefenseServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />Back to Home
          </Link>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6"><img src={Logo} alt="3FACTOR" className="h-10" /><span className="text-muted-foreground font-medium">Cyber Defense Services</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Cyber Defense Services</h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-semibold mb-8">Identify. Protect. Detect. Respond. Recover.</p>
            <div className="bg-card rounded-2xl p-8 mb-12 border border-border card-hover">
              <p className="text-lg text-muted-foreground leading-relaxed">To be effective, any strategy needs the right execution. It begins with a robust security architecture that includes strong technical controls and effective operational processes.</p>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Cyber Defense Offerings</h2>
              <div className="space-y-4">
                {cyberDefenseServices.map((service, index) => (
                  <div key={index} className="bg-card rounded-xl p-6 border border-border card-hover">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <div><h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3><p className="text-muted-foreground">{service.description}</p></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center bg-card rounded-2xl p-8 border border-border card-hover">
              <img src={Logo} alt="3FACTOR" className="h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Strengthen Your Defenses?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Start with a free discovery call to discuss your security needs.</p>
              <Button asChild className="glow-button bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"><Link to="/contact">Schedule a Discovery Call <ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CyberDefenseServicesPage;
