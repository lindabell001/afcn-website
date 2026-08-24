// src/pages/senate.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Senate() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* Hero Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-patriot-blue mb-3">
            MAKE SENATE AMERICA FIRST
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-patriot-red uppercase tracking-wide">
            THE 2026 SENATE WAR
          </p>
        </div>

        {/* Main Content Box */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 mb-10 max-w-3xl mx-auto shadow-sm">
          <div className="space-y-5 text-gray-800 text-lg md:text-xl leading-relaxed text-center">
            <p>
              There are <span className="font-bold text-patriot-blue">17 America First fighters</span> still in the arena.
            </p>
            <p>
              There are <span className="font-bold text-patriot-blue">10 America First incumbents</span> who refused to fold.
            </p>
            <p>
              If every single one of them wins, we put <span className="font-bold text-patriot-red">27 America First Senators</span> in that chamber.
            </p>

            <div className="pt-4 space-y-1 font-semibold text-patriot-blue">
              <p>No more swamp creatures.</p>
              <p>No more excuses.</p>
              <p>No more “we didn’t know.”</p>
            </div>

            <p className="pt-4 font-semibold">
              This is the best shot we have in a generation to take the Senate back for the American people.
            </p>
          </div>
        </div>

        {/* Key Insight Box */}
        <div className="bg-patriot-blue text-white px-8 py-6 rounded-2xl mb-12 text-center max-w-3xl mx-auto shadow-lg">
          <p className="text-xl md:text-2xl font-bold leading-snug">
            If they all win → <span className="text-yellow-300">27 America First Senators</span>.
          </p>
          <p className="mt-3 text-lg font-semibold uppercase tracking-wider">
            The time is now.
          </p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/senate-tracker"
            className="bg-patriot-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-xl text-base text-center shadow-lg transition-all w-full sm:w-auto"
          >
            VIEW LIVE TRACKER →
          </Link>

          <Link
            to="/become-one"
            className="bg-patriot-blue hover:bg-blue-900 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-xl text-base text-center shadow-lg transition-all w-full sm:w-auto"
          >
            BECOME A MEMBER – $25/YEAR
          </Link>

          <a
            href="https://givingtools.com/give/4206"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-patriot-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-xl text-base text-center shadow-lg transition-all w-full sm:w-auto"
          >
            DONATE
          </a>
        </div>

      </main>
    </div>
  );
}
