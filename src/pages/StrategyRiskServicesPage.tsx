import { Link } from "react-router-dom";
import { ArrowRight, Cloud, Code, ShieldCheck, Shield, FileStack } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlueprintHero from "@/components/BlueprintHero";

const authorityStats = [
  { icon: Cloud, stat: "9 of 10", label: "Top Cloud Providers", context: "Our team includes the lead architects who secured 9 of the top 10 Cloud Service Providers." },
  { icon: Shield, stat: "FedRAMP", label: "Industry Standard", context: "Navigate FedRAMP with a leadership team that defined the industry standard for cloud authorization." },
  { icon: FileStack, stat: "Architecture", label: "First", context: "We built the security standards the big cloud providers use. Now, we use those same standards to build yours." },
];

const pillars = [
  { icon: Cloud, title: "Cloud Architecture Review", description: "Whether you are new to the cloud, migrating, or developing a new architecture, our certified cloud security experts help you implement, maintain, and optimize the security of your cloud environments." },
  { icon: Code, title: "Application Security", description: "Applications have become the security Achilles heel in most organizations. Our Secure Software Development (SSDLC) experts will help you build and maintain secure applications from the ground up." },
  { icon: ShieldCheck, title: "Continuous Monitoring", description: "Security doesn't stop at deployment. We help you implement the tools, processes, and alerting needed to detect and respond to threats in real-time across your cloud infrastructure." },
];

const StrategyRiskServicesPage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#3B3B39" }}>
      <Navigation />
      <BlueprintHero breadcrumb="Cloud Security" headline="Secure Your Cloud Foundation." subhead="We don't just scan for bugs; we architect the environment. Build security into your infrastructure from day one." ctaText="See Cloud Solutions" ctaLink="/contact" />

      {/* Authority */}
      <section className="py-24" style={{ backgroundColor: "#3B3B39", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Proven Cloud Security.</h2>
            <p className="text-xl text-white mt-6 max-w-3xl mx-auto">We don't just secure the cloud; we secure the providers who build it. From strategy to FedRAMP authorization, we provide the architecture and confidence you need.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {authorityStats.map((item) => (
              <div key={item.label} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-8" style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <item.icon className="w-10 h-10 text-white" strokeWidth={1} />
                </div>
                <div className="mb-2"><span className="text-5xl md:text-6xl font-bold text-white tracking-tight">{item.stat}</span></div>
                <span className="text-lg font-semibold text-white">{item.label}</span>
                <p className="text-sm text-white mt-4 leading-relaxed max-w-xs mx-auto">{item.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" style={{ backgroundColor: "#3B3B39", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cloud Security Services</h2>
            <p className="text-white max-w-2xl mx-auto">Three ways we help you secure your cloud transformation.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pillars.map((p) => (
              <div key={p.title} className="p-8 transition-all hover:shadow-lg" style={{ backgroundColor: "#F8F9FA", border: "1px solid #E5E7EB" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#F36F21")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}
              >
                <div className="w-14 h-14 flex items-center justify-center mb-6" style={{ backgroundColor: "rgba(243,111,33,0.15)" }}>
                  <p.icon className="w-7 h-7" style={{ color: "#F36F21" }} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: "#646464" }}>{p.title}</h3>
                <p className="leading-relaxed" style={{ color: "#1a1a1a" }}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#3B3B39", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Secure Your Cloud?</h3>
            <p className="text-white mb-8">Start with a free discovery call to discuss your cloud security needs.</p>
            <Button asChild size="lg" className="text-white font-semibold" style={{ backgroundColor: "#F36F21" }}>
              <Link to="/contact">Schedule a Discovery Call <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StrategyRiskServicesPage;