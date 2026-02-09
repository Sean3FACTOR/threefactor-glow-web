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
    <section className="py-20 bg-transparent border-t border-border/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 uppercase tracking-tight">
            The Compliance Crossroads
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Does this sound familiar? Most of our clients come to us when they hit a "compliance wall" that threatens a major deal or their operational license. Which gate are you trying to unlock?
          </p>
        </div>

        {/* Scenario cards - staggered */}
        <div className="grid grid-cols-12 gap-6">
          {scenarios.map((scenario, index) => (
            <Card
              key={scenario.label}
              className={`col-span-12 md:col-span-6 lg:col-span-4 shadow-none border border-border/10 bg-card hover:border-primary transition-colors`}
              style={{ marginTop: index % 2 !== 0 ? '1.5rem' : '0' }}
            >
              <CardContent className="p-8">
                <div className="w-10 h-10 bg-muted flex items-center justify-center mb-6 flex-shrink-0">
                  <scenario.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <h4 className="text-sm font-bold text-muted-foreground mb-3 uppercase tracking-wider">
                  {scenario.label}
                </h4>
                <p className="text-foreground leading-relaxed italic">
                  "{scenario.question}"
                </p>
              </CardContent>
            </Card>
          ))}

          {/* CTA card */}
          <Card className="col-span-12 md:col-span-6 lg:col-span-4 shadow-none border border-primary/30 bg-card hover:border-primary transition-colors"
            style={{ marginTop: scenarios.length % 2 !== 0 ? '1.5rem' : '0' }}
          >
            <CardContent className="p-8 flex flex-col justify-center h-full">
              <Link 
                to="/services/compliance" 
                className="group inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors font-semibold text-lg uppercase tracking-tight"
              >
                See How We Clear the "Framework Fog"
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Connecting line visual */}
        <div className="hidden md:block relative h-px w-full mt-12">
          <div className="absolute left-[10%] right-[40%] top-0 h-px bg-border/30" />
        </div>
      </div>
    </section>
  );
};

export default ComplianceCrossroads;
