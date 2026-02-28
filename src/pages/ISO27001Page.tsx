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
  Compass,
  Route,
  ShieldCheck } from
"lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
import isoHeroImg from "@/assets/iso27001-hero.jpg";
import consultationImg from "@/assets/iso/consultation.jpg";
import workingLaptopImg from "@/assets/iso/working-laptop.jpg";
import hexagonGraphic from "@/assets/hexagon-network-hero.png";

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
    setTimeout(() => {
      setSubmitting(false);
      onOpenChange(false);
      toast({
        title: "Request received",
        description: "Thanks, we'll reach out to schedule a 30-minute call."
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
          { id: "company", label: "Company *", type: "text" }].
          map((f) =>
          <div key={f.id}>
              <Label htmlFor={f.id} className="font-mono text-xs uppercase tracking-wider text-slate-900">
                {f.label}
              </Label>
              <Input id={f.id} name={f.id} type={f.type} required className="mt-1 border-slate-300 text-slate-900" />
            </div>
          )}
          <div>
            <Label className="font-mono text-xs uppercase tracking-wider text-slate-900">Role *</Label>
            <select name="role" required className={selectClasses}>
              <option value="">Select…</option>
              {["Security", "Compliance", "IT", "Executive", "Other"].map((o) =>
              <option key={o} value={o}>{o}</option>
              )}
            </select>
          </div>
          <div>
            <Label className="font-mono text-xs uppercase tracking-wider text-slate-900">Target timeframe *</Label>
            <select name="timeframe" required className={selectClasses}>
              <option value="">Select…</option>
              {["0–3 months", "3–6 months", "6+ months", "Not sure"].map((o) =>
              <option key={o} value={o}>{o}</option>
              )}
            </select>
          </div>
          <div>
            <Label className="font-mono text-xs uppercase tracking-wider text-slate-900">ISO 27001 status *</Label>
            <select name="isoStatus" required className={selectClasses}>
              <option value="">Select…</option>
              {["Starting", "In progress", "Need Stage 1/2 prep", "Maintaining"].map((o) =>
              <option key={o} value={o}>{o}</option>
              )}
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
    </Dialog>);

};

/* ─── CSAT Lifecycle Timeline Data ─── */
const csatStages = [
{
  icon: Target,
  stage: 1,
  title: "Business Justification & Sponsorship",
  duration: "Ongoing",
  durationWeeks: 4, // proportional weight for bar
  desc: "Determine business drivers, secure leadership sponsorship, and utilize a self-service justification framework.",
  details: [
  "Identify compliance drivers and strategic business objectives",
  "Secure executive sponsorship and budget approval",
  "Complete self-service justification framework",
  "Align certification goals with revenue and partnership targets"]

},
{
  icon: Users,
  stage: 2,
  title: "PROGRAM ENGAGEMENT",
  duration: "1–2 Weeks",
  durationWeeks: 2,
  desc: "Engage with the internal Customer Security, Assurance and Trust (CSAT) Program team to scope and plan the engagement.",
  details: [
  "Kick-off meeting with CSAT Program team",
  "Define engagement scope and boundaries",
  "Establish communication cadence and stakeholders",
  "Agree on milestones and success criteria"]

},
{
  icon: Microscope,
  stage: 3,
  title: "Gap Assessment",
  duration: "~6 Weeks",
  durationWeeks: 6,
  desc: "Service/product teams complete a control questionnaire to identify existing vs. missing controls.",
  details: [
  "Distribute and complete control questionnaire",
  "Identify existing controls and evidence",
  "Map gaps against ISO 27001 requirements",
  "Produce prioritised gap report with remediation plan"]

},
{
  icon: Cog,
  stage: 4,
  title: "Control Implementation & Documentation",
  duration: "3–5 Months",
  durationWeeks: 16,
  desc: "Execution phase. Timeline scales based on technical complexity and team bandwidth.",
  details: [
  "Implement missing controls and evidence workflows",
  "Develop ISMS policies, procedures, and documentation",
  "Build evidence-by-design into operational processes",
  "Conduct iterative reviews with CSAT team"]

},
{
  icon: ClipboardCheck,
  stage: 5,
  title: "Control Validation & Audit Readiness",
  duration: "~4 Weeks",
  durationWeeks: 4,
  desc: "The CSAT team conducts internal validation and readiness checks.",
  details: [
  "Internal control testing and validation",
  "Evidence pack compilation and completeness review",
  "Mock audit walkthroughs and interview coaching",
  "Remediate any findings before external audit"]

},
{
  icon: Eye,
  stage: 6,
  title: "External Audit",
  duration: "~2 Months",
  durationWeeks: 8,
  desc: "Formal review conducted by an external certification body.",
  details: [
  "Stage 1 audit: documentation and design review",
  "Stage 2 audit: operating effectiveness evaluation",
  "Auditor liaison and request management",
  "Close-out support for any non-conformities"]

},
{
  icon: Award,
  stage: 7,
  title: "Certification Achieved",
  duration: "Final Stage",
  durationWeeks: 2,
  desc: "Attestation report or formal ISO 27001 certification is issued.",
  details: [
  "Receive formal ISO 27001 certification",
  "Establish surveillance audit schedule",
  "Transition ISMS to continuous improvement mode",
  "Leverage certification for sales enablement and trust"]

}];


