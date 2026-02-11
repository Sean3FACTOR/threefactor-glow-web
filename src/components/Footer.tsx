import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import Logo from "@/assets/3F_White_Orange_with_words.png";
import linkedinIcon from "@/assets/linkedin-icon.avif";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#3B3B39", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center">
              <img src={Logo} alt="3FACTOR" className="h-10 w-auto" />
            </div>
            <p className="text-sm text-white">
              © 2026 Three Factor, LLC. All Rights Reserved.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <Link
              to="/privacy"
              className="text-sm text-white hover:text-white/80 transition-colors"
            >
              Privacy Policy
            </Link>
            <a
              href="https://www.linkedin.com/company/3factor/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="inline-flex items-center gap-2 text-sm text-white">
            <Shield className="w-4 h-4 text-white" />
            <span>Download Our 3<span style={{ color: "#F36F21" }}>FACTOR</span> Whitepaper: Learn how to frame security as a growth engine.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
