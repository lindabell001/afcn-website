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
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 mb-16 max-w-3xl mx-auto">
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

        {/* Placeholder for future tracker */}
        <div className="bg-white p-10 rounded-3xl border border-gray-200 text-center">
          <h2 className="text-3xl font-bold text-patriot-blue mb-4">
            Senate Tracker Coming Next
          </h2>
          <p className="text-gray-600 text-lg">
            The full scorecard and rankings will be added in the next steps.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link
            to="/take-action"
            className="inline-block bg-patriot-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-10 py-4 rounded-lg text-lg transition-all shadow-lg"
          >
            TAKE ACTION →
          </Link>
        </div>
      </main>
    </div>
  );
}
