'use client'

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';

export default function MyPodcasts() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Demo data
    setPodcasts([
      {
        id: 1,
        name: "Your First Podcast",
        tagline: "Truthful news and commentary",
        episodesCount: 12,
        status: "Active",
        logo: "🇺🇸"
      }
    ]);
    setLoading(false);
  }, []);

  const deletePodcast = (id) => {
    if (window.confirm('Delete this podcast platform?')) {
      setPodcasts(podcasts.filter(p => p.id !== id));
      alert('Podcast platform deleted.');
    }
  };

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

        {loading ? (
          <p>Loading...</p>
        ) : podcasts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500">You don't have any podcast platforms yet.</p>
            <Link to="/podcast-setup/beginner" className="mt-8 inline-block bg-patriot-red text-white px-10 py-4 rounded-2xl text-xl font-bold">Create Your First</Link>
          </div>
        ) : (
          <div className="space-y-8">
            {podcasts.map((podcast) => (
              <div key={podcast.id} className="bg-white rounded-3xl p-8 flex items-center justify-between border border-gray-100">
                <div className="flex items-center gap-6">
                  <div className="text-5xl">{podcast.logo}</div>
                  <div>
                    <h3 className="text-3xl font-bold text-patriot-blue">{podcast.name}</h3>
                    <p className="text-gray-600">{podcast.tagline}</p>
                    <p className="text-sm text-gray-500 mt-1">{podcast.episodesCount} episodes</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Link to={`/my-episodes?podcast_id=${podcast.id}`} className="bg-patriot-blue text-white px-8 py-4 rounded-2xl font-bold hover:bg-patriot-red">Manage Episodes</Link>
                  <button 
                    onClick={() => deletePodcast(podcast.id)}
                    className="px-6 py-4 text-red-600 hover:bg-red-50 rounded-2xl"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