const totalWeeks = csatStages.reduce((sum, s) => sum + s.durationWeeks, 0);

/* ─── Interactive CSAT Timeline ─── */
const InteractiveTimeline = ({ openModal }: {openModal: () => void;}) => {
  const [active, setActive] = useState(0);
  const step = csatStages[active];
  const Icon = step.icon;

  return (
    <div>
      {/* ── Desktop: Horizontal Stepper ── */}
      <div className="hidden lg:block">
        {/* Node row */}
        <div className="relative mb-4">
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-slate-200" />
          <div
            className="absolute top-6 left-0 h-0.5 transition-all duration-500"
            style={{
              width: `${active / (csatStages.length - 1) * 100}%`,
              backgroundColor: "#3B3B39"
            }} />

          <div className="relative flex justify-between">
            {csatStages.map((s, i) => {
              const StepIcon = s.icon;
              const isActive = i === active;
              const isPast = i < active;
              return (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="flex flex-col items-center gap-2 group relative z-10">

                  <div
                    className={`w-12 h-12 flex items-center justify-center border-2 transition-all duration-300 ${
                    isActive ?
                    "border-orange-600 bg-orange-50" :
                    isPast ?
                    "border-[#3B3B39] bg-white" :
                    "border-slate-300 bg-white"}`
                    }>

                    <StepIcon
                      className={`w-5 h-5 transition-colors duration-300 ${
                      isActive ?
                      "text-orange-600" :
                      isPast ?
                      "text-[#3B3B39]" :
                      "text-slate-400"}`
                      } />

                  </div>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider max-w-[90px] text-center leading-tight ${
                    isActive ? "text-orange-600 font-bold" : "text-slate-500"}`
                    }>

                    {s.title}
                  </span>
                </button>);

            })}
          </div>
        </div>

        {/* Proportional duration bar */}
        <div className="flex gap-px mb-8">
          {csatStages.map((s, i) => {
            const widthPct = s.durationWeeks / totalWeeks * 100;
            return (
              <div key={i} style={{ width: `${widthPct}%` }}>
                <div
                  className={`h-2 transition-colors duration-300 ${
                  i <= active ? "bg-orange-600" : "bg-slate-100"}`
                  } />

                <span className="text-[9px] font-mono text-slate-500 mt-1 block truncate">
                  {s.duration}
                </span>
              </div>);

          })}
        </div>

        {/* Detail pane */}
        <div
          className="bg-slate-50 border border-slate-200 shadow-sm p-8 transition-all duration-300">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-white border border-slate-300 flex-shrink-0">
                  <Icon className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-orange-600 uppercase tracking-wider">
                    Stage {step.stage} · {step.duration}
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
                {step.details.map((d) =>
                <li
                  key={d}
                  className="flex items-start gap-2 text-sm text-slate-900">

                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                    {d}
                  </li>
                )}
              </ul>
              <Button
                onClick={openModal}
                className="text-white font-semibold"
                style={{ backgroundColor: "#3B3B39" }}>

                Get a Fixed-Price Proposal
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="hidden lg:flex items-center justify-center overflow-hidden">
              <img
                src={hexagonGraphic}
                alt=""
                className="w-full h-auto max-h-[336px] object-contain opacity-80" />

            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile: Vertical Accordion ── */}
      <div className="lg:hidden">
        <Accordion type="single" collapsible defaultValue="stage-0">
          {csatStages.map((s, i) => {
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
                        Stage {s.stage} · {s.duration}
                      </span>
                      <span className="text-sm font-bold uppercase text-slate-900">
                        {s.title}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pl-[52px]">
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {s.desc}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {s.details.map((d) =>
                    <li
                      key={d}
                      className="flex items-start gap-2 text-sm text-slate-900">

                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                        {d}
                      </li>
                    )}
                  </ul>
                  <Button
                    onClick={openModal}
                    size="sm"
                    className="text-white font-semibold"
                    style={{ backgroundColor: "#3B3B39" }}>

                    Get a Proposal
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </AccordionContent>
              </AccordionItem>);

          })}
        </Accordion>
      </div>
    </div>);

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
    "Deliver a prioritised, actionable roadmap"]

  }
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
    "Control implementation support and validation"]

  }
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
    "Close-out support for non-conformities"]

  }
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
    "Stage 1/Stage 2 preparation + auditor liaison"],

    excluded: [
    "Certification body services / issuing the certificate",
    "Tool licensing costs",
    "Technical remediation execution and control operation",
    "Pen testing / scanning services (partnered if required)"]

  }
}];


/* ─── Sub-Nav Links ─── */
const subNavLinks = [
{ label: "The Approach", target: "approach", icon: Compass },
{ label: "The Roadmap", target: "roadmap", icon: Route },
{ label: "Deliverables", target: "deliverables", icon: FileCheck },
{ label: "Why 3FACTOR", target: "why-3factor", icon: ShieldCheck }];


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

      {/* ═══ HERO BANNER ═══ */}
      <section className="relative min-h-[320px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={isoHeroImg}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true" />

          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(59,59,57,0.88) 0%, rgba(59,59,57,0.72) 50%, rgba(59,59,57,0.55) 100%)" }} />

        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full min-h-[320px] px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-[1.1] text-white mx-auto">
            GET ISO 27001 CERTIFIED.
          </h1>
          <Button
            onClick={openModal}
            size="lg"
            className="group font-semibold transition-all text-white mt-8 mx-auto"
            style={{ backgroundColor: "#3B3B39", border: "1px solid #3B3B39" }}
            onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = "transparent";}}
            onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = "#3B3B39";}}>

            Get a Fixed-Price Proposal
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>


      {/* ─── You're in the right place ─── */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-20 gap-y-8 items-center">
            <div className="lg:col-span-3">
              <h3 className="text-2xl md:text-3xl font-bold uppercase mb-10 text-slate-900">
                You're in the right place if…
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                "ISO 27001 is required for customer assurance or procurement",
                "You need a clear route to certification without derailing delivery",
                "You're being asked for multiple frameworks and want reuse",
                "You want a practical ISMS that operates day-to-day"].
                map((text, i) =>
                <div key={i} className="p-6 text-sm md:text-base text-slate-700 bg-white border border-slate-200">
                    {text}
                  </div>
                )}
              </div>
            </div>
            <div className="hidden lg:block lg:col-span-2 h-full relative">
              <img src={consultationImg} alt="Professional consultation" className="w-full h-full object-cover opacity-90 border border-slate-200" />
              <div className="absolute -bottom-8 -left-8 p-5 shadow-xl max-w-[280px] z-10 bg-white border border-slate-200">
                <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                  We are not a certification body. We prepare you for certification and support you through the certification journey with your chosen auditor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ═══ SUB-NAV BUTTON BAR ═══ */}
      <section className="py-8" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="border-t border-b border-slate-200 py-8">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {subNavLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.target}
                    onClick={() => scrollTo(link.target)}
                    className={`w-full sm:w-auto bg-white border px-6 py-3 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center gap-3 font-medium text-sm ${
                    activeNav === link.target ?
                    "text-orange-600 border-orange-400" :
                    "text-slate-700 border-slate-200 hover:text-orange-600 hover:border-orange-300"}`
                    }>

                    <Icon className="w-5 h-5" />
                    {link.label}
                  </button>);

              })}
            </div>
          </div>
        </div>
      </section>



      {/* ═══ SEGMENT 2: THE ROADMAP ═══ */}
      <section id="roadmap" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-3">[ROADMAP]</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-4">
            THE 7-STAGE CERTIFICATION LIFECYCLE
          </h2>
          <p className="text-sm text-slate-600 mb-12 max-w-2xl">
            Click each stage to explore the details. Typical end-to-end timeline: 8–10+ months.
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
                        w-full transition-all">

                      <TabIcon className="w-4 h-4 shrink-0" />
                      {tab.label}
                    </TabsTrigger>);

                })}
              </TabsList>

              {deliverableTabs.map((tab) =>
              <TabsContent key={tab.value} value={tab.value} className="mt-0 flex-1">
                  <div className="bg-white border border-slate-200 shadow-sm p-8">
                    <h3 className="text-lg font-bold uppercase text-slate-900 mb-3">
                      {tab.content.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-6 leading-relaxed">{tab.content.desc}</p>

                    {tab.content.items &&
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {tab.content.items.map((item) =>
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-900">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                            {item}
                          </li>
                    )}
                      </ul>
                  }

                    {tab.content.included &&
                  <div className="space-y-6">
                        <div>
                          <h4 className="text-xs font-mono uppercase tracking-widest text-orange-600 mb-3">Included</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {tab.content.included.map((item) =>
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-900">
                                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                                {item}
                              </li>
                        )}
                          </ul>
                        </div>
                        <div className="border-t border-slate-200 pt-5">
                          <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">Not Included</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {tab.content.excluded.map((item) =>
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                                <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-50" />
                                {item}
                              </li>
                        )}
                          </ul>
                        </div>
                      </div>
                  }
                  </div>
                </TabsContent>
              )}
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
                        {tab.content.items &&
                        <ul className="space-y-2">
                            {tab.content.items.map((item) =>
                          <li key={item} className="flex items-start gap-2 text-sm text-slate-900">
                                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                                {item}
                              </li>
                          )}
                          </ul>
                        }
                        {tab.content.included &&
                        <div className="space-y-4">
                            <ul className="space-y-2">
                              {tab.content.included.map((item) =>
                            <li key={item} className="flex items-start gap-2 text-sm text-slate-900">
                                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                                  {item}
                                </li>
                            )}
                            </ul>
                            <div className="border-t border-slate-200 pt-4">
                              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">Not Included</h4>
                              <ul className="space-y-2">
                                {tab.content.excluded.map((item) =>
                              <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                                    <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-50" />
                                    {item}
                                  </li>
                              )}
                              </ul>
                            </div>
                          </div>
                        }
                      </div>
                    </AccordionContent>
                  </AccordionItem>);

              })}
            </Accordion>
          </div>

          <p className="text-xs font-mono mt-6 text-slate-400">
            We are not a certification body. We prepare you for certification and support you through the journey with your chosen auditor.
          </p>
        </div>
      </section>

      {/* ═══ WHY 3FACTOR (with Approach merged) ═══ */}
      <section id="why-3factor" className="py-16" style={{ backgroundColor: "#3B3B39" }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <span className="font-mono text-[10px] uppercase tracking-widest text-orange-500 block mb-3">[WHY 3FACTOR]</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mb-3">
            Why organisations choose 3FACTOR
          </h2>

          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
            { icon: Clock, stat: "12–16 Weeks", label: "Typical delivery timeline for certification readiness" },
            { icon: Users, stat: "Senior-Led", label: "Delivered by principals, not juniors. No bait-and-switch" },
            { icon: DollarSign, stat: "Fixed-Price", label: "Clear scope boundaries that protect your budget" },
            { icon: Microscope, stat: "Evidence-First", label: "Controls produce audit evidence as a byproduct of BAU" }].
            map((item, i) => {
              const StatIcon = item.icon;
              return (
                <div key={i} className="text-center lg:text-left">
                  <StatIcon className="w-6 h-6 text-orange-500 mb-3 mx-auto lg:mx-0" />
                  <p className="text-2xl font-bold text-white mb-1">{item.stat}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.label}</p>
                </div>);
            })}
          </div>

          {/* Problems & Solutions */}
          <div id="approach" className="pt-12 border-t border-slate-600">
            <h3 className="text-2xl md:text-3xl font-bold text-white uppercase mb-2">
              AVOID THE COMMON ISO 27001 PITFALLS
            </h3>
            <p className="text-lg text-slate-300 mb-10">
              Follow Our Tried &amp; Tested Approach to Certification &amp; Maintenance.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-6 border-b border-slate-600 pb-3">
                    Common failure modes
                  </h3>
                  <ul className="space-y-6">
                    {[{ problem: "Scope balloons and delivery slows", detail: "Without defensible boundaries, ISO projects expand silently until timelines collapse." }, { problem: "Controls exist, but evidence isn't audit-ready", detail: "Teams do the work but can't prove it when the auditor asks." }, { problem: "Work gets duplicated across audits", detail: "Every new framework feels like starting from scratch." },
                    { problem: "The ISMS becomes shelfware", detail: "Beautiful documentation that nobody uses after certification day." }].
                    map((item, i) =>
                    <li key={i}>
                        <div className="flex items-start gap-3">
                          <XCircle className="w-4 h-4 mt-1 flex-shrink-0 text-slate-500" />
                          <div>
                            <p className="text-sm font-semibold text-slate-300">{item.problem}</p>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.detail}</p>
                          </div>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-orange-500 mb-6 border-b border-orange-500/30 pb-3">
                    How we solve it
                  </h3>
                  <ul className="space-y-6">
                    {[
                    { fix: "Defensible scope boundaries set upfront", detail: "We define clear ISMS boundaries in week one so delivery stays on track." },
                    { fix: "Evidence-by-design workflows from day one", detail: "Controls produce evidence as a byproduct of normal operations." },
                    { fix: "Integrated control framework — build once, reuse everywhere", detail: "Map controls once across ISO, SOC 2, NIS2, DORA and more." },
                    { fix: "Operational ISMS embedded into BAU", detail: "A living system that runs day-to-day, not just at audit time." }].
                    map((item, i) =>
                    <li key={i}>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0 text-orange-500" />
                          <div>
                            <p className="text-sm font-semibold text-white">{item.fix}</p>
                            <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.detail}</p>
                          </div>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5">
                <img
                  src={workingLaptopImg}
                  alt="Professional working on compliance framework"
                  className="w-full h-full object-cover shadow-md min-h-[350px] opacity-80"
                  style={{ border: "1px solid rgba(255,255,255,0.1)" }} />
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-2 justify-center lg:justify-start">
            {["SOC 2", "NIS2", "DORA", "CIS", "CMMC", "ISO 27701"].map((fw) =>
            <span key={fw} className="px-3 py-1 text-xs font-mono border border-slate-700 text-slate-400">
                {fw}
              </span>
            )}
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
            { q: "What does fixed scope mean?", a: "A defined set of deliverables and responsibilities that protects timeline and pricing. Out-of-scope items are agreed separately." }].
            map((item, i) =>
            <AccordionItem key={i} value={`faq-${i}`} className="border-slate-200">
                <AccordionTrigger className="text-sm font-semibold text-left hover:no-underline text-slate-900">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm leading-relaxed text-slate-600">{item.a}</p>
                </AccordionContent>
              </AccordionItem>
            )}
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
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-base px-10 py-6">

            Get a Fixed-Price Proposal
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>);

};

export default ISO27001Page;