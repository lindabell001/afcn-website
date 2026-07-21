'use client'

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../../../lib/supabaseClient';
import SiteFooter from '../../../components/SiteFooter';

export default function PodcastPage() {
  const { slug } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPodcast();
  }, [slug]);

  const fetchPodcast = async () => {
    try {
      const { data, error } = await supabase
        .from('podcasts')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) throw error;

      setPodcast(data);

      // Fetch episodes for this podcast
      const { data: eps } = await supabase
        .from('episodes')
        .select('*')
        .eq('podcast_id', data.id)
        .order('created_at', { ascending: false });

      setEpisodes(eps || []);
    } catch (error) {
      console.error('Podcast not found', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-20">Loading podcast...</div>;
  if (!podcast) return <div className="text-center py-20">Podcast not found</div>;

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <Link to="/my-podcasts" className="text-patriot-red hover:underline mb-8 inline-block">← Back to My Podcasts</Link>

        <div className="bg-white rounded-3xl p-12">
          <h1 className="text-6xl font-bold text-patriot-blue mb-4">{podcast.title}</h1>
          <p className="text-2xl text-gray-600 mb-8">{podcast.description}</p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="font-bold mb-4">Quick Actions</h3>
              <div className="space-y-4">
                <Link to={`/record-new?podcast_id=${podcast.id}`} className="block bg-patriot-blue text-white py-4 rounded-2xl text-center">Record New Episode</Link>
                <Link to={`/live-recording?podcast_id=${podcast.id}`} className="block bg-patriot-red text-white py-4 rounded-2xl text-center">Go Live</Link>
                <Link to={`/video-studio?podcast_id=${podcast.id}`} className="block bg-patriot-blue text-white py-4 rounded-2xl text-center">Video Studio</Link>
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="font-bold mb-4">Episodes ({episodes.length})</h3>
              {episodes.length === 0 ? (
                <p>No episodes yet. Record your first one!</p>
              ) : (
                <div className="space-y-4">
                  {episodes.map(ep => (
                    <div key={ep.id} className="border rounded-2xl p-6">
                      <h4 className="font-bold">{ep.title}</h4>
                      <p className="text-sm text-gray-500">{new Date(ep.created_at).toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
