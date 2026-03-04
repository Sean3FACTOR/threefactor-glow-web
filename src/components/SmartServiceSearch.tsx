import { useState, useMemo } from "react";
import { Search, ArrowRight, Shield, CreditCard, FileCheck, Layers, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceEntry {
  name: string;
  path: string;
  keywords: string[];
  icon: React.ElementType;
  description: string;
}

const services: ServiceEntry[] = [
  {
    name: "ISO 27001",
    path: "/services/iso-27001",
    keywords: ["iso", "27001", "isms", "information security", "management system", "certification", "audit"],
    icon: Shield,
    description: "Information security management system certification & readiness",
  },
  {
    name: "PCI DSS",
    path: "/services/strategy-risk",
    keywords: ["pci", "dss", "payment", "credit card", "cardholder", "merchant", "transaction", "card data"],
    icon: CreditCard,
    description: "Payment card industry data security standard compliance",
  },
  {
    name: "SOC 2",
    path: "/services/soc-2",
    keywords: ["soc", "soc2", "service org", "audit", "trust", "aicpa", "type 1", "type 2", "type ii"],
    icon: FileCheck,
    description: "Service organisation control reporting & trust assurance",
  },
  {
    name: "CCF (Common Control Framework)",
    path: "/services/strategy-risk",
    keywords: ["ccf", "common control", "framework", "integrated", "unified", "mapping", "reuse"],
    icon: Layers,
    description: "Unified control framework to reduce duplication across standards",
  },
  {
    name: "Cyber Essentials",
    path: "/services/cyber-essentials",
    keywords: ["cyber essentials", "ce", "ce+", "plus", "ncsc", "baseline", "basic"],
    icon: ShieldCheck,
    description: "UK government-backed baseline cyber security certification",
  },
];

const SmartServiceSearch = () => {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length === 0) return [];
    return services.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.keywords.some((kw) => kw.includes(q))
    );
  }, [query]);

  const showResults = query.trim().length > 0;

  return (
    <section className="py-20" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase mb-3">
            Find Your Compliance Pathway
          </h2>
          <p className="text-sm text-slate-500">
            Search for a specific standard (e.g., ISO, SOC 2, PCI) to view our dedicated service details.
          </p>
        </div>

        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a standard, framework, or keyword…"
            className="w-full pl-12 pr-4 py-4 text-sm text-slate-900 placeholder:text-slate-400 bg-white border-2 border-slate-300 focus:border-[#3B3B39] focus:outline-none transition-colors"
          />
        </div>

        {/* Results */}
        {showResults && (
          <div className="mt-2 border border-slate-200 bg-white shadow-lg overflow-hidden">
            {results.length > 0 ? (
              results.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-b-0 group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-slate-50 rounded-lg border border-slate-200 flex-shrink-0 group-hover:border-orange-300 transition-colors">
                      <Icon className="w-5 h-5 text-slate-500 group-hover:text-orange-500 transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
                        {service.name}
                      </p>
                      <p className="text-xs text-slate-500 truncate">
                        {service.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-orange-500 transition-all group-hover:translate-x-1 flex-shrink-0" />
                  </Link>
                );
              })
            ) : (
              <div className="px-5 py-6 text-center">
                <p className="text-sm text-slate-500">
                  No matching services found. Try "ISO", "SOC", or "PCI".
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default SmartServiceSearch;
