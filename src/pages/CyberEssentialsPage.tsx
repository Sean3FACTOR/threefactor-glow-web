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
  XCircle } from
"lucide-react";

/* ═══════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════ */
const Hero = () =>
<section className="relative py-16 md:py-24 overflow-hidden bg-white">

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-foreground leading-[1.1] mb-5">
          Secure Your Future with{" "}
          <span className="text-primary">Cyber Essentials</span> &amp;{" "}
          <span>
            <span style={{ color: "#F36F21" }}>3</span>FACTOR
          </span>
        </h1>
        <div className="w-16 h-px bg-foreground/20 mx-auto mb-5" />
        <div className="text-left max-w-3xl mx-auto mb-8 space-y-5">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-foreground mb-2">Cyber Essentials</h3>
            <p className="text-base text-foreground/70 leading-relaxed">
              A UK government-backed scheme (developed by the NCSC) designed to protect organizations from the most common, low-skill cyber attacks, the kind that look for "unlocked doors" like weak passwords or out-of-date software.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-foreground mb-3">Why Do You Need It?</h3>
            <p className="text-base text-foreground/70 leading-relaxed mb-4">
              In 2026, the digital landscape is more connected than ever. Here is why businesses are prioritizing this certification:
            </p>
            <ul className="space-y-3 text-base text-foreground/70 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">◆</span>
                <span><strong className="text-foreground">Win More Contracts:</strong> It is mandatory for most UK Government tenders. Increasingly, private sector giants (like major banks) won't even look at your proposal if you aren't certified.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">◆</span>
                <span><strong className="text-foreground">Customer Trust:</strong> Showing the Cyber Essentials badge on your website tells clients, "We take your data seriously." It is a powerful trust-builder in a world of frequent data breaches.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">◆</span>
                <span><strong className="text-foreground">Free Cyber Insurance:</strong> For UK organizations with a turnover under £20m, achieving certification often includes free cyber liability insurance (arranged via IASME).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">◆</span>
                <span><strong className="text-foreground">Massive Risk Reduction:</strong> Certified organizations make 92% fewer insurance claims than those without it. It keeps your business running by preventing the "easy" attacks.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">◆</span>
                <span><strong className="text-foreground">Compliance Alignment:</strong> While it's not the same as GDPR, it provides a solid technical foundation that helps you meet your legal obligations for data protection.</span>
              </li>
            </ul>
          </div>
        </div>
        <Link
        to="/contact"
        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold uppercase text-sm tracking-wider border border-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.35)] transition-all duration-300">

          Get Certified with 3FACTOR
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>;


/* ═══════════════════════════════════════════════
   5 PILLARS
   ═══════════════════════════════════════════════ */
const pillars = [
{
  id: "PIL-01",
  icon: Globe,
  title: "Firewalls",
  text: "Creating a secure barrier between your internal network and the internet to block unauthorized access."
},
{
  id: "PIL-02",
  icon: Lock,
  title: "Secure Configuration",
  text: "Stripping away unnecessary software and hardening systems against brute-force attacks."
},
{
  id: "PIL-03",
  icon: Users,
  title: "User Access Control",
  text: "Ensuring only the right people have access to the right data, backed by mandatory Multi-Factor Authentication (MFA)."
},
{
  id: "PIL-04",
  icon: Bug,
  title: "Malware Protection",
  text: "Implementing active scanning and application allow-listing to stop malicious code in its tracks."
},
{
  id: "PIL-05",
  icon: RefreshCw,
  title: "Security Update Management",
  text: "Maintaining a strict 14-day patching cycle for all critical vulnerabilities."
}];


