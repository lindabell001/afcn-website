'use client'

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import SiteFooter from '../../components/SiteFooter';

export default function MemberPodcasts() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPublicPodcasts();
  }, []);

  const fetchPublicPodcasts = async () => {
    const { data, error } = await supabase
      .from('podcasts')
      .select('*')
      .eq('is_public', true)
      .order('created_at', { ascending: false });

    if (error) console.error(error);
    setPodcasts(data || []);
    setLoading(false);
  };

  if (loading) return <div className="text-center py-20">Loading member podcasts...</div>;

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-patriot-blue">AFCNUS Member Podcasts</h1>
          <p className="text-2xl text-gray-600 mt-4">Real Patriots Sharing Real Truth</p>
          <p className="text-xl text-patriot-red mt-6">Share your podcast: afcnus.org/p/[your-name]</p>
        </div>

        {podcasts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500">No public podcasts yet. Be the first!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {podcasts.map(podcast => (
              <Link key={podcast.id} to={`/resources/podcasts/${podcast.slug}`} className="group">
                <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-patriot-red transition-all hover:shadow-xl">
                  {podcast.cover_image_url ? (
                    <img src={podcast.cover_image_url} alt={podcast.title} className="w-full h-48 object-cover" />
                  ) : (
                    <div className="h-48 bg-gray-200 flex items-center justify-center text-6xl">🎙️</div>
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-patriot-blue mb-2">{podcast.title}</h3>
                    <p className="text-gray-600 mb-4">{podcast.description}</p>
                    <p className="text-sm text-patriot-red font-semibold">Listen Now</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
