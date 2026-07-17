'use client'

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Edit, Play, Trash2, Share2, MoreVertical, Plus } from 'lucide-react';
import SiteFooter from '../components/SiteFooter';

interface Episode {
  id: string;
  title: string;
  status: 'Draft' | 'Scheduled' | 'Published';
  publishedDate?: string;
  scheduledDate?: string;
  duration: string;
  plays?: number;
  thumbnail?: string;
}

export default function MyPodcasts() {
  // Demo podcasts (you can expand later)
  const podcasts = [
    { id: 1, name: "America First Daily", tagline: "Truthful news and commentary", episodesCount: 12, status: "Active", logo: "🇺🇸" }
  ];

  const [episodes, setEpisodes] = useState<Episode[]>([
    { id: 'ep-42', title: 'The Future of AI in Content Creation', status: 'Published', publishedDate: '2026-07-10', duration: '52:18', plays: 12450 },
    { id: 'ep-41', title: 'How I Built My First 10k Subscriber Podcast', status: 'Published', publishedDate: '2026-07-03', duration: '38:45', plays: 9870 },
    { id: 'ep-43', title: 'Interview with Top Indie Podcasters', status: 'Scheduled', scheduledDate: '2026-07-24', duration: '45:00' },
    { id: 'ep-draft', title: 'Q&A Session – Listener Questions', status: 'Draft', duration: '32:00' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Draft' | 'Scheduled' | 'Published'>('All');

  const filteredEpisodes = episodes
    .filter(ep => ep.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
                 (statusFilter === 'All' || ep.status === statusFilter));

  const handlePublish = (id: string) => {
    setEpisodes(prev => prev.map(ep => ep.id === id ? { ...ep, status: 'Published', publishedDate: new Date().toISOString().split('T')[0] } : ep));
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-6xl font-bold text-patriot-blue">My Podcasts</h1>
            <p className="text-2xl text-gray-600">Manage your podcast platforms</p>
          </div>
          <Link to="/podcast-setup/beginner" className="bg-patriot-red text-white px-8 py-4 rounded-2xl font-bold hover:bg-patriot-blue transition-colors">
            + Create New Podcast Platform
          </Link>
        </div>

        {/* Single Podcast View with Full Episode List */}
        <div className="bg-white rounded-3xl p-12">
          <div className="flex items-center gap-6 mb-12">
            <div className="text-6xl">🇺🇸</div>
            <div>
              <h2 className="text-4xl font-bold text-patriot-blue">America First Daily</h2>
              <p className="text-xl text-gray-600">Truthful news and commentary</p>
            </div>
          </div>

          {/* Episode List */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold text-patriot-blue">Your Episodes</h3>
              <Link to="/record-new" className="flex items-center gap-2 bg-patriot-blue text-white px-8 py-4 rounded-3xl text-xl font-bold hover:bg-patriot-red">
                <Plus size={24} /> Record New Episode
              </Link>
            </div>

            {/* Filters */}
            <div className="flex gap-4 mb-8 flex-wrap">
              {(['All', 'Draft', 'Scheduled', 'Published'] as const).map(s => (
                <button key={s} onClick={() => setStatusFilter(s)}
                  className={`px-8 py-4 rounded-3xl text-xl font-medium border-2 transition-all ${statusFilter === s ? 'bg-patriot-red border-patriot-red text-white' : 'border-patriot-blue text-patriot-blue hover:border-patriot-red'}`}>
                  {s}
                </button>
              ))}
            </div>

            <input type="text" placeholder="Search episodes..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
              className="w-full p-5 border-2 border-patriot-blue rounded-3xl text-xl mb-8 focus:outline-none focus:border-patriot-red" />

            <div className="space-y-6">
              {filteredEpisodes.map(episode => (
                <div key={episode.id} className="bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-8 flex items-center gap-8 transition-all hover:shadow-xl">
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-patriot-blue">{episode.title}</h4>
                    <p className="text-gray-600">{episode.duration} • {episode.publishedDate || episode.scheduledDate || 'Draft'}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-8 py-3 rounded-2xl text-xl font-bold ${episode.status === 'Published' ? 'bg-green-100 text-green-800' : episode.status === 'Scheduled' ? 'bg-blue-100 text-patriot-blue' : 'bg-amber-100 text-amber-800'}`}>
                      {episode.status}
                    </span>
                    <button onClick={() => window.location.href = `/episode-editor?id=${episode.id}`} className="p-4 hover:bg-patriot-blue hover:text-white rounded-2xl"><Edit size={24} /></button>
                    <button className="p-4 hover:bg-patriot-blue hover:text-white rounded-2xl"><Play size={24} /></button>
                    {episode.status !== 'Published' && <button onClick={() => handlePublish(episode.id)} className="px-8 py-4 bg-patriot-red text-white rounded-3xl font-semibold">Publish</button>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
