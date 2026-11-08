import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Edit, Play, Trash2, MoreVertical, Plus } from 'lucide-react';
import { membersDb } from '../lib/membersClient';
import SiteFooter from '../components/SiteFooter';

interface Episode {
  id: string;
  title: string;
  show_name: string;
  description: string | null;
  is_public: boolean | null;
  audio_path: string | null;
  video_path: string | null;
  created_at: string;
  updated_at: string | null;
}

export default function MyEpisodes() {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [publicFilter, setPublicFilter] = useState<'All' | 'Public' | 'Private'>('All');
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  useEffect(() => {
    const loadEpisodes = async () => {
      try {
        const { data: auth } = await membersDb.auth.getUser();
        const user = auth.user;

        if (!user) {
          setLoading(false);
          return;
        }
        setUserId(user.id);

        // Get the user's podcast titles
        const { data: podcastData, error: podcastError } = await membersDb
          .from('podcasts')
          .select('title')
          .eq('host_id', user.id);

        if (podcastError) throw podcastError;

        const podcastTitles = (podcastData || []).map(p => p.title).filter(Boolean);

        if (podcastTitles.length === 0) {
          setEpisodes([]);
          setLoading(false);
          return;
        }

        // Fetch episodes that belong to those podcasts (only existing columns)
        const { data: episodeData, error: episodeError } = await membersDb
          .from('episodes')
          .select('id, title, show_name, description, is_public, audio_path, video_path, created_at, updated_at')
          .in('show_name', podcastTitles)
          .order('created_at', { ascending: false });

        if (episodeError) throw episodeError;

        setEpisodes(episodeData || []);
      } catch (err) {
        console.error('Error loading episodes:', err);
      } finally {
        setLoading(false);
      }
    };

    loadEpisodes();
  }, []);

  const filteredEpisodes = episodes
    .filter(ep => {
      const matchesSearch = ep.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPublic =
        publicFilter === 'All' ||
        (publicFilter === 'Public' && ep.is_public) ||
        (publicFilter === 'Private' && !ep.is_public);
      return matchesSearch && matchesPublic;
    })
    .sort((a, b) => b.created_at.localeCompare(a.created_at));

  const handleTogglePublic = async (id: string, current: boolean | null) => {
    const newValue = !current;
    const { error } = await membersDb
      .from('episodes')
      .update({ is_public: newValue })
      .eq('id', id);

    if (!error) {
      setEpisodes(prev =>
        prev.map(ep => (ep.id === id ? { ...ep, is_public: newValue } : ep))
      );
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this episode?')) return;

    const { error } = await membersDb
      .from('episodes')
      .delete()
      .eq('id', id);

    if (!error) {
      setEpisodes(prev => prev.filter(ep => ep.id !== id));
    }
  };

  const handleEdit = (id: string) => {
    window.location.href = `/episode-editor/${id}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-2xl text-patriot-blue">Loading your episodes...</p>
      </div>
    );
  }

  if (!userId) {
    return (
      <div className="min-h-screen bg-background">
        <main className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-patriot-blue mb-6">My Episodes</h1>
          <p className="text-xl text-gray-600 mb-8">Please log in to view your episodes.</p>
          <Link to="/member-login" className="bg-patriot-blue text-white px-10 py-4 rounded-2xl text-xl font-bold">
            Log In
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

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
          {(['All', 'Public', 'Private'] as const).map(s => (
            <button
              key={s}
              onClick={() => setPublicFilter(s)}
              className={`px-8 py-4 rounded-3xl text-xl font-medium border-2 transition-all ${
                publicFilter === s
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
          {filteredEpisodes.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border-2 border-patriot-blue">
              <p className="text-2xl text-gray-600">No episodes yet.</p>
            </div>
          ) : (
            filteredEpisodes.map(episode => (
              <div
                key={episode.id}
                className="bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-10 transition-all hover:shadow-xl hover:-translate-y-1 flex items-center gap-8"
              >
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-patriot-blue">{episode.title}</h3>
                  <p className="text-gray-600 text-xl mt-2">
                    {episode.created_at?.split('T')[0] || '—'}
                    {episode.show_name && <span className="ml-2 text-sm">({episode.show_name})</span>}
                  </p>
                  {episode.description && (
                    <p className="text-gray-500 mt-2 line-clamp-2">{episode.description}</p>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <span
                    className={`px-8 py-3 rounded-2xl text-xl font-bold ${
                      episode.is_public
                        ? 'bg-green-100 text-green-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {episode.is_public ? 'Public' : 'Private'}
                  </span>

                  <button
                    onClick={() => handleEdit(episode.id)}
                    className="p-4 hover:bg-patriot-blue hover:text-white rounded-2xl transition-all"
                  >
                    <Edit size={24} />
                  </button>
                  <button className="p-4 hover:bg-patriot-blue hover:text-white rounded-2xl transition-all">
                    <Play size={24} />
                  </button>

                  <button
                    onClick={() => handleTogglePublic(episode.id, episode.is_public)}
                    className="px-8 py-4 bg-patriot-red text-white rounded-3xl text-xl font-semibold hover:bg-red-700"
                  >
                    {episode.is_public ? 'Make Private' : 'Make Public'}
                  </button>

                  <button
                    onClick={() => setOpenMenuId(openMenuId === episode.id ? null : episode.id)}
                    className="p-4"
                  >
                    <MoreVertical size={24} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
