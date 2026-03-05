import { ChevronRight, ArrowRight, Shield, Compass, TrendingUp, Lock, Network } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceItem {
  label: string;
  sublabel?: string;
  href: string;
}

interface Panel {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  groups: { groupTitle: string; services: ServiceItem[] }[];
  icon: "trust" | "growth" | "risk";
}

const panels: Panel[] = [
  {
    id: "PANEL-01",
    tag: "THE TRUST FOUNDATION",
    title: "Compliance & Audits",
    subtitle: "Certifications that unlock revenue and prove operational maturity to enterprise buyers.",
    icon: "trust",
    groups: [
      {
        groupTitle: "Compliance Certifications",
        services: [
          { label: "ISO 27001", sublabel: "Information Security Management", href: "/iso-27001" },
          { label: "SOC 2", sublabel: "Trust Services Criteria", href: "/soc-2" },
          { label: "PCI DSS", sublabel: "Payment Card Security", href: "/pci-dss" },
        ],
      },
      {
        groupTitle: "UK Government",
        services: [
          { label: "Cyber Essentials", sublabel: "Government-Backed Certification", href: "/cyber-essentials" },
        ],
      },
    ],
  },
  {
    id: "PANEL-02",
    tag: "THE REVENUE BRIDGE",
    title: "Growth Advisory",
    subtitle: "Strategic security leadership that accelerates deals and builds enterprise-grade trust.",
    icon: "growth",
    groups: [
      {
        groupTitle: "Advisory",
        services: [
          { label: "Virtual CISO", sublabel: "Strategic Guidance & Enterprise Access Advisory", href: "/vciso" },
        ],
      },
    ],
  },
  {
    id: "PANEL-03",
    tag: "THE COMPETITIVE EDGE",
    title: "Risk & Strategy",
    subtitle: "Identify vulnerabilities, manage vendor ecosystems, and build a resilient security posture.",
    icon: "risk",
    groups: [
      {
        groupTitle: "Strategy and Risk Services",
        services: [
          { label: "Cyber Maturity", sublabel: "Posture Assessment & Roadmap", href: "/cyber-maturity-aws" },
          { label: "Vendor Risk Management", sublabel: "Third-Party Risk Oversight", href: "/strategy-risk-services" },
          { label: "Cybersecurity Strategy", sublabel: "Board-Level Security Planning", href: "/strategy-risk-services" },
        ],
      },
    ],
  },
];

/* ── Panel icon visuals ── */
const PanelVisual = ({ type }: { type: Panel["icon"] }) => {
  if (type === "trust") {
    return (
      <div className="relative w-20 h-20 mx-auto mb-5 flex items-center justify-center">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(243,111,33,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, rgba(59,59,57,0.08) 0%, rgba(59,59,57,0.03) 100%)",
            border: "1px solid rgba(59,59,57,0.12)",
            boxShadow: "inset 0 1px 2px rgba(255,255,255,0.6), 0 0 20px rgba(243,111,33,0.08)",
          }}
        >
          <Shield className="w-6 h-6" style={{ color: "#F36F21" }} />
        </div>
      </div>
    );
  }
  if (type === "growth") {
    return (
      <div className="relative w-20 h-20 mx-auto mb-5 flex items-center justify-center">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(243,111,33,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, rgba(59,59,57,0.08) 0%, rgba(59,59,57,0.03) 100%)",
            border: "1px solid rgba(59,59,57,0.12)",
            boxShadow: "inset 0 1px 2px rgba(255,255,255,0.6), 0 0 20px rgba(243,111,33,0.08)",
          }}
        >
          <Compass className="w-6 h-6" style={{ color: "#F36F21" }} />
        </div>
      </div>
    );
  }
  return (
    <div className="relative w-20 h-20 mx-auto mb-5 flex items-center justify-center">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(243,111,33,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, rgba(59,59,57,0.08) 0%, rgba(59,59,57,0.03) 100%)",
          border: "1px solid rgba(59,59,57,0.12)",
          boxShadow: "inset 0 1px 2px rgba(255,255,255,0.6), 0 0 20px rgba(243,111,33,0.08)",
        }}
      >
        <Network className="w-6 h-6" style={{ color: "#F36F21" }} />
      </div>
    </div>
  );
};

