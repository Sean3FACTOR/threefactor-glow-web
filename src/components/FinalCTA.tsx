import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-tight" style={{ color: "#3B3B39" }}>
            Ready to Turn Compliance Into Your Competitive Edge?
          </h2>

          <Link to="/contact">
            <Button 
              size="lg" 
              className="group text-white font-semibold text-lg px-10 py-7 transition-colors mb-12"
              style={{ backgroundColor: "#F36F21" }}
            >
              Book Your Compliance Strategy Session
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          <div className="pt-8" style={{ borderTop: "1px solid #646464" }}>
            <p className="mb-4" style={{ color: "#646464" }}>
              Not ready to book yet?
            </p>
            <Link 
              to="/whitepaper" 
              className="group inline-flex items-center gap-2 font-medium transition-colors hover:opacity-80"
              style={{ color: "#3B3B39" }}
            >
              <FileText className="w-5 h-5" />
              Download the 3FACTOR Whitepaper
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="text-sm mt-3 max-w-md mx-auto" style={{ color: "#646464" }}>
              Learn how elite companies reframe security from a cost center into a growth engine, and why auditors trust them faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
