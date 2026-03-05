import { ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceItem {
  label: string;
  href: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  services: ServiceItem[];
}

const categories: ServiceCategory[] = [
  {
    id: "SVC-01",
    title: "Compliance Certifications",
    services: [
      { label: "ISO 27001", href: "/iso-27001" },
      { label: "SOC 2", href: "/soc-2" },
      { label: "PCI DSS", href: "/pci-dss" },
    ],
  },
  {
    id: "SVC-02",
    title: "UK Government",
    services: [
      { label: "Cyber Essentials", href: "/cyber-essentials" },
    ],
  },
  {
    id: "SVC-03",
    title: "Advisory",
    services: [
      { label: "Virtual CISO", href: "/vciso" },
    ],
  },
  {
    id: "SVC-04",
    title: "Strategy and Risk Services",
    services: [
      { label: "Cyber Maturity", href: "/cyber-maturity-aws" },
      { label: "Vendor Risk Management", href: "/strategy-risk-services" },
      { label: "Cybersecurity Strategy", href: "/strategy-risk-services" },
    ],
  },
];

const ServicesGrid = () => {
  return (
    <section
      className="py-20"
      style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid rgba(59,59,57,0.08)" }}
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-12 text-center"
          style={{ color: "#3B3B39" }}
        >
          3<span style={{ color: "#F36F21" }}>F</span> Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="relative p-6 transition-all duration-300 group"
              style={{
                background: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(59,59,57,0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 24px rgba(243,111,33,0.15)";
                e.currentTarget.style.borderColor = "rgba(243,111,33,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(59,59,57,0.1)";
              }}
            >
              <span
                className="font-mono text-[10px] tracking-widest uppercase block mb-1"
                style={{ color: "rgba(59,59,57,0.35)" }}
              >
                [{cat.id}]
              </span>
              <h3
                className="text-sm font-bold uppercase tracking-tight mb-5"
                style={{ color: "#3B3B39" }}
              >
                {cat.title}
              </h3>

              <div className="flex flex-col gap-2">
                {cat.services.map((svc) => (
                  <Link
                    key={svc.label}
                    to={svc.href}
                    className="flex items-center justify-between px-4 py-2.5 text-xs font-semibold uppercase tracking-wide transition-all duration-200"
                    style={{
                      backgroundColor: "#F8F9FA",
                      color: "#3B3B39",
                      border: "1px solid #E5E7EB",
                      borderRadius: "9999px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#F36F21";
                      e.currentTarget.style.color = "#F36F21";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#E5E7EB";
                      e.currentTarget.style.color = "#3B3B39";
                    }}
                  >
                    {svc.label}
                    <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide transition-colors duration-200"
            style={{ color: "#3B3B39" }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#F36F21"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#3B3B39"; }}
          >
            All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
