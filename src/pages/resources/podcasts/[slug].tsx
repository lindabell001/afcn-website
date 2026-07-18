'use client'

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SiteFooter from '../../../components/SiteFooter';

export default function PodcastPage() {
  const { slug } = useParams();
  const [playingEpisode, setPlayingEpisode] = useState(null);

  // Demo data
  const podcast = {
    name: slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Member Podcast',
    tagline: "Truth and Liberty Every Week",
    description: "Join us as we discuss America First values, current events, and how to stand up for our country.",
    image: "https://picsum.photos/id/1015/800/400",
    episodes: [
      { id: 1, title: "The Future of America", duration: "52:18", date: "2026-07-10", type: "video" },
      { id: 2, title: "Standing for Liberty", duration: "38:45", date: "2026-07-03", type: "audio" },
    ]
  };

  const playEpisode = (episode) => {
    setPlayingEpisode(episode);
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
                  <button 
                    onClick={() => playEpisode(ep)}
                    className="px-8 py-4 bg-patriot-blue text-white rounded-3xl text-xl font-semibold hover:bg-patriot-red"
                  >
                    {ep.type === 'video' ? 'Watch' : 'Listen'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {playingEpisode && (
            <div className="mt-12 bg-white rounded-3xl p-12">
              <h3 className="text-3xl font-bold mb-6">{playingEpisode.title}</h3>
              <p className="text-gray-600 mb-8">Now playing...</p>
              <div className="bg-gray-900 rounded-2xl aspect-video flex items-center justify-center text-white">
                {playingEpisode.type === 'video' ? 'Video Player' : 'Audio Player'}
              </div>
              <button onClick={() => setPlayingEpisode(null)} className="mt-8 text-patriot-red">Close Player</button>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
