'use client'

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import SiteFooter from '../../components/SiteFooter';

export default function PublicEpisodePage() {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEpisode = async () => {
      const { data, error } = await supabase
        .from('episodes')
        .select(`
          *,
          podcasts (name, slug)
        `)
        .eq('id', id)
        .single();

      if (error) console.error(error);
      else setEpisode(data);
      setLoading(false);
    };

    if (id) fetchEpisode();
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-2xl">Loading episode...</div>;

  if (!episode) return <div className="min-h-screen flex items-center justify-center text-2xl">Episode not found.</div>;

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-patriot-blue">{episode.title}</h1>
          <p className="text-xl text-gray-600 mt-4">From: {episode.podcasts?.name}</p>
        </div>

        {/* Player */}
        <div className="bg-white rounded-3xl p-12 mb-16 shadow-sm">
          {episode.audio_url && (
            <audio controls className="w-full">
              <source src={episode.audio_url} type="audio/mpeg" />
            </audio>
          )}
          {episode.video_url && (
            <video controls className="w-full rounded-2xl">
              <source src={episode.video_url} type="video/mp4" />
            </video>
          )}
        </div>

        <div className="prose max-w-none text-lg leading-relaxed">
          <p>{episode.description}</p>
        </div>

        <div className="mt-16 text-sm text-gray-500">
          Published: {new Date(episode.publish_date).toLocaleDateString()}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
