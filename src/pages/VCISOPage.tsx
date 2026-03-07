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
  Compass,
  FileCheck,
  ShieldCheck,
  Clock,
  Users,
  DollarSign,
  Globe,
  Lock,
  FileText,
  Phone,
  UserCheck,
  Briefcase,
  TrendingUp,
  Link2,
  Settings,
  Rocket,
  Trophy,
  Headset,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import VCISOTimeline from "@/components/vciso/VCISOTimeline";
import isoHeroImg from "@/assets/hero-boardroom.jpg";
import consultationImg from "@/assets/services/boardroom-strategy.jpg";

/* ─── Sub-Nav Links ─── */
const subNavLinks = [
  { label: "The Approach", target: "approach", icon: Compass },
  { label: "What We Deliver", target: "deliverables", icon: FileCheck },
  { label: "Why 3FACTOR", target: "why-3factor", icon: ShieldCheck },
];

/* ─── Page ─── */
const VCISOPage = () => {
  const [activeNav, setActiveNav] = useState("");
  const [col2Open, setCol2Open] = useState(true);

  useEffect(() => {
    document.title = "Virtual CISO Services | 3FACTOR";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Boutique, senior-led virtual CISO services that bridge the gap between compliance and revenue. Security leadership that sells."
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

      {/* ═══ HERO BANNER ═══ */}
      <section className="relative min-h-[420px] flex items-center justify-center overflow-hidden pt-24 md:pt-32">
        <div className="absolute inset-0 z-0">
          <img
            src={isoHeroImg}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
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
            SECURITY THAT DOESN'T JUST PROTECT YOUR BUSINESS—IT SELLS IT.
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-medium text-white/85 max-w-2xl mx-auto">
            Most companies view a CISO as a defensive necessity. We view the
            vCISO as a strategic growth engine.
          </p>

          {/* Semi-transparent charcoal body text box */}
          <div
            className="mt-8 max-w-3xl mx-auto p-6 md:p-8"
            style={{
              backgroundColor: "rgba(59,59,57,0.75)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              At 3FACTOR, we provide boutique, senior-led security leadership
              that bridges the gap between complex compliance and your bottom
              line. We help you prove security to your most demanding prospects,
              shortening sales cycles and winning enterprise-grade deals.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="group font-semibold transition-all text-white mt-10 mx-auto"
            style={{
              backgroundColor: "#3B3B39",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <Link to="/contact">
              Book a Strategy Call
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ═══ INTRODUCTION (White) — 3-Column Grid ═══ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-start">
            {/* Column 1: Accordion — The vCISO Advantage */}
            <div className="px-6 lg:px-8">
              <Accordion type="single" collapsible defaultValue="vciso-advantage">
                <AccordionItem value="vciso-advantage" className="border-none">
                  <AccordionTrigger className="py-0 hover:no-underline">
                    <h3 className="text-base md:text-lg font-bold uppercase tracking-wide text-slate-800">
                      THE vCISO ADVANTAGE
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="mt-4 space-y-4">
                      <Accordion type="single" collapsible>
                        <AccordionItem
                          value="cost"
                          className="border-b border-slate-200"
                        >
                          <AccordionTrigger className="text-sm font-semibold text-slate-800 hover:no-underline py-3">
                            Cost-Efficiency
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-sm text-slate-600 leading-relaxed">
                              A full-time CISO costs £180K–£250K+ before
                              benefits. Our vCISO gives you the same
                              board-level leadership at a fraction of the cost,
                              with zero recruitment risk.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                          value="expertise"
                          className="border-b border-slate-200"
                        >
                          <AccordionTrigger className="text-sm font-semibold text-slate-800 hover:no-underline py-3">
                            Elite Expertise on Demand
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-sm text-slate-600 leading-relaxed">
                              Access senior security professionals with 14+
                              years of cross-industry experience. No ramp-up
                              time, no learning on the job.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                          value="cross-pollination"
                          className="border-b border-slate-200"
                        >
                          <AccordionTrigger className="text-sm font-semibold text-slate-800 hover:no-underline py-3">
                            Industry Cross-Pollination
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-sm text-slate-600 leading-relaxed">
                              We work across SaaS, fintech, healthcare, and
                              critical infrastructure. Best practices from one
                              sector become your competitive advantage in
                              another.
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Column 2: Eliminate Sales Friction card */}
            <div className="px-6 lg:px-8 border-t lg:border-t-0 lg:border-l lg:border-r border-slate-200 pt-8 lg:pt-0">
              <button
                onClick={() => setCol2Open(!col2Open)}
                className="flex lg:hidden items-center justify-between w-full text-left mb-4 cursor-pointer"
              >
                <h3 className="text-base md:text-lg font-bold uppercase tracking-wide text-slate-800">
                  ELIMINATE SALES FRICTION
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                    col2Open ? "rotate-180" : ""
                  }`}
                />
              </button>
              <h3 className="hidden lg:block text-base md:text-lg font-bold uppercase tracking-wide text-slate-800 mb-4">
                ELIMINATE SALES FRICTION
              </h3>
              <div
                className={`overflow-hidden transition-all duration-300 lg:!max-h-none lg:!opacity-100 ${
                  col2Open
                    ? "max-h-[600px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col gap-3">
                  {[
                    "Security questionnaires answered in hours, not weeks",
                    "A senior CISO on your prospect calls for instant credibility",
                    "Pre-built trust documentation that shortens due diligence",
                    "RFP responses that position security as a sales asset",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="p-5 text-sm text-slate-700 bg-slate-50 border border-slate-200 shadow-sm"
                    >
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3: Image + Unbiased Advocacy */}
            <div className="relative px-6 lg:px-8 border-t lg:border-t-0 pt-8 lg:pt-0">
              <img
                src={consultationImg}
                alt="Boardroom strategy session"
                className="w-full h-80 object-cover border border-slate-200"
              />
              <div className="mt-4 p-5 shadow-xl max-w-[280px] bg-white border border-slate-200">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">
                  Unbiased Advocacy
                </h4>
                <p className="text-xs font-semibold text-[#3B3B39] leading-relaxed">
                  "We don't sell tools or platforms. Our only agenda is your
                  security posture and your revenue growth."
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  Spyro Malaspinas — 3FACTOR Principal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SUB-NAV BUTTON BAR ═══ */}
      <section
        id="quick-nav"
        className="py-6 px-6"
        style={{ backgroundColor: "#F8F9FA" }}
      >
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 text-center mb-4">
            Quick Nav
          </h3>
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

      {/* ═══ THE APPROACH — 7-Stage Integration Process (Off-White) ═══ */}
      <section
        id="approach"
        className="py-24 border-y border-slate-200"
        style={{ backgroundColor: "#F8F9FA" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-8">
              THE 7-STAGE INTEGRATION PROCESS
            </h2>
            <ul className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed space-y-3 list-disc list-outside pl-5 text-left inline-block">
              <li>
                Your vCISO doesn't just advise — they integrate into your
                business as a strategic growth partner.
              </li>
              <li>
                Every stage is designed to reduce risk while accelerating
                revenue.
              </li>
              <li>Explore our 7-stage vCISO integration roadmap below.</li>
            </ul>
          </div>
          <h3 className="text-xl font-semibold text-slate-800 text-center mb-12">
            The 7-Stage vCISO Roadmap
          </h3>
          <VCISOTimeline onCTA={() => window.location.href = "/contact"} />
          <BackToNavButton />
        </div>
      </section>

      {/* ═══ THE 3FACTOR vCISO DOUBLE-ENGINE ═══ */}
      <section id="deliverables" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-xs font-mono uppercase tracking-[0.3em] mb-3" style={{ color: "#F36F21" }}>[SYS-DEL]</p>
            <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4" style={{ color: "#3B3B39" }}>
              THE 3<span style={{ color: "#F36F21" }}>FACTOR</span> vCISO DOUBLE-ENGINE
            </h2>
            <p className="text-sm max-w-2xl mx-auto" style={{ color: "#5A5A58" }}>
              Two interlocking systems. One unified mission. Technical defence
              and commercial offence working in lockstep to protect your
              business and accelerate your revenue.
            </p>
          </div>

          {/* Double-Engine Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-0 items-stretch">

            {/* LEFT: The Security Vault */}
            <div className="flex flex-col gap-5 p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-2">
                <Lock className="w-5 h-5" style={{ color: "#F36F21" }} />
                <div>
                  <h3 className="text-lg font-bold uppercase" style={{ color: "#3B3B39" }}>The Security Vault</h3>
                  <p className="text-xs font-mono uppercase tracking-[0.2em]" style={{ color: "#5A5A58" }}>Technical Defence</p>
                </div>
              </div>

              {/* Vault Card 1 */}
              <div className="group relative border bg-white p-6 transition-all duration-300 hover:border-[#F36F21] cursor-default" style={{ borderColor: "rgba(59,59,57,0.12)" }}>
                <p className="text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: "rgba(59,59,57,0.4)" }}>[V-01] The Roadmap</p>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 flex items-center justify-center border" style={{ borderColor: "rgba(59,59,57,0.12)" }}>
                    <Compass className="w-5 h-5" style={{ color: "#F36F21" }} />
                  </div>
                  <h4 className="text-sm font-bold uppercase" style={{ color: "#3B3B39" }}>Risk Assessment Results</h4>
                </div>
                <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <p className="text-xs leading-relaxed pt-2" style={{ color: "#5A5A58" }}>Detailed technical gap analysis and prioritised remediation roadmaps tailored to your threat landscape.</p>
                </div>
              </div>

              {/* Vault Card 2 */}
              <div className="group relative border bg-white p-6 transition-all duration-300 hover:border-[#F36F21] cursor-default" style={{ borderColor: "rgba(59,59,57,0.12)" }}>
                <p className="text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: "rgba(59,59,57,0.4)" }}>[V-02] The Blueprint</p>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 flex items-center justify-center border" style={{ borderColor: "rgba(59,59,57,0.12)" }}>
                    <ShieldCheck className="w-5 h-5" style={{ color: "#F36F21" }} />
                  </div>
                  <h4 className="text-sm font-bold uppercase" style={{ color: "#3B3B39" }}>Regulatory Mapping</h4>
                </div>
                <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <p className="text-xs leading-relaxed pt-2" style={{ color: "#5A5A58" }}>Alignment with ISO 27001, SOC 2, CMMC, NIST, and FedRAMP — mapped to your specific control environment.</p>
                </div>
              </div>

              {/* Vault Card 3 */}
              <div className="group relative border bg-white p-6 transition-all duration-300 hover:border-[#F36F21] cursor-default" style={{ borderColor: "rgba(59,59,57,0.12)" }}>
                <p className="text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: "rgba(59,59,57,0.4)" }}>[V-03] The Perimeter</p>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 flex items-center justify-center border" style={{ borderColor: "rgba(59,59,57,0.12)" }}>
                    <Link2 className="w-5 h-5" style={{ color: "#F36F21" }} />
                  </div>
                  <h4 className="text-sm font-bold uppercase" style={{ color: "#3B3B39" }}>3rd Party Risk Management</h4>
                </div>
                <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <p className="text-xs leading-relaxed pt-2" style={{ color: "#5A5A58" }}>We vet your vendors so your supply chain doesn't become your liability.</p>
                </div>
              </div>
            </div>

            {/* CENTER: Vertical Divider / Engine Core */}
            <div className="hidden lg:flex flex-col items-center justify-center px-4">
              <div className="w-px flex-1" style={{ backgroundColor: "rgba(59,59,57,0.12)" }} />
              <div className="w-14 h-14 flex items-center justify-center border-2 my-4 rotate-45" style={{ borderColor: "#F36F21" }}>
                <Settings className="w-6 h-6 -rotate-45" style={{ color: "#F36F21" }} />
              </div>
              <div className="w-px flex-1" style={{ backgroundColor: "rgba(59,59,57,0.12)" }} />
            </div>

            {/* Mobile divider */}
            <div className="flex lg:hidden items-center justify-center py-6">
              <div className="flex-1 h-px" style={{ backgroundColor: "rgba(59,59,57,0.12)" }} />
              <div className="w-10 h-10 flex items-center justify-center border-2 mx-4 rotate-45" style={{ borderColor: "#F36F21" }}>
                <Settings className="w-5 h-5 -rotate-45" style={{ color: "#F36F21" }} />
              </div>
              <div className="flex-1 h-px" style={{ backgroundColor: "rgba(59,59,57,0.12)" }} />
            </div>

            {/* RIGHT: The Sales Accelerator */}
            <div className="flex flex-col gap-5 p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5" style={{ color: "#F36F21" }} />
                <div>
                  <h3 className="text-lg font-bold uppercase" style={{ color: "#3B3B39" }}>The Sales Accelerator</h3>
                  <p className="text-xs font-mono uppercase tracking-[0.2em]" style={{ color: "#5A5A58" }}>Commercial Offence</p>
                </div>
              </div>

              {/* Accelerator Card 1 */}
              <div className="group relative border bg-white p-6 transition-all duration-300 hover:border-[#F36F21] cursor-default" style={{ borderColor: "rgba(59,59,57,0.12)" }}>
                <p className="text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: "rgba(59,59,57,0.4)" }}>[A-01] The Narrative</p>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 flex items-center justify-center border" style={{ borderColor: "rgba(59,59,57,0.12)" }}>
                    <Rocket className="w-5 h-5" style={{ color: "#F36F21" }} />
                  </div>
                  <h4 className="text-sm font-bold uppercase" style={{ color: "#3B3B39" }}>Security White Papers</h4>
                </div>
                <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <p className="text-xs leading-relaxed pt-2" style={{ color: "#5A5A58" }}>Compelling narratives that explain your tool's security value to non-technical buyers.</p>
                </div>
              </div>

              {/* Accelerator Card 2 */}
              <div className="group relative border bg-white p-6 transition-all duration-300 hover:border-[#F36F21] cursor-default" style={{ borderColor: "rgba(59,59,57,0.12)" }}>
                <p className="text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: "rgba(59,59,57,0.4)" }}>[A-02] The Win</p>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 flex items-center justify-center border" style={{ borderColor: "rgba(59,59,57,0.12)" }}>
                    <Trophy className="w-5 h-5" style={{ color: "#F36F21" }} />
                  </div>
                  <h4 className="text-sm font-bold uppercase" style={{ color: "#3B3B39" }}>RFP Support</h4>
                </div>
                <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <p className="text-xs leading-relaxed pt-2" style={{ color: "#5A5A58" }}>Technical authorship for security sections of high-value proposals.</p>
                </div>
              </div>

              {/* Accelerator Card 3 */}
              <div className="group relative border bg-white p-6 transition-all duration-300 hover:border-[#F36F21] cursor-default" style={{ borderColor: "rgba(59,59,57,0.12)" }}>
                <p className="text-[10px] font-mono uppercase tracking-widest mb-3" style={{ color: "rgba(59,59,57,0.4)" }}>[A-03] The Closer</p>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 flex items-center justify-center border" style={{ borderColor: "rgba(59,59,57,0.12)" }}>
                    <Headset className="w-5 h-5" style={{ color: "#F36F21" }} />
                  </div>
                  <h4 className="text-sm font-bold uppercase" style={{ color: "#3B3B39" }}>Prospect Call Participation</h4>
                </div>
                <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <p className="text-xs leading-relaxed pt-2" style={{ color: "#5A5A58" }}>A senior CISO on your sales calls to provide instant credibility and close deals.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal CTA */}
          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-slate-100 text-slate-900 font-semibold text-base px-10 py-6 border border-slate-300 shadow-sm"
            >
              <Link to="/contact">
                Book a Strategy Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          <BackToNavButton />
        </div>
      </section>

      {/* ═══ WHY 3FACTOR + PITFALLS (Off-White) ═══ */}
      <section
        id="why-3factor"
        className="py-20"
        style={{ backgroundColor: "#F8F9FA" }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-12 text-center">
            WHY ORGANISATIONS CHOOSE 3<span className="text-[#F36F21]">FACTOR</span>
          </h2>

          {/* 4 Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Clock,
                stat: "14+ Years",
                label:
                  "Of excellence in security consulting across regulated industries",
              },
              {
                icon: Users,
                stat: "Senior-Led",
                label:
                  "Always. Delivered by principals with real-world CISO experience",
              },
              {
                icon: DollarSign,
                stat: "Revenue-Focused",
                label:
                  "Security strategy designed to accelerate sales, not slow them down",
              },
              {
                icon: Globe,
                stat: "Global Verticals",
                label:
                  "SaaS, fintech, healthcare, critical infrastructure, and more",
              },
            ].map((item, i) => {
              const StatIcon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-6 border border-slate-200 rounded-lg shadow-sm text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-slate-50 rounded-lg">
                    <StatIcon className="w-6 h-6 text-orange-500" />
                  </div>
                  <p className="text-2xl font-bold text-slate-900 mb-1">
                    {item.stat}
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Pitfalls */}
          <h3 className="text-lg md:text-xl font-bold text-slate-900 uppercase mb-2">
            How we help you avoid the CISO Bottleneck
          </h3>
          <p className="text-sm text-slate-500 mb-2">
            The wrong approach to security leadership creates friction instead
            of freedom.
          </p>
          <p className="text-lg text-slate-600 mb-10">
            Our vCISO model is built to eliminate the two most common failure
            patterns.
          </p>

          {/* Problems & Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-6 border-b border-slate-300 pb-3">
                  Common failure modes
                </h3>
                <ul className="space-y-6">
                  {[
                    {
                      problem: "The Department of No",
                      detail:
                        "Security blocks innovation instead of enabling it. Every request becomes a bottleneck, and teams learn to work around security rather than with it.",
                    },
                    {
                      problem: "The RFP Black Hole",
                      detail:
                        "Security questionnaires disappear into a queue. Prospects wait weeks for answers, sales momentum dies, and deals slip to competitors.",
                    },
                    {
                      problem: "The Checkbox CISO",
                      detail:
                        "Security exists on paper but not in practice. Policies are written but never operationalised, leaving real risk unaddressed.",
                    },
                    {
                      problem: "The Ivory Tower",
                      detail:
                        "Security leadership disconnected from the business. No understanding of revenue targets, sales cycles, or customer requirements.",
                    },
                  ].map((item, i) => (
                    <li key={i}>
                      <div className="flex items-start gap-3">
                        <XCircle className="w-4 h-4 mt-1 flex-shrink-0 text-slate-400" />
                        <div>
                          <p className="text-sm font-semibold text-slate-700">
                            {item.problem}
                          </p>
                          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                            {item.detail}
                          </p>
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
                    {
                      fix: "Pragmatic Risk Management",
                      detail:
                        "We balance security with business velocity. Controls are right-sized to your risk appetite and growth stage.",
                    },
                    {
                      fix: "Active Sales Participation",
                      detail:
                        "Our vCISO joins prospect calls, answers questionnaires in hours, and turns security into a deal accelerator.",
                    },
                    {
                      fix: "Operationalised Security Culture",
                      detail:
                        "Policies that live and breathe. Evidence workflows embedded into daily operations, not filed and forgotten.",
                    },
                    {
                      fix: "Revenue-Aligned Leadership",
                      detail:
                        "Your vCISO understands your pipeline, your ICP, and your close rates. Security strategy maps to business outcomes.",
                    },
                  ].map((item, i) => (
                    <li key={i}>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0 text-orange-500" />
                        <div>
                          <p className="text-sm font-semibold text-slate-800">
                            {item.fix}
                          </p>
                          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                            {item.detail}
                          </p>
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
                alt="Strategic security leadership session"
                className="w-full h-full object-cover shadow-md min-h-[350px] opacity-80"
                style={{ border: "1px solid rgba(0,0,0,0.1)" }}
              />
            </div>
          </div>

          <BackToNavButton />
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4 text-slate-900">
            Ready to lead with security?
          </h2>
          <p className="text-sm text-slate-600 mb-8 max-w-xl mx-auto">
            Book a 30-minute strategy call to explore how a vCISO can accelerate
            your sales pipeline and protect your business.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-base px-10 py-6"
          >
            <Link to="/contact">
              Book a Strategy Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VCISOPage;
