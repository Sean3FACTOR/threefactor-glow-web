import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, ChevronDown, ArrowRight, Shield, FileCheck, UserCog, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Logo from "@/assets/3factor-grey-logo.png";

/* ── Data ── */
const serviceItems = [
  {
    name: "ISO 27001",
    href: "/services/iso-27001",
    desc: "Build and certify your Information Security Management System.",
    icon: Shield,
  },
  {
    name: "SOC 2",
    href: "/services/soc-2",
    desc: "Turn SOC 2 into a practical trust signal for enterprise deals.",
    icon: FileCheck,
  },
  {
    name: "Virtual CISO",
    href: "/services/vciso",
    desc: "Senior security leadership without the full-time overhead.",
    icon: UserCog,
  },
  {
    name: "Cyber Essentials",
    href: "/services/cyber-essentials",
    desc: "NCSC-recognized certification for UK organisations.",
    icon: Lock,
  },
];

const navLinks = [
  { name: "Company", href: "/#company", hash: "company" },
  { name: "Contact", href: "/contact", hash: null },
];

/* ── Component ── */
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleHashNav = useCallback(
    (e: React.MouseEvent, link: { href: string; hash: string | null }) => {
      if (link.hash) {
        e.preventDefault();
        if (location.pathname !== "/") {
          navigate("/");
          setTimeout(() => {
            document.getElementById(link.hash!)?.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        } else {
          document.getElementById(link.hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      setMobileOpen(false);
    },
    [location.pathname, navigate]
  );

  const handleServiceNav = useCallback(
    (href: string) => {
      navigate(href);
      setMobileOpen(false);
    },
    [navigate]
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{ borderBottom: "1px solid rgba(59,59,57,0.06)" }}
    >
      <nav className="container mx-auto px-4" aria-label="Main navigation">
        <div className="flex items-center justify-between h-14 md:h-16">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center h-full py-1 shrink-0">
            <img
              alt="3FACTOR"
              className="h-[99%] w-auto object-contain"
              src={Logo}
            />
          </Link>

          {/* ══════════════════════════════════
              DESKTOP NAV (lg+)
          ══════════════════════════════════ */}
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Services mega-menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="text-sm font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent"
                    style={{ color: "#3B3B39" }}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-1 p-4 w-[520px]">
                      {serviceItems.map((item) => {
                        const Icon = item.icon;
                        return (
                          <NavigationMenuLink
                            key={item.name}
                            asChild
                          >
                            <Link
                              to={item.href}
                              className="group flex items-start gap-3 p-3 transition-colors duration-200 hover:bg-[#F8F9FA]"
                            >
                              <div
                                className="mt-0.5 w-8 h-8 flex items-center justify-center border shrink-0 transition-colors duration-200 group-hover:border-[#F36F21]"
                                style={{ borderColor: "rgba(59,59,57,0.12)" }}
                              >
                                <Icon size={16} style={{ color: "#F36F21" }} />
                              </div>
                              <div>
                                <div className="text-sm font-semibold transition-colors duration-200 group-hover:text-[#F36F21]" style={{ color: "#3B3B39" }}>
                                  {item.name}
                                </div>
                                <p className="text-xs leading-relaxed mt-0.5" style={{ color: "#646464" }}>
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Standard nav links */}
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={link.href}
                        onClick={(e) => handleHashNav(e, link)}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-[#F36F21]"
                        style={{ color: "#3B3B39" }}
                      >
                        {link.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* ── Desktop right actions ── */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact">
              <Button
                className="text-white font-semibold text-sm px-5"
                style={{ backgroundColor: "#F36F21" }}
                aria-label="Get a quote from 3FACTOR"
              >
                Get a Quote
                <ArrowRight size={14} className="ml-1" />
              </Button>
            </Link>
          </div>

          {/* ══════════════════════════════════
              MOBILE NAV (< lg)
          ══════════════════════════════════ */}
          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label="Open navigation menu"
                  className="p-2 transition-colors duration-200"
                  style={{ color: "#3B3B39" }}
                >
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[360px] bg-white p-0 overflow-y-auto">
                <div className="px-6 pt-6 pb-4 border-b" style={{ borderColor: "rgba(59,59,57,0.08)" }}>
                  <Link to="/" onClick={() => setMobileOpen(false)} className="inline-block">
                    <img alt="3FACTOR" className="h-10 w-auto object-contain" src={Logo} />
                  </Link>
                </div>

                <div className="px-6 py-6">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="services" className="border-b" style={{ borderColor: "rgba(59,59,57,0.08)" }}>
                      <AccordionTrigger
                        className="text-sm font-semibold uppercase tracking-wide py-4 hover:no-underline"
                        style={{ color: "#3B3B39" }}
                      >
                        Services
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-1 pb-2">
                          {serviceItems.map((item) => {
                            const Icon = item.icon;
                            return (
                              <SheetClose asChild key={item.name}>
                                <Link
                                  to={item.href}
                                  className="group flex items-start gap-3 p-3 transition-colors duration-200 hover:bg-[#F8F9FA]"
                                >
                                  <Icon size={16} className="mt-0.5 shrink-0" style={{ color: "#F36F21" }} />
                                  <div>
                                    <div className="text-sm font-medium" style={{ color: "#3B3B39" }}>
                                      {item.name}
                                    </div>
                                    <p className="text-xs mt-0.5" style={{ color: "#646464" }}>
                                      {item.desc}
                                    </p>
                                  </div>
                                </Link>
                              </SheetClose>
                            );
                          })}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="flex flex-col gap-1 mt-2">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.name}>
                        <Link
                          to={link.href}
                          onClick={(e) => handleHashNav(e, link)}
                          className="text-sm font-semibold uppercase tracking-wide py-4 transition-colors duration-200 hover:text-[#F36F21] border-b"
                          style={{ color: "#3B3B39", borderColor: "rgba(59,59,57,0.08)" }}
                        >
                          {link.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>

                  <div className="mt-8">
                    <SheetClose asChild>
                      <Link to="/contact">
                        <Button
                          className="w-full text-white font-semibold"
                          style={{ backgroundColor: "#F36F21" }}
                          aria-label="Get a quote from 3FACTOR"
                        >
                          Get a Quote
                          <ArrowRight size={14} className="ml-1" />
                        </Button>
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
