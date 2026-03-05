import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Award } from "lucide-react";
import glassBuilding from "@/assets/company/glass-building-hero.jpg";
import whiteboardExpert from "@/assets/company/whiteboard-expert.jpg";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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

const glassCard = "bg-white/60 backdrop-blur-[20px] border border-[rgba(59,59,57,0.08)] rounded-none";

const CompanyPage = () => {
  const autoplayPlugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true }));

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
      <Navigation />

      {/* ═══════════════════════════════════════
          SECTION 1 — Empathy Hero
      ═══════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center" style={{ overflow: "hidden" }}>
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={glassBuilding}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          {/* Dark cool-toned overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(15,23,42,0.92) 0%, rgba(20,30,50,0.85) 40%, rgba(25,35,55,0.80) 100%)" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 uppercase text-white">
              <span className="block">You build the innovation.</span>
              <span className="block">We provide the integrity to scale it.</span>
            </h1>
            <div className="mb-10 max-w-3xl mx-auto rounded-lg px-8 py-6" style={{ backgroundColor: "rgba(40,50,65,0.45)", border: "1px solid rgba(200,210,220,0.2)", backdropFilter: "blur(4px)" }}>
              <p className="text-base md:text-lg leading-relaxed text-white/90 font-bold text-left">
                Compliance shouldn't be a handbrake on your momentum.
                <br />
                We've spent a decade mastering the standards that move the needle, so you can stay focused on your product while we secure your future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 2 — Senior-Led Authority
      ═══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4" style={{ backgroundColor: "#FFFFFF" }}>
       <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-start">
           <div className="md:col-span-6">
             <div className="mb-12">
               <div className="flex items-center gap-3 mb-6">
                 <ShieldCheck size={20} style={{ color: "#F36F21" }} />
                 <span
                   className="text-[10px] font-bold uppercase tracking-[0.2em]"
                   style={{ color: "#F36F21" }}
                 >
                   Senior-Led Authority
                 </span>
               </div>
               <h2
                 className="text-2xl md:text-4xl font-bold mb-6"
                 style={{ color: "#3B3B39" }}
               >
                 BENEFIT FROM DECADES OF FRONTLINE WISDOM
               </h2>
               <p
                 className="text-base leading-relaxed mb-4"
                 style={{ color: "#5A5A58" }}
               >
                 At 3Factor, we believe you shouldn't be a training ground for junior auditors. Our team
                 is exclusively senior-led, offering over 10 years of individual experience navigating
                 the world's most rigorous frameworks.
               </p>
               <p
                 className="text-base leading-relaxed"
                 style={{ color: "#5A5A58" }}
               >
                 We don't just point out problems; we leverage our history to provide your solutions.
               </p>
             </div>
             <div className="max-w-2xl">
               <div
                 className={`${glassCard} p-8`}
               >
                 <div className="space-y-5">
                   {[
                     { metric: "10+", label: "Years average consultant experience" },
                     { metric: "6/10", label: "Largest N.A. breaches recovered" },
                     { metric: "100%", label: "Senior-led engagements" },
                   ].map((stat) => (
                     <div key={stat.label} className="flex items-baseline gap-4">
                       <span
                         className="text-2xl md:text-3xl font-bold shrink-0"
                         style={{ color: "#F36F21" }}
                       >
                         {stat.metric}
                       </span>
                       <span className="text-sm" style={{ color: "#5A5A58" }}>
                         {stat.label}
                       </span>
                     </div>
                   ))}
                 </div>
               </div>
             </div>
           </div>
           <div className="md:col-span-6 flex items-start justify-center">
             <img
               src={whiteboardExpert}
               alt="Senior consultant working"
               className="w-full h-auto rounded-none border border-zinc-800/10 object-cover"
             />
           </div>
         </div>
      </section>


      {/* ═══════════════════════════════════════
          SECTION 4 — Certifications Carousel
      ═══════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4" style={{ backgroundColor: "#FFFFFF" }}>
         <div className="max-w-5xl mx-auto text-center">
           <div className="flex items-center justify-center gap-3 mb-6">
             <Award size={20} style={{ color: "#F36F21" }} />
             <span
               className="text-[10px] font-bold uppercase tracking-[0.2em]"
               style={{ color: "#F36F21" }}
             >
               Team Credentials
             </span>
           </div>
           <h2
             className="text-2xl md:text-4xl font-bold mb-4"
             style={{ color: "#3B3B39" }}
           >
             ACCREDITED TO LEAD YOUR MISSION
           </h2>
           <p
             className="text-base leading-relaxed mb-10 max-w-2xl mx-auto"
             style={{ color: "#5A5A58" }}
           >
             Our team holds the industry's most respected credentials — CISSP, CISA, CISM — not as
             badges of honor, but as the tools we use to ensure your strategy is bulletproof.
           </p>

          {/* Carousel */}
          <div className={`${glassCard} p-6`}>
            <Carousel
              opts={{ align: "start", loop: true, duration: 40 }}
              plugins={[autoplayPlugin.current]}
              className="w-full"
            >
              <CarouselContent>
                {certifications.map((cert) => (
                  <CarouselItem key={cert.name} className="basis-1/3 md:basis-1/5 lg:basis-1/6">
                    <div className="flex items-center justify-center h-17 px-2">
                      <img
                        src={cert.logo}
                        alt={cert.name}
                        className="max-h-13 w-auto object-contain transition-all duration-300"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
              <p
                className="text-base text-center mt-6 leading-relaxed font-bold"
                style={{ color: "#5A5A58" }}
              >
                Expertise you can trust.
                <br />
                Standards to fuel your scale.
                <br />
                The oversight to reach the finish line.
              </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION 5 — Transitional CTA
      ═══════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-4" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-2xl md:text-4xl font-bold mb-8"
            style={{ color: "#3B3B39" }}
          >
            Ready to bridge the gap to enterprise trust?
          </h2>
          <Link to="/contact">
            <Button
              className="text-white font-bold text-sm uppercase tracking-[0.15em] px-10 h-12 rounded-none hover:shadow-lg transition-all duration-200"
              style={{ backgroundColor: "#F36F21" }}
            >
              Meet Your Guides
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompanyPage;
