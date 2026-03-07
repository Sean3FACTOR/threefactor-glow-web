import { useEffect, useRef, useState } from "react";
import { ShieldAlert, FileCheck, TrendingUp, Presentation } from "lucide-react";

const bullets = [
  { icon: ShieldAlert, text: "Reduce cyber risk" },
  { icon: FileCheck, text: "Pass complex compliance requirements" },
  { icon: TrendingUp, text: "Support business growth securely" },
  { icon: Presentation, text: "Justify security investments to leadership" },
];

const CustomerProblem = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-20"
      style={{ backgroundColor: "#F8F9FA", borderTop: "1px solid rgba(59,59,57,0.08)" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          {/* Left — Text */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight mb-6"
              style={{ color: "#3B3B39" }}
            >
              Security Leaders Are Being Asked to Do the Impossible
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-base leading-relaxed" style={{ color: "#646464" }}>
                Today's security leaders are expected to reduce cyber risk, pass compliance audits, enable business growth, and justify security investments, all while threats and regulations continue to evolve.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#646464" }}>
                Many organizations struggle to translate cybersecurity into clear business decisions.
              </p>
              <p className="text-base font-semibold leading-relaxed" style={{ color: "#3B3B39" }}>
                3<span style={{ color: "#F36F21" }}>FACTOR</span> helps organizations turn cybersecurity into a strategic advantage.
              </p>
            </div>
          </div>

          {/* Right — Bullet Icons */}
          <div className="space-y-4">
            {bullets.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.text}
                  className="flex items-center gap-5 p-5 transition-all duration-500"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(24px)",
                    transitionDelay: `${200 + i * 120}ms`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#F36F21";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#E5E7EB";
                  }}
                >
                  <span
                    className="text-sm font-bold uppercase tracking-tight"
                    style={{ color: "#3B3B39" }}
                  >
                    {b.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerProblem;
