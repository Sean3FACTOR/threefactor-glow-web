import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const strategyServices = [
  {
    title: "Cyber Maturity Assessment",
    description: "We identify cyber risks and provide prioritized recommendations for remediation",
  },
  {
    title: "Vendor Risk Management",
    description: "We design pragmatic frameworks to help our clients reduce vendor risk with low intervention and a risk-based approach",
  },
  {
    title: "Cyber Strategy Optimization",
    description: "We design strategies and operating models for pragmatic and cost-effective management of complex cybersecurity programmes",
  },
  {
    title: "Cybersecurity Evolution",
    description: "We help our clients to fix problems, eliminate complexity and rapidly increase cyber maturity",
  },
  {
    title: "Return-On-Investment Analysis",
    description: "We assess processes, tools and vendors to help our clients maximise ROI for cybersecurity spending",
  },
  {
    title: "Cyber Learning Strategy",
    description: "We build practical training and awareness programmes to engage users and build believable security cultures",
  },
  {
    title: "Strategic Cyber Outsourcing",
    description: "We identify opportunities to outsource security activities so that our clients can focus on their priorities",
  },
  {
    title: "Cyber Investment Assurance",
    description: "We assess the cybersecurity posture of acquisition targets and portfolio companies to inform investment decisions and provide confidence",
  },
];

const StrategyRiskServices = () => {
  return (
    <section id="strategy-services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Strategy & Risk Services
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            <span className="text-foreground font-semibold">Understand and manage cybersecurity risks.</span>
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            Believable security begins with a strong security culture. Our team has helped hundreds of clients build and maintain robust security programs by focusing on developing pragmatic strategies, prioritizing the human element and optimizing technology investments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strategyServices.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border card-hover"
            >
              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Learn More Link */}
              <Link to="/contact" className="inline-flex items-center text-muted-foreground font-medium group-hover:text-foreground group-hover:gap-3 gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategyRiskServices;
