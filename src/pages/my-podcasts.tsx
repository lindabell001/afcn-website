import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';

export default function MyPodcasts() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-patriot-blue mb-6">My Podcasts</h1>
          <p className="text-2xl text-gray-600">Manage your episodes and create new content</p>
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
      </main>
      <SiteFooter />
    </div>
  );
}
