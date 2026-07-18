import React from 'react';
import { Link } from 'react-router-dom';

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

        {/* Resources List */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Constitution Academy */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200">
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

          {/* America First Learning Sources */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200">
            <h3 className="text-2xl font-bold text-patriot-blue mb-4">#2 America First Learning Sources</h3>
            <p className="text-gray-600 mb-6">
              In-depth classes, reports, and training from America First organizations.
            </p>
            <Link 
              to="/resources/learning-sources" 
              className="text-patriot-red font-semibold hover:underline text-lg"
            >
              View America First Learning Sources →
            </Link>
          </div>

          {/* Member Podcasts */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200">
            <h3 className="text-2xl font-bold text-patriot-blue mb-4">Member Podcasts</h3>
            <p className="text-gray-600 mb-6">
              America First podcasts from AFCN members. Listen and support patriots.
            </p>
            <Link 
              to="/resources/member-podcasts" 
              className="text-patriot-red font-semibold hover:underline text-lg"
            >
              Browse Member Podcasts →
            </Link>
          </div>

          {/* Coming Soon */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200">
            <h3 className="text-2xl font-bold text-patriot-blue mb-4">Training Videos & Webinars (coming soon)</h3>
            <p className="text-gray-600">Educational videos and live training sessions.</p>
          </div>
        </div>

        {/* Three Choices at Bottom */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-patriot-blue mb-8">
            Ready to Take the Next Step?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/become-one"
              className="inline-block bg-patriot-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-10 py-4 rounded-lg text-lg transition-all shadow-lg"
            >
              Become One
            </Link>

            <Link
              to="/tavern"
              className="inline-block border-b-2 border-patriot-blue hover:border-patriot-red text-patriot-blue font-bold uppercase tracking-wider px-10 py-4 text-lg transition-all hover:text-patriot-red"
            >
              Explore Tavern & Pubs
            </Link>

            <Link
              to="/committees"
              className="inline-block border-b-2 border-patriot-blue hover:border-patriot-red text-patriot-blue font-bold uppercase tracking-wider px-10 py-4 text-lg transition-all hover:text-patriot-red"
            >
              Explore Committees
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
