import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import muralBg from "@/assets/homepage/3f-mural-3.jpg";

const FinalCTA = () => {
  return (
    <>
      <section className="relative bg-cover" style={{ backgroundImage: `url(${muralBg})`, minHeight: "550px", backgroundPosition: "65% 100%" }}>
        <div className="absolute inset-0" style={{ background: "rgba(59,59,57,0.55)" }} />
        <div className="container mx-auto px-4 relative z-10 flex flex-col justify-start pt-8">
          <div className="max-w-2xl mx-auto text-center px-10 py-6" style={{ backgroundColor: "rgba(59,59,57,0.65)", border: "1px solid rgba(255,255,255,0.15)" }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-tight text-white">
              Ready to Turn Compliance Into Your Competitive Edge?
            </h2>

            <Link to="/contact">
              <Button 
                size="lg" 
                className="group text-white font-semibold text-base md:text-lg px-6 md:px-10 py-6 md:py-7 transition-colors w-full sm:w-auto"
                style={{ backgroundColor: "#F36F21" }}
              >
                Book Your Compliance Strategy Session
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <p className="mb-4" style={{ color: "#3B3B39" }}>
              Not ready to book yet?
            </p>
            <a 
              href="/3F_Whitepaper.pdf" 
              download
              className="group inline-flex items-center gap-2 font-medium transition-colors hover:opacity-80"
              style={{ color: "#3B3B39" }}
            >
              <FileText className="w-5 h-5" />
              Download the 3<span style={{ color: "#F36F21" }}>FACTOR</span>{" "}Whitepaper
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="text-sm mt-3 max-w-md mx-auto" style={{ color: "#646464" }}>
              Learn how elite companies reframe security from a cost center into a growth engine, and why auditors trust them faster.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinalCTA;
