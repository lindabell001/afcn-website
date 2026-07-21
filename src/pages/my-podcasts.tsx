'use client'

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import SiteFooter from '../components/SiteFooter';

export default function MyPodcasts() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPodcasts();
  }, []);

  const fetchPodcasts = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setLoading(false);
      return;
    }

    const { data } = await supabase
      .from('podcasts')
      .select('*')
      .eq('host_id', user.id);

    setPodcasts(data || []);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-6xl font-bold text-patriot-blue">My Podcasts</h1>
            <p className="text-2xl text-gray-600">Manage your podcast platforms</p>
          </div>
          <Link to="/podcast-setup/beginner" className="bg-patriot-red text-white px-8 py-4 rounded-2xl font-bold hover:bg-patriot-blue">+ Create New Podcast Platform</Link>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : podcasts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500">You don't have any podcast platforms yet.</p>
            <Link to="/podcast-setup/beginner" className="mt-8 inline-block bg-patriot-red text-white px-10 py-4 rounded-2xl text-xl font-bold">Create Your First</Link>
          </div>
        ) : (
          <div className="space-y-8">
            {podcasts.map((p) => (
              <div key={p.id} className="bg-white rounded-3xl p-8 border border-gray-100">
                <h3 className="text-3xl font-bold text-patriot-blue">{p.title}</h3>
                <p className="text-gray-600">{p.description}</p>
                <p className="text-sm text-gray-500">Category: {p.category || 'General'}</p>
              </div>
            ))}
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
