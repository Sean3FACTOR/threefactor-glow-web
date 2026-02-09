import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Logo from "@/assets/3F_White_Orange_with_words.png";
const serviceItems = [{
  name: "Compliance",
  href: "/services/compliance"
}, {
  name: "Virtual CISO",
  href: "/services/vciso"
}];
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navLinks = [{
    name: "Company",
    href: "/#company",
    hash: "company"
  }, {
    name: "Contact",
    href: "/contact",
    hash: null
  }];
  const isActive = (href: string) => {
    if (href.startsWith("/#")) {
      return location.pathname === "/" && location.hash === href.slice(1);
    }
    return location.pathname === href;
  };
  const handleNavClick = (e: React.MouseEvent, link: {
    href: string;
    hash: string | null;
  }) => {
    if (link.hash) {
      e.preventDefault();
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(link.hash!);
          if (element) element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 100);
      } else {
        const element = document.getElementById(link.hash);
        if (element) element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
    setIsOpen(false);
  };
  const handleServiceClick = (href: string) => {
    if (href.startsWith("/#")) {
      const hash = href.slice(2);
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 100);
      } else {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    } else {
      navigate(href);
    }
    setIsOpen(false);
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 shadow-sm" style={{
    backgroundColor: "#F8F9FA",
    borderBottom: "1px solid rgba(59,59,57,0.08)"
  }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[5.625rem] md:h-[6.875rem]">
          <Link to="/" className="flex items-center h-full py-2">
            <img alt="3FACTOR" className="h-full w-auto object-contain" src="/lovable-uploads/80e27f80-adc3-4ce1-bb89-2175eb8b20c7.png" />
          </Link>

          <div className="hidden sm:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors hover:text-[#3B3B39]/70 text-[#3B3B39] outline-none">
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="z-50 shadow-lg" style={{
              backgroundColor: "#646464",
              border: "1px solid rgba(255,255,255,0.1)"
            }}>
                {serviceItems.map(item => <DropdownMenuItem key={item.name} onClick={() => handleServiceClick(item.href)} className="cursor-pointer text-white/80 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white">
                    {item.name}
                  </DropdownMenuItem>)}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.map(link => <Link key={link.name} to={link.href} onClick={e => handleNavClick(e, link)} className={`text-sm font-medium transition-colors hover:text-[#3B3B39]/70 text-[#3B3B39]`}>
                {link.name}
              </Link>)}
          </div>

          <button className="sm:hidden text-[#3B3B39]" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && <div className="sm:hidden py-4" style={{
        borderTop: "1px solid rgba(59,59,57,0.08)"
      }}>
            <div className="flex flex-col space-y-4">
              <div>
                <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between w-full text-sm font-medium text-[#3B3B39] hover:text-[#3B3B39]/70 transition-colors">
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && <div className="mt-2 ml-4 space-y-2">
                    {serviceItems.map(item => <button key={item.name} onClick={() => handleServiceClick(item.href)} className="block text-sm text-[#3B3B39] hover:text-[#3B3B39]/70 transition-colors">
                        {item.name}
                      </button>)}
                  </div>}
              </div>

              {navLinks.map(link => <Link key={link.name} to={link.href} onClick={e => handleNavClick(e, link)} className={`text-sm font-medium transition-colors hover:text-[#3B3B39]/70 text-[#3B3B39]`}>
                  {link.name}
                </Link>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;