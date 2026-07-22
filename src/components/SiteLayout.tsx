import React from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

const SiteLayout = ({ children }) => {
  const sendHelpEmail = () => {
    const subject = encodeURIComponent("Website Help Request - AFCN");
    const body = encodeURIComponent("Please describe the issue you're having:\n\n");
    window.location.href = `mailto:Web@americafirstcitizensnetwork.org?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      <main>
        {children}
      </main>

      {/* Help Button - Fixed on every page */}
      <button
        onClick={sendHelpEmail}
        className="fixed bottom-8 right-8 bg-patriot-blue hover:bg-patriot-red text-white px-8 py-4 rounded-2xl shadow-xl flex items-center gap-3 z-50 transition-all text-lg font-medium"
        title="Get help with the website"
      >
        ❓ Website Help
      </button>

      <SiteFooter />
    </div>
  );
};

export default SiteLayout;