const ServicesGrid = () => {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        backgroundColor: "#2D2D2B",
        borderTop: "1px solid rgba(243,111,33,0.15)",
      }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(243,111,33,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="font-mono text-[10px] tracking-[0.25em] uppercase block mb-3"
            style={{ color: "rgba(243,111,33,0.7)" }}
          >
            OPERATIONS CENTRE
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4"
            style={{ color: "#FFFFFF" }}
          >
            3<span style={{ color: "#F36F21" }}>F</span> Services
          </h2>
          <div className="h-px w-20 mx-auto" style={{ backgroundColor: "rgba(243,111,33,0.4)" }} />
        </div>

        {/* Three-panel grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
          {panels.map((panel) => (
            <div
              key={panel.id}
              className="relative flex flex-col transition-all duration-400 group"
              style={{
                background: "linear-gradient(165deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 40px rgba(243,111,33,0.12), inset 0 1px 0 rgba(243,111,33,0.15)";
                e.currentTarget.style.borderColor = "rgba(243,111,33,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              {/* Panel header */}
              <div className="p-6 pb-4">
                <span
                  className="font-mono text-[9px] tracking-[0.2em] uppercase block mb-1"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  [{panel.id}]
                </span>
                <span
                  className="font-mono text-[10px] tracking-[0.15em] uppercase block mb-4"
                  style={{ color: "#F36F21" }}
                >
                  {panel.tag}
                </span>

                <PanelVisual type={panel.icon} />

                <h3
                  className="text-lg font-bold uppercase tracking-tight text-center mb-2"
                  style={{ color: "#FFFFFF" }}
                >
                  {panel.title}
                </h3>
                <p
                  className="text-xs text-center leading-relaxed mb-1"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {panel.subtitle}
                </p>
              </div>

              {/* Divider */}
              <div className="mx-6 h-px" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />

              {/* Service groups */}
              <div className="p-6 pt-4 flex-1 flex flex-col gap-5">
                {panel.groups.map((group) => (
                  <div key={group.groupTitle}>
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest block mb-3"
                      style={{ color: "rgba(255,255,255,0.3)" }}
                    >
                      {group.groupTitle}
                    </span>
                    <div className="flex flex-col gap-2">
                      {group.services.map((svc) => (
                        <Link
                          key={svc.label}
                          to={svc.href}
                          className="flex items-center justify-between px-4 py-3 transition-all duration-200 group/pill"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "9999px",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "rgba(243,111,33,0.5)";
                            e.currentTarget.style.background = "rgba(243,111,33,0.06)";
                            e.currentTarget.style.boxShadow = "0 0 16px rgba(243,111,33,0.08)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          <div className="flex flex-col">
                            <span
                              className="text-xs font-bold uppercase tracking-wide"
                              style={{ color: "#FFFFFF" }}
                            >
                              {svc.label}
                            </span>
                            {svc.sublabel && (
                              <span
                                className="text-[10px] mt-0.5"
                                style={{ color: "rgba(255,255,255,0.35)" }}
                              >
                                {svc.sublabel}
                              </span>
                            )}
                          </div>
                          <ChevronRight
                            className="w-4 h-4 shrink-0 transition-colors"
                            style={{ color: "rgba(255,255,255,0.25)" }}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Status bar */}
              <div
                className="px-6 py-3 flex items-center justify-between"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                  background: "rgba(0,0,0,0.15)",
                }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "#F36F21", boxShadow: "0 0 6px rgba(243,111,33,0.5)" }}
                  />
                  <span
                    className="font-mono text-[9px] tracking-widest uppercase"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    ACTIVE
                  </span>
                </div>
                <span
                  className="font-mono text-[9px] tracking-widest"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  {panel.groups.reduce((acc, g) => acc + g.services.length, 0)} SERVICES
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer link */}
        <div className="flex justify-end">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide transition-colors duration-200"
            style={{ color: "rgba(255,255,255,0.5)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#F36F21";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.5)";
            }}
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