const FivePillars = () =>
<section className="py-14 md:py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-foreground">CYBER ESSENTIALS COMPLIANCE: THE 5 KEY AREAS

      </h2>
        <p className="font-mono text-sm text-foreground/50 mt-2">
          Version 16 (2026) Standards
        </p>
      </div>

      {/* Hub layout: central shield + surrounding cards */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left column — 2 cards */}
        <div className="md:col-span-4 flex flex-col gap-6">
          {pillars.slice(0, 2).map((p) =>
        <PillarCard key={p.id} {...p} />
        )}
        </div>

        {/* Center — shield hub */}
        <div className="md:col-span-4 flex items-center justify-center relative">
          <div className="absolute w-px h-full bg-foreground/5 left-1/2 -translate-x-1/2 hidden md:block" />
          <div className="absolute h-px w-full bg-foreground/5 top-1/2 -translate-y-1/2 hidden md:block" />
          <div className="w-32 h-32 border-2 border-primary/30 flex items-center justify-center relative">
            <Shield className="w-14 h-14 text-primary" />
            <div className="absolute -inset-2 border border-primary/10" />
          </div>
        </div>

        {/* Right column — 2 cards */}
        <div className="md:col-span-4 flex flex-col gap-6">
          {pillars.slice(2, 4).map((p) =>
        <PillarCard key={p.id} {...p} />
        )}
        </div>
      </div>

      {/* Bottom center card */}
      <div className="max-w-md mx-auto mt-6">
        <PillarCard {...pillars[4]} />
      </div>
    </div>
  </section>;


const PillarCard = ({
  id,
  icon: Icon,
  title,
  text





}: {id: string;icon: React.ElementType;title: string;text: string;}) =>
<div className="group bg-card border border-border p-6 transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)]">
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-colors">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wide text-foreground mb-1">
          {title}
        </h3>
        <p className="text-sm text-foreground/60 leading-relaxed">{text}</p>
      </div>
    </div>
  </div>;


/* ═══════════════════════════════════════════════
   ROADMAP
   ═══════════════════════════════════════════════ */
const roadmapSteps = [
{
  id: "STEP-01",
  icon: Search,
  title: "Scoping & Mapping",
  text: "We define your network boundaries and identify all in-scope devices and cloud services."
},
{
  id: "STEP-02",
  icon: Wrench,
  title: "Technical Hardening",
  text: "Our team remediates vulnerabilities, enforces MFA, and secures your firewalls."
},
{
  id: "STEP-03",
  icon: FileCheck,
  title: "Self-Assessment Mastery",
  text: "We prepare your technical answers and documentation for official submission."
},
{
  id: "STEP-04",
  icon: ScanLine,
  title: "Independent Testing (Plus)",
  text: "We support you through the official authenticated scans and malware verification tests."
},
{
  id: "STEP-05",
  icon: Award,
  title: "Certification Awarded",
  text: "You receive your official NCSC-recognized certificate and digital badge."
}];


const Roadmap = () =>
<section
  className="py-20 md:py-28"
  style={{ backgroundColor: "#3B3B39" }}>

    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
          Your Roadmap to Certification
        </h2>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical trail line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 -translate-x-1/2 hidden md:block" />
        <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/30 md:hidden" />

        <div className="space-y-12">
          {roadmapSteps.map((step, i) => {
          const Icon = step.icon;
          const isLeft = i % 2 === 0;
          return (
            <div
              key={step.id}
              className={`relative flex items-start gap-6 md:gap-0 ${
              isLeft ? "md:flex-row" : "md:flex-row-reverse"}`
              }>

                {/* Connector dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-primary border-2 border-primary -translate-x-1/2 top-4 z-10" />

                {/* Content */}
                <div
                className={`ml-12 md:ml-0 md:w-[45%] ${
                isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`
                }>

                  <div
                  className={`flex items-center gap-3 mb-2 ${
                  isLeft ? "md:justify-end" : ""}`
                  }>

                    <Icon className="w-5 h-5 text-primary" />
                    <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {step.text}
                  </p>
                </div>

                {/* Spacer for alternating side */}
                <div className="hidden md:block md:w-[45%]" />
              </div>);

        })}
        </div>
      </div>
    </div>
  </section>;


/* ═══════════════════════════════════════════════
   HOW 3FACTOR GUIDES YOU
   ═══════════════════════════════════════════════ */
const guideItems = [
{
  id: "GD-01",
  icon: Compass,
  title: "We Manage the Complexity",
  text: 'From mapping your "scope" to configuring advanced MFA, we ensure every technical requirement is met.'
},
{
  id: "GD-02",
  icon: FlaskConical,
  title: 'Pre-Audit "Dry Runs"',
  text: 'Before the official assessment, we perform simulated vulnerability scans and malware tests to guarantee a "Pass" result.'
},
{
  id: "GD-03",
  icon: Activity,
  title: "Continuous Compliance",
  text: "We don't just get you certified; we keep you certified with ongoing monitoring and automated patching."
}];


