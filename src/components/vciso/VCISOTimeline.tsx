import { useState } from "react";
import {
  Target,
  Search,
  FileText,
  Briefcase,
  Handshake,
  RefreshCw,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import hexagonGraphic from "@/assets/hexagon-network-hero.png";

const vcisStages = [
  {
    icon: Target,
    stage: 1,
    title: "Strategic Alignment",
    duration: "Week 1–2",
    durationWeeks: 2,
    why: "Every engagement starts with understanding your revenue goals, not just your risk posture.",
    desc: "We map your security programme to your business objectives, sales pipeline, and regulatory landscape.",
    details: [
      "Executive discovery session with leadership team",
      "Map security posture to revenue and growth targets",
      "Identify critical compliance gaps blocking deals",
      "Define engagement scope, KPIs, and success criteria",
    ],
  },
  {
    icon: Search,
    stage: 2,
    title: "Internal Risk Assessment",
    duration: "Week 3–5",
    durationWeeks: 3,
    why: "You can't fix what you can't see. We surface the risks that prospects and auditors will find first.",
    desc: "A thorough assessment of your current controls, policies, and evidence maturity against enterprise buyer expectations.",
    details: [
      "Control-by-control gap analysis across key frameworks",
      "Third-party risk and vendor ecosystem review",
      "Data flow mapping and classification",
      "Prioritised risk register with business-impact scoring",
    ],
  },
  {
    icon: FileText,
    stage: 3,
    title: "Governance & Policy Buildout",
    duration: "Week 4–10",
    durationWeeks: 6,
    why: "Prospects don't just want promises — they want documented proof that your house is in order.",
    desc: "We build the governance backbone: policies, procedures, and evidence workflows that satisfy both auditors and enterprise buyers.",
    details: [
      "Tailored policy suite aligned to your operational reality",
      "Incident response and business continuity frameworks",
      "Access control and data handling procedures",
      "Board-ready reporting templates and dashboards",
    ],
  },
  {
    icon: Briefcase,
    stage: 4,
    title: "Sales Enablement Kit",
    duration: "Week 8–12",
    durationWeeks: 4,
    why: "Security should accelerate your pipeline, not slow it down. We arm your sales team with proof.",
    desc: "We create prospect-ready materials that turn your security posture into a competitive differentiator.",
    details: [
      "Security white papers and trust documentation",
      "Pre-filled security questionnaire templates",
      "Customer-facing compliance summary sheets",
      "Trust centre content and architecture diagrams",
    ],
  },
  {
    icon: Handshake,
    stage: 5,
    title: "RFP & Sales Support",
    duration: "Ongoing",
    durationWeeks: 4,
    why: "A senior CISO joins your sales calls to provide instant credibility and close deals.",
    desc: "Direct vCISO involvement in high-stakes sales conversations, RFP responses, and prospect security reviews.",
    details: [
      "Live participation in prospect security calls",
      "RFP and security questionnaire completion support",
      "Due diligence response management",
      "Deal-specific risk narrative preparation",
    ],
  },
  {
    icon: RefreshCw,
    stage: 6,
    title: "Continuous Compliance",
    duration: "Ongoing",
    durationWeeks: 4,
    why: "Compliance isn't a destination — it's a rhythm. We keep you audit-ready year-round.",
    desc: "Ongoing monitoring, control validation, and continuous improvement to maintain and extend your security posture.",
    details: [
      "Quarterly control effectiveness reviews",
      "Policy refresh cycles and evidence validation",
      "Regulatory change impact assessments",
      "Continuous improvement recommendations",
    ],
  },
  {
    icon: Users,
    stage: 7,
    title: "Strategic Board Advisory",
    duration: "Quarterly",
    durationWeeks: 2,
    why: "Your board needs confidence, not confusion. We translate risk into business language.",
    desc: "Executive-level reporting and strategic guidance to keep leadership informed and confident.",
    details: [
      "Quarterly board-ready security briefings",
      "Risk posture trend analysis and benchmarking",
      "Strategic roadmap updates and investment guidance",
      "Regulatory horizon scanning and preparation",
    ],
  },
];

const totalWeeks = vcisStages.reduce((sum, s) => sum + s.durationWeeks, 0);

interface VCISOTimelineProps {
  onCTA: () => void;
}

const VCISOTimeline = ({ onCTA }: VCISOTimelineProps) => {
  const [active, setActive] = useState(0);
  const step = vcisStages[active];
  const Icon = step.icon;

  return (
    <div>
      {/* Desktop: Horizontal Stepper */}
      <div className="hidden lg:block">
        <div className="relative mb-4">
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-slate-200" />
          <div
            className="absolute top-6 left-0 h-0.5 transition-all duration-500"
            style={{
              width: `${(active / (vcisStages.length - 1)) * 100}%`,
              backgroundColor: "#3B3B39",
            }}
          />
          <div className="relative flex justify-between">
            {vcisStages.map((s, i) => {
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

        {/* Proportional duration bar */}
        <div className="flex gap-px mb-8">
          {vcisStages.map((s, i) => {
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

        {/* Detail pane */}
        <div className="bg-slate-50 border border-slate-200 shadow-sm p-8 transition-all duration-300">
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
              <p className="text-sm text-slate-600 mb-2 leading-relaxed italic border-l-2 border-orange-600 pl-4">
                {step.why}
              </p>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed mt-3">
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
              <Button
                onClick={onCTA}
                className="text-white font-semibold"
                style={{ backgroundColor: "#3B3B39" }}
              >
                Book a Strategy Call
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

      {/* Mobile: Vertical Accordion */}
      <div className="lg:hidden">
        <Accordion type="single" collapsible defaultValue="stage-0">
          {vcisStages.map((s, i) => {
            const StepIcon = s.icon;
            return (
              <AccordionItem
                key={i}
                value={`stage-${i}`}
                className="border-b border-slate-200"
              >
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
                  <p className="text-sm text-slate-600 italic mb-2 leading-relaxed border-l-2 border-orange-600 pl-3">
                    {s.why}
                  </p>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {s.desc}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {s.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-slate-900"
                      >
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={onCTA}
                    size="sm"
                    className="text-white font-semibold"
                    style={{ backgroundColor: "#3B3B39" }}
                  >
                    Book a Strategy Call
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

export default VCISOTimeline;
