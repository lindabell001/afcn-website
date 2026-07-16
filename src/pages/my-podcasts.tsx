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
    {
      id: 2,
      name: "Border Security Updates",
      tagline: "In-depth coverage of the southern border",
      episodesCount: 5,
      status: "Active",
      logo: "🛡️"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-6xl font-bold text-patriot-blue">My Podcasts</h1>
            <p className="text-2xl text-gray-600">Manage all your podcast platforms</p>
          </div>
          <Link
            to="/podcast-setup/beginner"
            className="bg-patriot-red text-white px-8 py-4 rounded-2xl font-bold hover:bg-patriot-blue transition-colors"
          >
            + Create New Podcast Platform
          </Link>
        </div>

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

              <div className="flex gap-4">
                <Link to={`/podcast/${podcast.id}`} className="px-6 py-3 border border-patriot-blue text-patriot-blue rounded-2xl hover:bg-patriot-blue hover:text-white transition-all">
                  Manage Episodes
                </Link>
                <button className="px-6 py-3 bg-patriot-blue text-white rounded-2xl hover:bg-patriot-red transition-all">
                  Record New Episode
                </button>
              </div>
            </div>
          ))}
        </div>

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
