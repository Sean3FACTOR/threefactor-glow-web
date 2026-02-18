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
        "Thanks — we'll reach out to schedule a 30-minute call."
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

/* ─── Spoke Diagram ─── */
const SpokesDiagram = () => {
  const spokes = ["SOC 2", "NIS2", "DORA", "CIS", "CMMC", "Customer assurance"];
  return (
    <div className="relative w-full max-w-[340px] mx-auto aspect-square flex items-center justify-center">
      {/* center */}
      <div
        className="absolute z-10 w-28 h-28 flex items-center justify-center border-2 font-bold text-sm uppercase tracking-wider"
        style={{ borderColor: "#F36F21", color: "#3B3B39", backgroundColor: "#FFFFFF" }}>

        ISO 27001
      </div>
      {/* spokes */}
      {spokes.map((label, i) => {
        const angle = 360 / spokes.length * i - 90;
        const rad = angle * Math.PI / 180;
        const r = 130;
        const x = Math.cos(rad) * r;
        const y = Math.sin(rad) * r;
        return (
          <div key={label} className="absolute" style={{ transform: `translate(${x}px, ${y}px)` }}>
            {/* line */}
            <div
              className="absolute top-1/2 left-1/2 origin-center"
              style={{
                width: `${r - 30}px`,
                height: "1px",
                backgroundColor: "rgba(59,59,57,0.15)",
                transform: `rotate(${angle + 180}deg) translateY(-0.5px)`,
                transformOrigin: "0 0"
              }} />

            <span
              className="relative z-10 block px-3 py-1.5 text-xs font-mono border bg-card"
              style={{ borderColor: "rgba(59,59,57,0.15)", color: "#3B3B39", whiteSpace: "nowrap" }}>

              {label}
            </span>
          </div>);

      })}
    </div>);

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
    <div className="min-h-screen" style={{ backgroundColor: "#F8F9FA" }}>
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
                  Delivered Through an Integrated Compliance Program that's Built to Scale across Standards &amp; Regulations.
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
              <div className="bg-card border border-border p-6 w-full">
                <span className="tech-id block mb-2">[NOTE]</span>
                <p className="text-sm leading-relaxed" style={{ color: "#3B3B39" }}>
                  We focus on operationalising controls and evidence — not producing shelfware.
                </p>
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
                <step.icon className="w-5 h-5 mb-3" style={{ color: "#F36F21" }} />
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
                <li key={b} className="text-xs" style={{ color: "#646464" }}>— {b}</li>
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