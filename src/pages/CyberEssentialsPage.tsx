import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const pillars = [
  {
    icon: Globe,
    title: "Firewalls",
    subtitle: "Boundary Security",
    text: "Creating a secure barrier between your internal network and the internet to block unauthorized access.",
  },
  {
    icon: Lock,
    title: "Secure Configuration",
    subtitle: "System Hardening",
    text: "Stripping away unnecessary software and hardening systems against brute-force attacks.",
  },
  {
    icon: Users,
    title: "User Access Control",
    subtitle: "Identity & MFA",
    text: "Ensuring only the right people have access to the right data, backed by mandatory Multi-Factor Authentication (MFA).",
  },
  {
    icon: Bug,
    title: "Malware Protection",
    subtitle: "Threat Prevention",
    text: "Implementing active scanning and application allow-listing to stop malicious code in its tracks.",
  },
  {
    icon: RefreshCw,
    title: "Security Update Management",
    subtitle: "Patch Cadence",
    text: "Maintaining a strict 14-day patching cycle for all critical vulnerabilities.",
  },
];

const steps = [
  {
    num: "01",
    title: "Scoping & Mapping",
    desc: "Define your network boundaries and identify all in-scope devices and cloud services.",
  },
  {
    num: "02",
    title: "Technical Hardening",
    desc: "Remediate vulnerabilities, enforce MFA, and secure your firewalls.",
  },
  {
    num: "03",
    title: "Self-Assessment Mastery",
    desc: "Prepare your technical answers and documentation for official submission.",
  },
  {
    num: "04",
    title: "Independent Testing (Plus)",
    desc: "Support through the official authenticated scans and malware verification tests.",
  },
  {
    num: "05",
    title: "Certification Awarded",
    desc: "Receive your official NCSC-recognized certificate and digital badge.",
  },
];

const guideItems = [
  {
    icon: Compass,
    label: "Complexity managed",
    desc: 'From mapping your "scope" to configuring advanced MFA, we ensure every technical requirement is met.',
  },
  {
    icon: FlaskConical,
    label: "Pre-audit dry runs",
    desc: 'Before the official assessment, we perform simulated vulnerability scans and malware tests to guarantee a "Pass" result.',
  },
  {
    icon: Activity,
    label: "Continuous compliance",
    desc: "We don't just get you certified; we keep you certified with ongoing monitoring and automated patching.",
  },
  {
    icon: Shield,
    label: "NCSC expertise",
    desc: "Deep understanding of the NCSC scheme requirements and Version 16 (2026) standards.",
  },
  {
    icon: Award,
    label: "Plus readiness",
    desc: "We prepare you for Essentials Plus from day one, so upgrading is seamless.",
  },
  {
    icon: FileCheck,
    label: "Senior-led delivery",
    desc: "Practical decisions, fast progress. No template theatre.",
  },
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
  {
    q: "What is Cyber Essentials?",
    a: "A UK government-backed scheme (developed by the NCSC) designed to protect organizations from the most common, low-skill cyber attacks — the kind that look for weak passwords or out-of-date software.",
  },
  {
    q: "What's the difference between Cyber Essentials and Cyber Essentials Plus?",
    a: "Cyber Essentials is a verified self-assessment. Cyber Essentials Plus adds independent technical testing including vulnerability scanning, malware verification, and authenticated scans.",
  },
  {
    q: "Is it mandatory?",
    a: "It is mandatory for most UK Government tenders. Increasingly, private sector organisations (like major banks) require it from suppliers.",
  },
  {
    q: "Do I get cyber insurance?",
    a: "For UK organisations with a turnover under £20m, achieving certification often includes free cyber liability insurance (arranged via IASME).",
  },
  {
    q: "How long does it take?",
    a: "Typically 4–6 weeks depending on your current posture. We manage the complexity so your team stays focused on business operations.",
  },
];

const OrangeDot = () => (
  <span
    className="inline-block w-1.5 h-1.5 mt-[6px] shrink-0"
    style={{ backgroundColor: "#F36F21" }}
    aria-hidden="true"
  />
);

