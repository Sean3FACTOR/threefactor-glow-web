import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface StrategicValue {
  bold: string;
  text: string;
}

interface PathItem {
  bold?: string;
  text: string;
}

interface KeyInfo {
  label: string;
  text: string;
}

interface CertificationSectionProps {
  id: string;
  title: string;
  intro: string;
  strategicValueLabel?: string;
  strategicValues?: StrategicValue[];
  keyInfo?: KeyInfo | null;
  pathLabel?: string;
  pathItems?: PathItem[];
}

const CertificationSection = ({
  id,
  title,
  intro,
  strategicValueLabel,
  strategicValues,
  keyInfo,
  pathLabel,
  pathItems,
}: CertificationSectionProps) => {
  return (
    <section
      id={id}
      className="py-20 scroll-mt-20"
      style={{
        backgroundColor: "#F8F9FA",
        borderTop: "1px solid rgba(59,59,57,0.08)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl">
          {/* Title */}
          <h2
            className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-tight"
            style={{ color: "#3B3B39" }}
          >
            {title}
          </h2>

          {/* Intro */}
          <p className="text-lg leading-relaxed mb-10" style={{ color: "rgba(59,59,57,0.85)" }}>{intro}</p>

          {/* Strategic Value + Key Info side by side */}
          {strategicValues && strategicValues.length > 0 && (
            <div
              className={`grid grid-cols-1 ${keyInfo ? "lg:grid-cols-2" : ""} gap-8 mb-10`}
            >
              {/* Strategic Value */}
              <div
                className="p-8"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                }}
              >
                <span
                  className="text-xs font-mono uppercase tracking-widest mb-4 block"
                  style={{ color: "#646464" }}
                >
                  [VALUE]
                </span>
                <h3
                  className="text-lg font-bold uppercase tracking-tight mb-4"
                  style={{ color: "#646464" }}
                >
                  {strategicValueLabel || "The Strategic Value:"}
                </h3>
                <div className="space-y-4">
                  {strategicValues.map((sv, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span
                        className="w-2 h-2 rotate-45 flex-shrink-0 mt-1.5"
                        style={{ backgroundColor: "#F36F21" }}
                      />
                      <p className="text-sm leading-relaxed" style={{ color: "#3B3B39" }}>
                        <strong>{sv.bold}</strong> {sv.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Info */}
              {keyInfo && (
                <div
                  className="p-8"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                  }}
                >
                  <span
                    className="text-xs font-mono uppercase tracking-widest mb-4 block"
                    style={{ color: "#646464" }}
                  >
                    [DETAIL]
                  </span>
                  <h3
                    className="text-lg font-bold uppercase tracking-tight mb-4"
                    style={{ color: "#646464" }}
                  >
                    {keyInfo.label}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#3B3B39" }}>
                    {keyInfo.text}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Path / Services / Tiers */}
          {pathItems && pathItems.length > 0 && (
            <div className="mb-10">
              {pathLabel && (
                <h3
                  className="text-lg font-bold uppercase tracking-tight mb-4"
                  style={{ color: "#3B3B39" }}
                >
                  {pathLabel}
                </h3>
              )}
              <div className="flex flex-wrap gap-3">
                {pathItems.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm font-medium"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E5E7EB",
                      color: "#3B3B39",
                    }}
                  >
                    {item.bold && <strong>{item.bold}</strong>} {item.text}
                  </span>
                ))}
              </div>
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
