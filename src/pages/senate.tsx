// src/pages/senate.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Senate() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-patriot-blue mb-6">
            MAKE SENATE AMERICA FIRST
          </h1>
          <p className="text-2xl text-patriot-red font-semibold">
            Tracking Every Senator — Holding Them Accountable
          </p>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We the People will make the United States Senate put America First.
          </p>
        </div>

        {/* Placeholder content – we will fill this in later steps */}
        <div className="bg-white p-10 rounded-3xl border border-gray-200 text-center">
          <h2 className="text-3xl font-bold text-patriot-blue mb-4">
            Senate Tracker Coming Next
          </h2>
          <p className="text-gray-600 text-lg">
            This page is ready. We will add the full tracker content in the next steps.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
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
