import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CertificationSectionProps {
  id: string;
  title: string;
  intro: string;
  evaluation?: string;
  benefitsLabel?: string;
  benefits?: string[];
  services: string[];
  spotlightTitle?: string;
  spotlightBody?: string;
}

const CertificationSection = ({
  id,
  title,
  intro,
  evaluation,
  benefitsLabel,
  benefits,
  services,
  spotlightTitle,
  spotlightBody,
}: CertificationSectionProps) => {
  const hasEvalAndBenefits = evaluation && benefits && benefits.length > 0;
  const hasOnlyEval = evaluation && (!benefits || benefits.length === 0);
  const hasOnlyBenefits = !evaluation && benefits && benefits.length > 0;

  return (
    <section
      id={id}
      className="py-20 scroll-mt-20"
      style={{
        backgroundColor: "#3B3B39",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl">
          {/* Section Title */}
          <h2
            className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-tight"
            style={{ color: "#FFFFFF" }}
          >
            {title}
          </h2>

          {/* Intro */}
          <p className="text-lg leading-relaxed mb-10 text-white/90">{intro}</p>

          {/* Two-column: Evaluation + Benefits */}
          {hasEvalAndBenefits && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              <div
                className="p-8"
                style={{
                  backgroundColor: "#F8F9FA",
                  border: "1px solid #E5E7EB",
                }}
              >
                <span
                  className="text-xs font-mono uppercase tracking-widest mb-4 block"
                  style={{ color: "#646464" }}
                >
                  [EVAL]
                </span>
                <h3
                  className="text-lg font-bold uppercase tracking-tight mb-4"
                  style={{ color: "#646464" }}
                >
                  Evaluation Approach
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#1a1a1a" }}>
                  {evaluation}
                </p>
              </div>

              <div
                className="p-8"
                style={{
                  backgroundColor: "#F8F9FA",
                  border: "1px solid #E5E7EB",
                }}
              >
                <span
                  className="text-xs font-mono uppercase tracking-widest mb-4 block"
                  style={{ color: "#646464" }}
                >
                  [BENEFITS]
                </span>
                <h3
                  className="text-lg font-bold uppercase tracking-tight mb-4"
                  style={{ color: "#646464" }}
                >
                  {benefitsLabel || "Key Benefits"}
                </h3>
                <div className="space-y-3">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span
                        className="w-2 h-2 rotate-45 flex-shrink-0 mt-1.5"
                        style={{ backgroundColor: "#F36F21" }}
                      />
                      <p className="text-sm leading-relaxed" style={{ color: "#1a1a1a" }}>
                        {b}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Eval only (no benefits) */}
          {hasOnlyEval && (
            <div
              className="p-8 mb-10"
              style={{
                backgroundColor: "#F8F9FA",
                border: "1px solid #E5E7EB",
              }}
            >
              <span
                className="text-xs font-mono uppercase tracking-widest mb-4 block"
                style={{ color: "#646464" }}
              >
                [EVAL]
              </span>
              <h3
                className="text-lg font-bold uppercase tracking-tight mb-4"
                style={{ color: "#646464" }}
              >
                Evaluation Approach
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#1a1a1a" }}>
                {evaluation}
              </p>
            </div>
          )}

          {/* Benefits only (no eval) */}
          {hasOnlyBenefits && (
            <div
              className="p-8 mb-10"
              style={{
                backgroundColor: "#F8F9FA",
                border: "1px solid #E5E7EB",
              }}
            >
              <span
                className="text-xs font-mono uppercase tracking-widest mb-4 block"
                style={{ color: "#646464" }}
              >
                [BENEFITS]
              </span>
              <h3
                className="text-lg font-bold uppercase tracking-tight mb-4"
                style={{ color: "#646464" }}
              >
                {benefitsLabel || "Key Benefits"}
              </h3>
              <div className="space-y-3">
                {benefits!.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      className="w-2 h-2 rotate-45 flex-shrink-0 mt-1.5"
                      style={{ backgroundColor: "#F36F21" }}
                    />
                    <p className="text-sm leading-relaxed" style={{ color: "#1a1a1a" }}>
                      {b}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Services Row */}
          {services.length > 0 && (
            <div className="mb-10">
              <h3
                className="text-lg font-bold uppercase tracking-tight mb-4"
                style={{ color: "#FFFFFF" }}
              >
                Our Services
              </h3>
              <div className="flex flex-wrap gap-3">
                {services.map((s, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm font-medium"
                    style={{
                      backgroundColor: "#F8F9FA",
                      border: "1px solid #E5E7EB",
                      color: "#3B3B39",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Service Spotlight */}
          {spotlightTitle && spotlightBody && (
            <div
              className="p-8 mb-10"
              style={{
                borderLeft: "2px solid #F36F21",
                backgroundColor: "rgba(248,249,250,0.05)",
              }}
            >
              <span
                className="text-xs font-mono uppercase tracking-widest mb-3 block"
                style={{ color: "#F36F21" }}
              >
                [SPOTLIGHT]
              </span>
              <h4 className="text-lg font-bold text-white mb-3">{spotlightTitle}</h4>
              <p className="text-sm leading-relaxed text-white/80">{spotlightBody}</p>
            </div>
          )}

          {/* CTA */}
          <Button
            asChild
            size="lg"
            className="text-white font-semibold transition-colors"
            style={{ backgroundColor: "#646464" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "#F36F21")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "#646464")
            }
          >
            <Link to="/contact">
              Book a Strategy Session
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
