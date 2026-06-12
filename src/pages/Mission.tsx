import React from 'react';
import SiteFooter from '../components/SiteFooter';

export default function Mission() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-8 pb-20">
        <div className="container max-w-4xl mx-auto px-6">

          {/* Hero, Central Purpose, Pillars, and As a Member sections remain the same */}
          {/* ... (keeping all previous content) */}

          {/* === FIXED "How You Make This Happen" SECTION WITH RED BUTTON === */}
          <div className="bg-gradient-to-br from-patriot-blue to-blue-900 text-white rounded-3xl p-12 text-center mt-8">
            <h2 className="text-4xl font-bold mb-6">How You Make This Happen</h2>
            <p className="text-xl mb-10">This movement grows because of <strong>you</strong>. Every member is a builder.</p>
            
            <div className="text-left max-w-2xl mx-auto space-y-6 text-lg mb-12">
              <p>• Stay informed and engaged — use our resources and training</p>
              <p>• Bring fellow patriots into the Network (referral rewards for growing this family)</p>
              <p>• Build the America First Citizens Network by having new members apply</p>
              <p>• WE THE PEOPLE are building a new playbook and taking action</p>
            </div>

            <p className="text-3xl font-medium mb-10">
              You are not just joining an organization.<br />
              <span className="text-patriot-red">You are rebuilding the Republic.</span>
            </p>

            {/* Red Button - Same style as your other pages */}
            <a 
              href="/signup.html"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-12 py-6 rounded-xl transition-all duration-200"
            >
              Become a Member – Fill Out Application
            </a>
          </div>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
