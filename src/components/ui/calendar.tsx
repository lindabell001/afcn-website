'use client'

import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import SiteFooter from '../components/SiteFooter';
import { Link } from 'react-router-dom';

export default function EpisodeCalendar() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const { data, error } = await supabase
        .from('episodes')
        .select('*')
        .order('publish_date', { ascending: true });

      if (error) console.error(error);
      else setEpisodes(data || []);
      setLoading(false);
    };

    fetchEpisodes();
  }, []);

  // Group by date
  const grouped = episodes.reduce((acc, ep) => {
    const date = ep.publish_date ? new Date(ep.publish_date).toLocaleDateString() : 'No Date';
    if (!acc[date]) acc[date] = [];
    acc[date].push(ep);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-patriot-blue">Episode Calendar</h1>
          <p className="text-2xl text-gray-600 mt-4">Your scheduled and published episodes</p>
        </div>

        {loading ? (
          <p className="text-center text-xl">Loading calendar...</p>
        ) : (
          <div className="space-y-12">
            {Object.keys(grouped).map(date => (
              <div key={date}>
                <h2 className="text-3xl font-bold text-patriot-blue border-b pb-3 mb-6">{date}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {grouped[date].map(ep => (
                    <div key={ep.id} className="bg-white rounded-3xl p-8 border border-gray-100">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-2xl font-bold">{ep.title}</h3>
                          <p className="text-gray-600 mt-2">{ep.description}</p>
                        </div>
                        <span className={`px-4 py-1 rounded-full text-sm font-medium ${
                          ep.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {ep.status}
                        </span>
                      </div>
                      <div className="mt-6 flex gap-4">
                        {ep.audio_url && <a href={ep.audio_url} target="_blank" className="text-patriot-red hover:underline">Listen</a>}
                        {ep.video_url && <a href={ep.video_url} target="_blank" className="text-patriot-red hover:underline">Watch</a>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link to="/my-podcasts" className="text-patriot-red text-xl hover:underline">← Back to My Podcasts</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
