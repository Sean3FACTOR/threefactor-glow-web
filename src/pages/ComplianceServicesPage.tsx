import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlueprintHero from "@/components/BlueprintHero";
import CertificationSection from "@/components/compliance/CertificationSection";
import { certificationSections } from "@/components/compliance/complianceData";

const ComplianceServicesPage = () => {
  const location = useLocation();

  // Smooth scroll to anchor on load
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#3B3B39" }}>
      <Navigation />
      <BlueprintHero
        breadcrumb="Compliance"
        headline="Comprehensive Framework Expertise"
        subhead="We help you clear common compliance concerns and unlock new markets."
        ctaText="Get Your Framework Roadmap"
        ctaLink="/contact"
      />

      {/* Quick Nav */}
      <section
        className="py-6"
        style={{
          backgroundColor: "#3B3B39",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {certificationSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-4 py-2 text-sm font-mono transition-all"
                style={{
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#FFFFFF",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#F36F21")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {certificationSections.map((section) => (
        <CertificationSection key={section.id} {...section} />
      ))}

      <Footer />
    </div>
  );
};

export default ComplianceServicesPage;
