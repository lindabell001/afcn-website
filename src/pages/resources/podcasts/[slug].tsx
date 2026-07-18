'use client'

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SiteFooter from '../../../components/SiteFooter';

export default function PodcastPage() {
  const { slug } = useParams();

  // Demo data - replace with real data from Supabase later
  const podcast = {
    name: slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Member Podcast',
    tagline: "Truth and Liberty Every Week",
    description: "Join us as we discuss America First values, current events, and how to stand up for our country.",
    image: "https://picsum.photos/id/1015/800/400",
    episodes: [
      { id: 1, title: "The Future of America", duration: "52:18", date: "2026-07-10" },
      { id: 2, title: "Standing for Liberty", duration: "38:45", date: "2026-07-03" },
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Header */}
        <div className="relative h-96 bg-patriot-blue">
          <img src={podcast.image} alt={podcast.name} className="absolute inset-0 w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
            <h1 className="text-6xl font-bold mb-4">{podcast.name}</h1>
            <p className="text-2xl">{podcast.tagline}</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-16">
          <p className="text-xl text-gray-600 mb-12">{podcast.description}</p>

          <h2 className="text-4xl font-bold text-patriot-blue mb-8">Episodes</h2>

          <div className="space-y-6">
            {podcast.episodes.map(ep => (
              <div key={ep.id} className="bg-white rounded-3xl p-8 flex items-center justify-between border border-gray-100">
                <div>
                  <h3 className="text-2xl font-bold text-patriot-blue">{ep.title}</h3>
                  <p className="text-gray-600">{ep.duration} • {ep.date}</p>
                </div>
                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-patriot-blue text-white rounded-3xl text-xl font-semibold hover:bg-patriot-red">Listen</button>
                  <button className="px-8 py-4 bg-white border-2 border-patriot-blue text-patriot-blue rounded-3xl text-xl font-semibold hover:bg-patriot-red hover:text-white">Watch</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
