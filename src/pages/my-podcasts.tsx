'use client'

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import SiteFooter from '../components/SiteFooter';

export default function MyPodcasts() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPodcasts();
  }, []);

  const fetchPodcasts = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      console.log('Current user ID:', user?.id);

      if (!user) {
        setError('Please log in.');
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('podcasts')
        .select('*')
        .eq('host_id', user.id);

      console.log('Fetched:', data);

      if (error) throw error;
      setPodcasts(data || []);
    } catch (err) {
      console.error(err);
      setError('Load failed - check console');
    } finally {
      setLoading(false);
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
          <Link to="/podcast-setup/beginner" className="bg-patriot-red text-white px-8 py-4 rounded-2xl font-bold">+ Create New</Link>
        </div>

        {loading ? <p>Loading...</p> : error ? <p>{error}</p> : podcasts.length === 0 ? (
          <p>No podcasts yet. Create one!</p>
        ) : (
          podcasts.map(p => (
            <div key={p.id} className="bg-white p-8 rounded-3xl mb-4">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
