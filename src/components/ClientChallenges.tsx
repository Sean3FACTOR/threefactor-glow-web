import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

interface SolutionCard {
  title: string;
  description: string;
}

interface ChallengeRow {
  id: string;
  headline: string;
  solutionHeader: string;
  concern: string;
  solutions: SolutionCard[];
  ctaLabel: string;
  ctaHref: string;
}

const challenges: ChallengeRow[] = [
  {
    id: "CH-01",
    headline: "When the finish line moves right as you're about to close",
    solutionHeader: "The ISO 27001 Revenue Accelerator",
    concern:
      "We've worked for months to get this contract to the finish line, but now the client is asking for ISO 27001 to close. I'm worried that the audit process is going to stall our revenue right when we should be celebrating.",
    solutions: [
      { title: "Readiness & Triage", description: "Confirm what's required and the fastest compliant path." },
      { title: "Scoping & Boundary", description: "Set a defensible, achievable certification scope." },
      { title: "Gap Assessment", description: "Identify control/evidence gaps and deliver a timebound plan." },
      { title: "Implementation Support", description: "Build risk, SoA, policies, core controls, evidence routines." },
      { title: "Pre-Cert Audit Support", description: "Mock audit, fix findings, prepare confidently." },
    ],
    ctaLabel: "Book an ISO 27001 Readiness Call",
    ctaHref: "/contact",
  },
  {
    id: "CH-02",
    headline: "You need a SOC 2, but you can't afford a resource drain",
    solutionHeader: "The SOC 2 Fast-Track Programme",
    concern:
      "A major prospect just requested a SOC 2 Type 2 report. I know we need it to move up-market, but I can't afford to pull my best engineers off our product roadmap for the next three months just to prep for an auditor.",
    solutions: [
      { title: "Scoping & Criteria Mapping", description: "Define scope and applicable Trust Services Criteria." },
      { title: "Readiness Assessment", description: "Assess control design and evidence maturity." },
      { title: "Remediation Support", description: "Strengthen access, change, incidents, vendors, and logging." },
      { title: "Evidence Collection & Prep", description: "Set an evidence cadence that runs in the background." },
      { title: "Audit Support", description: "Support walkthroughs, sampling, and close-out to report." },
    ],
    ctaLabel: "Request a SOC 2 Readiness Assessment",
    ctaHref: "/contact",
  },
  {
    id: "CH-03",
    headline: "Cutting through the noise of rules you haven't met yet",
    solutionHeader: "The NIS2 & DORA Compliance Navigator",
    concern:
      "I keep hearing about NIS2 and DORA, but the legal requirements feel like a moving target. I'm not even sure if we're in scope yet, and I'd rather address it now than find out we're behind when a regulator comes knocking.",
    solutions: [
      { title: "Applicability Assessment", description: "Confirm obligations and practical expectations." },
      { title: "Regulatory Gap Assessment", description: "Map requirements to current controls and identify gaps." },
      { title: "Compliance Roadmap", description: "Establish owners, reporting, and a delivery plan." },
      { title: "Operational Resilience", description: "Implement IR, testing, supplier oversight, and reporting." },
      { title: "Ongoing Advisory (vCISO)", description: "Maintain momentum and stay regulator-ready." },
    ],
    ctaLabel: "Book a NIS2/DORA Scope Call",
    ctaHref: "/contact",
  },
  {
    id: "CH-04",
    headline: "End the 'Groundhog Day' of repetitive security audits",
    solutionHeader: "The Integrated Compliance Blueprint",
    concern:
      "It feels like we're answering the same security questions over and over for different frameworks. There has to be a more efficient way to manage our NIST, HIPAA, or PCI requirements without repeating the same work three times.",
    solutions: [
      { title: "Integrated GRC Strategy", description: "Harmonize standards into one unified control set." },
      { title: "Common Controls & Reuse", description: "Standardize controls, testing, and evidence sources." },
      { title: "Audit Programme Mgmt", description: "One audit calendar and one operating cadence." },
      { title: "Continuous Compliance", description: "Workflows and tooling to reduce manual duplication." },
      { title: "Multi-Framework Support", description: "Coordinate requests and keep audits moving smoothly." },
    ],
    ctaLabel: "Request an Integrated Compliance Blueprint",
    ctaHref: "/contact",
  },
];

/* ── Desktop: Tabbed two-column layout ── */

