import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-24" style={{ backgroundColor: "#3B3B39", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 uppercase tracking-tight">
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

          <div className="pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <p className="text-white mb-4">
              Not ready to book yet?
            </p>
            <Link 
              to="/whitepaper" 
              className="group inline-flex items-center gap-2 text-white font-medium transition-colors hover:opacity-80"
            >
              <FileText className="w-5 h-5" />
              Download the 3FACTOR Whitepaper
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="text-sm text-white mt-3 max-w-md mx-auto">
              Learn how elite companies reframe security from a cost center into a growth engine, and why auditors trust them faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
