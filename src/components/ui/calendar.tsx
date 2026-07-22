'use client'

import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
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

      if (error) console.error('Error loading episodes:', error);
      else setEpisodes(data || []);
      
      setLoading(false);
    };

    fetchEpisodes();
  }, []);

  // Group episodes by date
  const groupedEpisodes = episodes.reduce((acc, episode) => {
    const dateKey = episode.publish_date 
      ? new Date(episode.publish_date).toLocaleDateString('en-US', { 
          weekday: 'long', 
          month: 'long', 
          day: 'numeric', 
          year: 'numeric' 
        })
      : 'No Date Set';
    
    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push(episode);
    return acc;
  }, {});

  if (loading) {
    return <div className="p-8 text-center">Loading your episode calendar...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-patriot-blue">Episode Calendar</h1>
        <p className="text-xl text-gray-600 mt-3">All your episodes organized by date</p>
      </div>

      {Object.keys(groupedEpisodes).length === 0 ? (
        <div className="text-center py-16 text-2xl text-gray-500">
          No episodes yet.<br />
          Go to <Link to="/my-podcasts" className="text-patriot-red underline">My Podcasts</Link> to create some.
        </div>
      ) : (
        <div className="space-y-16">
          {Object.entries(groupedEpisodes).map(([date, eps]) => (
            <div key={date}>
              <h2 className="text-3xl font-bold text-patriot-blue mb-6 border-b pb-4">{date}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {eps.map((ep) => (
                  <div key={ep.id} className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-patriot-red transition-all">
                    <h3 className="text-2xl font-bold text-patriot-blue">{ep.title}</h3>
                    {ep.description && <p className="text-gray-600 mt-3 line-clamp-2">{ep.description}</p>}
                    <div className="mt-6 flex items-center gap-4 text-sm">
                      <span className={`px-4 py-1 rounded-full ${ep.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {ep.status}
                      </span>
                      {ep.audio_url && <a href={ep.audio_url} target="_blank" className="text-patriot-red hover:underline">🎧 Audio</a>}
                      {ep.video_url && <a href={ep.video_url} target="_blank" className="text-patriot-red hover:underline">🎥 Video</a>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
