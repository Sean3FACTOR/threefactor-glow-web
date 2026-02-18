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
  Handshake } from
"lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription } from
"@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

/* ─── Proposal Modal ─── */
const ProposalModal = ({
  open,
  onOpenChange



}: {open: boolean;onOpenChange: (v: boolean) => void;}) => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: wire to CRM / email endpoint
    setTimeout(() => {
      setSubmitting(false);
      onOpenChange(false);
      toast({
        title: "Request received",
        description:
        "Thanks, we'll reach out to schedule a 30-minute call."
      });
    }, 800);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold uppercase tracking-wide text-foreground">
            Get a Fixed-Price ISO 27001 Proposal
          </DialogTitle>
          <DialogDescription className="text-sm" style={{ color: "#646464" }}>
            30-minute call → tailored plan → fixed-price proposal
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <Label htmlFor="workEmail" className="font-mono text-xs uppercase tracking-wider text-foreground">
              Work email *
            </Label>
            <Input id="workEmail" name="workEmail" type="email" required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="fullName" className="font-mono text-xs uppercase tracking-wider text-foreground">
              Name *
            </Label>
            <Input id="fullName" name="fullName" type="text" required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="company" className="font-mono text-xs uppercase tracking-wider text-foreground">
              Company *
            </Label>
            <Input id="company" name="company" type="text" required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="role" className="font-mono text-xs uppercase tracking-wider text-foreground">
              Role *
            </Label>
            <select
              id="role"
              name="role"
              required
              className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">

              <option value="">Select…</option>
              {["Security", "Compliance", "IT", "Executive", "Other"].map((o) =>
              <option key={o} value={o}>{o}</option>
              )}
            </select>
          </div>
          <div>
            <Label htmlFor="timeframe" className="font-mono text-xs uppercase tracking-wider text-foreground">
              Target timeframe *
            </Label>
            <select
              id="timeframe"
              name="timeframe"
              required
              className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">

              <option value="">Select…</option>
              {["0–3 months", "3–6 months", "6+ months", "Not sure"].map((o) =>
              <option key={o} value={o}>{o}</option>
              )}
            </select>
          </div>
          <div>
            <Label htmlFor="isoStatus" className="font-mono text-xs uppercase tracking-wider text-foreground">
              ISO 27001 status *
            </Label>
            <select
              id="isoStatus"
              name="isoStatus"
              required
              className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">

              <option value="">Select…</option>
              {["Starting", "In progress", "Need Stage 1/2 prep", "Maintaining"].map((o) =>
              <option key={o} value={o}>{o}</option>
              )}
            </select>
          </div>
          <div>
            <Label htmlFor="driver" className="font-mono text-xs uppercase tracking-wider text-foreground">
              What's driving ISO 27001 right now?
            </Label>
            <Textarea id="driver" name="driver" className="mt-1" rows={3} />
          </div>
          <Button
            type="submit"
            disabled={submitting}
            className="w-full text-white font-semibold"
            style={{ backgroundColor: "#F36F21" }}>

            {submitting ? "Submitting…" : "Request Proposal"}
          </Button>
          <p className="text-xs text-center" style={{ color: "#646464" }}>
            We'll follow up to schedule a 30-minute call and confirm scope.
          </p>
        </form>
      </DialogContent>
    </Dialog>);

};

