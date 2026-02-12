import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const serviceCards = [
  {
    title: "Enterprise Trust",
    links: [
      { label: "SOC 2 (Type I & II)", href: "/services/compliance#soc2" },
      { label: "ISO 27001", href: "/services/compliance#iso27001" },
      { label: "SOX", href: "/services/compliance#sox" },
    ],
  },
  {
    title: "Healthcare & Privacy",
    links: [
      { label: "HIPAA & HITRUST", href: "/services/compliance#healthcare" },
      { label: "GDPR (Global Privacy)", href: "/services/compliance#gdpr" },
    ],
  },
  {
    title: "Payments & Revenue",
    links: [
      { label: "PCI DSS Validation", href: "/services/compliance#pci" },
    ],
  },
  {
    title: "Federal & Defense",
    links: [
      { label: "FedRAMP®", href: "/services/compliance#fedramp" },
      { label: "CMMC", href: "/services/compliance#cmmc" },
      { label: "NIST Frameworks", href: "/services/compliance#nist" },
    ],
  },
  {
    title: "EU Regulatory Resilience",
    links: [
      { label: "NIS2 & DORA Assessment", href: "/services/compliance#nis2" },
    ],
  },
];

const FrameworkCards = () => {
  return (
    <section className="py-16" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="container mx-auto px-4">
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "#3B3B39", opacity: 0.5 }}>
          [FRM-01]
        </span>
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mt-2 mb-8" style={{ color: "#3B3B39" }}>
          Frameworks That Decide Your Market Access
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {serviceCards.map((card) => (
            <div
              key={card.title}
              className="p-5 transition-all bg-white"
              style={{ border: "1px solid rgba(59,59,57,0.1)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#F36F21")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(59,59,57,0.1)")}
            >
              <h3 className="font-bold text-sm uppercase tracking-tight mb-2" style={{ color: "#3B3B39" }}>
                {card.title}
              </h3>
              <div className="h-px w-full mb-2" style={{ backgroundColor: "rgba(59,59,57,0.1)" }} />
              <div className="flex flex-col gap-1.5">
                {card.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="group inline-flex items-center justify-between text-xs font-medium transition-colors hover:text-[#F36F21]"
                    style={{ color: "rgba(59,59,57,0.6)" }}
                  >
                    {link.label}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworkCards;
