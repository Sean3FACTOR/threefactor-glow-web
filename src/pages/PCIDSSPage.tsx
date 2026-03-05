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
  Award,
  DollarSign,
  Microscope,
  Compass,
  ShieldCheck,
  CreditCard,
  Network,
  Lock,
  RefreshCw,
  BarChart3,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
import pciHeroImg from "@/assets/pci-dss-hero.jpg";
import hexagonGraphic from "@/assets/hexagon-network-hero.png";
import consultationMeetingImg from "@/assets/pci/consultation-meeting.jpg";
import consultationIntroImg from "@/assets/pci/consultation-intro.jpg";

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
            Get a PCI Scope Reduction Plan
          </DialogTitle>
          <DialogDescription className="text-sm text-slate-500">
            30-minute scoping call → roadmap → readiness or ROC proposal
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
              Primary environment *
            </Label>
            <select name="environmentType" required className={selectClasses}>
              <option value="">Select…</option>
              {["Card-present", "Card-not-present", "Service Provider", "Mixed"].map(
                (o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                )
              )}
            </select>
          </div>
          <div>
            <Label className="font-mono text-xs uppercase tracking-wider text-slate-900">
              Likely validation path *
            </Label>
            <select name="validationPath" required className={selectClasses}>
              <option value="">Select…</option>
              {["SAQ", "ROC", "Not sure"].map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label className="font-mono text-xs uppercase tracking-wider text-slate-900">
              Anything we should know?
            </Label>
            <Textarea
              name="notes"
              className="mt-1 border-slate-300 text-slate-900"
              rows={3}
            />
          </div>
          <Button
            type="submit"
            disabled={submitting}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold"
          >
            {submitting ? "Submitting…" : "Request Scope Reduction Plan"}
          </Button>
          <p className="text-xs text-center text-slate-500">
            We'll follow up to schedule a 30-minute call.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

/* ─── Stepper Data ─── */
const pciSteps = [
  {
    icon: Target,
    stage: 1,
    title: "Inventory Identification",
    duration: "1–2 Weeks",
    durationWeeks: 2,
    desc: "We map your data flows to ensure no hidden risks are left for the auditor to find.",
    details: [
      "Map all cardholder data flows and storage locations",
      "Identify all systems, people, and processes touching CHD",
      "Document network diagrams and data flow diagrams",
      "Establish baseline inventory for scope decisions",
    ],
  },
  {
    icon: Layers,
    stage: 2,
    title: "Scope Reduction and CDE Minimization",
    duration: "2–5 Months",
    durationWeeks: 14,
    desc: "We shrink your audit footprint before building controls, saving months of effort and cost.",
    details: [
      "Network segmentation and CDE isolation design",
      "Tokenization and outsourcing strategy assessment",
      "Eliminate unnecessary CHD storage and processing",
      "Document reduced scope boundaries for auditor review",
    ],
  },
  {
    icon: Microscope,
    stage: 3,
    title: "Gap Assessment",
    duration: "4–6 Weeks",
    durationWeeks: 5,
    desc: "We identify exactly which requirements need attention so remediation is targeted, not scattered.",
    details: [
      "Requirement-by-requirement gap analysis against PCI DSS v4.0",
      "Prioritise findings by risk and effort",
      "Evidence maturity assessment for each requirement",
      "Produce actionable remediation roadmap",
    ],
  },
  {
    icon: Cog,
    stage: 4,
    title: "Remediation Execution",
    duration: "2–5 Months",
    durationWeeks: 14,
    desc: "We guide implementation so controls are built right the first time, avoiding rework during assessment.",
    details: [
      "Technical control implementation support",
      "Policy and procedure development",
      "Evidence-by-design workflows for ongoing compliance",
      "Iterative validation against PCI DSS requirements",
    ],
  },
  {
    icon: Eye,
    stage: 5,
    title: "Formal PCI DSS Assessment (When Required)",
    duration: "4–6 Weeks",
    durationWeeks: 5,
    desc: "We ensure you walk into your assessment confident, with a complete evidence pack and rehearsed responses.",
    details: [
      "Pre-assessment validation and mock walkthroughs",
      "Evidence pack compilation and completeness review",
      "Auditor coordination and request management",
      "Close-out support for any findings",
    ],
  },
  {
    icon: FileText,
    stage: 6,
    title: "Reporting",
    duration: "1–2 Weeks",
    durationWeeks: 2,
    desc: "We finalize documentation so your compliance posture is defensible and auditor-ready.",
    details: [
      "SAQ completion support or ROC report finalization",
      "Attestation of Compliance (AOC) preparation",
      "Executive summary and compliance status documentation",
      "Remediation tracking for any open items",
    ],
  },
  {
    icon: RefreshCw,
    stage: 7,
    title: "Ongoing Maintenance",
    duration: "Ongoing",
    durationWeeks: 4,
    desc: "We keep your program current so revalidation is a routine exercise, not a scramble.",
    details: [
      "Defined evidence cadence and ownership model",
      "Scope drift detection and boundary monitoring",
      "Change management aligned to PCI boundaries",
      "Annual revalidation preparation and support",
    ],
  },
];

const totalWeeks = pciSteps.reduce((sum, s) => sum + s.durationWeeks, 0);

/* ─── Interactive Timeline ─── */
const InteractiveTimeline = ({ openModal }: { openModal: () => void }) => {
  const [active, setActive] = useState(0);
  const step = pciSteps[active];
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
              width: `${(active / (pciSteps.length - 1)) * 100}%`,
              backgroundColor: "#3B3B39",
            }}
          />
          <div className="relative flex justify-between">
            {pciSteps.map((s, i) => {
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
          {pciSteps.map((s, i) => {
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
                Get a Fixed-Price Proposal
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
          {pciSteps.map((s, i) => {
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
                    Get a Fixed-Price Proposal
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
const PCIDSSPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const [col1Open, setCol1Open] = useState(true);
  const [col2Open, setCol2Open] = useState(true);

  useEffect(() => {
    document.title = "PCI DSS Scope Reduction, Readiness & QSA Assessments | 3FACTOR";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Reduce PCI DSS scope first—then achieve compliance with less cost and complexity. Scope reduction, readiness, remediation, and QSA-led Reports on Compliance (ROC) for eCommerce merchants, SaaS platforms, and service providers."
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

  const openModal = () => setModalOpen(true);

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
      <ProposalModal open={modalOpen} onOpenChange={setModalOpen} />

      {/* ═══ HERO BANNER (Dark Gray) ═══ */}
      <section className="relative min-h-[420px] flex items-center justify-center overflow-hidden pt-24 md:pt-32">
        <div className="absolute inset-0 z-0">
          <img src={pciHeroImg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
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
            Get PCI DSS Certified.
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-medium text-white/85 max-w-2xl mx-auto">
            Achieve compliance efficiently and confidently with 3FACTOR's scope-first approach.
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
              Start with a PCI Scope Reduction Plan
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ INTRODUCTION (White) ═══ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-start">
            {/* Column 1: What is PCI DSS? */}
            <div className="px-6 lg:px-8">
              <Accordion type="single" collapsible defaultValue="what-is">
                <AccordionItem value="what-is" className="border-none">
                  <AccordionTrigger className="py-0 hover:no-underline">
                    <h3 className="text-base md:text-lg font-bold uppercase tracking-wide text-slate-800">
                      WHAT IS PCI DSS?
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm md:text-base text-slate-700 leading-relaxed mt-4">
                      PCI DSS is the global security standard for protecting cardholder data. Compliance is required for any organization storing, processing, or transmitting payment card data.
                    </p>
                    <p className="text-sm md:text-base text-slate-700 leading-relaxed mt-3">
                      Scope definition and reduction are the primary drivers of cost and complexity, more than any individual PCI DSS requirement. Reducing scope first dramatically simplifies the path to compliance.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
                    "You're an eCommerce merchant, SaaS platform, or service provider handling payments",
                    "Your PCI scope feels larger than it should be",
                    "You're unsure whether SAQ or ROC is the right path",
                    "You want a practical, sustainable PCI program, not a one-year project",
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
              <img src={consultationIntroImg} alt="PCI DSS consultation meeting" className="w-full h-80 object-cover border border-slate-200" />
              <div className="absolute bottom-[30%] left-2 p-5 shadow-xl max-w-[280px] z-10 bg-white border border-slate-200">
                <p className="text-xs font-semibold text-[#3B3B39] leading-relaxed">
                  "As QSAs, we don't just prepare you for certification—we guide you through the entire journey. Whether you work with a chosen auditor or need us to perform the validation, we ensure a defensible, audit-proof result."
                </p>
                <p className="text-xs text-slate-500 mt-2">Tania Nicholas — Director of PCI Compliance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SUB-NAV BAR ═══ */}
      <section id="quick-nav" className="py-6 px-6" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="container mx-auto max-w-6xl">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 text-center mb-4">Quick Nav</h3>
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

      {/* ═══ THE APPROACH — Scope Reduction First (Off-White) ═══ */}
      <section id="approach" className="py-24 border-y border-slate-200" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-8">
              THE 3<span className="text-[#F36F21]">FACTOR</span> APPROACH
            </h2>
            <ul className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed space-y-3 list-disc list-outside pl-5 text-left inline-block">
              <li>We treat scope reduction as a formal design exercise before implementing controls.</li>
              <li>The goal is to minimize the Cardholder Data Environment (CDE), isolate systems, and reduce audit scope and operational burden through the use of:</li>
            </ul>
          </div>

          {/* Scope Reduction Flip Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {[
              { front: "Card data flow mapping and elimination of stored CHD", back: "Identifying where card data is stored, processed, or transmitted and removing it from systems where it is not strictly required.", icon: Network },
              { front: "Network and CDE segmentation", back: "Using firewalls and network configurations to isolate the systems that handle card data from the rest of the corporate network.", icon: Shield },
              { front: "Tokenization", back: "Replacing sensitive cardholder data with non-sensitive 'tokens' that have no extrinsic value, ensuring the actual data is stored in a more secure, centralized location, or with a third-party.", icon: Lock },
              { front: "Outsourcing Strategies", back: "Transfer payment processing to PCI-compliant third-party service providers (such as using a hosted payment page) to delegate the primary burden of security to the provider.", icon: CreditCard },
              { front: "Boundary validation and documentation", back: "Formally defining and documenting the physical and logical boundaries of the CDE to ensure no 'scope creep' occurs over time.", icon: FileCheck },
              { front: "SAQ vs ROC determination support", back: "Analyzing which validation path is required, as a Self-Assessment Questionnaire (SAQ) often allows for a more narrowly defined and reduced scope compared to a full Report on Compliance (ROC).", icon: Compass },
            ].map((tile, i) => {
              const TileIcon = tile.icon;
              return (
                <div key={i} className="group perspective h-48">
                  <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <div className="absolute inset-0 [backface-visibility:hidden] bg-white border border-slate-200 p-6 flex flex-col items-center justify-center text-center">
                      <TileIcon className="w-6 h-6 text-orange-500 mb-3" />
                      <p className="text-sm font-semibold text-slate-700 leading-relaxed">{tile.front}</p>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-slate-200 border border-slate-300 p-6 flex items-center justify-center text-center">
                      <p className="text-sm text-slate-700 leading-relaxed">{tile.back}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-lg text-slate-600 text-center mb-4">
            Take a look at our 7-step certification lifecycle from scope reduction to audit readiness.
          </p>
          <h3 className="text-xl font-semibold text-slate-800 text-center mb-12">
            The 7-Step Certification Lifecycle
          </h3>
          <InteractiveTimeline openModal={openModal} />

          <div className="flex justify-center mt-10">
            <Button
              onClick={openModal}
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-base px-10 py-6"
            >
              Start with A PCI Scope Reduction Plan
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

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
              PCI DSS as an operating model, not a seasonal scramble. We operationalize scope management, evidence collection, and control validation as part of business-as-usual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: BarChart3,
                title: "Scope Reduction & CDE Minimization",
                items: [
                  "Card data flow mapping and elimination",
                  "Network segmentation and CDE isolation",
                  "Tokenization strategy and outsourcing assessment",
                  "Scope documentation for auditors",
                ],
              },
              {
                icon: FileText,
                title: "Readiness & Documentation",
                items: [
                  "Gap assessment against PCI DSS requirements",
                  "Policy and procedure development",
                  "Network diagrams and data flow documentation",
                  "Evidence model design and ownership mapping",
                ],
              },
              {
                icon: Cog,
                title: "Remediation & Control Implementation",
                items: [
                  "Prioritized remediation planning",
                  "Technical control implementation support",
                  "Pre-assessment validation and mock assessments",
                  "Rapid gap closure before formal audit",
                ],
              },
              {
                icon: RefreshCw,
                title: "Ongoing Maintenance & Revalidation",
                items: [
                  "Defined evidence cadence and ownership",
                  "Scope drift detection and management",
                  "Change management aligned to PCI boundaries",
                  "Annual revalidation preparation",
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
              Start with a PCI Scope Reduction Plan
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <BackToNavButton />
        </div>
      </section>

      {/* ═══ VALIDATION PATHS (Off-White) ═══ */}
      <section className="py-16" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-10 text-center">
            PCI DSS VALIDATION PATHS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-slate-50 rounded-lg">
                <ClipboardCheck className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold uppercase text-slate-900 text-center mb-3">
                Self-Assessment Questionnaire (SAQ)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed text-center">
                For eligible merchants and service providers with defined reduced scope. Scope reduction often determines SAQ eligibility and which SAQ type applies.
              </p>
            </div>
            <div className="bg-white border border-slate-200 p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-slate-50 rounded-lg">
                <Award className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-bold uppercase text-slate-900 text-center mb-3">
                Report on Compliance (ROC)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed text-center">
                Formal assessment performed by a Qualified Security Assessor (QSA). Required for all Level 1 merchants and Level 1 service providers. 3FACTOR performs ROCs as a QSA firm.
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
              { icon: Target, stat: "Scope Reduction Specialists", label: "We reduce scope first to minimize cost, effort, and audit complexity" },
              { icon: Shield, stat: "QSA Assessment Capability", label: "Integrated readiness and QSA-led ROC assessments under one roof" },
              { icon: Layers, stat: "Framework Alignment", label: "Aligned with ISO 27001 and SOC 2 programs for control reuse" },
              { icon: Microscope, stat: "Evidence-on-Demand", label: "Controls produce evidence as a byproduct of normal operations" },
              { icon: DollarSign, stat: "Fixed-Price Roadmap", label: "Clear scope boundaries and fixed pricing before execution begins" },
              { icon: RefreshCw, stat: "Sustainable Programs", label: "Sustainable PCI programs that operate year-round—not one-year projects" },
            ].map((item, i) => {
              const StatIcon = item.icon;
              return (
                <div key={i} className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-slate-50 rounded-lg">
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
            How we help you avoid common PCI DSS pitfalls
          </h3>
          <p className="text-sm text-slate-500 mb-2">
            Our approach solves the frequent industry traps that sink most compliance projects.
          </p>
          <p className="text-lg text-slate-600 mb-10">
            Our scope-first approach ensures your PCI program stays lean and effective.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-6 border-b border-slate-300 pb-3">
                  Common failure modes
                </h3>
                <ul className="space-y-6">
                  {[
                    { problem: "Entire environments in scope unnecessarily", detail: "Without deliberate scope reduction, everything touching payment flows gets pulled in." },
                    { problem: "Card data touching more systems than required", detail: "Data flows haven't been mapped or optimized for minimal exposure." },
                    { problem: "POS and eCommerce networks not segmented", detail: "Flat network architectures dramatically expand PCI scope." },
                    { problem: "Scope creep year over year", detail: "Without ongoing scope management, boundaries drift and complexity grows." },
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
                    { fix: "Formal scope reduction before control implementation", detail: "We map card data flows and eliminate unnecessary exposure before building controls." },
                    { fix: "Network segmentation and CDE isolation", detail: "Properly segmented environments dramatically reduce assessment effort." },
                    { fix: "Tokenization and outsourcing strategies", detail: "Remove card data from your environment entirely where possible." },
                    { fix: "Continuous scope management", detail: "Ongoing boundary monitoring prevents drift and keeps scope lean." },
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
                src={consultationMeetingImg}
                alt="PCI DSS compliance consultation"
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
            {[
              { q: "Do you perform the actual PCI DSS assessment?", a: "Yes. As a QSA firm, 3FACTOR performs formal Reports on Compliance (ROC) for Level 1 merchants and service providers. We also support SAQ completion for eligible organizations." },
              { q: "What's the difference between SAQ and ROC?", a: "A Self-Assessment Questionnaire (SAQ) is a self-validation tool for eligible merchants with reduced scope. A Report on Compliance (ROC) is a formal assessment performed by a QSA, required for Level 1 merchants and service providers." },
              { q: "How long before we receive scope reduction recommendations?", a: "Typically it takes 2 - 4 weeks to conduct interviews and complete the initial scope reduction exercise, including card data flow mapping, segmentation review, and boundary documentation and report issuance. Scope reduction will depend on the complexity of the environment and the agility of the organization, and can take approximately 2 - 5 months." },
              { q: "Can you integrate PCI DSS with ISO 27001 or SOC 2?", a: "Yes. We design controls and evidence for reuse across frameworks where relevant, reducing duplication and total compliance effort." },
              { q: "What does fixed-price mean?", a: "A defined set of deliverables and responsibilities that protects timeline and pricing. Out-of-scope items are agreed separately before work begins." },
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-slate-200">
                <AccordionTrigger className="text-sm font-semibold text-left hover:no-underline text-slate-900">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm leading-relaxed text-slate-600">{item.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 text-slate-900">
            Start with scope reduction
          </h2>
          <p className="text-sm text-slate-600 mb-8 max-w-xl mx-auto">
            Book a 30-minute call to receive a PCI scope reduction roadmap, SAQ vs ROC clarity, and a fixed-price readiness or ROC proposal.
          </p>
          <Button
            onClick={openModal}
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-base px-10 py-6"
          >
            Start with a PCI Scope Reduction Plan
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PCIDSSPage;
