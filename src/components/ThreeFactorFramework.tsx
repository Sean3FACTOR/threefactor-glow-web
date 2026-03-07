import { useEffect, useRef, useState } from "react";
import { Search, Target, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Assess",
    description: "Evaluate your current cybersecurity posture, risks, and compliance gaps.",
  },
  {
    icon: Target,
    title: "Prioritize",
    description: "Identify the security initiatives that deliver the greatest business impact.",
  },
  {
    icon: Rocket,
    title: "Execute",
    description: "Implement security strategies that reduce risk while supporting business growth.",
  },
];

const ThreeFactorFramework = () => {
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
      style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid rgba(59,59,57,0.08)" }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4"
            style={{ color: "#3B3B39" }}
          >
            The 3<span style={{ color: "#F36F21" }}>FACTOR</span> Approach
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#646464" }}>
            We help organizations strengthen cybersecurity through a clear and structured process.
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="p-8 text-center transition-all duration-700 group"
                style={{
                  backgroundColor: "#F8F9FA",
                  border: "1px solid #E5E7EB",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                  transitionDelay: `${i * 150}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#F36F21";
                  e.currentTarget.style.backgroundColor = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E5E7EB";
                  e.currentTarget.style.backgroundColor = "#F8F9FA";
                }}
              >
                {/* Step Number */}
                <span
                  className="font-mono text-[22px] tracking-widest uppercase block mb-5"
                  style={{ color: "#F36F21" }}
                >
                  STEP {i + 1}
                </span>


                {/* Title */}
                <h3
                  className="text-[30px] font-bold uppercase tracking-tight mb-3"
                  style={{ color: "#3B3B39" }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: "#646464" }}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Connecting line (desktop) */}
        <div className="hidden md:flex justify-center items-center mt-8 max-w-5xl mx-auto">
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(243,111,33,0.2)" }} />
          <div className="w-2 h-2 rotate-45 mx-2" style={{ backgroundColor: "#F36F21" }} />
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(243,111,33,0.2)" }} />
          <div className="w-2 h-2 rotate-45 mx-2" style={{ backgroundColor: "#F36F21" }} />
          <div className="flex-1 h-px" style={{ backgroundColor: "rgba(243,111,33,0.2)" }} />
        </div>
      </div>
    </section>
  );
};

export default ThreeFactorFramework;
