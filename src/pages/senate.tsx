// src/pages/senate.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Senate() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* Hero Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-patriot-blue mb-4">
            MAKE SENATE AMERICA FIRST
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-patriot-red">
            The 2026 Senate Opportunity
          </p>
        </div>

        {/* Main Content Box */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 mb-10 max-w-3xl mx-auto shadow-sm">
          <div className="space-y-6 text-gray-800 text-lg md:text-xl leading-relaxed text-center">
            <p>
              There are currently <span className="font-bold text-patriot-blue">17 America First candidates</span> still in the fight (including 2 special election candidates).
            </p>
            
            <p>
              Combined with <span className="font-bold text-patriot-blue">10 America First incumbents</span>, a full victory this cycle would put <span className="font-bold text-patriot-red">27 America First voices</span> in the Senate.
            </p>

            <p className="font-semibold text-patriot-blue pt-2">
              This is the clearest path in years to take the Senate back for the American people.
            </p>
          </div>
        </div>

        {/* Key Insight Box - Prominent */}
        <div className="bg-patriot-blue text-white px-8 py-6 rounded-2xl mb-12 text-center max-w-3xl mx-auto shadow-lg">
          <p className="text-xl md:text-2xl font-semibold leading-snug">
            If every America First candidate and incumbent wins, we put <span className="text-yellow-300 font-bold">27 America First Senators</span> in place from this election cycle.
          </p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Link
            to="/senate-tracker"
            className="bg-patriot-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-10 py-5 rounded-xl text-lg text-center shadow-lg transition-all w-full sm:w-auto"
          >
            VIEW LIVE TRACKER →
          </Link>

          <Link
            to="/become-one"
            className="bg-patriot-blue hover:bg-blue-900 text-white font-bold uppercase tracking-wider px-10 py-5 rounded-xl text-lg text-center shadow-lg transition-all w-full sm:w-auto"
          >
            BECOME A MEMBER – $25/year
          </Link>

          <a
            href="https://givingtools.com/give/4206"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-patriot-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-10 py-5 rounded-xl text-lg text-center shadow-lg transition-all w-full sm:w-auto"
          >
            DONATE
          </a>
        </div>

      </main>
    </div>
  );
}
