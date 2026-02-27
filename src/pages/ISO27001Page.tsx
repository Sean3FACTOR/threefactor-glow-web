import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Shield,
  FileCheck,
  Target,
  Layers,
  ClipboardCheck,
  Users,
  FileText,
  Cog,
  Eye,
  Handshake,
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
              Role *
            </Label>
            <select name="role" required className={selectClasses}>
              <option value="">Select…</option>
              {["Security", "Compliance", "IT", "Executive", "Other"].map(
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
              Target timeframe *
            </Label>
            <select name="timeframe" required className={selectClasses}>
              <option value="">Select…</option>
              {["0–3 months", "3–6 months", "6+ months", "Not sure"].map(
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
              ISO 27001 status *
            </Label>
            <select name="isoStatus" required className={selectClasses}>
              <option value="">Select…</option>
              {[
                "Starting",
                "In progress",
                "Need Stage 1/2 prep",
                "Maintaining",
              ].map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label className="font-mono text-xs uppercase tracking-wider text-slate-900">
              What's driving ISO 27001 right now?
            </Label>
            <Textarea
              name="driver"
              className="mt-1 border-slate-300 text-slate-900"
              rows={3}
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

/* ─── Hexagonal Spokes Diagram ─── */
const SpokesDiagram = () => {
  const streams = [
    { label: "SOC 2", angle: -90 },
    { label: "NIS2", angle: -30 },
    { label: "DORA", angle: 30 },
    { label: "CMMC", angle: 90 },
    { label: "CIS", angle: 150 },
    { label: "Customer\nAssurance", angle: 210 },
  ];

  return (
    <div
      className="relative w-full max-w-[720px] mx-auto"
      style={{ aspectRatio: "1/1" }}
    >
      <svg
        viewBox="0 0 720 720"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.5" />
            <stop offset="40%" stopColor="#ea580c" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="coreFill" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="60%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#c2410c" />
          </radialGradient>
          <radialGradient id="ambientRing" cx="50%" cy="50%" r="50%">
            <stop offset="70%" stopColor="#ea580c" stopOpacity="0" />
            <stop offset="85%" stopColor="#ea580c" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
          </radialGradient>
          <filter
            id="nodeGlow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter
            id="coreShadow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="18" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx="360" cy="360" r="340" fill="url(#ambientRing)" />
        <circle
          cx="360"
          cy="360"
          r="290"
          fill="none"
          stroke="rgba(234,88,12,0.07)"
          strokeWidth="0.75"
          strokeDasharray="4 6"
        />
        <circle
          cx="360"
          cy="360"
          r="220"
          fill="none"
          stroke="rgba(234,88,12,0.05)"
          strokeWidth="0.5"
          strokeDasharray="2 8"
        />

        {streams.map((s, i) => {
          const rad = (s.angle * Math.PI) / 180;
          const outerR = 310;
          const midR = 180;
          const innerR = 80;
          const ox = 360 + outerR * Math.cos(rad);
          const oy = 360 + outerR * Math.sin(rad);
          const mx = 360 + midR * Math.cos(rad + 0.08);
          const my = 360 + midR * Math.sin(rad + 0.08);
          const ix = 360 + innerR * Math.cos(rad);
          const iy = 360 + innerR * Math.sin(rad);
          const n1R = outerR * 0.85;
          const n2R = outerR * 0.6;
          const n3R = outerR * 0.38;

          return (
            <g key={i}>
              <path
                d={`M ${ox} ${oy} Q ${mx} ${my} ${ix} ${iy}`}
                fill="none"
                stroke="rgba(234,88,12,0.18)"
                strokeWidth="1.5"
              />
              <path
                d={`M ${360 + outerR * Math.cos(rad - 0.06)} ${360 + outerR * Math.sin(rad - 0.06)} Q ${360 + midR * Math.cos(rad - 0.04)} ${360 + midR * Math.sin(rad - 0.04)} ${ix} ${iy}`}
                fill="none"
                stroke="rgba(234,88,12,0.08)"
                strokeWidth="1"
              />
              <circle
                cx={360 + n1R * Math.cos(rad)}
                cy={360 + n1R * Math.sin(rad)}
                r="3"
                fill="rgba(234,88,12,0.3)"
                filter="url(#nodeGlow)"
              />
              <circle
                cx={360 + n2R * Math.cos(rad + 0.05)}
                cy={360 + n2R * Math.sin(rad + 0.05)}
                r="2.5"
                fill="rgba(234,88,12,0.4)"
                filter="url(#nodeGlow)"
              />
              <circle
                cx={360 + n3R * Math.cos(rad)}
                cy={360 + n3R * Math.sin(rad)}
                r="2"
                fill="rgba(234,88,12,0.5)"
                filter="url(#nodeGlow)"
              />
              <circle
                cx={ox}
                cy={oy}
                r="5"
                fill="rgba(234,88,12,0.15)"
                stroke="rgba(234,88,12,0.3)"
                strokeWidth="1"
              />
            </g>
          );
        })}

        <circle
          cx="360"
          cy="360"
          r="120"
          fill="url(#coreGlow)"
          filter="url(#coreShadow)"
        />
        <polygon
          points="360,300 412,330 412,390 360,420 308,390 308,330"
          fill="url(#coreFill)"
          opacity="0.9"
        />
        <polygon
          points="360,300 412,330 360,345 308,330"
          fill="rgba(255,255,255,0.15)"
        />
        <polygon
          points="308,330 360,345 360,420 308,390"
          fill="rgba(0,0,0,0.1)"
        />
        <line
          x1="360"
          y1="300"
          x2="360"
          y2="420"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.5"
        />
        <line
          x1="308"
          y1="330"
          x2="412"
          y2="390"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.5"
        />
        <line
          x1="412"
          y1="330"
          x2="308"
          y2="390"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="0.5"
        />
        <text
          x="360"
          y="352"
          textAnchor="middle"
          fill="white"
          fontSize="11"
          fontFamily="monospace"
          letterSpacing="3"
          opacity="0.7"
        >
          FOUNDATION
        </text>
        <text
          x="360"
          y="374"
          textAnchor="middle"
          fill="white"
          fontSize="18"
          fontWeight="bold"
          fontFamily="monospace"
          letterSpacing="2"
        >
          ISO 27001
        </text>

        {streams.map((s, i) => {
          const rad = (s.angle * Math.PI) / 180;
          const labelR = 330;
          const lx = 360 + labelR * Math.cos(rad);
          const ly = 360 + labelR * Math.sin(rad);
          const lines = s.label.split("\n");
          return (
            <g key={`label-${i}`}>
              {lines.map((line, li) => (
                <text
                  key={li}
                  x={lx}
                  y={ly + li * 14}
                  textAnchor="middle"
                  fill="#334155"
                  fontSize="11"
                  fontFamily="monospace"
                  fontWeight="600"
                  opacity="0.7"
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

/* ─── Interactive Timeline Data ─── */
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

/* ─── Interactive Timeline Component ─── */
const InteractiveTimeline = ({
  openModal,
}: {
  openModal: () => void;
}) => {
  const [active, setActive] = useState(0);
  const step = timelineSteps[active];
  const Icon = step.icon;

  return (
    <div>
      {/* Timeline bar */}
      <div className="relative mb-10">
        {/* Connecting line */}
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-slate-200" />
        {/* Progress line */}
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
                      isActive
                        ? "text-orange-600"
                        : isPast
                        ? "text-orange-600"
                        : "text-slate-400"
                    }`}
                  />
                </div>
                <span
                  className={`text-[10px] font-mono uppercase tracking-wider max-w-[80px] text-center leading-tight hidden md:block ${
                    isActive
                      ? "text-orange-600 font-bold"
                      : "text-slate-500"
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
            <div
              className={`h-1.5 transition-colors duration-300 ${
                i <= active ? "bg-orange-600" : "bg-slate-100"
              }`}
            />
            <span className="text-[10px] font-mono text-slate-500 mt-1 block">
              {s.duration}
            </span>
          </div>
        ))}
      </div>

      {/* Dynamic detail pane */}
      <div className="bg-white border border-slate-200 shadow-sm p-6 md:p-8 transition-all duration-300">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-10 h-10 flex items-center justify-center bg-orange-50 border border-orange-200 flex-shrink-0">
            <Icon className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-orange-600 uppercase tracking-wider">
              {step.duration}
            </span>
            <h3 className="text-lg font-bold uppercase text-slate-900">
              {step.title}
            </h3>
          </div>
        </div>

        <p className="text-sm text-slate-600 mb-5 leading-relaxed">
          {step.desc}
        </p>

        <ul className="space-y-2 mb-6">
          {step.details.map((d) => (
            <li
              key={d}
              className="flex items-start gap-2 text-sm text-slate-900"
            >
              <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
              {d}
            </li>
          ))}
        </ul>

        {/* CTA box */}
        <div className="bg-orange-50 border border-orange-200 p-5">
          <p className="text-sm text-slate-700 mb-3 italic">{step.cta}</p>
          <Button
            onClick={openModal}
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold"
          >
            Get a Fixed-Price Proposal
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

/* ─── Page ─── */
const ISO27001Page = () => {
  const [modalOpen, setModalOpen] = useState(false);

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

  const openModal = () => setModalOpen(true);
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontSize: "137.5%" }}>
      <Navigation />
      <ProposalModal open={modalOpen} onOpenChange={setModalOpen} />

      {/* Sticky CTA */}
      <div className="fixed top-14 md:top-16 right-4 z-40">
        <Button
          onClick={openModal}
          size="sm"
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-lg text-xs"
        >
          Get Proposal
        </Button>
      </div>

      {/* ═══ HERO ═══ */}
      <section className="pt-20 md:pt-24 pb-16 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-sm font-medium text-orange-600">
                  Services
                </span>
                <span className="text-slate-300">/</span>
                <span className="text-sm text-slate-900">ISO 27001</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-[1.15] uppercase text-slate-900">
                ISO 27001:
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold normal-case text-slate-600">
                  One Integrated Program, Scaled For Every Standard.
                </span>
              </h1>

              <p className="text-lg md:text-xl mb-6 leading-relaxed text-slate-600">
                3FACTOR implements ISO 27001 through a fixed-scope project:
                readiness, ISMS build, and audit preparation. Our integrated
                control framework approach reduces duplication so controls and
                evidence can be reused across SOC 2, CIS, NIST, NIS2, DORA and
                more.
              </p>

              <div className="p-4 mb-6 bg-slate-50 border border-slate-200">
                <p className="text-sm font-bold text-slate-900">
                  We are not a certification body. We prepare you for
                  certification and support you through the certification
                  journey with your chosen auditor.
                </p>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <span className="inline-block px-3 py-1 text-xs font-mono border border-slate-200 text-slate-900">
                  Typical implementation: 12–16 weeks (scope + availability
                  dependent)
                </span>
              </div>

              <ul className="space-y-2 mb-8">
                {[
                  "Build once, evidence once, reuse across frameworks",
                  "Practical ISMS and Continuous Compliance that fits into your daily Business-As-Usual",
                  "Powered by AI and Automation",
                  "Evidence on Demand without the fire drills",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-slate-900"
                  >
                    <span className="text-orange-600">◆</span> {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={openModal}
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-semibold"
                >
                  Get a Fixed-Price ISO 27001 Proposal
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollTo("checklist")}
                  className="font-semibold border-slate-300 text-slate-900 hover:bg-slate-50"
                >
                  Download the ISO 27001 Readiness Checklist
                </Button>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 hidden lg:flex items-center justify-center">
              <SpokesDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RIGHT PLACE ═══ */}
      <section className="py-16 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-10 text-slate-900">
            You're in the right place if…
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "ISO 27001 is required for customer assurance or procurement",
              "You need a clear route to certification without derailing delivery",
              "You're being asked for multiple frameworks and want reuse",
              "You want a practical ISMS that operates day-to-day",
            ].map((text, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 p-6 transition-all hover:border-orange-600"
              >
                <p className="text-sm leading-relaxed text-slate-900">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM EMPATHY ═══ */}
      <section className="py-16 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6 text-slate-900">
                Why ISO 27001 projects stall
              </h2>
              <ul className="space-y-3 mb-6">
                {[
                  "Scope balloons and delivery slows",
                  "Controls exist, but evidence isn't audit-ready",
                  "Work gets duplicated across audits and questionnaires",
                  "The ISMS becomes documentation, not an operating system",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-slate-900"
                  >
                    <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-500">
                If ISO feels heavy, it's usually because it isn't integrated
                into how work already happens.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5 flex items-center">
              <div className="bg-white border border-slate-200 shadow-sm w-full">
                <div className="px-5 py-3 border-b border-slate-200 flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-900">
                    How we solve it
                  </span>
                </div>
                <div className="p-5 space-y-4">
                  {[
                    {
                      problem: "Scope balloons",
                      fix: "Defensible scope boundaries set upfront",
                    },
                    {
                      problem: "Evidence isn't audit-ready",
                      fix: "Evidence-by-design workflows from day one",
                    },
                    {
                      problem: "Duplicated work across audits",
                      fix: "Integrated control framework, build once, reuse everywhere",
                    },
                    {
                      problem: "ISMS becomes shelfware",
                      fix: "Operational ISMS embedded into BAU",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-xs font-mono line-through mb-0.5 text-slate-400">
                          {item.problem}
                        </p>
                        <p className="text-sm font-medium text-slate-900">
                          {item.fix}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-slate-200">
                  <p className="text-xs text-slate-500">
                    We operationalise controls and evidence, not produce
                    shelfware.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INTERACTIVE 5-STEP TIMELINE ═══ */}
      <section className="py-16 border-t border-slate-200 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4 text-slate-900">
            The 5-step plan to ISO 27001 certification readiness
          </h2>
          <p className="text-sm text-slate-600 mb-10 max-w-2xl">
            Click each step to explore the details. Delivered as a fixed-scope
            project with no hidden fees, typically 12–16 weeks.
          </p>
          <InteractiveTimeline openModal={openModal} />
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="py-16 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-10 text-slate-900">
            What we deliver (fixed-scope project components)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "ISO 27001 Readiness Assessment (Gap Analysis)",
                bullets: [
                  "Confirm scope and audit expectations",
                  "Assess controls and documentation maturity",
                  "Identify evidence gaps",
                  "Deliver a prioritised roadmap",
                ],
              },
              {
                title: "ISO 27001 Implementation Support (ISMS Build)",
                bullets: [
                  "Risk method + risk treatment baseline",
                  "SoA + control set design",
                  "Tailored ISMS policies/procedures + governance routines",
                  "Evidence workflows embedded into operations",
                ],
              },
              {
                title: "Pre-Certification Support (Stage 1 / Stage 2 Prep)",
                bullets: [
                  "Audit pack + evidence validation",
                  "Mock walkthroughs and interview prep",
                  "Close-out support",
                  "Auditor liaison and request management",
                ],
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 p-6 transition-all hover:border-orange-600 shadow-sm"
              >
                <h3 className="text-sm font-bold uppercase mb-4 text-slate-900">
                  {card.title}
                </h3>
                <ul className="space-y-2">
                  {card.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-xs text-slate-600"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-orange-600" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs font-mono mt-4 text-slate-500">
            We help engage a right-fit auditor or work alongside your chosen
            certification body; we don't issue certificates.
          </p>
        </div>
      </section>

      {/* ═══ DIFFERENTIATOR ═══ */}
      <section className="py-16 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4 text-slate-900">
            Build once. Evidence once. Reuse everywhere.
          </h2>
          <p className="text-sm mb-6 max-w-3xl leading-relaxed text-slate-600">
            Most ISO 27001 implementations are built in isolation. We implement
            ISO 27001 using an integrated control framework so controls,
            testing, and evidence can be reused across other standards and
            regulatory obligations where required.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "SOC 2",
              "NIS2",
              "DORA",
              "CIS",
              "ISO 27701",
              "Customer questionnaires",
            ].map((c) => (
              <span
                key={c}
                className="px-3 py-1 text-xs font-mono border border-slate-200 text-slate-900"
              >
                {c}
              </span>
            ))}
          </div>
          <ul className="space-y-2">
            {[
              "Less duplicate audit work",
              "Faster assurance responses",
              "Easier multi-standard scaling",
            ].map((o) => (
              <li
                key={o}
                className="flex items-center gap-2 text-sm text-slate-900"
              >
                <span className="text-orange-600">◆</span> {o}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ PACKAGE (Tabs) ═══ */}
      <section className="py-16 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8 text-slate-900">
              What's included in the fixed-scope project
            </h2>

            <Tabs defaultValue="included" className="w-full">
              <TabsList className="bg-slate-100 rounded-none p-1 h-auto flex-wrap w-full justify-start">
                <TabsTrigger
                  value="included"
                  className="rounded-none text-xs font-bold uppercase tracking-wide px-5 py-2.5 data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:border-b-2 data-[state=active]:border-orange-600 data-[state=active]:shadow-none"
                >
                  Included Deliverables
                </TabsTrigger>
                <TabsTrigger
                  value="not-included"
                  className="rounded-none text-xs font-bold uppercase tracking-wide px-5 py-2.5 data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:border-b-2 data-[state=active]:border-orange-600 data-[state=active]:shadow-none"
                >
                  What You Provide (Not Included)
                </TabsTrigger>
                <TabsTrigger
                  value="maintenance"
                  className="rounded-none text-xs font-bold uppercase tracking-wide px-5 py-2.5 data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:border-b-2 data-[state=active]:border-orange-600 data-[state=active]:shadow-none"
                >
                  Optional Maintenance
                </TabsTrigger>
              </TabsList>

              <TabsContent value="included" className="mt-6">
                <div className="bg-white border border-slate-200 p-6 shadow-sm">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Clauses and Controls Gap Assessment",
                      "Scope recommendation + ISMS boundary definition",
                      "Risk approach + risk treatment plan baseline",
                      "Statement of Applicability (SoA) creation and tailoring",
                      "Tailored ISMS documentation set (policies/procedures)",
                      "Control implementation support",
                      "Evidence-by-design workflows",
                      "Audit readiness pack + mock walkthrough",
                      "Stage 1/Stage 2 preparation + auditor liaison support",
                    ].map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-slate-900"
                      >
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="not-included" className="mt-6">
                <div className="bg-white border border-slate-200 p-6 shadow-sm">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Certification body services / issuing the certificate",
                      "Tool licensing costs",
                      "Technical remediation execution and control operation",
                      "Pen testing/scanning services (partnered if required)",
                    ].map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-slate-500"
                      >
                        <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-40" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="maintenance" className="mt-6">
                <div className="bg-orange-50 border border-slate-200 p-6 shadow-sm">
                  <p className="text-sm mb-5 leading-relaxed text-slate-600">
                    After certification, we can support ISMS operation: internal
                    audits, management review, KPIs, corrective actions, continual
                    improvement, and surveillance readiness.
                  </p>
                  <Button
                    onClick={openModal}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-none"
                  >
                    Ask about maintenance support
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </TabsContent>
            </Tabs>

            <p className="text-xs font-mono mt-4 text-slate-500">
              Clear boundaries protect timeline and fixed pricing.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ HOW WE WORK ═══ */}
      <section className="py-16 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8 text-slate-900">
            How we work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                icon: Users,
                text: "Senior-led delivery (no bait-and-switch)",
              },
              {
                icon: FileText,
                text: "Practical documentation (tailored, usable)",
              },
              { icon: FileCheck, text: "Evidence-first operating model" },
              { icon: Layers, text: "Integrated framework mindset" },
              {
                icon: Handshake,
                text: "Clear scope and responsibilities",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 p-5 flex flex-col items-start gap-3 shadow-sm hover:border-orange-600 transition-all"
              >
                <item.icon className="w-5 h-5 text-orange-600" />
                <p className="text-xs leading-relaxed text-slate-900">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-16 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8 text-slate-900">
            FAQ
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: "Are you the auditor or certification body?",
                a: "No. We provide readiness, implementation, and Stage 1/Stage 2 preparation alongside your chosen certification body.",
              },
              {
                q: "Is 12–16 weeks realistic?",
                a: "It can be with a sensible scope and consistent stakeholder availability. More complex environments may take longer.",
              },
              {
                q: "What do you need from us to keep pace?",
                a: "A primary owner, access to key SMEs, and timely reviews of core documents and evidence workflows.",
              },
              {
                q: "Can you integrate ISO 27001 with SOC 2, NIS2, or DORA?",
                a: "Yes. We design controls and evidence for reuse across frameworks where relevant.",
              },
              {
                q: "What does fixed scope mean?",
                a: "A defined set of deliverables and responsibilities that protects timeline and pricing. Out-of-scope items are agreed separately.",
              },
            ].map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-slate-200"
              >
                <AccordionTrigger className="text-sm font-semibold text-left hover:no-underline text-slate-900">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.a}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ═══ CHECKLIST DOWNLOAD ═══ */}
      <section
        id="checklist"
        className="py-16 border-t border-slate-200"
      >
        <div className="container mx-auto px-4">
          <div className="bg-white border border-slate-200 shadow-sm p-8 max-w-2xl mx-auto text-center">
            <span className="font-mono text-[10px] text-slate-400 block mb-2">
              [DL]
            </span>
            <h2 className="text-xl font-bold uppercase mb-3 text-slate-900">
              Download the ISO 27001 Readiness Checklist
            </h2>
            <p className="text-sm mb-6 text-slate-600">
              A one-page checklist to sanity-check scope, evidence readiness,
              and next steps.
            </p>
            <Button
              asChild
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold"
            >
              <a href="/iso27001-readiness-checklist.pdf" download>
                Download Checklist
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4 text-white">
            Get a fixed-price ISO 27001 proposal
          </h2>
          <p className="text-sm mb-8 max-w-xl mx-auto text-slate-400">
            Schedule a 30-minute call to receive a tailored implementation plan
            and fixed-price proposal.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              onClick={openModal}
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold"
            >
              Get a Fixed-Price Proposal
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollTo("checklist")}
              className="font-semibold border-slate-600 text-white hover:bg-slate-800"
            >
              Download Checklist
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ISO27001Page;
