import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, FileCheck, ShieldCheck, CreditCard, Scale, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const scenarios = [
  {
    icon: FileCheck,
    label: "THE RFP PRESSURE",
    question: "An important contract requires us to be ISO 27001 certified to close, how do we do this?",
  },
  {
    icon: ShieldCheck,
    label: "THE PROCUREMENT ROADBLOCK",
    question: "A prospect is asking for a SOC 2 Type 2 report, where do we even get one?",
  },
  {
    icon: CreditCard,
    label: "THE PAYMENT PRESSURE",
    question: "A partner requires us to handle cardholder data, how do we achieve PCI DSS compliance?",
  },
  {
    icon: Scale,
    label: "THE NEW REGULATION",
    question: "The EU enacted a new law like NIS2 or DORA, does it apply to us and how do we comply?",
  },
  {
    icon: RefreshCw,
    label: "THE AUDIT EXHAUSTION",
    question: "We're being asked for three different certifications, do we have to do the work three times?",
  },
];

const ComplianceCrossroads = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-tight" style={{ color: "#3B3B39" }}>
            The Compliance Crossroads
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#646464" }}>
            Does this sound familiar? Most of our clients come to us when they hit a "compliance wall" that threatens a major deal or their operational license. Which gate are you trying to unlock?
          </p>
        </div>

        {/* Scenario cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scenario) => (
            <div
              key={scenario.label}
              className="bg-white p-8 transition-all hover:shadow-lg"
              style={{ border: "1px solid #646464" }}
            >
              <div className="w-10 h-10 flex items-center justify-center mb-6" style={{ backgroundColor: "#F8F9FA" }}>
                <scenario.icon className="w-5 h-5" style={{ color: "#646464" }} />
              </div>
              <h4 className="text-sm font-bold mb-3 uppercase tracking-wider" style={{ color: "#646464" }}>
                {scenario.label}
              </h4>
              <p className="leading-relaxed italic" style={{ color: "#3B3B39" }}>
                "{scenario.question}"
              </p>
            </div>
          ))}

          {/* CTA card */}
          <div
            className="p-8 flex flex-col justify-center transition-all hover:shadow-lg"
            style={{ border: "1px solid #F36F21", backgroundColor: "white" }}
          >
            <Link 
              to="/services/compliance" 
              className="group inline-flex items-center gap-2 font-semibold text-lg uppercase tracking-tight transition-colors"
              style={{ color: "#3B3B39" }}
            >
              See How We Clear the "Framework Fog"
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceCrossroads;
