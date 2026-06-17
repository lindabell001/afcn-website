import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';

export default function Tavern() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-patriot-blue mb-6 tracking-tight">
            America First Tavern
          </h1>
          <p className="text-2xl text-gray-600">
            Choose how you want to connect with fellow patriots
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <Link
            to="/tavern/locations"
            className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-2xl"
          >
            <div className="text-7xl mb-6">🗺️</div>
            <h2 className="text-3xl font-bold text-patriot-blue mb-3">By Location</h2>
            <p className="text-xl text-gray-600">50 States + 5 Territories</p>
            <p className="text-patriot-red font-semibold mt-8 group-hover:underline">
              Join your State Pub →
            </p>
          </Link>

          <Link
            to="/tavern/issues"
            className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-2xl"
          >
            <div className="text-7xl mb-6">🎯</div>
            <h2 className="text-3xl font-bold text-patriot-blue mb-3">By Issue</h2>
            <p className="text-xl text-gray-600">Focused Discussion Rooms</p>
            <p className="text-patriot-red font-semibold mt-8 group-hover:underline">
              Join an Issue Pub →
            </p>
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
