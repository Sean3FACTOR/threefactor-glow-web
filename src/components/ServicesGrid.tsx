import { ChevronRight, ArrowRight, Shield, Crown, UserCog, Network } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface ServiceItem {
  label: string;
  href: string;
}

interface Cluster {
  icon: "shield" | "crown" | "exec" | "network";
  title: string;
  services: ServiceItem[];
}

const clusters: Cluster[] = [
  {
    icon: "shield",
    title: "Compliance Certifications",
    services: [
      { label: "ISO 27001", href: "/iso-27001" },
      { label: "SOC 2", href: "/soc-2" },
      { label: "PCI DSS", href: "/pci-dss" },
    ],
  },
  {
    icon: "crown",
    title: "UK Government",
    services: [
      { label: "Cyber Essentials", href: "/cyber-essentials" },
    ],
  },
  {
    icon: "exec",
    title: "Advisory",
    services: [
      { label: "Virtual CISO", href: "/vciso" },
    ],
  },
  {
    icon: "network",
    title: "Strategy and Risk Services",
    services: [
      { label: "Cyber Maturity", href: "/cyber-maturity-aws" },
      { label: "Vendor Risk", href: "/strategy-risk-services" },
      { label: "Cybersecurity Strategy", href: "/strategy-risk-services" },
    ],
  },
];

const iconMap = {
  shield: Shield,
  crown: Crown,
  exec: UserCog,
  network: Network,
};

const ServicesGrid = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      className="py-16 md:py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(175deg, #1a1a1a 0%, #111111 50%, #1a1917 100%)",
      }}
    >
      {/* Volcanic texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #ffffff 0.5px, transparent 0.5px), radial-gradient(circle at 80% 20%, #ffffff 0.3px, transparent 0.3px)",
          backgroundSize: "18px 18px, 24px 24px",
        }}
      />

      {/* Ambient cyan glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 60%, rgba(100,200,220,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Top coral refraction line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, rgba(243,111,33,0.3) 30%, rgba(243,111,33,0.5) 50%, rgba(243,111,33,0.3) 70%, transparent 95%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold uppercase tracking-tight"
            style={{ color: "#FFFFFF" }}
          >
            3<span style={{ color: "#F36F21" }}>F</span> Services
          </h2>
        </div>

        {/* Liquid glass container */}
        <div
          className="relative mx-auto max-w-6xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0.04) 100%)",
            backdropFilter: "blur(24px) saturate(1.2)",
            WebkitBackdropFilter: "blur(24px) saturate(1.2)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "24px",
            boxShadow:
              "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.3), 0 0 60px rgba(100,200,220,0.03)",
          }}
        >
          {/* Inner specular highlight */}
          <div
            className="absolute top-0 left-[10%] right-[10%] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.15) 70%, transparent)",
            }}
          />

          {/* Caustic refraction overlay */}
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            style={{ borderRadius: "24px" }}
          >
            <div
              className="absolute -top-20 -left-20 w-60 h-60 opacity-[0.04]"
              style={{
                background: "radial-gradient(circle, rgba(100,220,240,0.8) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
            <div
              className="absolute -bottom-16 -right-16 w-48 h-48 opacity-[0.03]"
              style={{
                background: "radial-gradient(circle, rgba(243,111,33,0.8) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
          </div>

          {/* Content grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {clusters.map((cluster, idx) => {
              const Icon = iconMap[cluster.icon];
              const isHovered = hoveredIdx === idx;
              const isLast = idx === clusters.length - 1;

              return (
                <div
                  key={cluster.title}
                  className="relative px-6 py-7 md:px-7 md:py-8 transition-all duration-500"
                  style={{
                    borderRight:
                      !isLast ? "1px solid rgba(255,255,255,0.04)" : "none",
                  }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* Hover ripple */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
                    style={{
                      opacity: isHovered ? 1 : 0,
                      background:
                        "radial-gradient(circle at 50% 50%, rgba(243,111,33,0.08) 0%, rgba(243,111,33,0.02) 50%, transparent 70%)",
                      borderRadius: idx === 0 ? "24px 0 0 24px" : isLast ? "0 24px 24px 0" : "0",
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <Icon
                      className="w-5 h-5 mb-3 transition-all duration-300"
                      style={{
                        color: isHovered ? "#F36F21" : "rgba(243,111,33,0.6)",
                        filter: isHovered ? "drop-shadow(0 0 8px rgba(243,111,33,0.4))" : "none",
                      }}
                    />

                    {/* Category title */}
                    <h3
                      className="text-[13px] font-bold uppercase tracking-wide mb-4 transition-colors duration-300"
                      style={{ color: isHovered ? "#FFFFFF" : "rgba(255,255,255,0.75)" }}
                    >
                      {cluster.title}
                    </h3>

                    {/* Service pills */}
                    <div className="flex flex-col gap-1.5">
                      {cluster.services.map((svc) => (
                        <Link
                          key={svc.label}
                          to={svc.href}
                          className="flex items-center justify-between py-2 px-3 transition-all duration-200 group/svc"
                          style={{
                            borderRadius: "10px",
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.05)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(243,111,33,0.08)";
                            e.currentTarget.style.borderColor = "rgba(243,111,33,0.25)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                          }}
                        >
                          <span
                            className="text-[12px] font-medium tracking-wide"
                            style={{ color: "rgba(255,255,255,0.85)" }}
                          >
                            {svc.label}
                          </span>
                          <ChevronRight
                            className="w-3 h-3 shrink-0"
                            style={{ color: "rgba(255,255,255,0.2)" }}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom bar */}
          <div
            className="relative z-10 flex justify-end px-7 py-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 transition-all duration-300"
              style={{
                color: "rgba(255,255,255,0.35)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#F36F21";
                e.currentTarget.style.textShadow = "0 0 12px rgba(243,111,33,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.35)";
                e.currentTarget.style.textShadow = "none";
              }}
            >
              All Services
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
