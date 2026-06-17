import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';

export default function Tavern() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <Link to="/tavern/chat/america-first-tavern">
            <h1 className="text-6xl font-bold text-patriot-blue mb-6 tracking-tight hover:text-patriot-red transition-colors">
              America First Tavern
            </h1>
          </Link>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            The main gathering place for all vetted America First patriots
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* By Location Pubs */}
          <Link
            to="/tavern/locations"
            className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="text-7xl mb-6">🗺️</div>
            <h2 className="text-3xl font-bold text-patriot-blue mb-3">Location Pubs</h2>
            <p className="text-xl text-gray-600 mb-8">50 States + 5 Territories</p>
            <p className="text-patriot-red font-semibold group-hover:underline">
              Join your State or Territory Pub →
            </p>
          </Link>

          {/* By Issue Pubs */}
          <Link
            to="/tavern/issues"
            className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="text-7xl mb-6">🎯</div>
            <h2 className="text-3xl font-bold text-patriot-blue mb-3">Issue Pubs</h2>
            <p className="text-xl text-gray-600 mb-8">Focused Discussion Rooms</p>
            <p className="text-patriot-red font-semibold group-hover:underline">
              Join an Issue Pub →
            </p>
          </Link>
        </div>

        <p className="text-center text-gray-500 mt-16 text-sm">
          All Pubs are for vetted members only • Real-time chat
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
