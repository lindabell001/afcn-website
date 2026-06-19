import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';

export default function Tavern() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Header / Hero - Main General Chat */}
        <div className="text-center mb-16">
          <Link 
            to="/tavern/chat/america-first-tavern"
            className="group inline-block"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-patriot-blue mb-6 tracking-tight hover:text-patriot-red transition-all duration-200 group-hover:underline">
              America First Tavern
            </h1>
          </Link>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            The main gathering place for all vetted America First patriots
          </p>
        </div>

        {/* Two Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Location Pubs */}
          <Link
            to="/tavern/locations"
            className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="text-7xl mb-8">🗺️</div>
            <h2 className="text-3xl font-bold text-patriot-blue mb-4">Pubs by Location</h2>
            <p className="text-xl text-gray-600 mb-10">State/Territory, County, District, & City, Neighborhood Level</p>
            <p className="text-patriot-red font-semibold group-hover:underline text-lg">
              Join your State or Territory Pub →
            </p>
          </Link>

          {/* Issue Pubs */}
          <Link
            to="/tavern/issues"
            className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="text-7xl mb-8">🎯</div>
            <h2 className="text-3xl font-bold text-patriot-blue mb-4">Pubs by Issue</h2>
            <p className="text-xl text-gray-600 mb-10">Focused Discussion Rooms</p>
            <p className="text-patriot-red font-semibold group-hover:underline text-lg">
              Join an Issue Pub →
            </p>
          </Link>
        </div>

        <p className="text-center text-gray-500 mt-16">
          All Pubs are for members only • Real-time chat
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
