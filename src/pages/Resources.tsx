import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';

export default function Resources() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-patriot-blue mb-6">
            America First Resources & Tools
          </h1>
          <p className="text-2xl text-gray-600">
            Equipping WE THE PEOPLE for Action
          </p>
        </div>

        {/* 1. Taverns & Pubs */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
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
            <p className="text-xl text-gray-600 mb-10">observing, recording, acting.</p>
            <p className="text-patriot-red font-semibold group-hover:underline text-lg">
              Join or Start a Committee →
            </p>
          </Link>
        </div>

        {/* 3. Constitution Academy */}
        <div className="bg-white p-8 rounded-3xl border border-gray-200 mb-8">
          <h3 className="text-2xl font-bold text-patriot-blue mb-4">3. Constitution Academy</h3>
          <p className="text-gray-600 mb-6">Videos, founding documents, and training on the Constitution and Declaration of Independence</p>
          <Link to="/resources/constitution-academy" className="text-patriot-red font-semibold hover:underline">
            View Constitution Academy →
          </Link>
        </div>

        {/* 4. Election Integrity Toolkit */}
        <div className="bg-white p-8 rounded-3xl border border-gray-200 mb-8">
          <h3 className="text-2xl font-bold text-patriot-blue mb-4">4. Election Integrity Toolkit (coming ASAP)</h3>
          <p className="text-gray-600">Checklists, poll watching guides, and resources for secure and honest elections.</p>
        </div>

        {/* 5. Training Videos & Webinars */}
        <div className="bg-white p-8 rounded-3xl border border-gray-200 mb-8">
          <h3 className="text-2xl font-bold text-patriot-blue mb-4">5. Training Videos & Webinars (coming ASAP)</h3>
          <p className="text-gray-600">Educational videos and live training sessions.</p>
        </div>

        {/* 6-10. Coming Soon */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-gray-200">
            <h3 className="text-2xl font-bold text-patriot-blue mb-4">6. Alternative News & Media Sources (coming ASAP)</h3>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-200">
            <h3 className="text-2xl font-bold text-patriot-blue mb-4">7. Legal & Rights Resources (coming ASAP)</h3>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-200">
            <h3 className="text-2xl font-bold text-patriot-blue mb-4">8. Homeschooling & Education Resources (coming ASAP)</h3>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-200">
            <h3 className="text-2xl font-bold text-patriot-blue mb-4">9. Health & Wellness Resources (coming ASAP)</h3>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-200">
            <h3 className="text-2xl font-bold text-patriot-blue mb-4">10. Business & Economic Tools (coming ASAP)</h3>
          </div>
        </div>

      </main>

      <SiteFooter />
    </div>
  );
}