const CellValue = ({ value, highlight }: { value: boolean | string; highlight?: boolean }) => {
  if (typeof value === "boolean") {
    return value ? (
      <CheckCircle2 className={`w-5 h-5 mx-auto ${highlight ? "text-primary" : "text-foreground/40"}`} />
    ) : (
      <XCircle className="w-5 h-5 mx-auto text-foreground/20" />
    );
  }
  return (
    <span className={`text-sm ${highlight ? "text-primary font-semibold" : "text-foreground/60"}`}>
      {value}
    </span>
  );
};

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
const CyberEssentialsPage = () => {
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

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8F9FA" }}>
      <Navigation />

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="pt-20 md:pt-24 pb-16" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <span className="text-sm font-medium" style={{ color: "#F36F21" }}>Services</span>
            <span style={{ color: "rgba(59,59,57,0.4)" }}>/</span>
            <span className="text-sm" style={{ color: "#3B3B39" }}>Cyber Essentials</span>
          </div>

          <div className="grid grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left column */}
            <div className="col-span-12 lg:col-span-6">
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-[1.15] uppercase"
                style={{ color: "#3B3B39" }}
              >
                Secure your future with{" "}
                <span style={{ color: "#F36F21" }}>Cyber Essentials</span>
              </h1>

              <p className="text-base md:text-lg mb-5 leading-relaxed" style={{ color: "#646464" }}>
                A UK government-backed scheme (developed by the NCSC) designed to protect organisations
                from the most common cyber attacks — the kind that look for "unlocked doors" like weak
                passwords or out-of-date software.
              </p>

              <p className="text-sm mb-6 italic border-l-2 pl-3" style={{ color: "#646464", borderColor: "#F36F21" }}>
                Certified organisations make 92% fewer insurance claims than those without it.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span
                  className="inline-block px-3 py-1.5 text-xs font-mono border"
                  style={{ borderColor: "rgba(59,59,57,0.15)", color: "#3B3B39", backgroundColor: "rgba(255,255,255,0.7)" }}
                >
                  Typical timeline: ~4–6 weeks
                </span>
                <span
                  className="inline-block px-3 py-1.5 text-xs font-mono border"
                  style={{ borderColor: "rgba(243,111,33,0.3)", color: "#F36F21", backgroundColor: "rgba(243,111,33,0.05)" }}
                >
                  Version 16 (2026) Standards
                </span>
              </div>

              <ul className="space-y-2 mb-8">
                {[
                  "Mandatory for most UK Government tenders",
                  "Free cyber insurance for organisations under £20m turnover",
                  "Clear path from Essentials to Essentials Plus",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm" style={{ color: "#3B3B39" }}>
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "#F36F21" }} />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact">
                  <Button
                    className="text-white font-semibold px-6"
                    style={{ backgroundColor: "#F36F21" }}
                  >
                    Get Certified with 3FACTOR
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>

              <p className="text-xs mt-3" style={{ color: "#646464" }}>
                Free scoping call → tailored plan → certification
              </p>
            </div>

            {/* Right column — 5 Pillars visual */}
            <div className="col-span-12 lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-md">
                {/* Central shield */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-24 h-24 border-2 flex items-center justify-center relative" style={{ borderColor: "rgba(243,111,33,0.3)" }}>
                    <Shield className="w-10 h-10" style={{ color: "#F36F21" }} />
                    <div className="absolute -inset-2 border" style={{ borderColor: "rgba(243,111,33,0.1)" }} />
                  </div>
                </div>
                {/* Pillar chips */}
                <div className="grid grid-cols-2 gap-3">
                  {pillars.map((p, i) => {
                    const Icon = p.icon;
                    return (
                      <div
                        key={i}
                        className={`border p-4 transition-all duration-200 hover:border-[#F36F21] ${i === 4 ? "col-span-2" : ""}`}
                        style={{ borderColor: "rgba(59,59,57,0.1)", backgroundColor: "white" }}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Icon size={14} style={{ color: "#F36F21" }} />
                          <span className="text-xs font-bold uppercase" style={{ color: "#3B3B39" }}>{p.title}</span>
                        </div>
                        <p className="text-xs leading-relaxed" style={{ color: "#646464" }}>{p.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY CYBER ESSENTIALS MATTERS
      ══════════════════════════════════════ */}
      <section className="py-16 bg-white border-y" style={{ borderColor: "rgba(59,59,57,0.08)" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-5">
              <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4" style={{ color: "#3B3B39" }}>
                Why Cyber Essentials matters commercially
              </h2>
              <p className="text-sm" style={{ color: "#646464" }}>
                Cyber Essentials is not just a compliance exercise. It is a structured way to
                demonstrate security maturity and win trust.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <ul className="space-y-3">
                {[
                  { label: "Win More Contracts", text: "Mandatory for most UK Government tenders. Private sector giants increasingly require it from suppliers." },
                  { label: "Customer Trust", text: "The Cyber Essentials badge tells clients you take their data seriously — a powerful trust-builder in a world of frequent breaches." },
                  { label: "Free Cyber Insurance", text: "For UK organisations with a turnover under £20m, certification often includes free cyber liability insurance (via IASME)." },
                  { label: "Compliance Alignment", text: "Provides a solid technical foundation that helps meet legal obligations for data protection." },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3 text-sm" style={{ color: "#3B3B39" }}>
                    <OrangeDot />
                    <span><strong>{item.label}:</strong> {item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          YOU'RE IN THE RIGHT PLACE IF…
      ══════════════════════════════════════ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-10 text-center" style={{ color: "#3B3B39" }}>
            You're in the right place if…
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Globe size={18} />, text: "You need Cyber Essentials for a UK Government tender" },
              { icon: <Shield size={18} />, text: "You want to demonstrate security to clients and partners" },
              { icon: <Zap size={18} />, text: "You want certification without operational disruption" },
              { icon: <ArrowRight size={18} />, text: "You need a clear Essentials → Essentials Plus path" },
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
          ESSENTIALS vs ESSENTIALS PLUS
      ══════════════════════════════════════ */}
      <section className="py-16 bg-white border-y" style={{ borderColor: "rgba(59,59,57,0.08)" }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4" style={{ color: "#3B3B39" }}>
            Essentials vs. Essentials Plus
          </h2>
          <p className="text-sm mb-10 max-w-2xl" style={{ color: "#646464" }}>
            Both levels are NCSC-recognized. Essentials Plus adds independent technical verification
            for organisations that need enhanced supply chain assurance or full government contract eligibility.
          </p>

          <div className="grid grid-cols-12 gap-6">
            {/* Essentials card */}
            <div className="col-span-12 md:col-span-4 bg-white border p-8" style={{ borderColor: "rgba(59,59,57,0.1)" }}>
              <div className="text-xs font-mono mb-2" style={{ color: "#F36F21" }}>SELF-ASSESSMENT</div>
              <h3 className="text-xl font-bold uppercase mb-3" style={{ color: "#3B3B39" }}>Cyber Essentials</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#646464" }}>
                Verified self-assessment covering the 5 key technical controls. The foundation for
                demonstrating baseline security.
              </p>
            </div>

            {/* Plus card */}
            <div
              className="col-span-12 md:col-span-4 border p-8"
              style={{ backgroundColor: "#F36F21", borderColor: "#F36F21" }}
            >
              <div className="text-xs font-mono mb-2" style={{ color: "rgba(255,255,255,0.7)" }}>INDEPENDENT TESTING</div>
              <h3 className="text-xl font-bold uppercase mb-3 text-white">Essentials Plus</h3>
              <p className="text-sm leading-relaxed text-white/90">
                Adds vulnerability scanning, authenticated scans, and malware verification tests
                by an independent assessor.
              </p>
            </div>

            {/* Scope callout */}
            <div
              className="col-span-12 md:col-span-4 border p-8"
              style={{ borderColor: "rgba(243,111,33,0.4)", backgroundColor: "rgba(243,111,33,0.04)" }}
            >
              <div className="text-xs font-mono mb-2" style={{ color: "#F36F21" }}>5 KEY AREAS</div>
              <h3 className="text-base font-bold uppercase mb-4" style={{ color: "#3B3B39" }}>Technical controls</h3>
              <div className="space-y-2">
                {pillars.map((p) => (
                  <div key={p.title} className="flex items-center justify-between">
                    <span className="text-sm font-medium" style={{ color: "#3B3B39" }}>{p.title}</span>
                    <span className="text-xs font-mono px-2 py-0.5" style={{ backgroundColor: "rgba(243,111,33,0.12)", color: "#F36F21" }}>{p.subtitle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          COMPARISON TABLE
      ══════════════════════════════════════ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-10 text-center" style={{ color: "#3B3B39" }}>
            Feature comparison
          </h2>

          <div className="max-w-3xl mx-auto border overflow-hidden" style={{ borderColor: "rgba(59,59,57,0.1)" }}>
            {/* Header */}
            <div className="grid grid-cols-3 bg-white border-b" style={{ borderColor: "rgba(59,59,57,0.1)" }}>
              <div className="p-4 font-mono text-xs uppercase tracking-wider" style={{ color: "#646464" }}>
                Feature
              </div>
              <div className="p-4 text-center font-mono text-xs uppercase tracking-wider border-l" style={{ color: "#646464", borderColor: "rgba(59,59,57,0.1)" }}>
                Cyber Essentials
              </div>
              <div className="p-4 text-center font-mono text-xs uppercase tracking-wider font-bold border-l" style={{ color: "#F36F21", borderColor: "rgba(59,59,57,0.1)" }}>
                Essentials Plus
              </div>
            </div>

            {/* Rows */}
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 ${i < comparisonRows.length - 1 ? "border-b" : ""}`}
                style={{
                  backgroundColor: i % 2 === 0 ? "white" : "#F8F9FA",
                  borderColor: "rgba(59,59,57,0.08)",
                }}
              >
                <div className="p-4 text-sm font-medium" style={{ color: "#3B3B39" }}>
                  {row.feature}
                </div>
                <div className="p-4 text-center border-l" style={{ borderColor: "rgba(59,59,57,0.08)" }}>
                  <CellValue value={row.basic} />
                </div>
                <div className="p-4 text-center border-l" style={{ borderColor: "rgba(59,59,57,0.08)" }}>
                  <CellValue value={row.plus} highlight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          YOUR CLEAR PATH (Stepper)
      ══════════════════════════════════════ */}
      <section className="py-16 bg-white border-y" style={{ borderColor: "rgba(59,59,57,0.08)" }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-10" style={{ color: "#3B3B39" }}>
            Your roadmap to certification
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 relative">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative flex md:flex-col items-start gap-4 md:gap-3 p-5 md:p-4 border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0"
                style={{ borderColor: "rgba(59,59,57,0.08)", backgroundColor: i === 4 ? "rgba(243,111,33,0.04)" : "white" }}
              >
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
            <Link to="/contact">
              <Button
                className="text-white font-semibold px-8"
                style={{ backgroundColor: "#F36F21" }}
              >
                Book Your Free Scoping Call
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW 3FACTOR GUIDES YOU
      ══════════════════════════════════════ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-10" style={{ color: "#3B3B39" }}>
            Why teams choose 3FACTOR for Cyber Essentials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {guideItems.map((item) => (
              <div
                key={item.label}
                className="p-5 border transition-all duration-200 hover:border-[#F36F21]"
                style={{ borderColor: "rgba(59,59,57,0.1)", backgroundColor: "white" }}
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
          BUILD ONCE BAND
      ══════════════════════════════════════ */}
      <section
        className="py-14 border-y"
        style={{ backgroundColor: "#3B3B39", borderColor: "#3B3B39" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4 text-white">
            Certification is the beginning, not the finish line.
          </h2>
          <p className="text-sm max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            We don't just get you certified; we keep you certified with ongoing monitoring,
            automated patching, and a clear upgrade path from Essentials to Essentials Plus.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8" style={{ color: "#3B3B39" }}>
            FAQ
          </h2>
          <div className="max-w-2xl mx-auto">
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
          FINAL CTA
      ══════════════════════════════════════ */}
      <section
        className="py-20"
        style={{ backgroundColor: "#3B3B39" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold uppercase mb-4 text-white">
            Ready to secure your business?
          </h2>
          <p className="text-sm mb-8 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            Let 3<span style={{ color: "#F36F21" }}>FACTOR</span> take the complexity out of Cyber Essentials.
            Book a free scoping call and take the first step toward certification.
          </p>
          <Link to="/contact">
            <Button
              className="text-white font-semibold px-8"
              style={{ backgroundColor: "#F36F21" }}
            >
              Book Your Free Scoping Call
              <ArrowRight size={16} />
            </Button>
          </Link>
          <p className="text-xs mt-4" style={{ color: "rgba(255,255,255,0.5)" }}>
            Free scoping call → tailored plan → NCSC-recognized certification
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CyberEssentialsPage;
