import { Cloud, Shield, Scale, Layers } from "lucide-react";
import spyroWorking from "@/assets/homepage/spyro-working.jpg";

const authorityPoints = [{
  icon: Layers,
  title: "BEYOND THE AUDIT",
  description: "We don't just \"get you a certificate.\" We provide Program Architecture and Risk Assessments that set you up for long-term mastery."
}, {
  icon: Cloud,
  title: "ARCHITECTS OF THE CLOUD",
  description: "Our team includes lead architects who secured 9 of the top 10 global Cloud Service Providers. We bring that elite logic to your mid-market firm."
}, {
  icon: Shield,
  title: "BATTLE-TESTED WHERE IT MATTERS",
  description: "We've led recovery efforts on the frontlines of 6 of the 10 largest security breaches in North American history."
}, {
  icon: Scale,
  title: "UNBIASED STRATEGY",
  description: "As a vendor-agnostic firm, our only agenda is your long-term, defensible compliance, not selling tools."
}];

const EliteAuthority = () => {
  return (
    <>
      {/* Full-bleed image divider — AMC-style */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        <img
          src={spyroWorking}
          alt="3FACTOR team member at work"
          className="w-full h-full object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(248,249,250,0) 0%, rgba(248,249,250,1) 100%)" }}
        />
      </div>

      <section className="pb-20" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight" style={{ color: "#3B3B39" }}>
              Expert Leadership for Your Toughest Transitions
            </h2>
            <p className="text-lg mb-4 leading-relaxed" style={{ color: "#646464" }}>
              We've Been in Your Chair. We know the pressure of an "overnight" requirement from a high-value lead. We understand that "almost compliant" is a career risk you can't afford. You deserve a partner who provides a program wrapper that works today and stays flexible for tomorrow.
            </p>
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold mb-3 uppercase tracking-tight" style={{ color: "#3B3B39" }}>
            Why IT & Ops Leaders Choose 3<span style={{ color: "#F36F21" }}>FACTOR</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {authorityPoints.map(point => (
              <div
                key={point.title}
                className="p-6 transition-all"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E5E7EB"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#F36F21")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}
              >
                <h4 className="text-lg font-bold mb-2 uppercase tracking-tight" style={{ color: "#646464" }}>
                  {point.title}
                </h4>
                <p className="leading-relaxed" style={{ color: "#3B3B39" }}>
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EliteAuthority;
