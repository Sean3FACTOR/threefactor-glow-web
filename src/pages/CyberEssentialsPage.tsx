import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToNavButton from "@/components/BackToNavButton";
import { Link } from "react-router-dom";
import {
  Shield,
  Lock,
  Users,
  Bug,
  RefreshCw,
  Globe,
  Search,
  Wrench,
  FileCheck,
  ScanLine,
  Award,
  Compass,
  FlaskConical,
  Activity,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Zap,
  ChevronRight,
  Target,
  ShieldCheck,
  ClipboardCheck,
  Layers,
  Microscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImg from "@/assets/cyber-essentials-hero.jpg";
import hexagonGraphic from "@/assets/hexagon-network-hero.png";
import consultationImg from "@/assets/cyber-essentials-consultation.jpg";

/* ─── Data ─── */
const pillars = [
  { icon: Globe, title: "Firewalls", subtitle: "Boundary Security", text: "Creating a secure barrier between your internal network and the internet to block unauthorized access." },
  { icon: Lock, title: "Secure Configuration", subtitle: "System Hardening", text: "Stripping away unnecessary software and hardening systems against brute-force attacks." },
  { icon: Users, title: "User Access Control", subtitle: "Identity & MFA", text: "Ensuring only the right people have access to the right data, backed by mandatory Multi-Factor Authentication (MFA)." },
  { icon: Bug, title: "Malware Protection", subtitle: "Threat Prevention", text: "Implementing active scanning and application allow-listing to stop malicious code in its tracks." },
  { icon: RefreshCw, title: "Security Update Management", subtitle: "Patch Cadence", text: "Maintaining a strict 14-day patching cycle for all critical vulnerabilities." },
];

const comparisonRows = [
  { feature: "Assessment Type", basic: "Verified Self-Assessment", plus: "Independent Technical Testing" },
  { feature: "Vulnerability Scanning", basic: false, plus: true },
  { feature: "Malware Verification", basic: false, plus: true },
  { feature: "Authenticated Scans", basic: false, plus: true },
  { feature: "NCSC Certificate", basic: true, plus: true },
  { feature: "Digital Badge", basic: true, plus: true },
  { feature: "Supply Chain Assurance", basic: "Basic", plus: "Enhanced" },
  { feature: "Government Contract Eligible", basic: "Limited", plus: "Full" },
];

const faqs = [
  { q: "What is Cyber Essentials?", a: "A UK government-backed scheme (developed by the NCSC) designed to protect organizations from the most common, low-skill cyber attacks — the kind that look for weak passwords or out-of-date software." },
  { q: "What's the difference between Cyber Essentials and Cyber Essentials Plus?", a: "Cyber Essentials is a verified self-assessment. Cyber Essentials Plus adds independent technical testing including vulnerability scanning, malware verification, and authenticated scans." },
  { q: "Is it mandatory?", a: "It is mandatory for most UK Government tenders. Increasingly, private sector organisations (like major banks) require it from suppliers." },
  { q: "Do I get cyber insurance?", a: "For UK organisations with a turnover under £20m, achieving certification often includes free cyber liability insurance (arranged via IASME)." },
  { q: "How long does it take?", a: "Typically 4–6 weeks depending on your current posture. We manage the complexity so your team stays focused on business operations." },
];

const CellValue = ({ value, highlight }: { value: boolean | string; highlight?: boolean }) => {
  if (typeof value === "boolean") {
    return value ? (
      <CheckCircle2 className={`w-5 h-5 mx-auto ${highlight ? "text-orange-500" : "text-slate-400"}`} />
    ) : (
      <XCircle className="w-5 h-5 mx-auto text-slate-200" />
    );
  }
  return (
    <span className={`text-sm ${highlight ? "text-orange-600 font-semibold" : "text-slate-500"}`}>
      {value}
    </span>
  );
};

/* ─── Stepper Data ─── */
const ceSteps = [
  {
    icon: Target,
    stage: 1,
    title: "Scoping & Mapping",
    duration: "~1 Week",
    durationWeeks: 1,
    desc: "Define your network boundaries and identify all in-scope devices and cloud services.",
    details: [
      "Identify network boundaries and segmentation",
      "Map all in-scope devices, cloud services, and BYOD",
      "Determine Essentials vs Essentials Plus path",
      "Document scope for official submission",
    ],
  },
  {
    icon: Lock,
    stage: 2,
    title: "Technical Hardening",
    duration: "~2 Weeks",
    durationWeeks: 2,
    desc: "Remediate vulnerabilities, enforce MFA, and secure your firewalls.",
    details: [
      "Firewall configuration review and hardening",
      "Enforce MFA across all user accounts",
      "Secure configuration and system hardening",
      "Implement 14-day patching cycle for critical vulnerabilities",
    ],
  },
  {
    icon: ClipboardCheck,
    stage: 3,
    title: "Self-Assessment Mastery",
    duration: "~1 Week",
    durationWeeks: 1,
    desc: "Prepare your technical answers and documentation for official submission.",
    details: [
      "Prepare accurate answers for the self-assessment questionnaire",
      "Review documentation for completeness",
      "Pre-submission quality assurance check",
      "Coordinate with certification body",
    ],
  },
  {
    icon: ScanLine,
    stage: 4,
    title: "Independent Testing (Plus)",
    duration: "~1 Week",
    durationWeeks: 1,
    desc: "Support through the official authenticated scans and malware verification tests.",
    details: [
      "Vulnerability scanning across in-scope systems",
      "Authenticated scan execution and review",
      "Malware protection verification tests",
      "Rapid remediation of any findings",
    ],
  },
  {
    icon: Award,
    stage: 5,
    title: "Certification Awarded",
    duration: "~1 Week",
    durationWeeks: 1,
    desc: "Receive your official NCSC-recognized certificate and digital badge.",
    details: [
      "Official NCSC-recognized certificate issued",
      "Digital badge for marketing and tenders",
      "Cyber insurance eligibility confirmation",
      "Ongoing compliance guidance provided",
    ],
  },
];

const totalWeeks = ceSteps.reduce((sum, s) => sum + s.durationWeeks, 0);

/* ─── Interactive Timeline ─── */
const InteractiveTimeline = () => {
  const [active, setActive] = useState(0);
  const step = ceSteps[active];
  const Icon = step.icon;

  return (
    <div>
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="relative mb-4">
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-slate-200" />
          <div
            className="absolute top-6 left-0 h-0.5 transition-all duration-500"
            style={{
              width: `${(active / (ceSteps.length - 1)) * 100}%`,
              backgroundColor: "#3B3B39",
            }}
          />
          <div className="relative flex justify-between">
            {ceSteps.map((s, i) => {
              const StepIcon = s.icon;
              const isActive = i === active;
              const isPast = i < active;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="flex flex-col items-center gap-2 group relative z-10"
                >
                  <div
                    className={`w-12 h-12 flex items-center justify-center border-2 transition-all duration-300 ${
                      isActive
                        ? "border-orange-600 bg-orange-50"
                        : isPast
                        ? "border-[#3B3B39] bg-white"
                        : "border-slate-300 bg-white"
                    }`}
                  >
                    <StepIcon
                      className={`w-5 h-5 transition-colors duration-300 ${
                        isActive
                          ? "text-orange-600"
                          : isPast
                          ? "text-[#3B3B39]"
                          : "text-slate-400"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider max-w-[90px] text-center leading-tight ${
                      isActive ? "text-orange-600 font-bold" : "text-slate-500"
                    }`}
                  >
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex gap-px mb-8">
          {ceSteps.map((s, i) => {
            const widthPct = (s.durationWeeks / totalWeeks) * 100;
            return (
              <div key={i} style={{ width: `${widthPct}%` }}>
                <div
                  className={`h-2 transition-colors duration-300 ${
                    i <= active ? "bg-orange-600" : "bg-slate-100"
                  }`}
                />
                <span className="text-[9px] font-mono text-slate-500 mt-1 block truncate">
                  {s.duration}
                </span>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-50 border border-slate-200 shadow-sm p-8 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-white border border-slate-300 flex-shrink-0">
                  <Icon className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-orange-600 uppercase tracking-wider">
                    Step {step.stage} · {step.duration}
                  </span>
                  <h3 className="text-lg font-bold uppercase text-slate-900">
                    {step.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">{step.desc}</p>
              <ul className="space-y-2 mb-6">
                {step.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-slate-900">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                    {d}
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button
                  className="text-white font-semibold"
                  style={{ backgroundColor: "#3B3B39" }}
                >
                  Book Your Free Scoping Call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="hidden lg:flex items-center justify-center overflow-hidden">
              <img
                src={hexagonGraphic}
                alt=""
                className="w-full h-auto max-h-[336px] object-contain opacity-80"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <Accordion type="single" collapsible defaultValue="stage-0">
          {ceSteps.map((s, i) => {
            const StepIcon = s.icon;
            return (
              <AccordionItem key={i} value={`stage-${i}`} className="border-b border-slate-200">
                <AccordionTrigger className="py-4 hover:no-underline">
                  <div className="flex items-center gap-3 min-h-[44px]">
                    <div className="w-10 h-10 flex items-center justify-center border border-slate-300 bg-white flex-shrink-0">
                      <StepIcon className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] font-mono text-orange-600 uppercase tracking-wider block">
                        Step {s.stage} · {s.duration}
                      </span>
                      <span className="text-sm font-bold uppercase text-slate-900">
                        {s.title}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-[52px]">
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">{s.desc}</p>
                  <ul className="space-y-2 mb-4">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-slate-900">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button
                      size="sm"
                      className="text-white font-semibold"
                      style={{ backgroundColor: "#3B3B39" }}
                    >
                      Book Your Free Scoping Call
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

/* ─── Sub-Nav Links ─── */
const subNavLinks = [
  { label: "The Approach", target: "approach", icon: Compass },
  { label: "What We Deliver", target: "deliverables", icon: FileCheck },
  { label: "Why 3FACTOR", target: "why-3factor", icon: ShieldCheck },
];

/* ─── Page ─── */
const CyberEssentialsPage = () => {
  const [activeNav, setActiveNav] = useState("");
  const [col1Open, setCol1Open] = useState(true);
  const [col2Open, setCol2Open] = useState(true);

  useEffect(() => {
    document.title = "Cyber Essentials & Cyber Essentials Plus | 3FACTOR";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Get Cyber Essentials and Cyber Essentials Plus certified with expert-led guidance from 3FACTOR. NCSC-recognized certification for UK organisations."
      );
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = 120;
      for (const link of [...subNavLinks].reverse()) {
        const el = document.getElementById(link.target);
        if (el && el.getBoundingClientRect().top <= offset) {
          setActiveNav(link.target);
          return;
        }
      }
      setActiveNav("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 112;
      const y = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* ═══ HERO BANNER (Dark Gray) ═══ */}
      <section className="relative min-h-[420px] flex items-center justify-center overflow-hidden pt-24 md:pt-32">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(59,59,57,0.92) 0%, rgba(59,59,57,0.78) 50%, rgba(59,59,57,0.65) 100%)",
            }}
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full py-16 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-[1.1] text-white mx-auto max-w-4xl">
            Secure your future with{" "}
            <span className="text-white/90">Cyber Essentials</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-medium text-white/85 max-w-2xl mx-auto">
            NCSC-recognized certification with 3<span className="text-white">FACTOR</span>'s expert-led guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link to="/contact">
              <Button
                size="lg"
                className="group font-semibold transition-all text-white"
                style={{ backgroundColor: "#3B3B39", border: "1px solid rgba(255,255,255,0.3)" }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#3B3B39"; }}
              >
                Get Certified with 3FACTOR
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ INTRODUCTION (White) ═══ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-start">
            {/* Column 1: What is Cyber Essentials? */}
            <div className="px-6 lg:px-8">
              <button
                onClick={() => setCol1Open(!col1Open)}
                className="flex lg:hidden items-center justify-between w-full text-left mb-4 cursor-pointer"
              >
                <h3 className="text-base md:text-lg font-bold uppercase tracking-wide text-slate-800">
                  WHAT IS CYBER ESSENTIALS?
                </h3>
                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${col1Open ? "rotate-180" : ""}`} />
              </button>
              <h3 className="hidden lg:block text-base md:text-lg font-bold uppercase tracking-wide text-slate-800 mb-4">
                WHAT IS CYBER ESSENTIALS?
              </h3>
              <div className={`overflow-hidden transition-all duration-300 lg:!max-h-none lg:!opacity-100 ${col1Open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  A UK government-backed scheme (developed by the NCSC) designed to protect organisations from the most common cyber attacks: the kind that look for "unlocked doors" like weak passwords or out-of-date software.
                </p>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed mt-3">
                  Certified organisations make 92% fewer insurance claims than those without it.
                </p>
              </div>
            </div>

            {/* Column 2: You're in the right place if... */}
            <div className="px-6 lg:px-8 border-t lg:border-t-0 lg:border-l lg:border-r border-slate-200 pt-8 lg:pt-0">
              <button
                onClick={() => setCol2Open(!col2Open)}
                className="flex lg:hidden items-center justify-between w-full text-left mb-4 cursor-pointer"
              >
                <h3 className="text-base md:text-lg font-bold uppercase tracking-wide text-slate-800">
                  YOU'RE IN THE RIGHT PLACE IF…
                </h3>
                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${col2Open ? "rotate-180" : ""}`} />
              </button>
              <h3 className="hidden lg:block text-base md:text-lg font-bold uppercase tracking-wide text-slate-800 mb-4">
                YOU'RE IN THE RIGHT PLACE IF…
              </h3>
              <div className={`overflow-hidden transition-all duration-300 lg:!max-h-none lg:!opacity-100 ${col2Open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col gap-3">
                  {[
                    "You need Cyber Essentials for a UK Government tender",
                    "You want to demonstrate security to clients and partners",
                    "You want certification without operational disruption",
                    "You need a clear Essentials → Essentials Plus path",
                  ].map((text, i) => (
                    <div key={i} className="p-5 text-sm text-slate-700 bg-slate-50 border border-slate-200 shadow-sm">
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3: Image & Disclaimer */}
            <div className="relative pb-8 px-6 lg:px-8 border-t lg:border-t-0 pt-8 lg:pt-0">
              <img src={consultationImg} alt="Cyber Essentials consultation" className="w-full h-80 object-cover border border-slate-200" />
              <div className="absolute -bottom-4 left-2 p-5 shadow-xl max-w-[280px] z-10 bg-white border border-slate-200">
                <p className="text-xs font-semibold text-[#3B3B39] leading-relaxed">
                  "We don't just get you certified; we keep you certified with ongoing monitoring, automated patching, and a clear upgrade path."
                </p>
                <p className="text-xs text-slate-500 mt-2">3FACTOR — Cyber Essentials Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SUB-NAV BAR ═══ */}
      <section id="quick-nav" className="py-6 px-6" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {subNavLinks.map((link) => {
              const LinkIcon = link.icon;
              return (
                <button
                  key={link.target}
                  onClick={() => scrollTo(link.target)}
                  className={`w-full sm:w-auto border px-6 py-3 transition-all duration-200 cursor-pointer flex items-center justify-center gap-3 font-medium text-sm ${
                    activeNav === link.target
                      ? "text-orange-600 border-orange-500 bg-[#5A5A58] text-white"
                      : "text-white border-[#5A5A58] bg-[#5A5A58] hover:text-orange-400 hover:border-orange-400/50"
                  }`}
                >
                  <LinkIcon className="w-5 h-5" />
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ THE APPROACH (Off-White) ═══ */}
      <section id="approach" className="py-24 border-y border-slate-200" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-8">
              THE 3<span className="text-[#F36F21]">FACTOR</span> APPROACH
            </h2>
            <ul className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed space-y-3 list-disc list-outside pl-5 text-left inline-block">
              <li>We manage the complexity so your team stays focused on business operations.</li>
              <li>From mapping your scope to configuring advanced MFA, we ensure every technical requirement is met.</li>
              <li>Take a look at our 5-step process from scoping to certification.</li>
            </ul>
          </div>

          {/* 5 Pillars Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {pillars.map((p, i) => {
              const PillarIcon = p.icon;
              return (
                <div key={i} className="bg-white p-5 border border-slate-200 text-center">
                  <PillarIcon className="w-6 h-6 text-orange-500 mx-auto mb-3" />
                  <p className="text-xs font-semibold text-slate-700 leading-relaxed">{p.title}</p>
                </div>
              );
            })}
          </div>

          <h3 className="text-xl font-semibold text-slate-800 text-center mb-12">
            The 5-Step Process
          </h3>
          <InteractiveTimeline />
          <BackToNavButton />
        </div>
      </section>
      <section id="deliverables" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-4">
              WHAT WE DELIVER
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">
              Certification as an operating model, not a one-time project. We operationalize technical controls, evidence collection, and ongoing compliance as part of business-as-usual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: Globe,
                title: "Boundary Security & Hardening",
                items: [
                  "Firewall configuration review and remediation",
                  "System hardening and secure configuration",
                  "Network boundary documentation",
                  "BYOD and cloud service scoping",
                ],
              },
              {
                icon: Users,
                title: "Access Control & MFA",
                items: [
                  "User access control review and enforcement",
                  "Mandatory MFA implementation",
                  "Privileged access management",
                  "Account lifecycle documentation",
                ],
              },
              {
                icon: Bug,
                title: "Malware & Patch Management",
                items: [
                  "Active scanning and application allow-listing",
                  "14-day critical patching cycle enforcement",
                  "Automated patching where possible",
                  "Vulnerability management cadence",
                ],
              },
              {
                icon: Award,
                title: "Certification & Ongoing Compliance",
                items: [
                  "Self-assessment preparation and submission",
                  "Plus: independent vulnerability scanning support",
                  "NCSC certificate and digital badge",
                  "Ongoing monitoring and recertification guidance",
                ],
              },
            ].map((card, i) => {
              const CardIcon = card.icon;
              return (
                <div key={i} className="bg-white border border-slate-200 shadow-sm p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-slate-50 border border-slate-200">
                      <CardIcon className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="text-base font-bold uppercase text-slate-900">{card.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Terminal CTA */}
          <div className="text-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white hover:bg-slate-100 text-slate-900 font-semibold text-base px-10 py-6 border border-slate-300 shadow-sm"
              >
                Book Your Free Scoping Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
          <BackToNavButton />
        </div>
      </section>

      {/* ═══ ESSENTIALS vs PLUS COMPARISON (Off-White) ═══ */}
      <section className="py-16" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-10 text-center">
            ESSENTIALS vs. ESSENTIALS PLUS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-slate-200 p-8 shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-slate-50">
                <ClipboardCheck className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold uppercase text-slate-900 text-center mb-3">
                Cyber Essentials
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed text-center">
                Verified self-assessment covering the 5 key technical controls. The foundation for demonstrating baseline security and winning UK Government tenders.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-8 shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-slate-50">
                <ScanLine className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold uppercase text-slate-900 text-center mb-3">
                Essentials Plus
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed text-center">
                Adds independent technical testing including vulnerability scanning, authenticated scans, and malware verification. Enhanced supply chain assurance and full government contract eligibility.
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="max-w-3xl mx-auto border overflow-hidden border-slate-200">
            <div className="grid grid-cols-3 bg-white border-b border-slate-200">
              <div className="p-4 font-mono text-xs uppercase tracking-wider text-slate-500">Feature</div>
              <div className="p-4 text-center font-mono text-xs uppercase tracking-wider text-slate-500 border-l border-slate-200">Cyber Essentials</div>
              <div className="p-4 text-center font-mono text-xs uppercase tracking-wider font-bold text-orange-600 border-l border-slate-200">Essentials Plus</div>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 ${i < comparisonRows.length - 1 ? "border-b border-slate-200" : ""}`}
                style={{ backgroundColor: i % 2 === 0 ? "white" : "#F8F9FA" }}
              >
                <div className="p-4 text-sm font-medium text-slate-800">{row.feature}</div>
                <div className="p-4 text-center border-l border-slate-200">
                  <CellValue value={row.basic} />
                </div>
                <div className="p-4 text-center border-l border-slate-200">
                  <CellValue value={row.plus} highlight />
                </div>
              </div>
            ))}
          </div>
          <BackToNavButton />
        </div>
      </section>
      <section id="why-3factor" className="py-20" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-12 text-center">
            WHY ORGANISATIONS CHOOSE 3<span className="text-[#F36F21]">FACTOR</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Compass, stat: "Complexity Managed", label: 'From mapping your "scope" to configuring advanced MFA, we ensure every technical requirement is met.' },
              { icon: FlaskConical, stat: "Pre-Audit Dry Runs", label: 'Before the official assessment, we perform simulated vulnerability scans and malware tests to guarantee a "Pass" result.' },
              { icon: Activity, stat: "Continuous Compliance", label: "We don't just get you certified; we keep you certified with ongoing monitoring and automated patching." },
              { icon: Shield, stat: "NCSC Expertise", label: "Deep understanding of the NCSC scheme requirements and Version 16 (2026) standards." },
              { icon: Award, stat: "Plus Readiness", label: "We prepare you for Essentials Plus from day one, so upgrading is seamless." },
              { icon: FileCheck, stat: "Senior-Led Delivery", label: "Practical decisions, fast progress. No template theatre." },
            ].map((item, i) => {
              const StatIcon = item.icon;
              return (
                <div key={i} className="bg-white p-6 border border-slate-200 shadow-sm text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-slate-50">
                    <StatIcon className="w-6 h-6 text-orange-500" />
                  </div>
                  <p className="text-lg font-bold text-slate-900 mb-1">{item.stat}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.label}</p>
                </div>
              );
            })}
          </div>

          {/* Pitfalls */}
          <h3 className="text-lg md:text-xl font-bold text-slate-900 uppercase mb-2">
            HOW WE HELP YOU AVOID COMMON PITFALLS
          </h3>
          <p className="text-lg text-slate-600 mb-10">
            Our expert-led approach ensures your certification stays on track.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-6 border-b border-slate-300 pb-3">
                  Common failure modes
                </h3>
                <ul className="space-y-6">
                  {[
                    { problem: "Scope not properly defined", detail: "Without clear boundary mapping, devices and cloud services get missed or unnecessarily included." },
                    { problem: "MFA not enforced across all accounts", detail: "Partial MFA deployment is a common reason for failed assessments." },
                    { problem: "Patching cycles inconsistent", detail: "Missing the 14-day critical patching window leads to automatic failures." },
                    { problem: "No preparation for Plus testing", detail: "Organisations attempt Plus without simulated scans and fail the independent assessment." },
                  ].map((item, i) => (
                    <li key={i}>
                      <div className="flex items-start gap-3">
                        <XCircle className="w-4 h-4 mt-1 flex-shrink-0 text-slate-400" />
                        <div>
                          <p className="text-sm font-semibold text-slate-700">{item.problem}</p>
                          <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.detail}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-orange-500 mb-6 border-b border-orange-500/30 pb-3">
                  How we solve it
                </h3>
                <ul className="space-y-6">
                  {[
                    { fix: "Comprehensive scope mapping from day one", detail: "We identify all in-scope devices, cloud services, and BYOD before any technical work begins." },
                    { fix: "MFA enforcement across all user accounts", detail: "We verify MFA is correctly configured for every account, including cloud and remote access." },
                    { fix: "Automated patching and cadence monitoring", detail: "We establish the 14-day cycle and set up monitoring to prevent drift." },
                    { fix: "Pre-audit simulated testing before Plus submission", detail: "We run vulnerability scans and malware tests internally to guarantee a clean result." },
                  ].map((item, i) => (
                    <li key={i}>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0 text-orange-500" />
                        <div>
                          <p className="text-sm font-semibold text-slate-800">{item.fix}</p>
                          <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.detail}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5">
              <img
                src={consultationImg}
                alt="Cyber Essentials compliance consultation"
                className="w-full h-full object-cover shadow-md min-h-[350px] opacity-80"
                style={{ border: "1px solid rgba(0,0,0,0.1)" }} />
            </div>
          </div>
          <BackToNavButton />
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-10">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-slate-200">
                <AccordionTrigger className="text-sm font-semibold text-left hover:no-underline text-slate-900">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm leading-relaxed text-slate-600">{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            }}
          />
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 text-slate-900">
            Ready to secure your business?
          </h2>
          <p className="text-sm text-slate-600 mb-8 max-w-xl mx-auto">
            Let 3<span className="text-[#F36F21]">FACTOR</span> take the complexity out of Cyber Essentials.
            Book a free scoping call and take the first step toward certification.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-base px-10 py-6"
            >
              Book Your Free Scoping Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CyberEssentialsPage;
