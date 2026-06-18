import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/resources", label: "Resources" },
  { to: "/become-one", label: "Become One" },
  { to: "/mission", label: "Mission" },
  { to: "/donate", label: "Donate" },
];

const SiteHeader = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Thin red top bar */}
      <div className="bg-patriot-red text-primary-foreground text-sm">
        <div className="container flex justify-end items-center h-9 relative">
          <button
            onClick={() => setLoginOpen(!loginOpen)}
            className="flex items-center gap-1 font-medium hover:text-white/80 transition-smooth"
          >
            Member Login <ChevronDown className="h-3.5 w-3.5" />
          </button>
          {loginOpen && (
            <div className="absolute right-4 top-9 w-56 bg-card border border-border rounded-md shadow-elegant py-2 text-foreground">
              <Link to="/member-login" onClick={() => setLoginOpen(false)} className="block px-4 py-2 text-sm hover:bg-secondary transition-smooth">
                Member Login Portal
              </Link>
              <Link to="/become-one" onClick={() => setLoginOpen(false)} className="block px-4 py-2 text-sm hover:bg-secondary transition-smooth">
                Become a Member
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Main Nav Bar - ONLY the logo */}
      <div className="bg-background border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-24 px-4">
          <Link to="/">
            <img 
              src="/logo.jpg" 
              alt="America First Citizens Network" 
              className="h-20 w-auto flex-shrink-0"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to || item.label}
                to={item.to!}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-semibold uppercase tracking-wide rounded-sm transition-smooth ${
                    isActive ? "text-patriot-red" : "text-primary hover:text-patriot-red"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button className="lg:hidden text-primary" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="lg:hidden border-t border-border bg-background">
            <div className="container py-2 flex flex-col px-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to || item.label}
                  to={item.to!}
                  end={item.to === "/"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `py-3 text-sm font-semibold uppercase tracking-wide border-b border-border last:border-0 ${
                      isActive ? "text-patriot-red" : "text-primary"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;
