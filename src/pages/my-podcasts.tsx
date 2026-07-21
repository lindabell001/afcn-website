'use client'

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient.js';
import SiteFooter from '../components/SiteFooter';

export default function MyPodcasts() {
  const [podcasts, setPodcasts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPodcasts();
  }, []);

  const fetchPodcasts = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      console.log('My Podcasts - Current user ID:', user?.id);

      if (!user) {
        setError('Please log in to see your podcasts.');
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('podcasts')
        .select('*')
        .eq('host_id', user.id)
        .order('created_at', { ascending: false });

      console.log('My Podcasts - Fetched data:', data);

      if (error) throw error;

      setPodcasts(data || []);
    } catch (err: any) {
      console.error('Fetch error:', err);
      setError('Failed to load podcasts. Check console.');
    } finally {
      setLoading(false);
    }
  };

  const deletePodcast = async (id: string) => {
    if (!window.confirm('Delete this podcast?')) return;

    try {
      const { error } = await supabase.from('podcasts').delete().eq('id', id);
      if (error) throw error;
      setPodcasts(podcasts.filter(p => p.id !== id));
    } catch (err) {
      alert('Delete failed.');
    }
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

        {loading ? <p>Loading...</p> : error ? <p className="text-red-600">{error}</p> : podcasts.length === 0 ? (
          <div className="text-center py-20">
            <p>No podcasts yet.</p>
            <Link to="/podcast-setup/beginner" className="mt-8 inline-block bg-patriot-red text-white px-10 py-4 rounded-2xl">Create Your First</Link>
          </div>
        ) : (
          <div className="space-y-8">
            {podcasts.map((p) => (
              <div key={p.id} className="bg-white rounded-3xl p-8 flex justify-between items-center">
                <div>
                  <h3 className="text-3xl font-bold">{p.title}</h3>
                  <p>{p.description}</p>
                </div>
                <div>
                  <Link to={`/my-episodes?podcast_id=${p.id}`} className="bg-patriot-blue text-white px-8 py-4 rounded-2xl mr-4">Manage Episodes</Link>
                  <button onClick={() => deletePodcast(p.id)} className="text-red-600">Delete</button>
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
