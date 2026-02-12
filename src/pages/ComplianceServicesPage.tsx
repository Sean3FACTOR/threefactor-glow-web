import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlueprintHero from "@/components/BlueprintHero";
import CertificationSection from "@/components/compliance/CertificationSection";
import { certificationSections } from "@/components/compliance/complianceData";

const ComplianceServicesPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F9FA" }}>
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
          backgroundColor: "#F8F9FA",
          borderTop: "1px solid rgba(59,59,57,0.08)",
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
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  color: "#1a1a1a",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#F36F21")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#E5E7EB")}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {s.title.split(":")[0]}
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
