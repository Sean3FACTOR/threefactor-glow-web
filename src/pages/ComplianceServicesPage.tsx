import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Logo from "@/assets/3F_Grey.png";

const complianceServices = [
  { title: "ISO 27001/2", description: "This internationally recognized security certification can help you gain customer trust worldwide." },
  { title: "Privacy (GDPR, CPRA, LGPD)", description: "No matter where you are, privacy regulations are constantly expanding worldwide." },
  { title: "Emerging Compliance", description: "New security and privacy regulations, frameworks and standards are being created all the time." },
  { title: "PCI DSS", description: "Our Qualified Security Assessors (QSA) are some of the most experienced in the industry." },
  { title: "SOC 2", description: "This widely recognized certification is a must-have for any service organization in North America." },
];

const ComplianceServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"><ArrowLeft className="w-4 h-4 mr-2" />Back to Home</Link>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6"><img src={Logo} alt="3FACTOR" className="h-10" /><span className="text-muted-foreground font-medium">Compliance Services</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Compliance Services</h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-semibold mb-8">Achieve Certifications Quickly and Efficiently</p>
            <div className="bg-card rounded-2xl p-8 mb-12 border border-border card-hover">
              <p className="text-lg text-muted-foreground leading-relaxed">Compliance builds trust. Having the right certifications can be a key business enabler.</p>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Compliance Offerings</h2>
              <div className="space-y-4">
                {complianceServices.map((service, index) => (
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
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Compliance Journey?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Start with a free discovery call to discuss your compliance needs.</p>
              <Button asChild className="glow-button bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"><Link to="/contact">Discuss Your Compliance Needs <ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComplianceServicesPage;