/* ─── Hexagonal Grid Diagram ─── */
const HexTile = ({ label, isCenter = false, style }: { label: string; isCenter?: boolean; style?: React.CSSProperties }) => {
  const size = isCenter ? 180 : 140;
  const h = size;
  const w = size * 1.1547; // hex width ratio
  return (
    <div className="absolute flex items-center justify-center" style={{ width: w, height: h, ...style }}>
      <svg viewBox="0 0 100 86.6" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <polygon
          points="25,0 75,0 100,43.3 75,86.6 25,86.6 0,43.3"
          fill={isCenter ? "#F36F21" : "#FFFFFF"}
          stroke={isCenter ? "#F36F21" : "rgba(59,59,57,0.2)"}
          strokeWidth="1.5"
        />
      </svg>
      <span
        className={`relative z-10 font-mono text-center leading-tight ${isCenter ? "text-3xl font-bold uppercase tracking-wider" : "text-2xl font-medium"}`}
        style={{ color: isCenter ? "#FFFFFF" : "#3B3B39", maxWidth: w - 16 }}
      >
        {label}
      </span>
    </div>
  );
};

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
    <div className="relative w-full max-w-[720px] mx-auto" style={{ aspectRatio: "1/1" }}>
      <svg viewBox="0 0 720 720" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Core glow gradient */}
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F36F21" stopOpacity="0.5" />
            <stop offset="40%" stopColor="#F36F21" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#F36F21" stopOpacity="0" />
          </radialGradient>
          {/* Core fill gradient */}
          <radialGradient id="coreFill" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#FF8A3D" />
            <stop offset="60%" stopColor="#F36F21" />
            <stop offset="100%" stopColor="#D4550F" />
          </radialGradient>
          {/* Stream line gradient */}
          <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F36F21" stopOpacity="0" />
            <stop offset="50%" stopColor="#F36F21" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#F36F21" stopOpacity="0.6" />
          </linearGradient>
          {/* Outer ambient ring gradient */}
          <radialGradient id="ambientRing" cx="50%" cy="50%" r="50%">
            <stop offset="70%" stopColor="#F36F21" stopOpacity="0" />
            <stop offset="85%" stopColor="#F36F21" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#F36F21" stopOpacity="0" />
          </radialGradient>
          {/* Node glow filter */}
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Core shadow filter */}
          <filter id="coreShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="18" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient background ring */}
        <circle cx="360" cy="360" r="340" fill="url(#ambientRing)" />

        {/* Outer orbit ring — dashed */}
        <circle cx="360" cy="360" r="290" fill="none" stroke="rgba(243,111,33,0.07)" strokeWidth="0.75" strokeDasharray="4 6" />
        <circle cx="360" cy="360" r="220" fill="none" stroke="rgba(243,111,33,0.05)" strokeWidth="0.5" strokeDasharray="2 8" />

        {/* Data streams converging to center */}
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

          // Floating nodes along the stream
          const n1R = outerR * 0.85;
          const n2R = outerR * 0.6;
          const n3R = outerR * 0.38;

          return (
            <g key={i}>
              {/* Stream path — curved */}
              <path
                d={`M ${ox} ${oy} Q ${mx} ${my} ${ix} ${iy}`}
                fill="none"
                stroke="rgba(243,111,33,0.18)"
                strokeWidth="1.5"
              />
              {/* Second parallel stream — offset */}
              <path
                d={`M ${360 + outerR * Math.cos(rad - 0.06)} ${360 + outerR * Math.sin(rad - 0.06)} Q ${360 + midR * Math.cos(rad - 0.04)} ${360 + midR * Math.sin(rad - 0.04)} ${ix} ${iy}`}
                fill="none"
                stroke="rgba(243,111,33,0.08)"
                strokeWidth="1"
              />

              {/* Floating nodes along stream */}
              <circle cx={360 + n1R * Math.cos(rad)} cy={360 + n1R * Math.sin(rad)} r="3" fill="rgba(243,111,33,0.3)" filter="url(#nodeGlow)" />
              <circle cx={360 + n2R * Math.cos(rad + 0.05)} cy={360 + n2R * Math.sin(rad + 0.05)} r="2.5" fill="rgba(243,111,33,0.4)" filter="url(#nodeGlow)" />
              <circle cx={360 + n3R * Math.cos(rad)} cy={360 + n3R * Math.sin(rad)} r="2" fill="rgba(243,111,33,0.5)" filter="url(#nodeGlow)" />

              {/* Endpoint node */}
              <circle cx={ox} cy={oy} r="5" fill="rgba(243,111,33,0.15)" stroke="rgba(243,111,33,0.3)" strokeWidth="1" />
            </g>
          );
        })}

        {/* Core glow */}
        <circle cx="360" cy="360" r="120" fill="url(#coreGlow)" filter="url(#coreShadow)" />

        {/* Core geometric shape — interlocking segments */}
        {/* Main hexagon */}
        <polygon
          points="360,300 412,330 412,390 360,420 308,390 308,330"
          fill="url(#coreFill)"
          opacity="0.9"
        />
        {/* Top facet highlight */}
        <polygon
          points="360,300 412,330 360,345 308,330"
          fill="rgba(255,255,255,0.15)"
        />
        {/* Left facet shadow */}
        <polygon
          points="308,330 360,345 360,420 308,390"
          fill="rgba(0,0,0,0.1)"
        />

        {/* Inner geometric detail lines */}
        <line x1="360" y1="300" x2="360" y2="420" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
        <line x1="308" y1="330" x2="412" y2="390" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
        <line x1="412" y1="330" x2="308" y2="390" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />

        {/* Core text */}
        <text x="360" y="352" textAnchor="middle" fill="white" fontSize="11" fontFamily="monospace" letterSpacing="3" opacity="0.7">FOUNDATION</text>
        <text x="360" y="374" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="monospace" letterSpacing="2">ISO 27001</text>

        {/* Framework labels at endpoints */}
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
                  fill="#3B3B39"
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

