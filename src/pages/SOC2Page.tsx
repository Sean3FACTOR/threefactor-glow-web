import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToNavButton from "@/components/BackToNavButton";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Shield,
  Target,
  Layers,
  ClipboardCheck,
  Users,
  FileText,
  FileCheck,
  Cog,
  Eye,
  RefreshCw,
  BarChart3,
  DollarSign,
  Microscope,
  Compass,
  ShieldCheck,
  Zap,
  Download,
  ClipboardList,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import heroImg from "@/assets/soc2-hero.jpg";
import hexagonGraphic from "@/assets/hexagon-network-hero.png";
import consultationImg from "@/assets/homepage/conference-meeting.jpg";

/* ─── Proposal Modal ─── */
const ProposalModal = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onOpenChange(false);
      toast({
        title: "Request received",
        description: "Thanks, we'll reach out to schedule a 30-minute call.",
      });
    }, 800);
  };

  const selectClasses =
    "flex h-10 w-full border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-white border-slate-200">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold uppercase tracking-wide text-slate-900">
            Get a Fixed-Price SOC 2 Proposal
          </DialogTitle>
          <DialogDescription className="text-sm text-slate-500">
            Right-fit scope (often Security + Availability) · Type 1 + Type 2 setup
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          {[
            { id: "workEmail", label: "Work email *", type: "email" },
            { id: "company", label: "Company *", type: "text" },
          ].map((f) => (
            <div key={f.id}>
              <Label
                htmlFor={f.id}
                className="font-mono text-xs uppercase tracking-wider text-slate-900"
              >
                {f.label}
              </Label>
              <Input
                id={f.id}
                name={f.id}
                type={f.type}
                required
                className="mt-1 border-slate-300 text-slate-900"
              />
            </div>
          ))}
          <div>
            <Label className="font-mono text-xs uppercase tracking-wider text-slate-900">
              Target Type 2 period *
            </Label>
            <select name="type2Period" required className={selectClasses}>
              <option value="">Select…</option>
              {["3 months", "6 months", "12 months", "Not sure"].map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
          <div>
            <Label className="font-mono text-xs uppercase tracking-wider text-slate-900">
              Likely criteria *
            </Label>
            <select name="criteria" required className={selectClasses}>
              <option value="">Select…</option>
              {["Security + Availability", "Security only", "Other / Not sure"].map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
          <div>
            <Label className="font-mono text-xs uppercase tracking-wider text-slate-900">
              ISO 27001 status *
            </Label>
            <select name="isoCertified" required className={selectClasses}>
              <option value="">Select…</option>
              {["Certified", "In implementation", "Not started"].map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
          <div>
            <Label className="font-mono text-xs uppercase tracking-wider text-slate-900">
              Primary driver (optional)
            </Label>
            <Textarea
              name="driver"
              className="mt-1 border-slate-300 text-slate-900"
              rows={3}
              placeholder="e.g. enterprise deal requirement, investor due diligence…"
            />
          </div>
          <Button
            type="submit"
            disabled={submitting}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold"
          >
            {submitting ? "Submitting…" : "Request Proposal"}
          </Button>
          <p className="text-xs text-center text-slate-500">
            We'll follow up to schedule a 30-minute call and confirm scope.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

/* ─── Stepper Data ─── */
const soc2Steps = [
  {
    icon: Target,
    stage: 1,
    title: "Scope & TSC Mapping",
    duration: "~2 Weeks",
    durationWeeks: 2,
    desc: "Define boundaries and select criteria based on customer expectations: right-fit scope, nothing more.",
    details: [
      "Define system boundaries and in-scope components",
      "Map customer requirements to Trust Services Criteria",
      "Recommend right-fit scope (typically Security + Availability)",
      "Document subservice organizations and dependencies",
    ],
  },
  {
    icon: ClipboardCheck,
    stage: 2,
    title: "Readiness Assessment",
    duration: "~3 Weeks",
    durationWeeks: 3,
    desc: "Confirm control design and evidence gaps with a prioritised remediation plan.",
    details: [
      "Evaluate existing controls against selected TSC",
      "Identify evidence maturity and collection gaps",
      "Produce prioritised remediation roadmap",
      "Confirm Type 1 → Type 2 timeline",
    ],
  },
  {
    icon: Cog,
    stage: 3,
    title: "Remediation + Documentation",
    duration: "4–6 Weeks",
    durationWeeks: 5,
    desc: "Implement controls and complete the Section 3 system description.",
    details: [
      "Implement or refine control statements aligned to TSC",
      "Draft and refine Section 3 system description narrative",
      "Create audit-ready documentation pack",
      "Align procedures with operational reality",
    ],
  },
  {
    icon: FileCheck,
    stage: 4,
    title: "Type 1 Preparation",
    duration: "~2 Weeks",
    durationWeeks: 2,
    desc: "Prepare the Type 1 evidence pack and coordinate with the CPA firm.",
    details: [
      "TSC-aligned control statements finalised",
      "Evidence register setup for Type 2 readiness",
      "Auditor coordination and walkthrough support",
      "Pre-audit validation of control design",
    ],
  },
  {
    icon: BarChart3,
    stage: 5,
    title: "Type 2 Program Setup",
    duration: "~3 Weeks",
    durationWeeks: 3,
    desc: "Establish monitoring, evidence cadence, and sampling readiness before the operating period begins.",
    details: [
      "Evidence cadence, owners, sources, and retention defined",
      "Low-level monitoring checks established",
      "Sampling readiness model in place",
      "Evidence-on-demand foundations operational",
    ],
  },
  {
    icon: RefreshCw,
    stage: 6,
    title: "Type 2 Period Support",
    duration: "3–12 Months",
    durationWeeks: 6,
    desc: "Optional ongoing support through the operating period: evidence ops, auditor liaison, and close-out.",
    details: [
      "Monthly evidence ops and sampling readiness",
      "Auditor liaison and walkthrough support",
      "Exceptions management",
      "Close-out and next-cycle improvements",
    ],
  },
];

const totalWeeks = soc2Steps.reduce((sum, s) => sum + s.durationWeeks, 0);

/* ─── Interactive Timeline ─── */
const InteractiveTimeline = ({ openModal }: { openModal: () => void }) => {
  const [active, setActive] = useState(0);
  const step = soc2Steps[active];
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
              width: `${(active / (soc2Steps.length - 1)) * 100}%`,
              backgroundColor: "#3B3B39",
            }}
          />
          <div className="relative flex justify-between">
            {soc2Steps.map((s, i) => {
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
          {soc2Steps.map((s, i) => {
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
              <Button
                onClick={openModal}
                className="text-white font-semibold"
                style={{ backgroundColor: "#3B3B39" }}
              >
                Get a Fixed-Price SOC 2 Proposal
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
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
          {soc2Steps.map((s, i) => {
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
                  <Button
                    onClick={openModal}
                    size="sm"
                    className="text-white font-semibold"
                    style={{ backgroundColor: "#3B3B39" }}
                  >
                    Get a Fixed-Price SOC 2 Proposal
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
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
const SOC2Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const [col1Open, setCol1Open] = useState(true);
  const [col2Open, setCol2Open] = useState(true);

  useEffect(() => {
    document.title = "SOC 2 Readiness, Type 1 & Type 2 Setup | 3FACTOR";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Fixed-price SOC 2 readiness, Type 1 preparation, Section 3 system description support, and Type 2 continuous compliance program setup. Right-fit scope aligned to customer requirements."
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

  const openModal = () => {
    setModalOpen(true);
    try { (window as any).gtag?.("event", "soc2_primary_cta_click"); } catch {}
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 112;
      const y = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const faqs = [
    {
      q: "Do you issue the SOC 2 report?",
      a: "No. A licensed CPA firm issues the report. We prepare you, set up the program, and support the audit process.",
    },
    {
      q: "Do you work with different auditors?",
      a: "Yes. We support SOC 2 engagements with multiple Tier 1 and Tier 2 CPA firms and adapt the evidence and walkthrough approach to your chosen auditor's testing style.",
    },
    {
      q: "Which Trust Services Criteria should we include?",
      a: "Security is required and Availability is the most common add-on. We translate customer requirements into TSC coverage and recommend a right-fit scope: enough to meet expectations, without inflating the audit.",
    },
    {
      q: "What's included in the fixed-price proposal?",
      a: "SOC 2 readiness, Type 1 preparation, Section 3 system description support, and Type 2 program setup (evidence + monitoring cadence). Type 2 period support is available as an optional add-on.",
    },
    {
      q: "Can we do Type 1 now and Type 2 later?",
      a: "Yes. We'll build the program so Type 2 can start cleanly when you're ready, with evidence foundations already in place.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ProposalModal open={modalOpen} onOpenChange={setModalOpen} />

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
            Get SOC 2 Certified.
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-medium text-white/85 max-w-2xl mx-auto">
            Build a scalable, audit-ready foundation with 3<span className="text-white">FACTOR</span>'s right-fit approach to SOC 2.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button
              onClick={openModal}
              size="lg"
              className="group font-semibold transition-all text-white"
              style={{ backgroundColor: "#3B3B39", border: "1px solid rgba(255,255,255,0.3)" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#3B3B39"; }}
            >
              Get a Fixed-Price SOC 2 Proposal
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ INTRODUCTION (White) ═══ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-start">
            {/* Column 1: What is SOC 2? */}
            <div className="px-6 lg:px-8">
              <button
                onClick={() => setCol1Open(!col1Open)}
                className="flex lg:hidden items-center justify-between w-full text-left mb-4 cursor-pointer"
              >
                <h3 className="text-base md:text-lg font-bold uppercase tracking-wide text-slate-800">
                  WHAT IS SOC 2?
                </h3>
                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${col1Open ? "rotate-180" : ""}`} />
              </button>
              <h3 className="hidden lg:block text-base md:text-lg font-bold uppercase tracking-wide text-slate-800 mb-4">
                WHAT IS SOC 2?
              </h3>
              <div className={`overflow-hidden transition-all duration-300 lg:!max-h-none lg:!opacity-100 ${col1Open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  SOC 2 evaluates controls against the Trust Services Criteria (TSC). It provides independent assurance of your security and operational controls for B2B and SaaS markets.
                </p>
                <p className="text-sm md:text-base text-slate-700 leading-relaxed mt-3">
                  Scope selection and criteria alignment are the primary drivers of audit efficiency. Choosing the right-fit scope (typically Security + Availability) prevents unnecessary complexity.
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
                    "Security questionnaires are slowing your deals",
                    "You need a clear Type 1 → Type 2 approach",
                    "You want evidence to be routine, not reactive",
                    "You want a right-fit scope (often Security + Availability)",
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
              <img src={consultationImg} alt="SOC 2 consultation meeting" className="w-full h-80 object-cover border border-slate-200" />
              <div className="absolute -bottom-4 left-2 p-5 shadow-xl max-w-[280px] z-10 bg-white border border-slate-200">
                <p className="text-xs font-semibold text-[#3B3B39] leading-relaxed">
                  "We are not your auditor. We support SOC 2 engagements with multiple Tier 1 and Tier 2 CPA firms, and we have a strong track record of successful SOC 2 audits across clients and industries."
                </p>
                <p className="text-xs text-slate-500 mt-2">Marcus Atkins — Director of Compliance Services</p>
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
              <li>We design a right-fit SOC 2 scope aligned to your customer requirements, not a maximalist checkbox exercise.</li>
              <li>The goal is to establish controls, evidence, and monitoring that make Type 2 sustainable from day one.</li>
              <li>Take a look at our 6-step process from scoping to Type 2 readiness.</li>
            </ul>
          </div>

          {/* SOC 2 Approach Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {[
              { icon: Target, text: "Right-fit TSC scope selection" },
              { icon: Shield, text: "Control design aligned to operations" },
              { icon: FileText, text: "Section 3 system description" },
              { icon: BarChart3, text: "Evidence model and monitoring setup" },
              { icon: RefreshCw, text: "Type 2 cadence and sampling readiness" },
            ].map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <div key={i} className="bg-white p-5 border border-slate-200 text-center">
                  <ItemIcon className="w-6 h-6 text-orange-500 mx-auto mb-3" />
                  <p className="text-xs font-semibold text-slate-700 leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>

          <h3 className="text-xl font-semibold text-slate-800 text-center mb-12">
            The 6-Step Process
          </h3>
          <InteractiveTimeline openModal={openModal} />
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
              SOC 2 as an operating model, not a one-time project. We operationalize scope management, evidence collection, and control validation as part of business-as-usual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: ClipboardList,
                title: "Readiness & Gap Analysis",
                items: [
                  "Scope and boundary definition",
                  "Customer requirements → TSC selection (right-fit scope)",
                  "Control design + evidence maturity review",
                  "Roadmap and Type 1 → Type 2 plan",
                ],
              },
              {
                icon: FileText,
                title: "Type 1 Preparation & Section 3",
                items: [
                  "TSC-aligned control statements",
                  "Draft and refine Section 3 system description",
                  "Audit-ready documentation pack",
                  "Auditor coordination support",
                ],
              },
              {
                icon: BarChart3,
                title: "Type 2 Program Setup",
                items: [
                  "Evidence cadence, owners, sources, and retention",
                  "Low-level monitoring checks",
                  "Sampling readiness model",
                  "Evidence-on-demand foundations",
                ],
              },
              {
                icon: RefreshCw,
                title: "Ongoing Type 2 Period Support",
                items: [
                  "Monthly evidence ops and sampling readiness",
                  "Auditor liaison and walkthrough support",
                  "Exceptions management",
                  "Close-out and next-cycle improvements",
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
            <Button
              onClick={openModal}
              size="lg"
              className="bg-white hover:bg-slate-100 text-slate-900 font-semibold text-base px-10 py-6 border border-slate-300 shadow-sm"
            >
              Get a Fixed-Price SOC 2 Proposal
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ ISO 27001 BRIDGE (Off-White) ═══ */}
      <section className="py-16" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-10 text-center">
            ISO 27001 → SOC 2: A LOGICAL PROGRESSION
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 p-8 shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-slate-50">
                <Layers className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold uppercase text-slate-900 text-center mb-3">
                Type 1 Leverage
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed text-center">
                If you're already ISO 27001 certified, SOC 2 Type 1 is often a light lift. ISO 27001 establishes the management system to design risk-based controls. SOC 2 then provides external attestation aligned to the TSC.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-8 shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-slate-50">
                <RefreshCw className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold uppercase text-slate-900 text-center mb-3">
                Type 2 Success
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed text-center">
                Type 2 succeeds with monitoring and evidence cadence already established through ISO 27001 operations. Reuse controls and evidence alongside ISO 27001 where relevant.
              </p>
            </div>
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
              { icon: Users, stat: "Auditor-Effective", label: "Strong track record supporting Tier 1 and Tier 2 CPA firms" },
              { icon: Target, stat: "Right-Fit Scope", label: "Typically Security + Availability, aligned to customer needs" },
              { icon: Microscope, stat: "Evidence by Design", label: "Monitoring + cadence established before Type 2 starts" },
              { icon: Zap, stat: "Low Friction", label: "Clear owners and sources, minimal disruption to delivery teams" },
              { icon: Layers, stat: "Integrated Program", label: "Reuse controls and evidence alongside ISO 27001 where relevant" },
              { icon: Shield, stat: "Senior-Led Delivery", label: "Practical decisions, fast progress. No template theatre." },
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
            HOW WE HELP YOU AVOID COMMON SOC 2 PITFALLS
          </h3>
          <p className="text-lg text-slate-600 mb-10">
            Our right-fit approach ensures your SOC 2 program stays lean and effective.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-6 border-b border-slate-300 pb-3">
                  Common failure modes
                </h3>
                <ul className="space-y-6">
                  {[
                    { problem: "Evidence collection is inconsistent across the operating period", detail: "Without a defined cadence, evidence gathering becomes a last-minute scramble." },
                    { problem: "Control ownership is unclear", detail: "No named responsible party leads to gaps and finger-pointing during walkthroughs." },
                    { problem: "Monitoring checks not defined before Type 2 starts", detail: "Reactive monitoring leads to sampling failures and audit exceptions." },
                    { problem: "Over-scoped criteria inflating audit complexity", detail: "Including unnecessary TSC adds cost and effort without customer benefit." },
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
                    { fix: "Defined evidence cadence and ownership from day one", detail: "Every control has a named owner, source, and collection schedule before Type 2 begins." },
                    { fix: "Monitoring checks established before the operating period", detail: "Lightweight checks ensure controls operate continuously, not just at audit time." },
                    { fix: "Right-fit scope aligned to customer requirements", detail: "We recommend the criteria your customers actually need, avoiding unnecessary inflation." },
                    { fix: "Sampling readiness built into the program", detail: "Evidence registers are designed to support sampling at any point during the period." },
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
                alt="SOC 2 compliance consultation"
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

          {/* FAQ Schema */}
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
            Ready to reduce SOC 2 friction?
          </h2>
          <p className="text-sm text-slate-600 mb-8 max-w-xl mx-auto">
            Book a 30-minute call to receive a tailored plan and fixed-price proposal for Type 1 + Type 2 program setup.
          </p>
          <Button
            onClick={openModal}
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-base px-10 py-6"
          >
            Get a Fixed-Price SOC 2 Proposal
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SOC2Page;