const DesktopChallenges = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const active = challenges[activeIndex];

  const handleSelect = (i: number) => {
    if (i === activeIndex) return;
    setFade(false);
    setTimeout(() => {
      setActiveIndex(i);
      setFade(true);
    }, 200);
  };

  return (
    <div className="grid grid-cols-10 gap-0" style={{ minHeight: 560 }}>
      {/* Left – Problem Navigation (40%) */}
      <div className="col-span-4 flex flex-col" style={{ backgroundColor: "#EDEDED" }}>
        {challenges.map((ch, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={ch.id}
              onClick={() => handleSelect(i)}
              className="text-left w-full px-8 py-6 transition-all duration-300 relative"
              style={{
                backgroundColor: isActive ? "#E5E7EB" : "transparent",
                borderLeft: isActive ? "3px solid #F36F21" : "3px solid transparent",
              }}
            >
              <h4
                className="text-sm font-bold uppercase tracking-tight leading-snug mb-2"
                style={{ color: isActive ? "#3B3B39" : "rgba(59,59,57,0.6)" }}
              >
                {ch.headline}
              </h4>
              <p
                className="text-xs leading-relaxed italic"
                style={{
                  color: isActive ? "#3B3B39" : "rgba(59,59,57,0.45)",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                "{ch.concern}"
              </p>
            </button>
          );
        })}
      </div>

      {/* Right – Solution Pane (60%) */}
      <div
        className="col-span-6 p-10 flex flex-col justify-center"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div
          className="transition-all duration-300"
          style={{ opacity: fade ? 1 : 0, transform: fade ? "translateX(0)" : "translateX(16px)" }}
        >
          <span
            className="font-mono text-[10px] tracking-widest uppercase block mb-3"
            style={{ color: "#F36F21" }}
          >
            THE SOLUTION
          </span>
          <h3
            className="text-2xl font-bold uppercase tracking-tight mb-6"
            style={{ color: "#3B3B39" }}
          >
            {active.solutionHeader}
          </h3>
          <div className="h-px w-16 mb-6" style={{ backgroundColor: "#F36F21" }} />

          <div className="grid grid-cols-2 gap-3 mb-8">
            {active.solutions.map((sol, i) => (
              <SolutionCardComponent key={`${active.id}-${i}`} sol={sol} index={i} />
            ))}
          </div>

          <Link
            to={active.ctaHref}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-300"
            style={{ backgroundColor: "#F36F21", color: "#FFFFFF", border: "1px solid #F36F21" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#F36F21";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#F36F21";
              e.currentTarget.style.color = "#FFFFFF";
            }}
          >
            {active.ctaLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

/* ── Solution Card ── */

const SolutionCardComponent = ({ sol, index }: { sol: SolutionCard; index: number }) => (
  <div
    className="p-4 transition-all duration-300"
    style={{ backgroundColor: "#F8F9FA", border: "1px solid #E5E7EB" }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = "#F36F21";
      e.currentTarget.style.boxShadow = "0 4px 20px rgba(243,111,33,0.1)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "#E5E7EB";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    <span className="font-mono text-[10px] tracking-widest mb-1 block" style={{ color: "#F36F21" }}>
      STEP {index + 1}
    </span>
    <h4 className="font-bold text-xs uppercase tracking-tight mb-1" style={{ color: "#3B3B39" }}>
      {sol.title}
    </h4>
    <p className="text-[11px] leading-relaxed" style={{ color: "#646464" }}>
      {sol.description}
    </p>
  </div>
);

/* ── Mobile: Accordion layout ── */

const MobileChallenges = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col">
      {challenges.map((ch, i) => {
        const isOpen = i === openIndex;
        return (
          <div key={ch.id} style={{ borderTop: i > 0 ? "1px solid rgba(59,59,57,0.08)" : undefined }}>
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 transition-all duration-300"
              style={{
                backgroundColor: isOpen ? "#E5E7EB" : "#EDEDED",
                borderLeft: isOpen ? "3px solid #F36F21" : "3px solid transparent",
              }}
            >
              <div className="flex-1">
                <h4
                  className="text-sm font-bold uppercase tracking-tight leading-snug"
                  style={{ color: isOpen ? "#3B3B39" : "rgba(59,59,57,0.6)" }}
                >
                  {ch.headline}
                </h4>
              </div>
              <ChevronDown
                className="w-5 h-5 shrink-0 mt-1 transition-transform duration-300"
                style={{
                  color: "rgba(59,59,57,0.4)",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            <div
              className="overflow-hidden transition-all duration-400"
              style={{
                maxHeight: isOpen ? 600 : 0,
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="p-6" style={{ backgroundColor: "#FFFFFF" }}>
                <p
                  className="text-sm leading-relaxed italic mb-5"
                  style={{ color: "rgba(59,59,57,0.85)", fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  "{ch.concern}"
                </p>
                <span
                  className="font-mono text-[10px] tracking-widest uppercase block mb-3"
                  style={{ color: "#F36F21" }}
                >
                  THE SOLUTION — {ch.solutionHeader}
                </span>
                <div className="grid grid-cols-1 gap-3 mb-6">
                  {ch.solutions.map((sol, j) => (
                    <SolutionCardComponent key={`${ch.id}-${j}`} sol={sol} index={j} />
                  ))}
                </div>
                <Link
                  to={ch.ctaHref}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold uppercase tracking-wide"
                  style={{ backgroundColor: "#F36F21", color: "#FFFFFF" }}
                >
                  {ch.ctaLabel}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* ── Main Section ── */

const ClientChallenges = () => {
  const isMobile = useIsMobile();

  return (
    <section
      id="client-challenges"
      className="py-20"
      style={{ backgroundColor: "#F8F9FA", borderTop: "1px solid rgba(59,59,57,0.08)" }}
    >
      <div className="container mx-auto px-4 mb-12">
        <h2
          className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4"
          style={{ color: "#3B3B39" }}
        >
          3<span style={{ color: "#F36F21" }}>FACTOR</span> Client Challenges
        </h2>
        <ul className="text-lg leading-relaxed space-y-2" style={{ color: "rgba(59,59,57,0.7)" }}>
          <li className="flex items-start gap-3">
            <span style={{ color: "#F36F21" }} className="shrink-0 leading-[1.75rem]">◆</span>
            <span style={{ color: "#3B3B39" }}>We meet you where you are and guide you to the finish line.</span>
          </li>
          <li className="flex items-start gap-3">
            <span style={{ color: "#F36F21" }} className="shrink-0 leading-[1.75rem]">◆</span>
            <span style={{ color: "#3B3B39" }}>We assist you through every step, including the final audit as your representative.</span>
          </li>
        </ul>
      </div>

      <div className="max-w-7xl mx-auto">
        {isMobile ? <MobileChallenges /> : <DesktopChallenges />}
      </div>
    </section>
  );
};

export default ClientChallenges;
