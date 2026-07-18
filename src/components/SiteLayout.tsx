import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SiteLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="bg-patriot-blue text-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="font-bold text-2xl">AFCN</Link>
            <div className="hidden md:flex gap-8 text-lg">
              <Link to="/resources" className="hover:text-patriot-red transition">Resources</Link>
              <Link to="/tavern" className="hover:text-patriot-red transition">Tavern</Link>
              <Link to="/committees" className="hover:text-patriot-red transition">Committees</Link>
              <Link to="/member-dashboard" className="hover:text-patriot-red transition">Member Dashboard</Link>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/member-login" className="hover:text-patriot-red transition">Login</Link>
            <Link to="/become-one" className="bg-patriot-red px-8 py-3 rounded-2xl font-bold hover:bg-red-700 transition">Become a Member</Link>
          </div>
        </div>
      </nav>

      {children}

      {/* Footer is in each page */}
    </div>
  );
};

export default SiteLayout;
