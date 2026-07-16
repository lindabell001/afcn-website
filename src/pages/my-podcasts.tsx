import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';

export default function MyPodcasts() {
  // Demo data - replace with real data from Supabase later
  const podcasts = [
    {
      id: 1,
      name: "America First Daily",
      tagline: "Truthful news and commentary",
      episodesCount: 12,
      status: "Active",
      logo: "🇺🇸"
    },
    // Add more here when user creates them
  ];

  const hasMultiple = podcasts.length > 1;

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-6xl font-bold text-patriot-blue">My Podcasts</h1>
            <p className="text-2xl text-gray-600">Manage your podcast platforms</p>
          </div>
          <Link
            to="/podcast-setup/beginner"
            className="bg-patriot-red text-white px-8 py-4 rounded-2xl font-bold hover:bg-patriot-blue transition-colors"
          >
            + Create New Podcast Platform
          </Link>
        </div>

        {hasMultiple ? (
          // Multiple platforms - show list
          <div className="grid gap-6">
            {podcasts.map(podcast => (
              <div key={podcast.id} className="bg-white rounded-3xl p-8 flex items-center justify-between border border-gray-100">
                <div className="flex items-center gap-6">
                  <div className="text-5xl">{podcast.logo}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-patriot-blue">{podcast.name}</h3>
                    <p className="text-gray-600">{podcast.tagline}</p>
                    <p className="text-sm text-gray-500 mt-1">{podcast.episodesCount} episodes • {podcast.status}</p>
                  </div>
                </div>
                <Link 
                  to={`/podcast/${podcast.id}`}
                  className="px-8 py-4 border border-patriot-blue text-patriot-blue rounded-2xl hover:bg-patriot-blue hover:text-white transition-all"
                >
                  Manage This Platform
                </Link>
              </div>
            ))}
          </div>
        ) : (
          // Single platform - direct dedicated view
          podcasts.length > 0 && (
            <div className="bg-white rounded-3xl p-12">
              <div className="flex items-center gap-6 mb-12">
                <div className="text-6xl">{podcasts[0].logo}</div>
                <div>
                  <h2 className="text-4xl font-bold text-patriot-blue">{podcasts[0].name}</h2>
                  <p className="text-xl text-gray-600">{podcasts[0].tagline}</p>
                </div>
              </div>

              {/* Episode List Placeholder */}
              <div className="bg-gray-50 rounded-3xl p-8 mb-12">
                <h3 className="text-2xl font-bold mb-6">Your Episodes</h3>
                <p className="text-gray-600">Your episodes will appear here once you create them.</p>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap gap-6 justify-center">
                <Link to="/record-new" className="bg-patriot-blue text-white px-10 py-6 rounded-3xl text-2xl font-bold hover:bg-patriot-red transition-all">
                  Record New Episode
                </Link>
                <Link to="/upload" className="bg-white border-2 border-patriot-blue text-patriot-blue px-10 py-6 rounded-3xl text-2xl font-bold hover:border-patriot-red transition-all">
                  Upload Episode
                </Link>
                <Link to="/video-studio" className="bg-white border-2 border-patriot-blue text-patriot-blue px-10 py-6 rounded-3xl text-2xl font-bold hover:border-patriot-red transition-all">
                  Create Faceless Video
                </Link>
              </div>
            </div>
          )
        )}

        {podcasts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500">You don't have any podcast platforms yet.</p>
            <Link to="/podcast-setup/beginner" className="mt-8 inline-block bg-patriot-red text-white px-10 py-4 rounded-2xl text-xl font-bold">
              Create Your First Podcast Platform
            </Link>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
