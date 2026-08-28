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
        className="fixed bottom-3 left-3 bg-patriot-blue hover:bg-patriot-red text-white px-2.5 py-1.5 rounded-lg shadow-lg z-50 text-xs font-medium"
        title="Get help with the website"
      >
        ? Help
      </button>

      <SiteFooter />
    </div>
  );
};

export default SiteLayout;