/* ─── Page ─── */
const ISO27001Page = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.title = "ISO 27001 Implementation & Readiness | 3FACTOR";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Fixed-scope ISO 27001 readiness, implementation, and Stage 1/2 audit preparation. Integrated compliance framework approach to reuse controls across SOC 2, NIS2, DORA and more.");
    }
  }, []);

  const openModal = () => setModalOpen(true);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F9FA", fontSize: "137.5%" }}>
      <Navigation />
      <ProposalModal open={modalOpen} onOpenChange={setModalOpen} />

      {/* ── Sticky CTA ── */}
      <div className="fixed top-14 md:top-16 right-4 z-40">
        <Button
          onClick={openModal}
          size="sm"
          className="text-white font-semibold shadow-lg text-xs"
          style={{ backgroundColor: "#F36F21" }}>

          Get Proposal
        </Button>
      </div>

      {/* ═══ HERO ═══ */}
      <section className="pt-20 md:pt-24 pb-16 relative overflow-hidden" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-7">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-sm font-medium" style={{ color: "#F36F21" }}>Services</span>
                <span style={{ color: "rgba(59,59,57,0.4)" }}>/</span>
                <span className="text-sm" style={{ color: "#3B3B39" }}>ISO 27001</span>
              </div>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-[1.15] uppercase"
                style={{ color: "#3B3B39" }}>
                ISO 27001:<br />
                <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold normal-case" style={{ color: "#646464" }}>
                  One Integrated Program, Scaled For Every Standard.
                </span>
              </h1>

              <p className="text-lg md:text-xl mb-6 leading-relaxed" style={{ color: "#646464" }}>
                3FACTOR implements ISO 27001 through a fixed-scope project: readiness, ISMS build, and audit preparation. Our integrated control framework approach reduces duplication so controls and evidence can be reused across SOC 2, CIS, NIST, NIS2, DORA and more.
              </p>

              <p className="text-sm mb-6 italic" style={{ color: "#646464" }}>
                We are not a certification body. We prepare you for certification and support you through the certification journey with your chosen auditor.
              </p>

              <div className="flex items-center gap-2 mb-6">
                <span className="inline-block px-3 py-1 text-xs font-mono border" style={{ borderColor: "rgba(59,59,57,0.15)", color: "#3B3B39" }}>

                  Typical implementation: 12–16 weeks (scope + availability dependent)
                </span>
              </div>

              <ul className="space-y-2 mb-8">
                {["Build once, evidence once, reuse across frameworks",
                "Practical ISMS and Continuous Compliance that fits into your daily Business-As-Usual",
                "Powered by AI and Automation",
                "Evidence on Demand without the fire drills"].
                map((b) =>
                <li key={b} className="flex items-start gap-2 text-sm" style={{ color: "#3B3B39" }}>
                    <span style={{ color: "#F36F21" }}>◆</span> {b}
                  </li>
                )}
              </ul>

              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={openModal}
                  size="lg"
                  className="text-white font-semibold"
                  style={{ backgroundColor: "#F36F21" }}>

                  Get a Fixed-Price ISO 27001 Proposal
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollTo("checklist")}
                  className="font-semibold border-foreground/20 text-foreground">

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
      <section className="py-16" style={{ borderTop: "1px solid rgba(59,59,57,0.08)" }}>
        <div className="container mx-auto px-4">
          <span className="tech-id block mb-2">[ID-01]</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-10" style={{ color: "#3B3B39" }}>
            You're in the right place if…
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
            "ISO 27001 is required for customer assurance or procurement",
            "You need a clear route to certification without derailing delivery",
            "You're being asked for multiple frameworks and want reuse",
            "You want a practical ISMS that operates day-to-day"].
            map((text, i) =>
            <div
              key={i}
              className="bg-card border border-border p-6 transition-all hover:border-primary">

                <span className="tech-id block mb-3">[RP-0{i + 1}]</span>
                <p className="text-sm leading-relaxed" style={{ color: "#3B3B39" }}>{text}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM EMPATHY ═══ */}
      <section className="py-16" style={{ borderTop: "1px solid rgba(59,59,57,0.08)" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <span className="tech-id block mb-2">[ID-02]</span>
              <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6" style={{ color: "#3B3B39" }}>
                Why ISO 27001 projects stall
              </h2>
              <ul className="space-y-3 mb-6">
                {[
                "Scope balloons and delivery slows",
                "Controls exist, but evidence isn't audit-ready",
                "Work gets duplicated across audits and questionnaires",
                "The ISMS becomes documentation, not an operating system"].
                map((b) =>
                <li key={b} className="flex items-start gap-2 text-sm" style={{ color: "#3B3B39" }}>
                    <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#F36F21" }} /> {b}
                  </li>
                )}
              </ul>
              <p className="text-sm italic" style={{ color: "#646464" }}>
                If ISO feels heavy, it's usually because it isn't integrated into how work already happens.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5 flex items-center">
              <div className="bg-card border border-border w-full">
                <div className="px-5 py-3 border-b border-border flex items-center gap-2">
                  
                  <span className="font-mono text-xs uppercase tracking-wider" style={{ color: "#3B3B39" }}>How we solve it</span>
                </div>
                <div className="p-5 space-y-4">
                  {[
                    { problem: "Scope balloons", fix: "Defensible scope boundaries set upfront" },
                    { problem: "Evidence isn't audit-ready", fix: "Evidence-by-design workflows from day one" },
                    { problem: "Duplicated work across audits", fix: "Integrated control framework, build once, reuse everywhere" },
                    { problem: "ISMS becomes shelfware", fix: "Operational ISMS embedded into BAU" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-4 h-4" style={{ color: "#F36F21" }} />
                      </div>
                      <div>
                        <p className="text-xs font-mono line-through mb-0.5" style={{ color: "#9CA3AF" }}>{item.problem}</p>
                        <p className="text-sm font-medium" style={{ color: "#3B3B39" }}>{item.fix}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-border">
                  <p className="text-xs italic" style={{ color: "#646464" }}>
                    We operationalise controls and evidence, not produce shelfware.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5-STEP PLAN ═══ */}
      <section className="py-16" style={{ borderTop: "1px solid rgba(59,59,57,0.08)" }}>
        <div className="container mx-auto px-4">
          <span className="tech-id block mb-2">[ID-03]</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-10" style={{ color: "#3B3B39" }}>
            The 5-step plan to ISO 27001 certification readiness
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            {[
            { icon: Target, title: "Scope and boundary definition", desc: "Set a defensible, achievable certification scope." },
            { icon: Eye, title: "Readiness assessment + roadmap", desc: "Identify gaps and agree the delivery plan." },
            { icon: Layers, title: "ISMS foundation build", desc: "Risk, SoA, governance, policies and procedures." },
            { icon: Cog, title: "Controls + evidence routines", desc: "Embed workflows so evidence is produced naturally." },
            { icon: ClipboardCheck, title: "Stage 1/Stage 2 preparation", desc: "Audit pack, walkthroughs, close-out support." }].
            map((step, i) =>
            <div key={i} className="bg-card border border-border p-5 relative">
                <span className="tech-id block mb-2">[STEP-0{i + 1}]</span>
                
                <h3 className="text-sm font-bold uppercase mb-2" style={{ color: "#3B3B39" }}>{step.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#646464" }}>{step.desc}</p>
                {i < 4 &&
              <ChevronRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: "rgba(59,59,57,0.2)" }} />
              }
              </div>
            )}
          </div>
          <p className="text-xs font-mono mb-4" style={{ color: "#646464" }}>
            Delivered as a fixed-scope project with no hidden fees, typically 12–16 weeks.
          </p>
          <Button onClick={openModal} className="text-white font-semibold" style={{ backgroundColor: "#F36F21" }}>
            Get a Fixed-Price Proposal <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="py-16" style={{ borderTop: "1px solid rgba(59,59,57,0.08)" }}>
        <div className="container mx-auto px-4">
          <span className="tech-id block mb-2">[ID-04]</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-10" style={{ color: "#3B3B39" }}>
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
              "Deliver a prioritised roadmap"]

            },
            {
              title: "ISO 27001 Implementation Support (ISMS Build)",
              bullets: [
              "Risk method + risk treatment baseline",
              "SoA + control set design",
              "Tailored ISMS policies/procedures + governance routines",
              "Evidence workflows embedded into operations"]

            },
            {
              title: "Pre-Certification Support (Stage 1 / Stage 2 Prep)",
              bullets: [
              "Audit pack + evidence validation",
              "Mock walkthroughs and interview prep",
              "Close-out support",
              "Auditor liaison and request management"]

            }].
            map((card, i) =>
            <div key={i} className="bg-card border border-border p-6 transition-all hover:border-primary">
                <span className="tech-id block mb-3">[SVC-0{i + 1}]</span>
                <h3 className="text-sm font-bold uppercase mb-4" style={{ color: "#3B3B39" }}>{card.title}</h3>
                <ul className="space-y-2">
                  {card.bullets.map((b) =>
                <li key={b} className="flex items-start gap-2 text-xs" style={{ color: "#646464" }}>
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "#F36F21" }} /> {b}
                    </li>
                )}
                </ul>
              </div>
            )}
          </div>
          <p className="text-xs font-mono mt-4" style={{ color: "#646464" }}>
            We help engage a right-fit auditor or work alongside your chosen certification body; we don't issue certificates.
          </p>
        </div>
      </section>

      {/* ═══ DIFFERENTIATOR ═══ */}
      <section className="py-16" style={{ borderTop: "1px solid rgba(59,59,57,0.08)" }}>
        <div className="container mx-auto px-4">
          <span className="tech-id block mb-2">[ID-05]</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4" style={{ color: "#3B3B39" }}>
            Build once. Evidence once. Reuse everywhere.
          </h2>
          <p className="text-sm mb-6 max-w-3xl leading-relaxed" style={{ color: "#646464" }}>
            Most ISO 27001 implementations are built in isolation. We implement ISO 27001 using an integrated control framework so controls, testing, and evidence can be reused across other standards and regulatory obligations where required.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["SOC 2", "NIS2", "DORA", "CIS", "ISO 27701", "Customer questionnaires"].map((c) =>
            <span
              key={c}
              className="px-3 py-1 text-xs font-mono border"
              style={{ borderColor: "rgba(59,59,57,0.15)", color: "#3B3B39" }}>

                {c}
              </span>
            )}
          </div>
          <ul className="space-y-2">
            {["Less duplicate audit work", "Faster assurance responses", "Easier multi-standard scaling"].map((o) =>
            <li key={o} className="flex items-center gap-2 text-sm" style={{ color: "#3B3B39" }}>
                <span style={{ color: "#F36F21" }}>◆</span> {o}
              </li>
            )}
          </ul>
        </div>
      </section>

      {/* ═══ PACKAGE ═══ */}
      <section className="py-16" style={{ borderTop: "1px solid rgba(59,59,57,0.08)" }}>
        <div className="container mx-auto px-4">
          <span className="tech-id block mb-2">[ID-06]</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-10" style={{ color: "#3B3B39" }}>
            What's included in the fixed-scope project
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border p-6">
              <h3 className="text-sm font-bold uppercase mb-4" style={{ color: "#3B3B39" }}>Included</h3>
              <ul className="space-y-2">
                {[
                "Clauses and Controls Gap Assessment",
                "Scope recommendation + ISMS boundary definition",
                "Risk approach + risk treatment plan baseline",
                "Statement of Applicability (SoA) creation and tailoring",
                "Tailored ISMS documentation set (policies/procedures)",
                "Control implementation support",
                "Evidence-by-design workflows",
                "Audit readiness pack + mock walkthrough",
                "Stage 1/Stage 2 preparation + auditor liaison support"].
                map((b) =>
                <li key={b} className="flex items-start gap-2 text-xs" style={{ color: "#3B3B39" }}>
                    <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: "#F36F21" }} /> {b}
                  </li>
                )}
              </ul>
            </div>
            <div className="bg-card border border-border p-6">
              <h3 className="text-sm font-bold uppercase mb-4" style={{ color: "#646464" }}>Not included but we can help</h3>
              <ul className="space-y-2">
                {[
                "Certification body services / issuing the certificate",
                "Tool licensing costs",
                "Technical remediation execution and control operation",
                "Pen testing/scanning services (partnered if required)"].
                map((b) =>
                <li key={b} className="flex items-start gap-2 text-xs" style={{ color: "#646464" }}>
                    <XCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 opacity-40" /> {b}
                  </li>
                )}
              </ul>
            </div>
          </div>
          <p className="text-xs font-mono mt-4" style={{ color: "#646464" }}>
            Clear boundaries protect timeline and fixed pricing.
          </p>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section className="py-16" style={{ borderTop: "1px solid rgba(59,59,57,0.08)" }}>
        <div className="container mx-auto px-4">
          <span className="tech-id block mb-2">[ID-07]</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-10" style={{ color: "#3B3B39" }}>
            Typical 12–16 week delivery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
            { phase: "Weeks 1–2", title: "Scope + readiness", bullets: ["Boundary definition", "Gap analysis", "Roadmap and plan"] },
            { phase: "Weeks 3–6", title: "ISMS foundation", bullets: ["Risk + treatment baseline", "SoA", "Governance + documentation"] },
            { phase: "Weeks 7–12", title: "Controls + evidence routines", bullets: ["Control implementation support", "Evidence workflows", "Operational cadence", "Internal Audit"] },
            { phase: "Weeks 13–16", title: "Stage 1 and 2 prep", bullets: ["Evidence Collection and Review", "Audit Walkthroughs/Rehearsals", "Audit Guidance"] }].
            map((p, i) =>
            <div key={i} className="bg-card border border-border p-5">
                <span className="font-mono text-xs mb-1 block" style={{ color: "#F36F21" }}>{p.phase}</span>
                <h3 className="text-sm font-bold uppercase mb-3" style={{ color: "#3B3B39" }}>{p.title}</h3>
                <ul className="space-y-1.5">
                  {p.bullets.map((b) =>
                <li key={b} className="text-xs" style={{ color: "#646464" }}>• {b}</li>
                )}
                </ul>
              </div>
            )}
          </div>
          <p className="text-xs font-mono mt-4" style={{ color: "#646464" }}>
            Timeline depends on scope and stakeholder availability.
          </p>
        </div>
      </section>

      {/* ═══ MAINTENANCE OPTIONAL ═══ */}
      <section className="py-16" style={{ borderTop: "1px solid rgba(59,59,57,0.08)" }}>
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border p-8 max-w-3xl">
            <span className="tech-id block mb-2">[OPT]</span>
            <h2 className="text-xl font-bold uppercase mb-3" style={{ color: "#3B3B39" }}>
              Optional: ISMS Maintenance & Continuous Compliance
            </h2>
            <p className="text-sm mb-4 leading-relaxed" style={{ color: "#646464" }}>
              After certification, we can support ISMS operation: internal audits, management review, KPIs, corrective actions, continual improvement, and surveillance readiness.
            </p>
            <Button onClick={openModal} className="text-white font-semibold" style={{ backgroundColor: "#F36F21" }}>
              Ask about maintenance support <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ HOW WE WORK ═══ */}
      <section className="py-16" style={{ borderTop: "1px solid rgba(59,59,57,0.08)" }}>
        <div className="container mx-auto px-4">
          <span className="tech-id block mb-2">[ID-08]</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8" style={{ color: "#3B3B39" }}>
            How we work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
            { icon: Users, text: "Senior-led delivery (no bait-and-switch)" },
            { icon: FileText, text: "Practical documentation (tailored, usable)" },
            { icon: FileCheck, text: "Evidence-first operating model" },
            { icon: Layers, text: "Integrated framework mindset" },
            { icon: Handshake, text: "Clear scope and responsibilities" }].
            map((item, i) =>
            <div key={i} className="bg-card border border-border p-5 flex flex-col items-start gap-3">
                <item.icon className="w-5 h-5" style={{ color: "#F36F21" }} />
                <p className="text-xs leading-relaxed" style={{ color: "#3B3B39" }}>{item.text}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-16" style={{ borderTop: "1px solid rgba(59,59,57,0.08)" }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <span className="tech-id block mb-2">[ID-09]</span>
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8" style={{ color: "#3B3B39" }}>FAQ</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
            { q: "Are you the auditor or certification body?", a: "No. We provide readiness, implementation, and Stage 1/Stage 2 preparation alongside your chosen certification body." },
            { q: "Is 12–16 weeks realistic?", a: "It can be with a sensible scope and consistent stakeholder availability. More complex environments may take longer." },
            { q: "What do you need from us to keep pace?", a: "A primary owner, access to key SMEs, and timely reviews of core documents and evidence workflows." },
            { q: "Can you integrate ISO 27001 with SOC 2, NIS2, or DORA?", a: "Yes. We design controls and evidence for reuse across frameworks where relevant." },
            { q: "What does fixed scope mean?", a: "A defined set of deliverables and responsibilities that protects timeline and pricing. Out-of-scope items are agreed separately." }].
            map((item, i) =>
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="text-sm font-semibold text-left hover:no-underline" style={{ color: "#3B3B39" }}>
                  {item.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm leading-relaxed" style={{ color: "#646464" }}>{item.a}</p>
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </div>
      </section>

      {/* ═══ CHECKLIST DOWNLOAD ═══ */}
      <section id="checklist" className="py-16" style={{ borderTop: "1px solid rgba(59,59,57,0.08)" }}>
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border p-8 max-w-2xl mx-auto text-center">
            <span className="tech-id block mb-2">[DL]</span>
            <h2 className="text-xl font-bold uppercase mb-3" style={{ color: "#3B3B39" }}>
              Download the ISO 27001 Readiness Checklist
            </h2>
            <p className="text-sm mb-6" style={{ color: "#646464" }}>
              A one-page checklist to sanity-check scope, evidence readiness, and next steps.
            </p>
            <Button
              asChild
              className="text-white font-semibold"
              style={{ backgroundColor: "#F36F21" }}>

              <a href="/iso27001-readiness-checklist.pdf" download>
                Download Checklist <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-20" style={{ backgroundColor: "#3B3B39" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4 text-white">
            Get a fixed-price ISO 27001 proposal
          </h2>
          <p className="text-sm mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            Schedule a 30-minute call to receive a tailored implementation plan and fixed-price proposal.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              onClick={openModal}
              size="lg"
              className="text-white font-semibold"
              style={{ backgroundColor: "#F36F21" }}>

              Get a Fixed-Price Proposal <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollTo("checklist")}
              className="font-semibold border-white/30 text-white hover:bg-white/10">

              Download Checklist
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>);

};

export default ISO27001Page;