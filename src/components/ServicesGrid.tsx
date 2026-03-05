import { ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import CIPTLogo from "@/assets/certifications/CIPT_logo.avif";
import CIPPLogo from "@/assets/certifications/CIPP_logo.avif";
import CCNALogo from "@/assets/certifications/CCNA_logo.avif";
import SSCPLogo from "@/assets/certifications/SSCP_logo.avif";
import AWSLogo from "@/assets/certifications/aws_partner_logo.avif";
import ISOLogo from "@/assets/certifications/ISO_logo.avif";
import CISALogo from "@/assets/certifications/CISA_logo.svg";
import CISMLogo from "@/assets/certifications/CISM_logo.svg";
import CISSPLogo from "@/assets/certifications/CISSP_logo.webp";
import PCILogo from "@/assets/certifications/PCI_logo.avif";

const certifications = [
  { name: "PCI", logo: PCILogo },
  { name: "CISSP", logo: CISSPLogo },
  { name: "CISM", logo: CISMLogo },
  { name: "CISA", logo: CISALogo },
  { name: "ISO 27001", logo: ISOLogo },
  { name: "CIPT", logo: CIPTLogo },
  { name: "CIPP", logo: CIPPLogo },
  { name: "CCNA", logo: CCNALogo },
  { name: "SSCP", logo: SSCPLogo },
  { name: "AWS Partner", logo: AWSLogo },
];

interface ServiceItem {
  label: string;
  href: string;
}

interface Cluster {
  title: string;
  services: ServiceItem[];
}

const clusters: Cluster[] = [
  {
    title: "Compliance Certifications",
    services: [
      { label: "ISO 27001", href: "/services/iso-27001" },
      { label: "SOC 2", href: "/services/soc-2" },
      { label: "PCI DSS", href: "/services/pci-dss" },
    ],
  },
  {
    title: "UK Government",
    services: [
      { label: "Cyber Essentials", href: "/services/cyber-essentials" },
    ],
  },
  {
    title: "Advisory",
    services: [
      { label: "Virtual CISO", href: "/services/vciso" },
    ],
  },
  {
    title: "Strategy and Risk Services",
    services: [
      { label: "Cyber Maturity", href: "/services/cyber-maturity-aws" },
      { label: "Vendor Risk", href: "/services/strategy-risk" },
      { label: "Cybersecurity Strategy", href: "/services/strategy-risk" },
    ],
  },
];

const ServicesGrid = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextBtn = carouselRef.current.querySelector('[aria-label="Next slide"]') as HTMLButtonElement;
        if (nextBtn) nextBtn.click();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-16 md:py-20"
      style={{ backgroundColor: "#F8F9FA", borderTop: "1px solid rgba(59,59,57,0.08)" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold uppercase tracking-tight"
            style={{ color: "#3B3B39" }}
          >
            3<span style={{ color: "#F36F21" }}>FACTOR</span> Services
          </h2>
        </div>

        <div
          className="relative mx-auto max-w-6xl"
          style={{
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(59,59,57,0.08)",
            borderRadius: "24px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}
        >
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {clusters.map((cluster, idx) => {
              const isHovered = hoveredIdx === idx;
              const isLast = idx === clusters.length - 1;

              return (
                <div
                  key={cluster.title}
                  className="relative px-6 py-7 md:px-7 md:py-8 transition-all duration-500"
                  style={{
                    borderRight: !isLast ? "1px solid rgba(59,59,57,0.06)" : "none",
                  }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <div
                    className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
                    style={{
                      opacity: isHovered ? 1 : 0,
                      background: "radial-gradient(circle at 50% 50%, rgba(243,111,33,0.04) 0%, transparent 70%)",
                      borderRadius: idx === 0 ? "24px 0 0 24px" : isLast ? "0 24px 24px 0" : "0",
                    }}
                  />

                  <div className="relative z-10">
                    <h3
                      className="text-[13px] font-bold uppercase tracking-wide mb-4 transition-colors duration-300"
                      style={{ color: isHovered ? "#3B3B39" : "rgba(59,59,57,0.6)" }}
                    >
                      {cluster.title}
                    </h3>

                    <div className="flex flex-col gap-1.5">
                      {cluster.services.map((svc) => (
                        <Link
                          key={svc.label}
                          to={svc.href}
                          className="flex items-center justify-between py-2 px-3 transition-all duration-200"
                          style={{
                            borderRadius: "10px",
                            background: "rgba(59,59,57,0.02)",
                            border: "1px solid rgba(59,59,57,0.06)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(59,59,57,0.05)";
                            e.currentTarget.style.borderColor = "rgba(59,59,57,0.15)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(59,59,57,0.02)";
                            e.currentTarget.style.borderColor = "rgba(59,59,57,0.06)";
                          }}
                        >
                          <span className="text-[12px] font-medium tracking-wide" style={{ color: "#3B3B39" }}>
                            {svc.label}
                          </span>
                          <ChevronRight className="w-3 h-3 shrink-0" style={{ color: "rgba(59,59,57,0.25)" }} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="relative z-10 flex justify-end px-7 py-4"
            style={{ borderTop: "1px solid rgba(59,59,57,0.06)" }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 transition-all duration-300"
              style={{
                color: "rgba(59,59,57,0.4)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#F36F21"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(59,59,57,0.4)"; }}
            >
              All Services
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Certifications Carousel */}
        <div className="mt-12 max-w-6xl mx-auto" ref={carouselRef}>
          <p
            className="text-center text-[22px] font-bold uppercase tracking-[0.15em] mb-6"
            style={{ color: "#000000" }}
          >
            Our Team's Certifications
          </p>
          <div className="px-8 sm:px-12">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {certifications.map((cert) => (
                  <CarouselItem
                    key={cert.name}
                    className="pl-2 md:pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                  >
                    <div
                      className="flex items-center justify-center w-full h-20 md:h-24 p-3"
                      style={{
                        backgroundColor: "#FFFFFF",
                        border: "1px solid rgba(59,59,57,0.08)",
                      }}
                    >
                      <img
                        src={cert.logo}
                        alt={`${cert.name} certification`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                className="-left-4 sm:-left-8 opacity-100 rounded-none"
                style={{ borderColor: "rgba(59,59,57,0.2)", backgroundColor: "rgba(59,59,57,0.05)", color: "#3B3B39" }}
              />
              <CarouselNext
                className="-right-4 sm:-right-8 opacity-100 rounded-none"
                style={{ borderColor: "rgba(59,59,57,0.2)", backgroundColor: "rgba(59,59,57,0.05)", color: "#3B3B39" }}
              />
            </Carousel>
          </div>

          {/* Expertise Tagline */}
          <div className="mt-12 text-center max-w-4xl mx-auto px-4">
            <p
              className="text-lg md:text-xl leading-relaxed whitespace-nowrap overflow-x-auto"
              style={{ color: "#3B3B39" }}
            >
              Expertise you can trust. Standards to fuel your scale. The oversight to reach the finish line.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
