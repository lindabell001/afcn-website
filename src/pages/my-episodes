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

export default function MyEpisodes() {
  const [episodes, setEpisodes] = useState<Episode[]>([
    { id: 'ep-42', title: 'The Future of AI in Content Creation', status: 'Published', publishedDate: '2026-07-10', duration: '52:18', plays: 12450, thumbnail: 'https://picsum.photos/id/1015/64/64' },
    { id: 'ep-41', title: 'How I Built My First 10k Subscriber Podcast', status: 'Published', publishedDate: '2026-07-03', duration: '38:45', plays: 9870 },
    { id: 'ep-43', title: 'Interview with Top Indie Podcasters', status: 'Scheduled', scheduledDate: '2026-07-24', duration: '45:00' },
    { id: 'ep-draft', title: 'Q&A Session – Listener Questions', status: 'Draft', duration: '32:00' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Draft' | 'Scheduled' | 'Published'>('All');
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const filteredEpisodes = episodes
    .filter(ep => ep.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
                 (statusFilter === 'All' || ep.status === statusFilter))
    .sort((a, b) => {
      const dateA = a.publishedDate || a.scheduledDate || '9999';
      const dateB = b.publishedDate || b.scheduledDate || '9999';
      return dateB.localeCompare(dateA);
    });

  const handlePublish = (id: string) => {
    setEpisodes(prev => prev.map(ep => ep.id === id ? { ...ep, status: 'Published', publishedDate: new Date().toISOString().split('T')[0] } : ep));
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this episode?')) setEpisodes(prev => prev.filter(ep => ep.id !== id));
  };

  const handleEdit = (id: string) => window.location.href = `/episode-editor?id=${id}`;

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-6xl font-bold text-patriot-blue">My Episodes</h1>
            <p className="text-2xl text-gray-600 mt-2">Manage all your podcast episodes</p>
          </div>
          <Link 
            to="/record-new"
            className="flex items-center gap-3 bg-patriot-red hover:bg-red-700 text-white px-8 py-4 rounded-3xl text-xl font-semibold transition-all hover:-translate-y-1"
          >
            <Plus size={28} /> Record New Episode
          </Link>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-8 flex-wrap">
          {(['All', 'Draft', 'Scheduled', 'Published'] as const).map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-8 py-4 rounded-3xl text-xl font-medium border-2 transition-all ${
                statusFilter === s 
                  ? 'bg-patriot-red border-patriot-red text-white' 
                  : 'border-patriot-blue text-patriot-blue hover:border-patriot-red'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search episodes..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full p-5 border-2 border-patriot-blue rounded-3xl text-xl mb-10 focus:outline-none focus:border-patriot-red"
        />

        {/* Episodes */}
        <div className="space-y-6">
          {filteredEpisodes.map(episode => (
            <div key={episode.id} className="bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-10 transition-all hover:shadow-xl hover:-translate-y-1 flex items-center gap-8">
              {episode.thumbnail && <img src={episode.thumbnail} alt="" className="w-20 h-20 rounded-2xl object-cover" />}
              
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-patriot-blue">{episode.title}</h3>
                <p className="text-gray-600 text-xl mt-2">{episode.duration} • {episode.publishedDate || episode.scheduledDate || 'Draft'}</p>
              </div>

              <div className="flex items-center gap-4">
                <span className={`px-8 py-3 rounded-2xl text-xl font-bold ${
                  episode.status === 'Published' ? 'bg-green-100 text-green-800' :
                  episode.status === 'Scheduled' ? 'bg-blue-100 text-patriot-blue' : 'bg-amber-100 text-amber-800'
                }`}>
                  {episode.status}
                </span>

                <button onClick={() => handleEdit(episode.id)} className="p-4 hover:bg-patriot-blue hover:text-white rounded-2xl transition-all"><Edit size={24} /></button>
                <button className="p-4 hover:bg-patriot-blue hover:text-white rounded-2xl transition-all"><Play size={24} /></button>

                {episode.status !== 'Published' && (
                  <button onClick={() => handlePublish(episode.id)} className="px-8 py-4 bg-patriot-red text-white rounded-3xl text-xl font-semibold hover:bg-red-700">Publish</button>
                )}

                <button onClick={() => setOpenMenuId(openMenuId === episode.id ? null : episode.id)} className="p-4"><MoreVertical size={24} /></button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
