import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/mission", label: "Mission" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
  { to: "/become-one", label: "Become One" },
  { to: "/donate", label: "Donate" },
];

const SiteHeader = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border shadow-sm">
      {/* Red Top Bar */}
      <div className="bg-patriot-red text-white text-sm">
        <div className="container flex justify-end items-center h-10 relative">
          <button
            onClick={() => setLoginOpen(!loginOpen)}
            className="flex items-center gap-1.5 font-medium hover:text-white/80 px-4 py-2"
          >
            Member Login
            <ChevronDown className={`h-4 w-4 transition-transform ${loginOpen ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>

      {/* Main Header - Completely Empty Upper Left */}
      <div className="bg-[#002868] py-8">
        <div className="container flex items-center justify-center px-6">   {/* Centered nav, nothing on left */}

          {/* UPPER LEFT IS NOW COMPLETELY EMPTY */}

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `px-5 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-all rounded-sm ${
                    isActive ? "border-b-2 border-white" : "hover:text-white/80 hover:bg-white/10"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button 
            className="lg:hidden text-white p-2" 
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="lg:hidden bg-[#002868] border-t border-white/20">
          <div className="container py-4 flex flex-col px-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setMobileOpen(false)}
                className="py-4 text-base font-semibold text-white border-b border-white/20 last:border-0"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
