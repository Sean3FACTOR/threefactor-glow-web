import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: "TRUSTED BY", label: "Fortune 500 Companies" },
  { value: "15+", label: "Years Experience" },
  { value: "100+", label: "Clients Served" },
  { value: "GLOBAL", label: "Coverage" },
];

const TrustBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-10 md:py-14"
      style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid rgba(59,59,57,0.08)", borderBottom: "1px solid rgba(59,59,57,0.08)" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="flex flex-col items-center text-center transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${i * 120}ms`,
                borderRight: i < metrics.length - 1 ? "1px solid rgba(59,59,57,0.1)" : "none",
              }}
            >
              <span
                className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight"
                style={{ color: "#3B3B39" }}
              >
                {m.value}
              </span>
              <span
                className="mt-2 text-sm font-medium uppercase tracking-widest"
                style={{ color: "#646464" }}
              >
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
