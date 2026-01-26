import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Logo from "@/assets/3F_Grey.png";

const strategyServices = [
  { title: "Cyber Maturity Assessment", description: "We identify cyber risks and provide prioritized recommendations for remediation." },
  { title: "Vendor Risk Management", description: "We design pragmatic frameworks to help our clients reduce vendor risk." },
  { title: "Cyber Strategy Optimization", description: "We design strategies for pragmatic management of complex cybersecurity programmes." },
  { title: "Cybersecurity Evolution", description: "We help our clients to fix problems and rapidly increase cyber maturity." },
  { title: "Return-On-Investment Analysis", description: "We assess processes, tools and vendors to help maximise ROI." },
  { title: "Cyber Learning Strategy", description: "We build practical training programmes to build security cultures." },
  { title: "Strategic Cyber Outsourcing", description: "We identify opportunities to outsource security activities." },
  { title: "Cyber Investment Assurance", description: "We assess the cybersecurity posture of acquisition targets." },
];

const StrategyRiskServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"><ArrowLeft className="w-4 h-4 mr-2" />Back to Home</Link>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6"><img src={Logo} alt="3FACTOR" className="h-10" /><span className="text-muted-foreground font-medium">Strategy & Risk Services</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Strategy & Risk Services</h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-semibold mb-8">Understand and Manage Cybersecurity Risks</p>
            <div className="bg-card rounded-2xl p-8 mb-12 border border-border card-hover">
              <p className="text-lg text-muted-foreground leading-relaxed">Believable security begins with a strong security culture. Our team has helped hundreds of clients build robust security programs.</p>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Strategy & Risk Offerings</h2>
              <div className="space-y-4">
                {strategyServices.map((service, index) => (
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
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Strengthen Your Security Strategy?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Start with a free discovery call to discuss your security challenges.</p>
              <Button asChild className="glow-button bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"><Link to="/contact">Schedule a Discovery Call <ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StrategyRiskServicesPage;
