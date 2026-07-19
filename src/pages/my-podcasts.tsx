'use client'

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import SiteFooter from '../components/SiteFooter';

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

export default function MyPodcasts() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMyPodcasts = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          setError("Please log in to see your podcasts");
          setLoading(false);
          return;
        }

        const { data, error } = await supabase
          .from('podcasts')
          .select(`
            *,
            episodes (*)
          `)
          .eq('host_id', user.id)
          .order('created_at', { ascending: false });

        if (error) throw error;

        setPodcasts(data || []);
      } catch (err) {
        console.error(err);
        setError("Failed to load your podcasts");
      } finally {
        setLoading(false);
      }
    };

    fetchMyPodcasts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-2xl text-gray-600">Loading your podcasts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-2xl text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-6xl font-bold text-patriot-blue">My Podcasts</h1>
            <p className="text-2xl text-gray-600">Manage your podcast platforms</p>
          </div>
          <Link
            to="/podcast-setup/beginner"
            className="bg-patriot-red text-white px-8 py-4 rounded-2xl font-bold hover:bg-patriot-blue transition-colors"
          >
            + Create New Podcast Platform
          </Link>
        </div>

        {podcasts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500">You don't have any podcast platforms yet.</p>
            <Link to="/podcast-setup/beginner" className="mt-8 inline-block bg-patriot-red text-white px-10 py-4 rounded-2xl text-xl font-bold">
              Create Your First Podcast Platform
            </Link>
          </div>
        ) : (
          <div className="space-y-12">
            {podcasts.map((podcast) => (
              <div key={podcast.id} className="bg-white rounded-3xl p-10 border border-gray-100">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="text-4xl font-bold text-patriot-blue">{podcast.name}</h2>
                    <p className="text-xl text-gray-600 mt-2">{podcast.tagline}</p>
                  </div>
                  <Link
                    to={`/my-episodes?podcast_id=${podcast.id}`}
                    className="bg-patriot-blue text-white px-8 py-3 rounded-2xl font-bold hover:bg-patriot-red"
                  >
                    Manage Episodes
                  </Link>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-semibold mb-6">Episodes</h3>
                  {podcast.episodes && podcast.episodes.length > 0 ? (
                    <div className="grid gap-4">
                      {podcast.episodes.map((episode) => (
                        <div key={episode.id} className="flex justify-between items-center bg-gray-50 rounded-2xl p-6">
                          <div>
                            <h4 className="font-bold text-lg">{episode.title}</h4>
                            <p className="text-sm text-gray-500">
                              {episode.status} • {episode.duration || '—'}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className={`Sorry about that, something didn't go as planned. Please try again, and if you're still seeing this message, go ahead and restart the app.
