import React from 'react';
import SiteFooter from '../components/SiteFooter';

export default function Mission() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-8 pb-20">
        <div className="container max-w-4xl mx-auto px-6">

          {/* Hero, Central Purpose, Pillars, As a Member sections unchanged */}

          {/* Tightened "How You Make This Happen" Section */}
          <div className="bg-gradient-to-br from-patriot-blue to-blue-900 text-white rounded-3xl p-8 md:p-10 text-center mt-4">
            <h2 className="text-4xl font-bold mb-6">How You Make This Happen</h2>
            <p className="text-xl mb-6">This movement grows because of <strong>you</strong>. Every member is a builder.</p>
            
            <div className="text-left max-w-2xl mx-auto space-y-4 text-lg mb-8">
              <p>• Stay informed and engaged — use our resources and training</p>
              <p>• Bring fellow patriots into the Network (referral rewards for growing this family)</p>
              <p>• Build the America First Citizens Network by having new members apply</p>
              <p>• WE THE PEOPLE are building a new playbook and taking action</p>
            </div>

            <a 
              href="/signup.html"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-12 py-6 rounded-xl transition-all"
            >
              Become a Member – Fill Out Application
            </a>

            <p className="text-3xl font-medium mt-8">
              You are not just joining an organization.<br />
              <span className="text-patriot-red">You are rebuilding the Republic.</span>
            </p>
          </div>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
