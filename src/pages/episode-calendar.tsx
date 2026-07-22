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
      if (!session) {
        window.location.href = '/member-login';
        return;
      }

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
        ) : episodes.length === 0 ? (
          <div className="text-center py-20 text-2xl text-gray-500">
            No episodes yet.<br />Create some from My Podcasts.
          </div>
        ) : (
          <div className="space-y-12">
            {Object.keys(grouped).map(date => (
              <div key={date}>
                <h2 className="text-3xl font-bold text-patriot-blue border-b pb-3 mb-6">{date}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {grouped[date].map(ep => (
                    <div key={ep.id} className="bg-white rounded-3xl p-8 border border-gray-100">
                      <h3 className="text-2xl font-bold">{ep.title}</h3>
                      <p className="text-gray-600 mt-2">{ep.description}</p>
                      <p className="text-sm text-gray-500 mt-4">
                        Status: <span className="capitalize">{ep.status}</span>
                      </p>
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
