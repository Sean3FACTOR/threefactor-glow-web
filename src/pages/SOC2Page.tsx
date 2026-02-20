import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  ArrowRight,
  Shield,
  FileCheck,
  ClipboardList,
  BarChart3,
  Zap,
  Users,
  RefreshCw,
  ChevronRight,
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

/* ─────────────────────────────────────────────
   Proposal Modal
───────────────────────────────────────────── */
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
    // TODO: wire to CRM / email endpoint
    setTimeout(() => {
      setSubmitting(false);
      onOpenChange(false);
      toast({
        title: "Request received",
        description: "Thanks, we'll reach out to schedule a 30-minute call.",
      });
    }, 800);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold uppercase tracking-wide text-foreground">
            Get a Fixed-Price SOC 2 Proposal
          </DialogTitle>
          <DialogDescription className="text-sm" style={{ color: "#646464" }}>
            Right-fit scope (often Security + Availability) • Type 1 + Type 2 setup
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-2 gap-4">
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
          </div>
          <div className="grid grid-cols-2 gap-4">
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
                className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring mt-1"
              >
                <option value="">Select…</option>
                {["Security", "Compliance", "IT", "Executive", "Other"].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="type2Period" className="font-mono text-xs uppercase tracking-wider text-foreground">
                Target Type 2 period *
              </Label>
              <select
                id="type2Period"
                name="type2Period"
                required
                className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring mt-1"
              >
                <option value="">Select…</option>
                {["3 months", "6 months", "12 months", "Not sure"].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="criteria" className="font-mono text-xs uppercase tracking-wider text-foreground">
                Likely criteria *
              </Label>
              <select
                id="criteria"
                name="criteria"
                required
                className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring mt-1"
              >
                <option value="">Select…</option>
                {["Security + Availability", "Security only", "Other / Not sure"].map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <Label htmlFor="isoCertified" className="font-mono text-xs uppercase tracking-wider text-foreground">
              ISO 27001 status *
            </Label>
            <select
              id="isoCertified"
              name="isoCertified"
              required
              className="flex h-10 w-full border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring mt-1"
            >
              <option value="">Select…</option>
              {["Certified", "In implementation", "Not started"].map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="driver" className="font-mono text-xs uppercase tracking-wider text-foreground">
              Primary driver (optional)
            </Label>
            <Textarea id="driver" name="driver" className="mt-1" rows={3} placeholder="e.g. enterprise deal requirement, investor due diligence…" />
          </div>
          <Button
            type="submit"
            disabled={submitting}
            className="w-full text-white font-semibold"
            style={{ backgroundColor: "#F36F21" }}
          >
            {submitting ? "Submitting…" : "Request Proposal"}
          </Button>
          <p className="text-xs text-center" style={{ color: "#646464" }}>
            We'll follow up to schedule a 30-minute call and confirm scope.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

/* ─────────────────────────────────────────────
   Journey Diagram SVG
───────────────────────────────────────────── */
const JourneyDiagram = () => (
  <div className="relative w-full" style={{ maxWidth: 1440 }}>
    <svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="soc2LineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F36F21" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F36F21" stopOpacity="0.5" />
        </linearGradient>
        <filter id="soc2NodeGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Vertical spine */}
      <line x1="240" y1="50" x2="240" y2="310" stroke="url(#soc2LineGrad)" strokeWidth="1.5" />

      {/* ISO Node (optional) */}
      <g>
        <rect x="160" y="28" width="160" height="44" fill="rgba(59,59,57,0.06)" stroke="rgba(59,59,57,0.18)" strokeWidth="1" />
        <text x="240" y="47" textAnchor="middle" fill="#3B3B39" fontSize="10" fontFamily="'Open Sans', sans-serif" opacity="0.6">OPTIONAL FOUNDATION</text>
        <text x="240" y="63" textAnchor="middle" fill="#3B3B39" fontSize="13" fontWeight="bold" fontFamily="'Open Sans', sans-serif">ISO 27001</text>
      </g>

      {/* Connector arrow */}
      <polygon points="240,82 236,74 244,74" fill="rgba(243,111,33,0.4)" />

      {/* SOC 2 Type 1 Node */}
      <g filter="url(#soc2NodeGlow)">
        <rect x="140" y="100" width="200" height="60" fill="#F36F21" opacity="0.95" />
      </g>
      <rect x="140" y="100" width="200" height="60" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <text x="240" y="123" textAnchor="middle" fill="white" fontSize="9" fontFamily="'Open Sans', sans-serif" letterSpacing="2" opacity="0.8">POINT-IN-TIME</text>
      <text x="240" y="143" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="'Open Sans', sans-serif">SOC 2 TYPE 1</text>

      {/* Connector arrow */}
      <polygon points="240,172 236,164 244,164" fill="rgba(243,111,33,0.6)" />

      {/* SOC 2 Type 2 Node */}
      <rect x="120" y="188" width="240" height="72" fill="white" stroke="rgba(243,111,33,0.5)" strokeWidth="1.5" />
      <text x="240" y="210" textAnchor="middle" fill="#F36F21" fontSize="9" fontFamily="'Open Sans', sans-serif" letterSpacing="2">OPERATING PERIOD</text>
      <text x="240" y="232" textAnchor="middle" fill="#3B3B39" fontSize="16" fontWeight="bold" fontFamily="'Open Sans', sans-serif">SOC 2 TYPE 2</text>
      <text x="240" y="250" textAnchor="middle" fill="#646464" fontSize="9" fontFamily="'Open Sans', sans-serif">3 / 6 / 12 months</text>

      {/* Banner */}
      <rect x="80" y="278" width="320" height="32" fill="rgba(59,59,57,0.06)" stroke="rgba(59,59,57,0.1)" strokeWidth="1" />
      <text x="240" y="298" textAnchor="middle" fill="#3B3B39" fontSize="10" fontFamily="'Open Sans', sans-serif" opacity="0.7">Continuous compliance · evidence on demand</text>

      {/* Floating dots */}
      <circle cx="108" cy="130" r="3" fill="rgba(243,111,33,0.25)" />
      <circle cx="372" cy="220" r="3" fill="rgba(243,111,33,0.25)" />
      <circle cx="96" cy="230" r="2" fill="rgba(243,111,33,0.15)" />
      <circle cx="384" cy="140" r="2" fill="rgba(243,111,33,0.15)" />
    </svg>
  </div>
);

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
const SOC2Page = () => {
  const [modalOpen, setModalOpen] = useState(false);

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

  const openModal = () => {
    setModalOpen(true);
    // Analytics hook point
    try { (window as any).gtag?.("event", "soc2_primary_cta_click"); } catch {}
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const serviceCards = [
    {
      icon: <ClipboardList size={20} />,
      title: "SOC 2 Readiness Assessment",
      subtitle: "Gap Analysis",
      bullets: [
        "Scope and boundary definition",
        "Customer requirements → TSC selection (right-fit scope)",
        "Control design + evidence maturity review",
        "Roadmap and Type 1 → Type 2 plan",
      ],
    },
    {
      icon: <Shield size={20} />,
      title: "SOC 2 Type 1 Preparation",
      subtitle: "Design Readiness",
      bullets: [
        "TSC-aligned control statements",
        "Audit-ready documentation pack",
        "Evidence register setup (for Type 2)",
        "Auditor coordination support",
      ],
    },
    {
      icon: <FileCheck size={20} />,
      title: "SOC 2 System Description",
      subtitle: "Section 3",
      bullets: [
        "Draft and refine Section 3 narrative",
        "Boundaries, components, subservice orgs",
        "Align narrative to operational reality",
        "Reduce auditor churn",
      ],
    },
    {
      icon: <BarChart3 size={20} />,
      title: "SOC 2 Type 2 Program Setup",
      subtitle: "Evidence & Monitoring",
      bullets: [
        "Evidence cadence + owners + sources + retention",
        "Low-level monitoring checks",
        "Sampling readiness model",
        "Evidence-on-demand foundations",
      ],
    },
    {
      icon: <RefreshCw size={20} />,
      title: "Optional: Type 2 Period Support",
      subtitle: "Ongoing Operations",
      bullets: [
        "Monthly evidence ops + sampling readiness",
        "Auditor liaison and walkthrough support",
        "Exceptions management",
        "Close-out and next-cycle improvements",
      ],
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Scope & TSC Mapping",
      desc: "Define boundaries and select criteria based on customer expectations: right-fit scope, nothing more.",
    },
    {
      num: "02",
      title: "Readiness Assessment",
      desc: "Confirm control design and evidence gaps with a prioritised remediation plan.",
    },
    {
      num: "03",
      title: "Remediation + Documentation",
      desc: "Implement controls and complete the Section 3 system description.",
    },
    {
      num: "04",
      title: "Type 1 + Type 2 Setup",
      desc: "Prepare the Type 1 pack and establish monitoring + evidence cadence for Type 2.",
    },
    {
      num: "05",
      title: "Optional: Type 2 Period Support",
      desc: "Evidence ops + auditor liaison through the operating period and close-out.",
    },
  ];

  const whyItems = [
    { label: "Auditor-effective", desc: "Strong track record supporting Tier 1 and Tier 2 CPA firms" },
    { label: "Right-fit scope", desc: "Typically Security + Availability, aligned to customer needs" },
    { label: "Evidence by design", desc: "Monitoring + cadence established before Type 2 starts" },
    { label: "Low friction", desc: "Clear owners and sources, minimal disruption to delivery teams" },
    { label: "Integrated program", desc: "Reuse controls and evidence alongside ISO 27001 where relevant" },
    { label: "Senior-led delivery", desc: "Practical decisions, fast progress. No template theatre." },
  ];

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

  const OrangeDot = () => (
    <span
      className="inline-block w-1.5 h-1.5 mt-[6px] shrink-0"
      style={{ backgroundColor: "#F36F21" }}
      aria-hidden="true"
    />
  );

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
          style={{ backgroundColor: "#F36F21" }}
        >
          Get Proposal
        </Button>
      </div>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="pt-20 md:pt-24 pb-16" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <span className="text-sm font-medium" style={{ color: "#F36F21" }}>Services</span>
            <span style={{ color: "rgba(59,59,57,0.4)" }}>/</span>
            <span className="text-sm" style={{ color: "#3B3B39" }}>SOC 2</span>
          </div>

          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left column */}
            <div className="col-span-12 lg:col-span-7">
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-[1.15] uppercase"
                style={{ color: "#3B3B39" }}
              >
                Turn SOC 2 into a practical trust signal that reduces sales friction.
              </h1>

              <p className="text-base md:text-lg mb-5 leading-relaxed" style={{ color: "#646464" }}>
                Achieve SOC 2 Type 1 efficiently and set up Type 2 for success with an expert-led,
                automation-enabled approach, aligned to the Trust Services Criteria and focused on
                the criteria your customers care about most (commonly Security + Availability).
              </p>

              <p className="text-sm mb-5 leading-relaxed" style={{ color: "#646464" }}>
                3FACTOR helps you design a right-fit SOC 2 scope, implement controls, complete the
                Section 3 system description, and establish monitoring and evidence operations so you
                stay audit-ready across a 3, 6, or 12-month Type 2 period.
              </p>

              <p className="text-sm mb-6 italic border-l-2 pl-3" style={{ color: "#646464", borderColor: "#F36F21" }}>
                We are not your auditor. We support SOC 2 engagements with multiple Tier 1 and Tier 2
                CPA firms, and we have a strong track record of successful SOC 2 audits across clients
                and industries.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span
                  className="inline-block px-3 py-1.5 text-xs font-mono border"
                  style={{ borderColor: "rgba(59,59,57,0.15)", color: "#3B3B39", backgroundColor: "rgba(255,255,255,0.7)" }}
                >
                  Typical timeline: ~4–5 months
                </span>
                {["ISO 27001 parallel delivery available"].map((chip) => (
                  <span
                    key={chip}
                    className="inline-block px-3 py-1.5 text-xs font-mono border"
                    style={{ borderColor: "rgba(243,111,33,0.3)", color: "#F36F21", backgroundColor: "rgba(243,111,33,0.05)" }}
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 mb-8">
                {[
                  "Right-fit scope aligned to customer requirements",
                  "Evidence on demand through monitoring + cadence",
                  "Clear Type 1 → Type 2 path without operational bloat",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm" style={{ color: "#3B3B39" }}>
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "#F36F21" }} />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={openModal}
                  className="text-white font-semibold px-6"
                  style={{ backgroundColor: "#F36F21" }}
                >
                  Get a Fixed-Price SOC 2 Proposal
                  <ArrowRight size={16} />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollTo("checklist")}
                  className="font-medium px-6 border-foreground/20"
                >
                  Download the SOC 2 Checklist
                </Button>
              </div>

              <p className="text-xs mt-3" style={{ color: "#646464" }}>
                30-minute call → right-fit scope + tailored plan → fixed-price proposal (Type 1 + Type 2 setup)
              </p>
            </div>

            {/* Right column — Journey Diagram */}
            <div className="col-span-12 lg:col-span-5 flex justify-center">
              <JourneyDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY SOC 2 MATTERS COMMERCIALLY
      ══════════════════════════════════════ */}
      <section className="py-16 bg-white border-y" style={{ borderColor: "rgba(59,59,57,0.08)" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-5">
              <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4" style={{ color: "#3B3B39" }}>
                Why SOC 2 matters commercially
              </h2>
              <p className="text-sm" style={{ color: "#646464" }}>
                SOC 2 is not only a compliance exercise. It is a structured way to demonstrate
                operational trust.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#646464" }}>
                In most B2B and SaaS markets, customers and procurement teams expect independent
                assurance of your security and operational controls. A SOC 2 report reduces
                repetitive questionnaires, improves confidence during vendor risk review, and helps
                deals progress with fewer delays.
              </p>
              <ul className="space-y-3">
                {[
                  "Streamlines customer security reviews and procurement",
                  "Provides independent assurance aligned to the Trust Services Criteria",
                  "Supports supply chain scrutiny with a credible control narrative",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#3B3B39" }}>
                    <OrangeDot />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          RIGHT PLACE CARDS
      ══════════════════════════════════════ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-10 text-center" style={{ color: "#3B3B39" }}>
            You're in the right place if…
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Zap size={18} />, text: "Security questionnaires are slowing deals" },
              { icon: <ArrowRight size={18} />, text: "You need a clear Type 1 → Type 2 approach" },
              { icon: <RefreshCw size={18} />, text: "You want evidence to be routine, not reactive" },
              { icon: <Shield size={18} />, text: "You want a right-fit scope (often Security + Availability)" },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white border p-6 transition-all duration-200 hover:border-[#F36F21]"
                style={{ borderColor: "rgba(59,59,57,0.1)" }}
              >
                <div className="mb-3" style={{ color: "#F36F21" }}>{card.icon}</div>
                <p className="text-sm font-medium" style={{ color: "#3B3B39" }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY SOC 2 TYPE 2 STALLS
      ══════════════════════════════════════ */}
      <section className="py-16 bg-white border-y" style={{ borderColor: "rgba(59,59,57,0.08)" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 lg:col-span-5">
              <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4" style={{ color: "#3B3B39" }}>
                Why SOC 2 Type 2 stalls
              </h2>
              <p className="text-sm italic leading-relaxed" style={{ color: "#646464", borderLeft: "2px solid #F36F21", paddingLeft: 12 }}>
                Type 2 success depends on how you operate for months in the middle, not how you prepare at the end.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <ul className="space-y-3">
                {[
                  "Evidence collection is inconsistent across the operating period",
                  "Control ownership is unclear, with no named responsible party",
                  "Monitoring checks are not defined before the period begins",
                  "Sampling becomes a last-minute scramble instead of a prepared exercise",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm p-4 border"
                    style={{ color: "#3B3B39", borderColor: "rgba(59,59,57,0.08)", backgroundColor: "rgba(248,249,250,0.8)" }}
                  >
                    <span className="shrink-0 text-xs font-mono mt-0.5" style={{ color: "#F36F21" }}>✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SOC 2 IN PLAIN ENGLISH
      ══════════════════════════════════════ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4" style={{ color: "#3B3B39" }}>
            SOC 2 in plain English
          </h2>
          <p className="text-sm mb-10 max-w-2xl" style={{ color: "#646464" }}>
            SOC 2 evaluates controls against the Trust Services Criteria (TSC). Security is required,
            and Availability is the most common add-on. We help you select a right-fit scope that meets
            customer expectations without unnecessary complexity.
          </p>

          <div className="grid grid-cols-12 gap-6">
            {/* Type 1 card */}
            <div className="col-span-12 md:col-span-4 bg-white border p-8" style={{ borderColor: "rgba(59,59,57,0.1)" }}>
              <div className="text-xs font-mono mb-2" style={{ color: "#F36F21" }}>POINT-IN-TIME</div>
              <h3 className="text-xl font-bold uppercase mb-3" style={{ color: "#3B3B39" }}>Type 1</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#646464" }}>
                Confirms controls are suitably designed at a point in time. The foundation for
                demonstrating intent and design before moving to operating effectiveness.
              </p>
            </div>

            {/* Type 2 card */}
            <div
              className="col-span-12 md:col-span-4 border p-8"
              style={{ backgroundColor: "#F36F21", borderColor: "#F36F21" }}
            >
              <div className="text-xs font-mono mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>OPERATING PERIOD</div>
              <h3 className="text-xl font-bold uppercase mb-3 text-white">Type 2</h3>
              <p className="text-sm leading-relaxed text-white/90">
                Confirms controls operate effectively over a defined period (commonly 3, 6, or 12 months).
                The market standard for B2B and enterprise trust.
              </p>
            </div>

            {/* Scope callout */}
            <div
              className="col-span-12 md:col-span-4 border p-8"
              style={{ borderColor: "rgba(243,111,33,0.4)", backgroundColor: "rgba(243,111,33,0.04)" }}
            >
              <div className="text-xs font-mono mb-2" style={{ color: "#F36F21" }}>MOST COMMON SCOPE</div>
              <h3 className="text-base font-bold uppercase mb-4" style={{ color: "#3B3B39" }}>Right-fit criteria</h3>
              <div className="space-y-2">
                {[
                  { label: "Security", note: "Required" },
                  { label: "Availability", note: "Most common add-on" },
                  { label: "Others", note: "When contracts require" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center justify-between">
                    <span className="text-sm font-medium" style={{ color: "#3B3B39" }}>{c.label}</span>
                    <span className="text-xs font-mono px-2 py-0.5" style={{ backgroundColor: "rgba(243,111,33,0.12)", color: "#F36F21" }}>{c.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ISO 27001 BRIDGE
      ══════════════════════════════════════ */}
      <section className="py-16 bg-white border-y" style={{ borderColor: "rgba(59,59,57,0.08)" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-6">
              <div className="text-xs font-mono mb-2" style={{ color: "#F36F21" }}>FRAMEWORK SYNERGY</div>
              <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4" style={{ color: "#3B3B39" }}>
                ISO 27001 → SOC 2: a logical progression
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#646464" }}>
                If you're already ISO 27001 certified (or implementing it), SOC 2 Type 1 is often a
                light lift. ISO 27001 establishes the management system to design risk-based controls
                and monitor their operation. SOC 2 then provides external attestation aligned to the TSC.
              </p>
              <ul className="space-y-3">
                {[
                  "Type 1 leverages existing ISMS control design and governance",
                  "Type 2 succeeds with monitoring + evidence cadence already established",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#3B3B39" }}>
                    <OrangeDot />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div
                className="border p-6 space-y-4"
                style={{ borderColor: "rgba(59,59,57,0.1)", backgroundColor: "rgba(248,249,250,0.8)" }}
              >
                {[
                  { from: "ISO 27001 ISMS", to: "SOC 2 control framework", note: "Reuse control design" },
                  { from: "Risk treatment plan", to: "TSC control mapping", note: "Aligned evidence" },
                  { from: "Internal audit cadence", to: "Type 2 monitoring checks", note: "Shared operations" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <span className="font-mono text-xs px-2 py-1 shrink-0" style={{ backgroundColor: "rgba(59,59,57,0.06)", color: "#3B3B39" }}>{row.from}</span>
                    <ChevronRight size={14} style={{ color: "#F36F21", flexShrink: 0 }} />
                    <span className="font-mono text-xs px-2 py-1 shrink-0" style={{ backgroundColor: "rgba(243,111,33,0.08)", color: "#F36F21" }}>{row.to}</span>
                    <span className="text-xs ml-auto" style={{ color: "#646464" }}>{row.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PLAN / STEPPER
      ══════════════════════════════════════ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-10" style={{ color: "#3B3B39" }}>
            Your clear path to SOC 2
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 relative">
            {steps.map((step, i) => (
              <div key={i} className="relative flex md:flex-col items-start gap-4 md:gap-3 p-5 md:p-4 border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0 bg-white"
                style={{ borderColor: "rgba(59,59,57,0.08)" }}>
                <div
                  className="text-xl font-bold font-mono shrink-0"
                  style={{ color: "rgba(243,111,33,0.3)" }}
                >
                  {step.num}
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase mb-1" style={{ color: "#3B3B39" }}>
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#646464" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button
              onClick={openModal}
              className="text-white font-semibold px-8"
              style={{ backgroundColor: "#F36F21" }}
            >
              Get a Fixed-Price SOC 2 Proposal
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHAT WE DELIVER — SERVICE CARDS
      ══════════════════════════════════════ */}
      <section className="py-16 bg-white border-y" style={{ borderColor: "rgba(59,59,57,0.08)" }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-3" style={{ color: "#3B3B39" }}>
            What we deliver
          </h2>
          <p className="text-sm mb-10 max-w-xl" style={{ color: "#646464" }}>
            Fixed-price proposal covers Type 1 + Type 2 program setup. We work collaboratively with
            Tier 1 and Tier 2 CPA firms and adapt to different sampling and walkthrough expectations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceCards.map((card, i) => (
              <div
                key={i}
                className="border p-6 transition-all duration-200 hover:border-[#F36F21]"
                style={{ borderColor: "rgba(59,59,57,0.1)", backgroundColor: "#F8F9FA" }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span style={{ color: "#F36F21" }}>{card.icon}</span>
                  <span className="text-xs font-mono" style={{ color: "#646464" }}>{card.subtitle}</span>
                </div>
                <h3 className="text-sm font-bold uppercase mb-4" style={{ color: "#3B3B39" }}>
                  {card.title}
                </h3>
                <ul className="space-y-2">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs" style={{ color: "#646464" }}>
                      <OrangeDot />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          AUTOMATION POSITIONING
      ══════════════════════════════════════ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5">
              <div className="text-xs font-mono mb-2" style={{ color: "#F36F21" }}>DELIVERY APPROACH</div>
              <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4" style={{ color: "#3B3B39" }}>
                Expert-led delivery, supported by automation
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#646464" }}>
                We combine senior compliance expertise with automation-enabled evidence workflows to
                reduce manual effort and keep your SOC 2 program consistently audit-ready.
              </p>
              <p className="text-xs italic" style={{ color: "#646464" }}>
                We do not rely on generic templates alone. Controls and evidence are tailored to your environment.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <ul className="space-y-3">
                {[
                  "Guidance on control design that fits your operating model, avoiding over-engineering",
                  "Evidence workflows aligned to your existing systems and processes",
                  "Defined monitoring checks and cadences to prevent compliance drift",
                  "Audit-ready evidence register that supports sampling at any time",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm p-4 bg-white border"
                    style={{ color: "#3B3B39", borderColor: "rgba(59,59,57,0.08)" }}
                  >
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: "#F36F21" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          EVIDENCE ENABLEMENT
      ══════════════════════════════════════ */}
      <section className="py-16 bg-white border-y" style={{ borderColor: "rgba(59,59,57,0.08)" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5">
              <div className="text-xs font-mono mb-2" style={{ color: "#F36F21" }}>OPERATIONAL READINESS</div>
              <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4" style={{ color: "#3B3B39" }}>
                Evidence on demand, enabled by your existing systems
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#646464" }}>
                We set up evidence collection and monitoring to run through the systems you already
                 use: identity and access controls, ticketing and change workflows, cloud logs,
                 endpoint controls, and policy repositories. Evidence is captured as part of daily
                 operations, not a monthly scramble.
              </p>
              <div
                className="border-l-2 pl-4 text-sm italic"
                style={{ borderColor: "#F36F21", color: "#646464" }}
              >
                This is what makes Type 2 sustainable across a 3, 6, or 12-month period.
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <ul className="space-y-3">
                {[
                  "Define evidence sources and owners per control (TSC-aligned)",
                  "Streamline recurring evidence capture where possible",
                  "Lightweight monitoring checks for ongoing control operation",
                  "Evidence register ready for sampling at any time",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm p-4 border"
                    style={{ color: "#3B3B39", borderColor: "rgba(59,59,57,0.08)", backgroundColor: "#F8F9FA" }}
                  >
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: "#F36F21" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TIMELINE
      ══════════════════════════════════════ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-2" style={{ color: "#3B3B39" }}>
            Typical delivery: ~4–5 months
          </h2>
          <p className="text-sm mb-10 max-w-2xl" style={{ color: "#646464" }}>
            Timeline depends on organisational complexity, scope, and control environment maturity.
            When ISO 27001 is being implemented, SOC 2 Type 1 and the Section 3 system description
            can often be developed in parallel to reduce duplication.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                phase: "Weeks 1–6",
                title: "Foundation",
                bullets: ["Scope + TSC mapping", "Readiness assessment", "Control design", "Section 3 drafting"],
                style: { borderColor: "rgba(59,59,57,0.1)", backgroundColor: "white" },
              },
              {
                phase: "Weeks 7–12",
                title: "Type 1 + Type 2 Setup",
                bullets: ["Type 1 pack", "Evidence model + cadence", "Monitoring checks", "Sampling readiness"],
                style: { borderColor: "#F36F21", backgroundColor: "#F36F21" },
                dark: true,
              },
              {
                phase: "3 / 6 / 12 months",
                title: "Type 2 Period",
                bullets: ["Evidence-on-demand routines", "Walkthrough support (optional)", "Exceptions management + close-out (optional)"],
                style: { borderColor: "rgba(59,59,57,0.1)", backgroundColor: "white" },
                note: "Optional support tier",
              },
            ].map((phase, i) => (
              <div key={i} className="border p-6" style={phase.style}>
                <div className={`text-xs font-mono mb-1 ${phase.dark ? "text-white/70" : ""}`} style={!phase.dark ? { color: "#F36F21" } : {}}>
                  {phase.phase}
                </div>
                <h3 className={`text-base font-bold uppercase mb-4 ${phase.dark ? "text-white" : ""}`} style={!phase.dark ? { color: "#3B3B39" } : {}}>
                  {phase.title}
                </h3>
                {phase.note && (
                  <div className="text-xs font-mono mb-3 px-2 py-1 inline-block" style={{ backgroundColor: "rgba(59,59,57,0.06)", color: "#646464" }}>
                    {phase.note}
                  </div>
                )}
                <ul className="space-y-2">
                  {phase.bullets.map((b) => (
                    <li key={b} className={`flex items-start gap-2 text-xs ${phase.dark ? "text-white/90" : ""}`} style={!phase.dark ? { color: "#646464" } : {}}>
                      <OrangeDot />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BUILD ONCE BAND
      ══════════════════════════════════════ */}
      <section
        className="py-14 border-y"
        style={{ backgroundColor: "#3B3B39", borderColor: "#3B3B39" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4 text-white">
            Build once. Reuse across frameworks.
          </h2>
          <p className="text-sm max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            We design controls and evidence with reuse in mind so your SOC 2 work can support
             adjacent requirements such as ISO 27001 and customer assurance requests,
             reducing duplicate work over time.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY 3FACTOR
      ══════════════════════════════════════ */}
      <section className="py-16 bg-white border-b" style={{ borderColor: "rgba(59,59,57,0.08)" }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-10" style={{ color: "#3B3B39" }}>
            Why teams choose 3FACTOR for SOC 2
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyItems.map((item) => (
              <div
                key={item.label}
                className="p-5 border transition-all duration-200 hover:border-[#F36F21]"
                style={{ borderColor: "rgba(59,59,57,0.1)", backgroundColor: "#F8F9FA" }}
              >
                <div className="text-xs font-mono font-bold uppercase mb-1" style={{ color: "#F36F21" }}>
                  {item.label}
                </div>
                <p className="text-sm" style={{ color: "#646464" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8" style={{ color: "#3B3B39" }}>
            FAQ
          </h2>
          <div className="max-w-2xl">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border px-5"
                  style={{ borderColor: "rgba(59,59,57,0.1)", backgroundColor: "white" }}
                >
                  <AccordionTrigger className="text-sm font-semibold text-left" style={{ color: "#3B3B39" }}>
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm pb-4" style={{ color: "#646464" }}>
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

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

      {/* ══════════════════════════════════════
          CHECKLIST / LEAD MAGNET
      ══════════════════════════════════════ */}
      <section
        id="checklist"
        className="py-16 border-y"
        style={{ borderColor: "rgba(59,59,57,0.08)", backgroundColor: "rgba(243,111,33,0.04)" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-7">
              <div className="text-xs font-mono mb-2" style={{ color: "#F36F21" }}>FREE RESOURCE</div>
              <h2 className="text-2xl font-bold uppercase mb-3" style={{ color: "#3B3B39" }}>
                Download the SOC 2 Preparation Checklist
              </h2>
              <p className="text-sm" style={{ color: "#646464" }}>
                A one-page checklist to validate scope, evidence readiness, and the Type 1 → Type 2 path.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5 flex justify-end">
              <Button
                onClick={() => {
                  try { (window as any).gtag?.("event", "soc2_checklist_download"); } catch {}
                  // TODO: link to actual asset
                  alert("Checklist download — wire to: soc2-preparation-checklist-2025.pdf");
                }}
                variant="outline"
                className="font-semibold px-8 border-foreground/30"
              >
                Download Checklist
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <section
        className="py-20"
        style={{ backgroundColor: "#3B3B39" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold uppercase mb-4 text-white">
            Ready to reduce SOC 2 friction in enterprise deals?
          </h2>
          <p className="text-sm mb-8 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            Schedule a 30-minute call to receive a tailored plan and fixed-price proposal for
            Type 1 + Type 2 program setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={openModal}
              className="text-white font-semibold px-8"
              style={{ backgroundColor: "#F36F21" }}
            >
              Get a Fixed-Price SOC 2 Proposal
              <ArrowRight size={16} />
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollTo("checklist")}
              className="font-medium px-8 text-white border-white/30 hover:bg-white/10"
            >
              Download the Checklist
            </Button>
          </div>
          <p className="text-xs mt-4" style={{ color: "rgba(255,255,255,0.5)" }}>
            30-minute call → right-fit scope + tailored plan → fixed-price proposal
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SOC2Page;
