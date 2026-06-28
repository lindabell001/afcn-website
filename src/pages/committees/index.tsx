import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../../components/SiteFooter';

export default function Committees() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-patriot-blue mb-6 tracking-tight">
            Committee of Observation
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            WE THE PEOPLE observing, recording, acting.
          </p>
        </div>

        {/* Two Large Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* By Location */}
          <Link
            to="/committees/local"
            className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="text-7xl mb-8">🏛️</div>
            <h2 className="text-3xl font-bold text-patriot-blue mb-4">Committees by Location</h2>
            <p className="text-xl text-gray-600 mb-10">State/Territory, County, District, & City, Neighborhood Level</p>
            <p className="text-patriot-red font-semibold group-hover:underline text-lg">
              Join or Start a Local Committee →
            </p>
          </Link>

          {/* By Issue */}
          <Link
            to="/committees/issues"
            className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="text-7xl mb-8">📋</div>
            <h2 className="text-3xl font-bold text-patriot-blue mb-4">Committees by Issue</h2>
            <p className="text-xl text-gray-600 mb-10">National & Focused Issues</p>
            <p className="text-patriot-red font-semibold group-hover:underline text-lg">
              Join an Issue Committee →
            </p>
          </Link>
        </div>

        <p className="text-center text-gray-500 mt-16">
          All Committees are for members only • Lawful vigilance
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
