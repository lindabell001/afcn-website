import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import newlogo from "@/assets/newlogo.jpg";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/mission", label: "Mission" },
  { to: "/resources", label: "Resources" },
  { to: "/take-action", label: "Take Action" },
  { to: "/senate", label: "Senate" },          // ← NEW
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
        <div className="container flex justify-end items-center h-9 relative">
          <button
            onClick={() => setLoginOpen(!loginOpen)}
            className="flex items-center gap-1.5 font-medium hover:text-white/80 px-4 py-1.5"
          >
            Member Login
            <ChevronDown className={`h-4 w-4 transition-transform ${loginOpen ? "rotate-180" : ""}`} />
          </button>

          {loginOpen && (
            <div className="absolute right-6 top-9 w-64 bg-white text-gray-900 rounded-xl shadow-2xl border border-gray-200 py-2 z-50">
              <Link 
                to="/member-login" 
                onClick={() => setLoginOpen(false)}
                className="block px-6 py-3 hover:bg-gray-100 font-medium"
              >
                Login to Member Portal
              </Link>
              <a 
                href="mailto:membership@americafirstcitizensnetwork.org?subject=Forgot Password Request"
                onClick={() => setLoginOpen(false)}
                className="block px-6 py-3 hover:bg-gray-100 text-sm text-gray-600"
              >
                Forgot Password?
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#002868] py-3">
        <div className="container flex items-center justify-between px-4 md:px-6">
          
          {/* Logo */}
          <Link to="/">
            <img 
              src={newlogo} 
              alt="America First Citizens Network" 
              className="h-16 md:h-20 w-auto flex-shrink-0" 
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-semibold uppercase tracking-widest text-white transition-all rounded-sm ${
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
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="lg:hidden bg-[#002868] border-t border-white/20">
          <div className="container py-3 flex flex-col px-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-base font-semibold text-white border-b border-white/20 last:border-0"
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
