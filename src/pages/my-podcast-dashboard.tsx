import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import SiteFooter from '../components/SiteFooter';

interface Podcast {
  id: string;
  title: string;
  slug: string | null;
  tagline: string | null;
}

interface Episode {
  id: string;
  title: string;
  show_name: string;
  created_at: string;
}

export default function MyPodcastDashboard() {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [episodesByPodcast, setEpisodesByPodcast] = useState<Record<string, Episode[]>>({});
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        // Get current user
        const { data: { session } } = await supabase.auth.getSession();
        if (!session?.user) {
          setLoading(false);
          return;
        }
        setUserId(session.user.id);

        // Fetch podcasts owned by this user
        const { data: podcastData, error: podcastError } = await supabase
          .from('podcasts')
          .select('id, title, slug, tagline')
          .eq('host_id', session.user.id)
          .order('created_at', { ascending: false });

        if (podcastError) throw podcastError;

        const podcastsList = podcastData || [];
        setPodcasts(podcastsList);

        // For each podcast, fetch up to 3 latest episodes by matching show_name = title
        const episodeMap: Record<string, Episode[]> = {};

        for (const podcast of podcastsList) {
          const { data: episodeData, error: episodeError } = await supabase
            .from('episodes')
            .select('id, title, show_name, created_at')
            .eq('show_name', podcast.title)
            .order('created_at', { ascending: false })
            .limit(3);

          if (episodeError) {
            console.error('Error loading episodes for', podcast.title, episodeError);
            episodeMap[podcast.title] = [];
          } else {
            episodeMap[podcast.title] = episodeData || [];
          }
        }

        setEpisodesByPodcast(episodeMap);
      } catch (err) {
        console.error('Dashboard load error:', err);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-2xl text-patriot-blue">Loading your podcast dashboard...</p>
      </div>
    );
  }

  if (!userId) {
    return (
      <div className="min-h-screen bg-background">
        <main className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-patriot-blue mb-6">My Podcast Dashboard</h1>
          <p className="text-xl text-gray-600 mb-8">Please log in to view your podcasts.</p>
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
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-patriot-blue mb-4">My Podcast Dashboard</h1>
          <p className="text-2xl text-gray-600">Find your podcasts and latest episodes</p>
        </div>

        {podcasts.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center mb-16">
            <p className="text-2xl text-gray-600 mb-8">You don’t have any podcast platforms yet.</p>
            <Link
              to="/podcast-setup/beginner"
              className="inline-block bg-patriot-red text-white px-10 py-5 rounded-3xl text-xl font-bold hover:bg-patriot-blue transition-colors"
            >
              Create Your First Podcast Platform
            </Link>
          </div>
        ) : (
          <div className="space-y-16">
            {podcasts.map((podcast) => {
              const episodes = episodesByPodcast[podcast.title] || [];

              return (
                <div key={podcast.id} className="bg-white rounded-3xl p-10 border border-gray-100">
                  {/* Podcast Title */}
                  <div className="mb-8">
                    {podcast.slug ? (
                      <Link
                        to={`/resources/podcasts/${podcast.slug}`}
                        className="text-4xl font-bold text-patriot-blue hover:text-patriot-red transition-colors"
                      >
                        {podcast.title}
                      </Link>
                    ) : (
                      <h2 className="text-4xl font-bold text-patriot-blue">{podcast.title}</h2>
                    )}
                    {podcast.tagline && (
                      <p className="text-lg text-gray-600 mt-2">{podcast.tagline}</p>
                    )}
                  </div>

                  {/* Latest Episodes */}
                  <div className="mb-10">
                    {episodes.length === 0 ? (
                      <p className="text-gray-500 text-lg">No episodes yet.</p>
                    ) : (
                      <ul className="space-y-4">
                        {episodes.map((episode) => (
                          <li key={episode.id}>
                            <Link
                              to={`/episode/${episode.id}`}
                              className="text-xl text-patriot-blue hover:text-patriot-red hover:underline"
                            >
                              {episode.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* View All Episodes */}
                  <div>
                    <Link
                      to="/my-episodes"
                      className="inline-block text-patriot-red font-semibold text-lg hover:underline"
                    >
                      View All Episodes →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Create Another Podcast */}
        <div className="mt-20 bg-white rounded-3xl p-12 text-center border-2 border-patriot-blue">
          <h2 className="text-4xl font-bold text-patriot-blue mb-8">Create Another Podcast</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/podcast-setup/beginner"
              className="bg-patriot-blue text-white px-10 py-6 rounded-3xl text-xl font-bold hover:bg-patriot-red transition-colors"
            >
              Beginner Setup
            </Link>
            <Link
              to="/podcast-setup/experienced"
              className="bg-white border-2 border-patriot-blue text-patriot-blue px-10 py-6 rounded-3xl text-xl font-bold hover:bg-patriot-red hover:text-white transition-colors"
            >
              Experienced Setup
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
