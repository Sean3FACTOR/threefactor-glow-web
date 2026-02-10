import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const problems = [
  {
    label: "THE RFP PRESSURE",
    question:
      "An important contract requires us to be ISO 27001 certified to close. How do we do this without stalling the deal?",
  },
  {
    label: "THE PROCUREMENT ROADBLOCK",
    question:
      "A prospect is asking for a SOC 2 Type 2 report. We've never done an audit, where do we even start?",
  },
  {
    label: "THE NEW REGULATION",
    question:
      'The EU enacted NIS2 and DORA. Does this apply to us, and how do we avoid the €10M "Negligence" fine?',
  },
  {
    label: "THE AUDIT EXHAUSTION",
    question:
      "We're being asked for three different certifications. How do we stop doing the same work three times?",
  },
];

const solutions = [
  {
    title: "ENTERPRISE TRUST",
    frameworks: "SOC 2 (Type I & II) & ISO 27001",
    win: "End 'Security Questionnaire Hell' and close enterprise deals faster.",
  },
  {
    title: "PAYMENTS & REVENUE",
    frameworks: "PCI DSS",
    win: "Harden payment environments and prevent immediate revenue blackouts.",
  },
  {
    title: "FEDERAL & DEFENSE",
    frameworks: "FedRAMP & CMMC",
    win: "Unlock high-value government contracts with a defensible ATO.",
  },
  {
    title: "EU REGULATORY",
    frameworks: "NIS2 & DORA",
    win: "Future-proof your operations against regulatory paralysis.",
  },
];

const ComplianceCrossroads = () => {
  return (
    <section
      className="py-20"
      style={{
        backgroundColor: "#3B3B39",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight">
            The Compliance Crossroads
          </h2>
          <p className="text-lg leading-relaxed text-primary-foreground font-normal">
            <span className="font-bold">Does this sound familiar?</span>
            <br />
            Most of our clients come to us when they hit a "compliance wall" that
            threatens a major deal or their operational license.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Problem Statements */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 uppercase tracking-tight">
              The Problem
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {problems.map((problem) => (
                <div
                  key={problem.label}
                  className="p-6 transition-all"
                  style={{
                    backgroundColor: "#646464",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "#F36F21")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.08)")
                  }
                >
                  <h4 className="font-bold mb-2 uppercase tracking-wider text-muted text-sm">
                    {problem.label}
                  </h4>
                  <p className="text-white leading-relaxed italic font-bold">
                    "{problem.question}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certification Suite */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 uppercase tracking-tight">
              The Engine
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {solutions.map((solution) => (
                <div
                  key={solution.title}
                  className="p-6 transition-all"
                  style={{
                    backgroundColor: "#646464",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "#F36F21")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.08)")
                  }
                >
                  <h4 className="font-bold mb-1 uppercase tracking-wider text-white text-lg">
                    {solution.title}
                  </h4>
                  <p
                    className="text-sm font-mono mb-2"
                    style={{ color: "#F36F21" }}
                  >
                    {solution.frameworks}
                  </p>
                  <p className="text-white leading-relaxed">
                    <span className="font-bold">The Win:</span> {solution.win}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link
                to="/services/compliance"
                className="group inline-flex items-center gap-2 text-white uppercase tracking-tight transition-colors font-bold text-lg"
              >
                Learn More
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceCrossroads;
