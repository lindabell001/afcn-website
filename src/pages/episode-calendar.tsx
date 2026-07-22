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

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-2xl">Loading your calendar...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-patriot-blue">Episode Calendar</h1>
          <p className="text-2xl text-gray-600 mt-4">Your scheduled and published episodes</p>
        </div>

        {episodes.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-8xl mb-8">📅</div>
            <h2 className="text-4xl font-bold text-gray-400">No episodes yet</h2>
            <p className="text-2xl text-gray-500 mt-6 max-w-md mx-auto">
              When you create episodes, they will appear here organized by publish date.
            </p>
            <Link 
              to="/my-podcasts" 
              className="inline-block mt-12 bg-patriot-red text-white px-12 py-5 rounded-2xl text-xl font-bold hover:bg-patriot-blue transition-all"
            >
              Create Your First Episode →
            </Link>
          </div>
        ) : (
          <div className="space-y-16">
            {/* Episodes will go here when they exist */}
            {episodes.map(ep => (
              <div key={ep.id} className="bg-white rounded-3xl p-10 border border-gray-100">
                <h3 className="text-3xl font-bold">{ep.title}</h3>
                <p className="text-gray-600 mt-3">{ep.description}</p>
              </div>
            ))}
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
