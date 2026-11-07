'use client'

import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import SiteFooter from '../components/SiteFooter';

export default function MyEpisodes() {
  const [searchParams] = useSearchParams();
  const podcastId = searchParams.get('podcast_id');
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEpisodes();
  }, [podcastId]);

  const fetchEpisodes = async () => {
    if (!podcastId) return;
    const { data, error } = await supabase
      .from('episodes')
      .select('*')
      .eq('podcast_id', podcastId);
    if (error) console.error(error);
    else setEpisodes(data || []);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-6xl font-bold text-patriot-blue">Manage Episodes</h1>
          <Link to="/my-podcasts" className="text-patriot-red hover:underline">← Back to My Podcasts</Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          <Link to="/record-new" className="bg-white rounded-3xl p-12 text-center hover:shadow-xl transition-all border border-patriot-blue">
            <div className="text-6xl mb-6">🎙️</div>
            <h3 className="text-2xl font-bold">Record New</h3>
          </Link>
          <Link to="/live-recording" className="bg-white rounded-3xl p-12 text-center hover:shadow-xl transition-all border border-patriot-blue">
            <div className="text-6xl mb-6">🔴</div>
            <h3 className="text-2xl font-bold">Go Live</h3>
          </Link>
          <Link to="/faceless-options" className="bg-white rounded-3xl p-12 text-center hover:shadow-xl transition-all border border-patriot-blue">
            <div className="text-6xl mb-6">🎥</div>
            <h3 className="text-2xl font-bold">Faceless Video</h3>
          </Link>
          <Link to="/phone-recording" className="bg-white rounded-3xl p-12 text-center hover:shadow-xl transition-all border border-patriot-blue">
            <div className="text-6xl mb-6">📱</div>
            <h3 className="text-2xl font-bold">Phone Recording</h3>
          </Link>
          <Link to="/text-to-video" className="bg-white rounded-3xl p-12 text-center hover:shadow-xl transition-all border border-patriot-blue">
            <div className="text-6xl mb-6">✍️</div>
            <h3 className="text-2xl font-bold">Text to Video</h3>
          </Link>
          <Link to="/shorts-generator" className="bg-white rounded-3xl p-12 text-center hover:shadow-xl transition-all border border-patriot-blue">
            <div className="text-6xl mb-6">📱</div>
            <h3 className="text-2xl font-bold">Shorts Generator</h3>
          </Link>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8">Your Episodes</h2>
          {episodes.length === 0 ? (
            <p className="text-xl text-gray-500">No episodes yet. Use the buttons above to create one.</p>
          ) : (
            <div className="space-y-6">
              {episodes.map(ep => (
                <div key={ep.id} className="bg-white rounded-3xl p-8 flex justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{ep.title}</h3>
                    <p className="text-gray-600">{ep.description}</p>
                  </div>
                  <span className="px-6 py-3 bg-gray-100 rounded-2xl text-sm font-medium">{ep.status}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
