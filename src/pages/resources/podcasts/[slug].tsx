'use client'

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SiteFooter from '../../../components/SiteFooter';

export default function PodcastPage() {
  const { slug } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Demo data for now - will be connected to Supabase
    const demoPodcast = {
      name: "Your Podcast Name",
      tagline: "Truthful news and commentary",
      logo: "🇺🇸",
      episodes: [
        { id: 1, title: "Episode 1 - The Future of America", status: "Published", duration: "52:18" },
        { id: 2, title: "Episode 2 - Listener Q&A", status: "Draft", duration: "38:45" }
      ]
    };

    setPodcast(demoPodcast);
    setLoading(false);
  }, [slug]);

  if (loading) return <div className="min-h-screen bg-background flex items-center justify-center"><p>Loading podcast...</p></div>;

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Hero Header */}
        <div className="relative h-96 bg-patriot-blue rounded-3xl mb-12 flex items-center justify-center text-white">
          <div className="text-center">
            <div className="text-8xl mb-6">{podcast.logo}</div>
            <h1 className="text-6xl font-bold">{podcast.name}</h1>
            <p className="text-2xl mt-4">{podcast.tagline}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-patriot-blue">Episodes</h2>
          <Link to="/record-new" className="bg-patriot-red text-white px-8 py-4 rounded-2xl font-bold">Record New Episode</Link>
        </div>

        <div className="space-y-6">
          {podcast.episodes.map((episode) => (
            <div key={episode.id} className="bg-white rounded-3xl p-8 flex justify-between items-center border border-gray-100">
              <div>
                <h3 className="text-2xl font-bold">{episode.title}</h3>
                <p className="text-gray-600">{episode.duration} • {episode.status}</p>
              </div>
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-patriot-blue text-white rounded-2xl font-bold">Play</button>
                <button className="px-8 py-3 border border-patriot-blue rounded-2xl font-bold">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
