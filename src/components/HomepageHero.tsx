import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const problems = [
  {
    label: "THE RFP PRESSURE",
    question:
      "An important contract requires us to be ISO 27001 certified to close, how do we do this?",
  },
  {
    label: "THE PROCUREMENT ROADBLOCK",
    question:
      "A prospect is asking for a SOC 2 Type 2 report, where do we even get one?",
  },
  {
    label: "THE NEW REGULATION",
    question:
      "The EU enacted NIS2 or DORA, does it apply to us and how do we comply?",
  },
  {
    label: "THE AUDIT EXHAUSTION",
    question:
      "We're being asked for three different certifications, do we have to do the work three times?",
  },
];

const HomepageHero = () => {
  return (
    <section className="pt-14 pb-16" style={{ backgroundColor: "#3B3B39" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10 items-start">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 pt-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight uppercase leading-[1.1]">
              Don't Let a Security Audit Kill Your $1M Contract.{" "}
              <span style={{ color: "#F36F21" }}>
                Secure the Deal with Unshakeable Compliance.
              </span>
            </h1>
            <p className="text-base md:text-xl mb-10 leading-relaxed text-primary-foreground">
              Security should accelerate growth. Not quietly sabotage it. Stop
              letting "revenue-blocking gaps" stall your growth.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="group text-white font-semibold transition-colors w-full sm:w-auto hover:opacity-90"
                style={{ backgroundColor: "#646464" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#F36F21")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#646464")
                }
              >
                Book Your Compliance Strategy Session
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Right Column: Problem Statements */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {problems.map((problem) => (
              <div
                key={problem.label}
                className="p-5 transition-all"
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
                <h4 className="font-bold mb-1 uppercase tracking-wider text-xs" style={{ color: "#F36F21" }}>
                  {problem.label}
                </h4>
                <p className="text-white leading-relaxed italic font-semibold text-sm md:text-base">
                  "{problem.question}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
