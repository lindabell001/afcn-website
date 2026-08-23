// src/pages/senate.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Senate() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">

        {/* Hero Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-patriot-blue mb-6">
            MAKE SENATE AMERICA FIRST
          </h1>
          <p className="text-2xl text-patriot-red font-semibold">
            Tracking Every Senator — Holding Them Accountable
          </p>
        </div>

        {/* Introduction Section */}
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-patriot-blue mb-6 text-center">
            No more guessing who’s America First.
          </h2>
          
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              This is a public scorecard that rates every Senate candidate and incumbent on the issues that actually matter:
            </p>
            
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Border security</li>
              <li>Election integrity</li>
              <li>American workers</li>
              <li>The Constitution</li>
              <li>America First foreign policy</li>
            </ul>

            <p className="pt-2">
              Clear scores. Real evidence. One place.
            </p>
            
            <p>
              See exactly who stands with the American people — and who doesn’t.
            </p>
            
            <p className="font-semibold text-patriot-blue pt-2">
              And this is only the beginning.
            </p>
          </div>
        </div>

        {/* Highlight Box */}
        <div className="bg-patriot-blue text-white px-6 py-5 rounded-xl mb-12 text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-xl">
            If all non-incumbent America First Republicans win, we add <span className="text-yellow-300 font-bold">14 new America First Senators</span>
          </p>
        </div>

        {/* Big Button to Live Tracker */}
        <div className="text-center mb-12">
          <Link
            to="/senate-tracker"
            className="inline-block bg-patriot-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-12 py-5 rounded-xl text-xl shadow-lg transition-all"
          >
            VIEW LIVE TRACKER →
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://givingtools.com/give/4206"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-patriot-blue hover:bg-blue-800 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-lg text-center"
          >
            DONATE NOW
          </a>
          <Link
            to="/become-one"
            className="border-2 border-patriot-blue text-patriot-blue hover:bg-patriot-blue hover:text-white font-bold uppercase tracking-wider px-8 py-4 rounded-lg text-center transition-all"
          >
            BECOME A MEMBER ($25/year)
          </Link>
        </div>

      </main>
    </div>
  );
}
