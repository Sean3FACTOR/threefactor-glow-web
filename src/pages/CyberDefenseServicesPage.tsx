import { Link } from "react-router-dom";
import { ArrowRight, UserCheck, Target, Users, Search, Compass, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlueprintHero from "@/components/BlueprintHero";

const threeAs = [
  { icon: Search, step: "Step 1", title: "Assessment", tagline: "Unvarnished Truth", description: "We deliver a clear-eyed view of your security posture. No sugar-coating. No vendor bias. Just the facts your board needs to make decisions." },
  { icon: Compass, step: "Step 2", title: "Advisory", tagline: "Closing the Gaps", description: "We architect practical solutions that align with your business reality. Prioritized roadmaps that balance risk reduction with operational feasibility." },
  { icon: ShieldCheck, step: "Step 3", title: "Assurance", tagline: "Proof for the Board", description: "We provide the evidence and certifications that stakeholders, customers, and regulators demand. Defensible security that stands up to scrutiny." },
];

const pillars = [
  { icon: UserCheck, title: "Virtual CISO", description: "Get executive-level security leadership without the executive-level price tag. Our vCISOs integrate with your team to provide strategic direction and board-level communication." },
  { icon: Target, title: "Security Strategy", description: "We translate technical threats into business risk. Our frameworks help you prioritize investments and communicate clearly with stakeholders." },
  { icon: Users, title: "Board Advisory", description: "Cyber risk is business risk. We help you build the metrics, dashboards, and narratives that give your board confidence in your security posture." },
];

const CyberDefenseServicesPage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#3B3B39" }}>
      <Navigation />
      <BlueprintHero breadcrumb="Cyber Risk Advisory" headline="Translate Risk Into Strategy." subhead="Stop getting lost in translation. We turn technical complexity into executive confidence and Board-level clarity." ctaText="View Advisory Services" ctaLink="/contact" />

      {/* 3 A's */}
      <section className="py-24" style={{ backgroundColor: "#3B3B39", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: "#F36F21" }}>The 3 A's</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">How We Work.</h2>
            <p className="text-white max-w-2xl mx-auto">A proven methodology that transforms security from a problem into a strategic advantage.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-[72px] h-px bg-white/15" style={{ left: '16%', right: '16%' }} />
            {threeAs.map((item) => (
              <div key={item.title} className="text-center relative">
                <div className="w-36 h-36 flex items-center justify-center mx-auto mb-6 relative z-10" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "2px solid rgba(255,255,255,0.15)" }}>
                  <item.icon className="w-12 h-12" style={{ color: "#F36F21" }} strokeWidth={1} />
                </div>
                <span className="text-xs uppercase tracking-[0.15em] text-white font-medium">{item.step}</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-2">{item.title}</h3>
                <span className="text-xs uppercase tracking-[0.15em] font-medium" style={{ color: "#F36F21" }}>{item.tagline}</span>
                <p className="text-white leading-relaxed mt-4 max-w-xs mx-auto">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory */}
      <section className="py-20" style={{ backgroundColor: "#3B3B39", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Advisory Services</h2>
            <p className="text-white max-w-2xl mx-auto">Three ways we help you build executive-level security leadership.</p>
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
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready for Executive-Level Security Leadership?</h3>
            <p className="text-white mb-8">Start with a free discovery call to discuss your advisory needs.</p>
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

export default CyberDefenseServicesPage;