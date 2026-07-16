import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';

export default function MyPodcasts() {
  const [showChoice, setShowChoice] = useState(true); // Set to false once they have podcasts

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-patriot-blue mb-6">My Podcasts</h1>
          <p className="text-2xl text-gray-600">Manage your episodes and create new content</p>
        </div>

        {showChoice ? (
          // Beginner vs Experienced Choice
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-patriot-blue mb-4">How would you like to get started?</h2>
              <p className="text-xl text-gray-600">Choose the path that fits you best</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Beginner */}
              <div className="bg-white border-2 border-patriot-blue rounded-3xl p-10 text-center hover:shadow-xl transition-all">
                <div className="text-6xl mb-6">🌱</div>
                <h3 className="text-3xl font-bold text-patriot-blue mb-4">I’m a Beginner</h3>
                <p className="text-gray-600 mb-8">Guide me step-by-step to create my podcast platform</p>
                <Link
                  to="/podcast-setup/beginner"
                  className="block bg-patriot-blue text-white py-5 rounded-2xl text-xl font-bold hover:bg-patriot-red transition-colors"
                >
                  Start Setup Wizard
                </Link>
              </div>

              {/* Experienced */}
              <div className="bg-white border-2 border-patriot-blue rounded-3xl p-10 text-center hover:shadow-xl transition-all">
                <div className="text-6xl mb-6">📡</div>
                <h3 className="text-3xl font-bold text-patriot-blue mb-4">I Already Have Podcasts</h3>
                <p className="text-gray-600 mb-8">Quickly connect my existing shows</p>
                <Link
                  to="/podcast-setup/experienced"
                  className="block bg-white border-2 border-patriot-blue text-patriot-blue py-5 rounded-2xl text-xl font-bold hover:bg-patriot-red hover:text-white transition-colors"
                >
                  Connect Existing Podcast
                </Link>
              </div>
            </div>
          </div>
        ) : (
          // Main Hub - After they have podcasts
          <div>
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl font-bold text-patriot-blue">My Podcasts</h2>
              <Link
                to="/podcast-setup/new"
                className="bg-patriot-red text-white px-8 py-4 rounded-2xl font-bold hover:bg-patriot-blue transition-colors"
              >
                + Create New Podcast
              </Link>
            </div>

            {/* Three Big Buttons */}
            <div className="flex flex-wrap gap-6 justify-center mb-16">
              <Link
                to="/record-new"
                className="bg-patriot-blue hover:bg-patriot-red text-white px-10 py-6 rounded-3xl text-2xl font-bold transition-all hover:shadow-xl"
              >
                Record New Episode
              </Link>

              <Link
                to="/upload"
                className="bg-white border-2 border-patriot-blue hover:border-patriot-red text-patriot-blue px-10 py-6 rounded-3xl text-2xl font-bold transition-all hover:shadow-xl"
              >
                Upload Episode
              </Link>

              <Link
                to="/video-studio"
                className="bg-white border-2 border-patriot-blue hover:border-patriot-red text-patriot-blue px-10 py-6 rounded-3xl text-2xl font-bold transition-all hover:shadow-xl"
              >
                Create Faceless Video
              </Link>
            </div>

            {/* Episode List Placeholder */}
            <div className="bg-white rounded-3xl p-8 shadow">
              <h2 className="text-3xl font-bold mb-8">Your Episodes</h2>
              <p className="text-gray-600">Your episodes will appear here once you create them.</p>
            </div>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