const GuideSection = () =>
<section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-foreground">
          How 3FACTOR Guides You
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {guideItems.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className="group bg-card border border-border p-8 text-center transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)]">

              <div className="w-14 h-14 border border-primary/30 flex items-center justify-center mx-auto mb-5 group-hover:border-primary transition-colors">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {item.text}
              </p>
            </div>);

      })}
      </div>
    </div>
  </section>;


/* ═══════════════════════════════════════════════
   COMPARISON TABLE
   ═══════════════════════════════════════════════ */
const comparisonRows = [
{ feature: "Assessment Type", basic: "Verified Self-Assessment", plus: "Independent Technical Testing" },
{ feature: "Vulnerability Scanning", basic: false, plus: true },
{ feature: "Malware Verification", basic: false, plus: true },
{ feature: "Authenticated Scans", basic: false, plus: true },
{ feature: "NCSC Certificate", basic: true, plus: true },
{ feature: "Digital Badge", basic: true, plus: true },
{ feature: "Supply Chain Assurance", basic: "Basic", plus: "Enhanced" },
{ feature: "Government Contract Eligible", basic: "Limited", plus: "Full" }];


const ComparisonTable = () =>
<section className="py-20 md:py-28" style={{ backgroundColor: "#F8F9FA" }}>
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-foreground">
          Essentials vs. Essentials Plus
        </h2>
      </div>

      <div className="max-w-3xl mx-auto border border-border overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-3 bg-card border-b border-border">
          <div className="p-4 font-mono text-xs uppercase tracking-wider text-foreground/50">
            Feature
          </div>
          <div className="p-4 text-center font-mono text-xs uppercase tracking-wider text-foreground/50 border-l border-border">
            Cyber Essentials
          </div>
          <div className="p-4 text-center font-mono text-xs uppercase tracking-wider text-primary border-l border-border font-bold">
            Essentials Plus
          </div>
        </div>

        {/* Rows */}
        {comparisonRows.map((row, i) =>
      <div
        key={i}
        className={`grid grid-cols-3 ${
        i % 2 === 0 ? "bg-card" : "bg-background"} ${
        i < comparisonRows.length - 1 ? "border-b border-border" : ""}`}>

            <div className="p-4 text-sm text-foreground font-medium">
              {row.feature}
            </div>
            <div className="p-4 text-center border-l border-border">
              <CellValue value={row.basic} />
            </div>
            <div className="p-4 text-center border-l border-border">
              <CellValue value={row.plus} highlight />
            </div>
          </div>
      )}
      </div>
    </div>
  </section>;


const CellValue = ({
  value,
  highlight



}: {value: boolean | string;highlight?: boolean;}) => {
  if (typeof value === "boolean") {
    return value ?
    <CheckCircle2
      className={`w-5 h-5 mx-auto ${highlight ? "text-primary" : "text-foreground/40"}`} /> :


    <XCircle className="w-5 h-5 mx-auto text-foreground/20" />;

  }
  return (
    <span
      className={`text-sm ${highlight ? "text-primary font-semibold" : "text-foreground/60"}`}>

      {value}
    </span>);

};

/* ═══════════════════════════════════════════════
   FOOTER CTA
   ═══════════════════════════════════════════════ */
const FooterCTA = () =>
<section className="py-20 md:py-28" style={{ backgroundColor: "#3B3B39" }}>
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-4">
        Ready to Secure Your Business?
      </h2>
      <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
        Let 3FACTOR take the complexity out of Cyber Essentials. Book a free
        scoping call and take the first step toward certification.
      </p>
      <Link
      to="/contact"
      className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold uppercase text-sm tracking-wider border border-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.35)] transition-all duration-300">

        Book Your Free Scoping Call
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </section>;


/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
const CyberEssentialsPage = () =>
<div style={{ backgroundImage: "none" }} className="bg-white">
    <Navigation />
    <main className="pt-14 bg-white">
      <Hero />
      {/* Section divider */}
      <div className="container mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
      </div>
      <FivePillars />
      <Roadmap />
      <GuideSection />
      <ComparisonTable />
      <FooterCTA />
    </main>
    <Footer />
  </div>;


export default CyberEssentialsPage;