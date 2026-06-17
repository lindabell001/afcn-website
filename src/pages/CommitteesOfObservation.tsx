import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';

export default function CommitteesOfObservation() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Header / Hero */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-patriot-blue mb-6 tracking-tight">
            Committees of Observation
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            WE THE PEOPLE watching our government, schools, and elections
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Local Committees */}
          <Link
            to="/committees/local"
            className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="text-7xl mb-8">🏛️</div>
            <h2 className="text-3xl font-bold text-patriot-blue mb-4">Local Committees</h2>
            <p className="text-xl text-gray-600 mb-10">County, City & School Board Watchdogs</p>
            <p className="text-patriot-red font-semibold group-hover:underline text-lg">
              Join or Start a Local Committee →
            </p>
          </Link>

          {/* Issue Committees */}
          <Link
            to="/committees/issues"
            className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="text-7xl mb-8">📋</div>
            <h2 className="text-3xl font-bold text-patriot-blue mb-4">Issue Committees</h2>
            <p className="text-xl text-gray-600 mb-10">National & Focused Issue Teams</p>
            <p className="text-patriot-red font-semibold group-hover:underline text-lg">
              Join an Issue Committee →
            </p>
          </Link>
        </div>

        <p className="text-center text-gray-500 mt-16 text-sm">
          Lawful • Peaceful • Fact-Based • America First
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
