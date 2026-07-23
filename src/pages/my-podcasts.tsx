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
    const { data, error } = await supabase
      .from('episodes')
      .select('*')
      .eq('podcast_id', podcastId);

    if (error) console.error(error);
    else setEpisodes(data || []);
    setLoading(false);
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading episodes...</div>;

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-6xl font-bold text-patriot-blue">My Episodes</h1>
          <Link to="/record-new" className="bg-patriot-red text-white px-8 py-4 rounded-2xl font-bold">Record New</Link>
        </div>

        <div className="flex gap-4 mb-8">
          <Link to="/video-studio" className="bg-patriot-blue text-white px-8 py-4 rounded-2xl font-bold">Video Studio</Link>
          <Link to="/faceless-options" className="bg-patriot-blue text-white px-8 py-4 rounded-2xl font-bold">Faceless Video</Link>
        </div>

        {episodes.length === 0 ? (
          <div className="text-center py-20 text-2xl text-gray-500">No episodes yet. Record or upload one.</div>
        ) : (
          <div className="space-y-6">
            {episodes.map((ep) => (
              <div key={ep.id} className="bg-white rounded-3xl p-8 flex justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{ep.title}</h3>
                  <p className="text-gray-600">{ep.description}</p>
                </div>
                <div>
                  <span className={`px-4 py-1 rounded-full text-sm ${ep.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {ep.status}
                  </span>
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
