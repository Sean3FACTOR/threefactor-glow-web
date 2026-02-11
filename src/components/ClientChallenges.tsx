import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface SolutionCard {
  title: string;
  description: string;
}

interface ChallengeRow {
  id: string;
  headline: string;
  concern: string;
  solutions: SolutionCard[];
  ctaLabel: string;
  ctaHref: string;
}

const challenges: ChallengeRow[] = [
{
  id: "CH-01",
  headline: "When the finish line moves right as you're about to close",
  concern:
  "We've worked for months to get this contract to the finish line, but now the client is asking for ISO 27001 to close. I'm worried that the audit process is going to stall our revenue right when we should be celebrating.",
  solutions: [
  { title: "ISO 27001 Readiness & Triage", description: "Confirm what's required and the fastest compliant path." },
  { title: "Scoping & Boundary Definition", description: "Set a defensible, achievable certification scope." },
  { title: "Gap Assessment & Roadmap", description: "Identify control/evidence gaps and deliver a timebound plan." },
  { title: "ISMS Implementation Support", description: "Build risk, SoA, policies, core controls, evidence routines." },
  { title: "Pre-Certification Audit Support", description: "Mock audit, fix findings, prepare confidently." }],

  ctaLabel: "Book an ISO 27001 Readiness Call",
  ctaHref: "/contact"
},
{
  id: "CH-02",
  headline: "You need a SOC 2, but you can't afford a resource drain",
  concern:
  "A major prospect just requested a SOC 2 Type 2 report. I know we need it to move up-market, but I can't afford to pull my best engineers off our product roadmap for the next three months just to prep for an auditor.",
  solutions: [
  { title: "SOC 2 Scoping & Criteria Mapping", description: "Define scope and applicable Trust Services Criteria." },
  { title: "SOC 2 Readiness Assessment", description: "Assess control design and evidence maturity." },
  { title: "Remediation Support", description: "Strengthen access, change, incidents, vendors, and logging." },
  { title: "Evidence Collection & Prep", description: "Set an evidence cadence that runs in the background." },
  { title: "SOC 2 Audit Support", description: "Support walkthroughs, sampling, and close-out to report." }],

  ctaLabel: "Request a SOC 2 Readiness Assessment",
  ctaHref: "/contact"
},
{
  id: "CH-03",
  headline: "Cutting through the noise of rules you haven't met yet",
  concern:
  "I keep hearing about NIS2 and DORA, but the legal requirements feel like a moving target. I'm not even sure if we're in scope yet, and I'd rather address it now than find out we're behind when a regulator comes knocking.",
  solutions: [
  { title: "Regulatory Applicability Assessment", description: "Confirm obligations and practical expectations." },
  { title: "Regulatory Gap Assessment", description: "Map requirements to current controls and identify gaps." },
  { title: "Compliance Roadmap", description: "Establish owners, reporting, and a delivery plan." },
  { title: "Operational Resilience", description: "Implement IR, testing, supplier oversight, and reporting." },
  { title: "Ongoing Advisory (vCISO)", description: "Maintain momentum and stay regulator-ready." }],

  ctaLabel: "Book a NIS2/DORA Scope Call",
  ctaHref: "/contact"
},
{
  id: "CH-04",
  headline: "End the 'Groundhog Day' of repetitive security audits",
  concern:
  "It feels like we're answering the same security questions over and over for different frameworks. There has to be a more efficient way to manage our NIST, HIPAA, or PCI requirements without repeating the same work three times.",
  solutions: [
  { title: "Integrated GRC Strategy", description: "Harmonize standards into one unified control set." },
  { title: "Common Controls & Evidence Reuse", description: "Standardize controls, testing, and evidence sources." },
  { title: "Audit Programme Management", description: "One audit calendar and one operating cadence." },
  { title: "Continuous Compliance", description: "Workflows and tooling to reduce manual duplication." },
  { title: "Multi-Framework Support", description: "Coordinate requests and keep audits moving smoothly." }],

  ctaLabel: "Request an Integrated Compliance Blueprint",
  ctaHref: "/contact"
}];


function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

const ChallengeRowComponent = ({ row, index }: {row: ChallengeRow;index: number;}) => {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-10 gap-0"
      style={{ borderTop: index > 0 ? "1px solid rgba(255,255,255,0.08)" : undefined }}>

      {/* Left Column — The Challenge */}
      <div
        className="lg:col-span-4 p-8 md:p-12 flex flex-col justify-center"
        style={{ backgroundColor: "#323230" }}>

        <span className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: "#F36F21" }}>
          [{row.id}] — THE CHALLENGE
        </span>
        <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-6" style={{ color: "#FFFFFF" }}>
          {row.headline}
        </h3>
        <div className="h-px w-16 mb-6" style={{ backgroundColor: "#F36F21" }} />
        <p
          className="text-base md:text-lg leading-relaxed italic"
          style={{ color: "rgba(255,255,255,0.75)", fontFamily: "Georgia, 'Times New Roman', serif" }}>

          "{row.concern}"
        </p>
      </div>

      {/* Right Column — Solution Grid */}
      <div className="lg:col-span-6 p-8 md:p-12" style={{ backgroundColor: "#3B3B39" }}>
        <span className="font-mono text-xs tracking-widest uppercase mb-6 block" style={{ color: "rgba(255,255,255,0.4)" }}>
          THE SOLUTION
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {row.solutions.map((sol, i) =>
          <div
            key={sol.title}
            className="p-5 transition-all duration-500"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E5E7EB",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(24px)",
              transitionDelay: `${i * 100}ms`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#F36F21";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(243,111,33,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#E5E7EB";
              e.currentTarget.style.boxShadow = "none";
            }}>

              <h4 className="font-bold text-sm uppercase tracking-tight mb-2" style={{ color: "#3B3B39" }}>
                {sol.title}
              </h4>
              <p className="text-xs leading-relaxed" style={{ color: "#646464" }}>
                {sol.description}
              </p>
            </div>
          )}
        </div>
        <Link
          to={row.ctaHref}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wide transition-all duration-300"
          style={{
            backgroundColor: "#F36F21",
            color: "#FFFFFF",
            border: "1px solid #F36F21"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#F36F21";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#F36F21";
            e.currentTarget.style.color = "#FFFFFF";
          }}>

          {row.ctaLabel}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>);

};

const ClientChallenges = () => {
  return (
    <section id="client-challenges" className="py-20" style={{ backgroundColor: "#3B3B39", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="container mx-auto px-4 mb-12">
        <span className="font-mono text-xs tracking-widest uppercase mb-4 block" style={{ color: "#F36F21" }}>
          [SEC-02] — REAL CHALLENGES
        </span>
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4" style={{ color: "#FFFFFF" }}>
          3<span style={{ color: "#F36F21" }}>FACTOR</span> Client Challenges
        </h2>
        <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
          We meet you where you are and guide you to the finish line.


                    


        
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {challenges.map((row, i) => <ChallengeRowComponent key={row.id} row={row} index={i} />)}
      </div>
    </section>);};export default ClientChallenges;