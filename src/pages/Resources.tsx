import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';

export default function Resources() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-patriot-blue mb-6">
            Resources & Tools
          </h1>
          <p className="text-2xl text-gray-600">
            Equipping America First Citizens for Action
          </p>
        </div>

        {/* Top Priority Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* 1. Taverns & Pubs */}
          <Link
            to="/tavern"
            className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="text-7xl mb-8">🍺</div>
            <h2 className="text-3xl font-bold text-patriot-blue mb-4">Taverns & Pubs</h2>
            <p className="text-xl text-gray-600 mb-10">Real-time Chat Groups</p>
            <p className="text-patriot-red font-semibold group-hover:underline text-lg">
              Join the Conversation →
            </p>
          </Link>

          {/* 2. Committees of Observation */}
          <Link
            to="/committees-of-observation"
            className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="text-7xl mb-8">🔍</div>
            <h2 className="text-3xl font-bold text-patriot-blue mb-4">Committees of Observation</h2>
            <p className="text-xl text-gray-600 mb-10">Lawful Watchdog Networks</p>
            <p className="text-patriot-red font-semibold group-hover:underline text-lg">
              Join or Start a Committee →
            </p>
          </Link>
        </div>

        {/* Other Resources (you can expand later) */}
        <div className="text-center text-gray-500 text-sm">
          More toolkits, guides, and training coming soon...
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
