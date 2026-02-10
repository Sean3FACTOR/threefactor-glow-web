import { ArrowRight, Shield, Landmark, CreditCard, Building2, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const serviceCards = [
  {
    title: "Enterprise Trust",
    subtitle: "SOC & Attestations",
    icon: Shield,
    links: [
      { label: "SOC 2 (Type I & II)", href: "/services/compliance#soc2" },
      { label: "SOC 3 Examination", href: "/services/compliance#soc3" },
    ],
  },
  {
    title: "ISO Certifications",
    subtitle: "International Standards",
    icon: Globe,
    links: [
      { label: "ISO 27001", href: "/services/compliance#iso27001" },
      { label: "ISO 42001 (AI Security)", href: "/services/compliance#iso42001" },
    ],
  },
  {
    title: "Payment Card Assessments",
    subtitle: "Revenue Protection",
    icon: CreditCard,
    links: [
      { label: "PCI DSS Validation", href: "/services/compliance#pci" },
      { label: "PCI SSF", href: "/services/compliance#pci-ssf" },
    ],
  },
  {
    title: "Federal Assessments",
    subtitle: "Government & Defense",
    icon: Landmark,
    links: [
      { label: "FedRAMP®", href: "/services/compliance#fedramp" },
      { label: "CMMC / NIST SP 800-171", href: "/services/compliance#cmmc" },
    ],
  },
  {
    title: "EU Regulatory Resilience",
    subtitle: "European Compliance",
    icon: Building2,
    links: [
      { label: "NIS2 Compliance", href: "/services/compliance#nis2" },
      { label: "DORA Assessment", href: "/services/compliance#dora" },
    ],
  },
];

const ComplianceCrossroads = () => {
  return (
    <section
      className="py-20"
      style={{
        backgroundColor: "#3B3B39",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tight">
            The Keys to the Market
          </h2>
          <p className="text-lg leading-relaxed text-primary-foreground">
            Frameworks That Decide Your Market Access
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="p-6 transition-all"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "#F36F21")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#E5E7EB")
                }
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 flex-shrink-0" style={{ color: "#F36F21" }} />
                  <div>
                    <h3 className="font-bold text-lg uppercase tracking-tight" style={{ color: "#3B3B39" }}>
                      {card.title}
                    </h3>
                    <p className="text-sm font-mono" style={{ color: "#646464" }}>
                      {card.subtitle}
                    </p>
                  </div>
                </div>
                <div
                  className="h-px w-full mb-4"
                  style={{ backgroundColor: "#E5E7EB" }}
                />
                <div className="flex flex-col gap-3">
                  {card.links.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="group inline-flex items-center justify-between text-sm font-medium transition-colors"
                      style={{ color: "#3B3B39" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#F36F21")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#3B3B39")
                      }
                    >
                      {link.label}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <p className="text-lg text-white leading-relaxed italic">
            "Compliance isn't overhead, it's leverage. Walk into your next board
            meeting with proof, not promises, that risk is controlled."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComplianceCrossroads;
