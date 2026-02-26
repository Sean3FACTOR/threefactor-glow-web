import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, ArrowRight, Shield, FileCheck, UserCog, Lock, ChevronUp } from "lucide-react";
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

/* ── Mega-menu columns ── */
const megaColumns = [
  {
    heading: "Compliance Certifications",
    items: [
      { name: "ISO 27001", href: "/services/iso-27001", icon: Shield, desc: "Build and certify your ISMS" },
      { name: "SOC 2", href: "/services/soc-2", icon: FileCheck, desc: "Trust signal for enterprise deals" },
    ],
  },
  {
    heading: "UK Government",
    items: [
      { name: "Cyber Essentials", href: "/services/cyber-essentials", icon: Lock, desc: "NCSC-recognized certification" },
      { name: "Cyber Essentials Plus", href: "/services/cyber-essentials", icon: Lock, desc: "Independent technical testing" },
    ],
  },
  {
    heading: "Advisory",
    items: [
      { name: "Virtual CISO", href: "/services/vciso", icon: UserCog, desc: "Senior security leadership" },
    ],
  },
  {
    heading: "Additional Services",
    items: [
      { name: "Cyber Maturity on AWS", href: "/services/cyber-maturity-aws", icon: Shield, desc: "AWS security posture assessment" },
    ],
  },
];

const allServiceItems = megaColumns.flatMap((col) => col.items);

const navLinks = [
  { name: "Company", href: "/#company", hash: "company" },
  { name: "Contact", href: "/contact", hash: null },
];

/* ── Top-level nav items with mega-menu flag ── */
const topNavItems = [
  { name: "Services", hasMega: true },
  { name: "Company", href: "/#company", hash: "company", hasMega: false },
  { name: "Contact", href: "/contact", hash: null, hasMega: false },
];

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

  const isServicePage = location.pathname.startsWith("/services");

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
            <img alt="3FACTOR" className="h-[99%] w-auto object-contain" src={Logo} />
          </Link>

          {/* ══════════════════════════════════
              DESKTOP NAV (lg+)
          ══════════════════════════════════ */}
          <div className="hidden lg:flex items-center gap-0">
            <NavigationMenu>
              <NavigationMenuList className="gap-0">

                {/* ── Services mega-menu ── */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`
                      relative h-16 px-4 text-xs font-bold uppercase tracking-widest
                      bg-transparent hover:bg-transparent focus:bg-transparent
                      data-[state=open]:bg-transparent
                      transition-colors duration-200
                      data-[state=open]:text-[#F36F21]
                    `}
                    style={{ color: isServicePage ? "#F36F21" : "#3B3B39" }}
                  >
                    {isServicePage && (
                      <span className="absolute top-0 left-4 right-4 h-[3px]" style={{ backgroundColor: "#F36F21" }} />
                    )}
                    Services
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <div
                      className="w-[900px] lg:w-[1050px] p-8"
                      style={{ backgroundColor: "#F8F9FA", borderTop: "3px solid #F36F21" }}
                    >
                      <div className="grid grid-cols-4 gap-8">
                        {megaColumns.map((col) => (
                          <div key={col.heading} className="flex flex-col">
                            <h3
                              className="text-xs font-bold uppercase tracking-widest mb-4 pb-2"
                              style={{ color: "#F36F21", borderBottom: "1px solid rgba(243,111,33,0.2)" }}
                            >
                              {col.heading}
                            </h3>
                            <div className="flex flex-col gap-1">
                              {col.items.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <NavigationMenuLink key={item.name} asChild>
                                    <Link
                                      to={item.href}
                                      className="group flex items-start gap-3 py-2.5 px-2 -mx-2 transition-colors duration-200 hover:bg-white"
                                    >
                                      <div
                                        className="mt-0.5 w-7 h-7 flex items-center justify-center border shrink-0 transition-colors duration-200 group-hover:border-[#F36F21]"
                                        style={{ borderColor: "rgba(59,59,57,0.1)", backgroundColor: "white" }}
                                      >
                                        <Icon size={14} style={{ color: "#F36F21" }} />
                                      </div>
                                      <div>
                                        <div
                                          className="text-sm font-semibold transition-colors duration-200 group-hover:text-[#F36F21]"
                                          style={{ color: "#3B3B39" }}
                                        >
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
                          </div>
                        ))}
                      </div>

                      {/* Bottom-right "All Services" link */}
                      <div className="flex justify-end mt-6 pt-4" style={{ borderTop: "1px solid rgba(59,59,57,0.08)" }}>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/#services"
                            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider transition-colors duration-200 hover:text-[#F36F21]"
                            style={{ color: "#3B3B39" }}
                          >
                            All Services
                            <ArrowRight size={12} />
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* ── Standard links ── */}
                {navLinks.map((link) => {
                  const isActive =
                    link.hash
                      ? location.pathname === "/" && location.hash === `#${link.hash}`
                      : location.pathname === link.href;

                  return (
                    <NavigationMenuItem key={link.name}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={link.href}
                          onClick={(e) => handleHashNav(e, link)}
                          className={`
                            relative inline-flex items-center h-16 px-4
                            text-xs font-bold uppercase tracking-widest
                            transition-colors duration-200 hover:text-[#F36F21]
                          `}
                          style={{ color: isActive ? "#F36F21" : "#3B3B39" }}
                        >
                          {isActive && (
                            <span className="absolute top-0 left-4 right-4 h-[3px]" style={{ backgroundColor: "#F36F21" }} />
                          )}
                          {link.name}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* ── Desktop right actions ── */}
          <div className="hidden lg:flex items-center gap-5">
            <Link to="/contact">
              <Button
                className="text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 transition-all duration-200 hover:shadow-lg"
                style={{ backgroundColor: "#F36F21" }}
                aria-label="Contact 3FACTOR"
              >
                Contact
                <ArrowRight size={14} className="ml-1.5" />
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
                        className="text-xs font-bold uppercase tracking-widest py-4 hover:no-underline hover:text-[#F36F21]"
                        style={{ color: "#3B3B39" }}
                      >
                        Services
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-0 pb-3">
                          {megaColumns.map((col) => (
                            <div key={col.heading} className="mb-3">
                              <h4
                                className="text-[10px] font-bold uppercase tracking-widest mb-2 px-3"
                                style={{ color: "#F36F21" }}
                              >
                                {col.heading}
                              </h4>
                              {col.items.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <SheetClose asChild key={item.name}>
                                    <Link
                                      to={item.href}
                                      className="group flex items-center gap-3 px-3 py-2.5 transition-colors duration-200 hover:bg-[#F8F9FA]"
                                    >
                                      <Icon size={14} className="shrink-0" style={{ color: "#F36F21" }} />
                                      <div>
                                        <span className="text-sm font-medium" style={{ color: "#3B3B39" }}>
                                          {item.name}
                                        </span>
                                        <p className="text-xs" style={{ color: "#646464" }}>{item.desc}</p>
                                      </div>
                                    </Link>
                                  </SheetClose>
                                );
                              })}
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="flex flex-col gap-0 mt-1">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.name}>
                        <Link
                          to={link.href}
                          onClick={(e) => handleHashNav(e, link)}
                          className="text-xs font-bold uppercase tracking-widest py-4 transition-colors duration-200 hover:text-[#F36F21] border-b"
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
                          className="w-full text-white font-bold uppercase tracking-wider"
                          style={{ backgroundColor: "#F36F21" }}
                          aria-label="Contact 3FACTOR"
                        >
                          Contact
                          <ArrowRight size={14} className="ml-1.5" />
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
