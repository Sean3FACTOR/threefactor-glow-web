import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
  Handshake,
  Clock,
  Award,
  DollarSign,
  Microscope,
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
            Get a Fixed-Price ISO 27001 Proposal
          </DialogTitle>
          <DialogDescription className="text-sm text-slate-500">
            30-minute call → tailored plan → fixed-price proposal
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          {[
            { id: "workEmail", label: "Work email *", type: "email" },
            { id: "fullName", label: "Name *", type: "text" },
            { id: "company", label: "Company *", type: "text" },
          ].map((f) => (
            <div key={f.id}>
              <Label htmlFor={f.id} className="font-mono text-xs uppercase tracking-wider text-slate-900">
                {f.label}
              </Label>
              <Input id={f.id} name={f.id} type={f.type} required className="mt-1 border-slate-300 text-slate-900" />
            </div>
          ))}
          <div>
            <Label className="font-mono text-xs uppercase tracking-wider text-slate-900">Role *</Label>
            <select name="role" required className={selectClasses}>
              <option value="">Select…</option>
              {["Security", "Compliance", "IT", "Executive", "Other"].map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
          <div>
            <Label className="font-mono text-xs uppercase tracking-wider text-slate-900">Target timeframe *</Label>
            <select name="timeframe" required className={selectClasses}>
              <option value="">Select…</option>
              {["0–3 months", "3–6 months", "6+ months", "Not sure"].map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
          <div>
            <Label className="font-mono text-xs uppercase tracking-wider text-slate-900">ISO 27001 status *</Label>
            <select name="isoStatus" required className={selectClasses}>
              <option value="">Select…</option>
              {["Starting", "In progress", "Need Stage 1/2 prep", "Maintaining"].map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
          <div>
            <Label className="font-mono text-xs uppercase tracking-wider text-slate-900">
              What's driving ISO 27001 right now?
            </Label>
            <Textarea name="driver" className="mt-1 border-slate-300 text-slate-900" rows={3} />
          </div>
          <Button type="submit" disabled={submitting} className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold">
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

/* ─── Timeline Data ─── */
const timelineSteps = [
  {
    icon: Target,
    title: "Scope & Boundary Definition",
    duration: "Weeks 1–2",
    desc: "Set a defensible, achievable certification scope aligned to business objectives.",
    details: [
      "Define ISMS boundaries and applicability",
      "Identify interested parties and requirements",
      "Map information assets and processes in scope",
      "Agree certification body expectations",
    ],
    cta: "Start with a scoping call to define your boundaries.",
  },
  {
    icon: Eye,
    title: "Readiness Assessment + Roadmap",
    duration: "Weeks 2–4",
    desc: "Identify gaps against ISO 27001 clauses and Annex A controls, then agree the delivery plan.",
    details: [
      "Clause-by-clause gap assessment",
      "Annex A control maturity review",
      "Prioritised roadmap with milestones",
      "Risk and resource planning",
    ],
    cta: "Get a clear picture of where you stand today.",
  },
  {
    icon: Layers,
    title: "ISMS Foundation Build",
    duration: "Weeks 3–8",
    desc: "Build the management system: risk methodology, Statement of Applicability, governance, and documentation.",
    details: [
      "Risk assessment methodology and initial risk treatment",
      "Statement of Applicability (SoA) creation",
      "Core ISMS policies and procedures",
      "Governance structure and management review cadence",
    ],
    cta: "This is the core of your certification — let's build it right.",
  },
  {
    icon: Cog,
    title: "Controls + Evidence Routines",
    duration: "Weeks 6–12",
    desc: "Embed controls into operations so evidence is produced naturally, not manufactured for audits.",
    details: [
      "Control implementation support and validation",
      "Evidence-by-design workflow setup",
      "Operational cadence and BAU integration",
      "Internal audit programme execution",
    ],
    cta: "Evidence should flow from work — not be created for auditors.",
  },
  {
    icon: ClipboardCheck,
    title: "Stage 1 / Stage 2 Preparation",
    duration: "Weeks 12–16",
    desc: "Audit pack assembly, mock walkthroughs, interview coaching, and close-out support.",
    details: [
      "Audit evidence pack compilation and review",
      "Mock audit walkthroughs and rehearsals",
      "Interview preparation for key personnel",
      "Auditor liaison and request management",
    ],
    cta: "Walk into your audit confident and prepared.",
  },
];

/* ─── Interactive Timeline ─── */
const InteractiveTimeline = ({ openModal }: { openModal: () => void }) => {
  const [active, setActive] = useState(0);
  const step = timelineSteps[active];
  const Icon = step.icon;

  return (
    <div>
      {/* Timeline bar */}
      <div className="relative mb-10">
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-slate-200" />
        <div
          className="absolute top-6 left-0 h-0.5 bg-orange-600 transition-all duration-500"
          style={{ width: `${(active / (timelineSteps.length - 1)) * 100}%` }}
        />
        <div className="relative flex justify-between">
          {timelineSteps.map((s, i) => {
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
                      ? "border-orange-600 bg-white"
                      : "border-slate-300 bg-white"
                  }`}
                >
                  <StepIcon
                    className={`w-5 h-5 transition-colors duration-300 ${
                      isActive || isPast ? "text-orange-600" : "text-slate-400"
                    }`}
                  />
                </div>
                <span
                  className={`text-[10px] font-mono uppercase tracking-wider max-w-[80px] text-center leading-tight hidden md:block ${
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

      {/* Duration bar */}
      <div className="flex gap-1 mb-6">
        {timelineSteps.map((s, i) => (
          <div key={i} className="flex-1">
            <div className={`h-1.5 transition-colors duration-300 ${i <= active ? "bg-orange-600" : "bg-slate-100"}`} />
            <span className="text-[10px] font-mono text-slate-500 mt-1 block">{s.duration}</span>
          </div>
        ))}
      </div>

      {/* Detail pane */}
      <div className="bg-white border border-slate-200 shadow-sm p-6 md:p-8 transition-all duration-300">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-10 h-10 flex items-center justify-center bg-orange-50 border border-orange-200 flex-shrink-0">
            <Icon className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-orange-600 uppercase tracking-wider">{step.duration}</span>
            <h3 className="text-lg font-bold uppercase text-slate-900">{step.title}</h3>
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
        <div className="bg-orange-50 border border-orange-200 p-5">
          <p className="text-sm text-slate-700 mb-3 italic">{step.cta}</p>
          <Button onClick={openModal} className="bg-orange-600 hover:bg-orange-700 text-white font-semibold">
            Get a Fixed-Price Proposal
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

/* ─── Vertical Tabs Data ─── */
const deliverableTabs = [
  {
    value: "readiness",
    label: "Readiness Assessment",
    icon: Eye,
    content: {
      title: "ISO 27001 Readiness Assessment (Gap Analysis)",
      desc: "Understand exactly where you stand. We assess your current controls, documentation, and evidence maturity against ISO 27001 requirements and deliver a prioritised roadmap.",
      items: [
        "Confirm scope and audit expectations",
        "Clause-by-clause gap assessment",
        "Annex A control maturity review",
        "Identify evidence gaps and quick wins",
        "Deliver a prioritised, actionable roadmap",
      ],
    },
  },
  {
    value: "isms",
    label: "ISMS Build",
    icon: Layers,
    content: {
      title: "ISMS Foundation Build & Implementation",
      desc: "We build the management system that will underpin your certification — risk methodology, Statement of Applicability, governance, policies, and evidence workflows.",
      items: [
        "Risk assessment methodology and initial risk treatment",
        "Statement of Applicability (SoA) creation and tailoring",
        "Tailored ISMS documentation set (policies & procedures)",
        "Governance structure and management review cadence",
        "Evidence-by-design workflows embedded into operations",
        "Control implementation support and validation",
      ],
    },
  },
  {
    value: "prep",
    label: "Pre-Certification Prep",
    icon: ClipboardCheck,
    content: {
      title: "Stage 1 / Stage 2 Audit Preparation",
      desc: "We ensure you walk into your certification audit confident and prepared, with a complete evidence pack and rehearsed interview responses.",
      items: [
        "Audit evidence pack compilation and review",
        "Mock audit walkthroughs and rehearsals",
        "Interview preparation for key personnel",
        "Auditor liaison and request management",
        "Close-out support for non-conformities",
      ],
    },
  },
  {
    value: "scope",
    label: "Included vs. Not Included",
    icon: FileText,
    content: {
      title: "Fixed-Scope Boundaries",
      desc: "Clear scope boundaries protect your timeline and pricing. Here's exactly what's in and out of scope.",
      included: [
        "Clauses and Controls Gap Assessment",
        "Scope recommendation + ISMS boundary definition",
        "Risk approach + risk treatment plan baseline",
        "SoA creation and tailoring",
        "Tailored ISMS documentation set",
        "Control implementation support",
        "Evidence-by-design workflows",
        "Audit readiness pack + mock walkthrough",
        "Stage 1/Stage 2 preparation + auditor liaison",
      ],
      excluded: [
        "Certification body services / issuing the certificate",
        "Tool licensing costs",
        "Technical remediation execution and control operation",
        "Pen testing / scanning services (partnered if required)",
      ],
    },
  },
];

/* ─── Sub-Nav Links ─── */
const subNavLinks = [
  { label: "The Approach", target: "approach" },
  { label: "The Roadmap", target: "roadmap" },
  { label: "Deliverables", target: "deliverables" },
  { label: "Why 3FACTOR", target: "why-3factor" },
];

/* ─── Page ─── */
const ISO27001Page = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  useEffect(() => {
    document.title = "ISO 27001 Implementation & Readiness | 3FACTOR";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Fixed-scope ISO 27001 readiness, implementation, and Stage 1/2 audit preparation. Integrated compliance framework approach to reuse controls across SOC 2, NIS2, DORA and more."
      );
    }
  }, []);

  // Track active section for sub-nav highlight
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
      const navOffset = 112; // main nav + sub-nav height
      const y = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ProposalModal open={modalOpen} onOpenChange={setModalOpen} />

      {/* ═══ HERO ═══ */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-orange-600 mb-6">
            ISO 27001 Certification Guide
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6">
            Secure Your Future with ISO 27001
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            We operationalise controls and evidence, not produce shelfware.
          </p>
          <Button
            onClick={openModal}
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-base px-10 py-6"
          >
            Get a Fixed-Price Proposal
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-xs text-slate-400 mt-4 font-mono">
            Typical implementation: 12–16 weeks · Fixed scope · No hidden fees
          </p>
        </div>
      </section>

      {/* ═══ STICKY SUB-NAV ═══ */}
      <nav className="sticky top-16 z-40 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-8 overflow-x-auto py-3">
            {subNavLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollTo(link.target)}
                className={`text-sm font-medium whitespace-nowrap transition-colors pb-1 border-b-2 ${
                  activeNav === link.target
                    ? "text-orange-600 border-orange-600"
                    : "text-slate-500 border-transparent hover:text-slate-900"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ═══ SEGMENT 1: THE APPROACH ═══ */}
      <section id="approach" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-3">[APPROACH]</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-16">
            Why ISO projects stall — and how we fix it
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
            {/* Left: Problems */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
                Common failure modes
              </h3>
              <ul className="space-y-5">
                {[
                  { problem: "Scope balloons and delivery slows", detail: "Without defensible boundaries, ISO projects expand silently until timelines collapse." },
                  { problem: "Controls exist, but evidence isn't audit-ready", detail: "Teams do the work but can't prove it when the auditor asks." },
                  { problem: "Work gets duplicated across audits", detail: "Every new framework feels like starting from scratch." },
                  { problem: "The ISMS becomes shelfware", detail: "Beautiful documentation that nobody uses after certification day." },
                ].map((item, i) => (
                  <li key={i} className="group">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 mt-1 flex-shrink-0 text-slate-400" />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.problem}</p>
                        <p className="text-sm text-slate-500 mt-0.5">{item.detail}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Solutions */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-orange-600 mb-6">
                How we solve it
              </h3>
              <ul className="space-y-5">
                {[
                  { fix: "Defensible scope boundaries set upfront", detail: "We define clear ISMS boundaries in week one so delivery stays on track." },
                  { fix: "Evidence-by-design workflows from day one", detail: "Controls produce evidence as a byproduct of normal operations." },
                  { fix: "Integrated control framework — build once, reuse everywhere", detail: "Map controls once across ISO, SOC 2, NIS2, DORA and more." },
                  { fix: "Operational ISMS embedded into BAU", detail: "A living system that runs day-to-day, not just at audit time." },
                ].map((item, i) => (
                  <li key={i}>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0 text-orange-600" />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.fix}</p>
                        <p className="text-sm text-slate-500 mt-0.5">{item.detail}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SEGMENT 2: THE ROADMAP ═══ */}
      <section id="roadmap" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-3">[ROADMAP]</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-4">
            The 5-step plan to certification readiness
          </h2>
          <p className="text-sm text-slate-600 mb-12 max-w-2xl">
            Click each step to explore the details. Delivered as a fixed-scope project — typically 12–16 weeks.
          </p>
          <InteractiveTimeline openModal={openModal} />
        </div>
      </section>

      {/* ═══ SEGMENT 3: DELIVERABLES (Vertical Tabs / Accordion) ═══ */}
      <section id="deliverables" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-3">[DELIVERABLES]</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-4">
            What we deliver
          </h2>
          <p className="text-sm text-slate-600 mb-12 max-w-2xl">
            Explore each phase of the fixed-scope project. Clear deliverables, no ambiguity.
          </p>

          {/* Desktop: Vertical Tabs */}
          <div className="hidden lg:block">
            <Tabs defaultValue="readiness" orientation="vertical" className="flex gap-8">
              <TabsList className="flex flex-col h-auto bg-transparent p-0 gap-1 min-w-[240px] shrink-0">
                {deliverableTabs.map((tab) => {
                  const TabIcon = tab.icon;
                  return (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="justify-start gap-3 px-4 py-3.5 text-left text-sm font-semibold rounded-none border border-transparent
                        data-[state=active]:bg-white data-[state=active]:border-slate-200 data-[state=active]:shadow-sm
                        data-[state=active]:text-orange-600 data-[state=inactive]:text-slate-600 data-[state=inactive]:hover:bg-slate-50
                        w-full transition-all"
                    >
                      <TabIcon className="w-4 h-4 shrink-0" />
                      {tab.label}
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {deliverableTabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value} className="mt-0 flex-1">
                  <div className="bg-white border border-slate-200 shadow-sm p-8">
                    <h3 className="text-lg font-bold uppercase text-slate-900 mb-3">
                      {tab.content.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-6 leading-relaxed">{tab.content.desc}</p>

                    {tab.content.items && (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {tab.content.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-slate-900">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {tab.content.included && (
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-widest text-orange-600 mb-3">Included</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {tab.content.included.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-slate-900">
                                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="border-t border-slate-200 pt-5">
                          <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">Not Included</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {tab.content.excluded.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                                <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-50" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Mobile: Accordion */}
          <div className="lg:hidden">
            <Accordion type="single" collapsible defaultValue="readiness" className="w-full">
              {deliverableTabs.map((tab) => {
                const TabIcon = tab.icon;
                return (
                  <AccordionItem key={tab.value} value={tab.value} className="border-slate-200">
                    <AccordionTrigger className="text-sm font-semibold text-left hover:no-underline text-slate-900 gap-3">
                      <span className="flex items-center gap-2">
                        <TabIcon className="w-4 h-4 text-orange-600" />
                        {tab.label}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pt-2">
                        <p className="text-sm text-slate-600 mb-4 leading-relaxed">{tab.content.desc}</p>
                        {tab.content.items && (
                          <ul className="space-y-2">
                            {tab.content.items.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-slate-900">
                                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                        {tab.content.included && (
                          <div className="space-y-4">
                            <ul className="space-y-2">
                              {tab.content.included.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-sm text-slate-900">
                                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                            <div className="border-t border-slate-200 pt-4">
                              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">Not Included</h4>
                              <ul className="space-y-2">
                                {tab.content.excluded.map((item) => (
                                  <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                                    <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-50" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          <p className="text-xs font-mono mt-6 text-slate-400">
            We are not a certification body. We prepare you for certification and support you through the journey with your chosen auditor.
          </p>
        </div>
      </section>

      {/* ═══ SEGMENT 4: WHY 3FACTOR TRUST BAR ═══ */}
      <section id="why-3factor" className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <span className="font-mono text-[10px] uppercase tracking-widest text-orange-500 block mb-3">[WHY 3FACTOR]</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mb-12">
            Why organisations choose 3FACTOR
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, stat: "12–16 Weeks", label: "Typical delivery timeline for certification readiness" },
              { icon: Users, stat: "Senior-Led", label: "Delivered by principals, not juniors. No bait-and-switch" },
              { icon: DollarSign, stat: "Fixed-Price", label: "Clear scope boundaries that protect your budget" },
              { icon: Microscope, stat: "Evidence-First", label: "Controls produce audit evidence as a byproduct of BAU" },
            ].map((item, i) => {
              const StatIcon = item.icon;
              return (
                <div key={i} className="text-center lg:text-left">
                  <StatIcon className="w-6 h-6 text-orange-500 mb-3 mx-auto lg:mx-0" />
                  <p className="text-2xl font-bold text-white mb-1">{item.stat}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.label}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-wrap gap-2 justify-center lg:justify-start">
            {["SOC 2", "NIS2", "DORA", "CIS", "CMMC", "ISO 27701"].map((fw) => (
              <span key={fw} className="px-3 py-1 text-xs font-mono border border-slate-700 text-slate-400">
                {fw}
              </span>
            ))}
            <span className="px-3 py-1 text-xs font-mono text-slate-500">
              + reuse controls across frameworks
            </span>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-3">[FAQ]</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-10">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "Are you the auditor or certification body?", a: "No. We provide readiness, implementation, and Stage 1/Stage 2 preparation alongside your chosen certification body." },
              { q: "Is 12–16 weeks realistic?", a: "It can be with a sensible scope and consistent stakeholder availability. More complex environments may take longer." },
              { q: "What do you need from us to keep pace?", a: "A primary owner, access to key SMEs, and timely reviews of core documents and evidence workflows." },
              { q: "Can you integrate ISO 27001 with SOC 2, NIS2, or DORA?", a: "Yes. We design controls and evidence for reuse across frameworks where relevant." },
              { q: "What does fixed scope mean?", a: "A defined set of deliverables and responsibilities that protects timeline and pricing. Out-of-scope items are agreed separately." },
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
            Ready to start?
          </h2>
          <p className="text-sm text-slate-600 mb-8 max-w-xl mx-auto">
            Schedule a 30-minute call to receive a tailored implementation plan and fixed-price proposal.
          </p>
          <Button
            onClick={openModal}
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-base px-10 py-6"
          >
            Get a Fixed-Price Proposal
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ISO27001Page;
