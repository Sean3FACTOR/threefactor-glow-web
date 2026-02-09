import { Link } from "react-router-dom";
import { ArrowRight, UserCheck, Target, Users, Search, Compass, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlueprintHero from "@/components/BlueprintHero";

const threeAs = [
  {
    icon: Search,
    step: "Step 1",
    title: "Assessment",
    tagline: "Unvarnished Truth",
    description: "We deliver a clear-eyed view of your security posture. No sugar-coating. No vendor bias. Just the facts your board needs to make decisions.",
  },
  {
    icon: Compass,
    step: "Step 2",
    title: "Advisory",
    tagline: "Closing the Gaps",
    description: "We architect practical solutions that align with your business reality. Prioritized roadmaps that balance risk reduction with operational feasibility.",
  },
  {
    icon: ShieldCheck,
    step: "Step 3",
    title: "Assurance",
    tagline: "Proof for the Board",
    description: "We provide the evidence and certifications that stakeholders, customers, and regulators demand. Defensible security that stands up to scrutiny.",
  },
];

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
    <div className="min-h-screen" style={{ backgroundColor: "#3B3B39" }}>
      <Navigation />
      
      <BlueprintHero
        breadcrumb="Cyber Risk Advisory"
        headline="Translate Risk Into Strategy."
        subhead="Stop getting lost in translation. We turn technical complexity into executive confidence and Board-level clarity."
        ctaText="View Advisory Services"
        ctaLink="/contact"
      />

      {/* The 3 A's - WHITE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: "#F36F21" }}>
              The 3 A's
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4" style={{ color: "#3B3B39" }}>
              How We Work.
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: "#646464" }}>
              A proven methodology that transforms security from a problem into a strategic advantage.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-[72px] h-px" style={{ left: '16%', right: '16%', backgroundColor: "#646464" }} />
            
            {threeAs.map((item) => (
              <div key={item.title} className="text-center relative">
                <div className="w-36 h-36 flex items-center justify-center mx-auto mb-6 relative z-10" style={{ backgroundColor: "#F8F9FA", border: "2px solid #646464" }}>
                  <item.icon className="w-12 h-12" style={{ color: "#F36F21" }} strokeWidth={1} />
                </div>
                <span className="text-xs uppercase tracking-[0.15em] font-medium" style={{ color: "#646464" }}>
                  {item.step}
                </span>
                <h3 className="text-2xl font-bold mt-2 mb-2" style={{ color: "#3B3B39" }}>
                  {item.title}
                </h3>
                <span className="text-xs uppercase tracking-[0.15em] font-medium" style={{ color: "#F36F21" }}>
                  {item.tagline}
                </span>
                <p className="leading-relaxed mt-4 max-w-xs mx-auto" style={{ color: "#646464" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Services - DARK */}
      <section className="py-20" style={{ backgroundColor: "#3B3B39", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advisory Services
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Three ways we help you build executive-level security leadership.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pillars.map((pillar) => (
              <div 
                key={pillar.title}
                className="p-8 transition-all hover:shadow-lg"
                style={{ backgroundColor: "#646464", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="w-14 h-14 flex items-center justify-center mb-6" style={{ backgroundColor: "rgba(243,111,33,0.15)" }}>
                  <pillar.icon className="w-7 h-7" style={{ color: "#F36F21" }} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {pillar.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - WHITE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#3B3B39" }}>
              Ready for Executive-Level Security Leadership?
            </h3>
            <p className="mb-8" style={{ color: "#646464" }}>
              Start with a free discovery call to discuss your advisory needs.
            </p>
            <Button asChild size="lg" className="text-white font-semibold transition-colors" style={{ backgroundColor: "#F36F21" }}>
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
