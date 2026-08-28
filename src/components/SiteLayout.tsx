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

      <button
        onClick={sendHelpEmail}
        className="fixed bottom-4 right-4 bg-patriot-blue hover:bg-patriot-red text-white px-3 py-2 rounded-xl shadow-lg flex items-center gap-1.5 z-50 transition-all text-xs font-medium"
        title="Get help with the website"
      >
        ? Help
      </button>

      <SiteFooter />
    </div>
  );
};

export default SiteLayout;
