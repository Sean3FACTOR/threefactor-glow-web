import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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

const HomepageHero = () => {
  return (
    <section className="pt-14 pb-16" style={{ backgroundColor: "#3B3B39" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4">
          {/* Left – Value Proposition */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight uppercase leading-[1.1]">
              <span className="block">Win the RFP.</span>
              <span className="block">OWN THE MARKET.</span>
              <span className="block">GET CERTIFIED.</span>
            </h1>
            <p className="text-base md:text-xl mb-8 leading-relaxed text-primary-foreground">
              Don't let security compliance certification(s) slow you down.
            </p>
            <div className="space-y-4 mb-10">
              <p className="text-base md:text-lg text-white flex items-start gap-3">
                <span className="w-2 h-2 rotate-45 flex-shrink-0 mt-2" style={{ backgroundColor: "#F36F21" }} />
                Scale into regulated sectors without the friction of security roadblocks.
              </p>
              <p className="text-base md:text-lg text-white flex items-start gap-3">
                <span className="w-2 h-2 rotate-45 flex-shrink-0 mt-2" style={{ backgroundColor: "#F36F21" }} />
                Stop letting revenue-blocking gaps stall your growth.
              </p>
            </div>
            <p className="text-base md:text-lg mb-4 leading-relaxed text-primary-foreground">
              We build defensible certification programs that clear RFI hurdles, satisfy auditors, and turn complex regulations into market access.
            </p>
            <p className="text-base md:text-lg font-medium text-white mb-10">
              Security should close the deal, not kill the momentum.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="group text-white font-semibold transition-colors w-full sm:w-auto hover:opacity-90"
                style={{ backgroundColor: "#646464" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#F36F21")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#646464")
                }
              >
                Book Your Compliance Strategy Session
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Right – Compliance Options (vertical) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-1 font-mono">
              Frameworks That Decide Your Market Access
            </h2>
            {serviceCards.map((card) => (
              <div
                key={card.title}
                className="p-5 transition-all"
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
                <h3
                  className="font-bold text-sm uppercase tracking-tight mb-2"
                  style={{ color: "#3B3B39" }}
                >
                  {card.title}
                </h3>
                <div
                  className="h-px w-full mb-2"
                  style={{ backgroundColor: "#E5E7EB" }}
                />
                <div className="flex flex-col gap-1.5">
                  {card.links.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="group inline-flex items-center justify-between text-xs font-medium transition-colors"
                      style={{ color: "#3B3B39" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#F36F21")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#3B3B39")
                      }
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
      </div>
    </section>
  );
};

export default HomepageHero;
