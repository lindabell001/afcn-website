import React from 'react';
import SiteFooter from '../components/SiteFooter';

export default function LearningSources() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-patriot-blue text-center mb-4">
          America First Learning Sources
        </h1>
        <p className="text-center text-xl text-gray-600 mb-12">
          In-depth classes, reports, and training from America First organizations
        </p>

        {/* Promethean Action */}
        <div className="bg-white p-10 rounded-3xl border border-gray-200 mb-12">
          <h2 className="text-3xl font-semibold text-patriot-blue mb-6">Promethean Action – Saturday Class Series</h2>
          <p className="text-gray-600 mb-8">
            Weekly in-depth classes on the American System, economics, history, policy, and strategy.
          </p>

          {/* Embedded Latest Videos */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <iframe width="100%" height="280" src="https://www.youtube.com/embed/pFRmx0hcXPg" title="America Turns 250" frameBorder="0" allowFullScreen></iframe>
            <iframe width="100%" height="280" src="https://www.youtube.com/embed/V-gv0NIObZo" title="The System Britain Stole" frameBorder="0" allowFullScreen></iframe>
            <iframe width="100%" height="280" src="https://www.youtube.com/embed/iqyEMkdwpDw" title="Trump’s Secret Weapon" frameBorder="0" allowFullScreen></iframe>
            <iframe width="100%" height="280" src="https://www.youtube.com/embed/OQ7UrtDjNao" title="Trump Puts Canada On Notice" frameBorder="0" allowFullScreen></iframe>
          </div>

          <a href="https://www.prometheanaction.com/tag/saturday-class/" target="_blank" className="text-patriot-red font-semibold hover:underline">
            View Full Archive on Promethean Action Website →
          </a>
        </div>

        <div className="text-center text-gray-500 mt-12">
          More America First Learning Organizations coming soon...
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
