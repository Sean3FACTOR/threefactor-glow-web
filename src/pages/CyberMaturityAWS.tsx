import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Logo from "@/assets/3F_White_Orange_with_words.png";

const methodologyPoints = [
  "Identification of critical and high-risk data",
  "Review of cybersecurity governance, controls and documentation, including assessment of the client's use of AWS security tools and services to secure workloads",
  "Review of client's configuration of AWS tools and services to assess compliance with AWS security best practices",
  "Analysis and quantification of key risks",
  "Recommendation and prioritization of remediation activities, including identification of appropriate AWS security tools and services",
  "Identification of baseline maturity level with comparison to industry averages",
  "Communication of results to executives and stakeholders",
];

const CyberMaturityAWS = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#3B3B39" }}>
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/50 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <img src={Logo} alt="3FACTOR" className="h-10" />
              <span className="text-white/50 font-medium">AWS Security Service</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Cyber Maturity Assessment on AWS</h1>
            <p className="text-2xl md:text-3xl text-white/60 font-semibold mb-8">Secure your Cloud Workloads</p>

            <div className="p-8 mb-12" style={{ backgroundColor: "#F8F9FA", border: "1px solid #E5E7EB" }}>
              <p className="text-lg leading-relaxed" style={{ color: "#1a1a1a" }}>Our Cyber Maturity Assessment uses an adaptable methodology based on globally-recognized standards. Avoiding an inflexible one-size-fits-all approach, we customize the assessment to each client's specific needs.</p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Phased Methodology</h2>
              <div className="space-y-4">
                {methodologyPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-4 p-4" style={{ backgroundColor: "#F8F9FA", border: "1px solid #E5E7EB" }}>
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#646464" }} />
                    <p style={{ color: "#1a1a1a" }}>{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 mb-12" style={{ backgroundColor: "#F8F9FA", border: "1px solid #E5E7EB" }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#646464" }}>Who Is This For?</h2>
              <p className="leading-relaxed mb-4" style={{ color: "#1a1a1a" }}>The Cyber Maturity Assessment is a common starting point for a client to engage with 3<span style={{ color: "#F36F21" }}>FACTOR</span>'s services. It is primarily used by organizations with a limited understanding of their current cyber risks and controls.</p>
              <p className="leading-relaxed" style={{ color: "#1a1a1a" }}>Due to its adaptable nature, the Cyber Maturity Assessment is suitable for clients of any size or industry.</p>
            </div>

            <div className="p-8 mb-12" style={{ backgroundColor: "#F8F9FA", border: "1px solid #E5E7EB" }}>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#646464" }}>How We Deliver</h2>
              <p className="leading-relaxed" style={{ color: "#1a1a1a" }}>The exact method of Cyber Maturity Assessment delivery is tailored to suit the needs of each customer, but will generally consist of a series of face-to-face or remote meetings, as well as document review and technical control testing.</p>
            </div>

            <div className="text-center p-8" style={{ backgroundColor: "#F8F9FA", border: "1px solid #E5E7EB" }}>
              <img src={Logo} alt="3FACTOR" className="h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#3B3B39" }}>Ready to Assess Your AWS Security?</h3>
              <p className="mb-6" style={{ color: "#646464" }}>Start with a free discovery call to discuss your needs and receive a tailored proposal.</p>
              <Button asChild className="text-white font-semibold" style={{ backgroundColor: "#F36F21" }}>
                <Link to="/contact">Schedule a Discovery Call <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CyberMaturityAWS;