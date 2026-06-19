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

        {/* 1. Constitution Academy */}
        <div className="bg-white p-8 rounded-3xl border border-gray-200 mb-8">
          <h3 className="text-2xl font-bold text-patriot-blue mb-4">1. Constitution Academy</h3>
          <p className="text-gray-600 mb-6">
            Videos, founding documents, and training on the Constitution and Declaration of Independence from Hillsdale College and other trusted sources.
          </p>
          <Link 
            to="/resources/constitution-academy" 
            className="text-patriot-red font-semibold hover:underline text-lg"
          >
            View Constitution Academy →
          </Link>
        </div>

        {/* 2. Election Integrity Toolkit */}
        <div className="bg-white p-8 rounded-3xl border border-gray-200 mb-8">
          <h3 className="text-2xl font-bold text-patriot-blue mb-4">2. Election Integrity Toolkit (coming soon)</h3>
          <p className="text-gray-600">Checklists, poll watching guides, and resources for secure and honest elections.</p>
        </div>

        {/* 3. Training Videos & Webinars */}
        <div className="bg-white p-8 rounded-3xl border border-gray-200 mb-8">
          <h3 className="text-2xl font-bold text-patriot-blue mb-4">3. Training Videos & Webinars (coming soon)</h3>
          <p className="text-gray-600">Educational videos and live training sessions.</p>
        </div>

        {/* 4-8. Coming Soon */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-gray-200">
            <h3 className="text-2xl font-bold text-patriot-blue mb-4">4. Alternative News & Media Sources (coming soon)</h3>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-200">
            <h3 className="text-2xl font-bold text-patriot-blue mb-4">5. Legal & Rights Resources (coming soon)</h3>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-200">
            <h3 className="text-2xl font-bold text-patriot-blue mb-4">6. Homeschooling & Education Resources (coming soon)</h3>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-200">
            <h3 className="text-2xl font-bold text-patriot-blue mb-4">7. Health & Wellness Resources (coming soon)</h3>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-200">
            <h3 className="text-2xl font-bold text-patriot-blue mb-4">8. Business & Economic Tools (coming soon)</h3>
          </div>
        </div>

      </main>

      <SiteFooter />
    </div>
  );
}
