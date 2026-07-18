import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../../components/SiteFooter';

export default function MemberPodcasts() {
  // Demo data - replace with real member podcasts later
  const podcasts = [
    {
      id: 1,
      name: "John Doe Patriot Show",
      tagline: "Truth and Liberty Every Week",
      image: "https://picsum.photos/id/1015/300/200",
      episodesCount: 24,
    },
    {
      id: 2,
      name: "America First with Jane Smith",
      tagline: "Standing Up for Our Values",
      image: "https://picsum.photos/id/102/300/200",
      episodesCount: 18,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-patriot-blue">AFCNUS Member Podcasts</h1>
          <p className="text-2xl text-gray-600 mt-4">Real Patriots Sharing Real Truth</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {podcasts.map(podcast => (
            <Link key={podcast.id} to={`/resources/podcasts/${podcast.name.toLowerCase().replace(/ /g, '-')}`} className="group">
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-patriot-red transition-all hover:shadow-xl">
                <img src={podcast.image} alt={podcast.name} className="w-full h-48 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-patriot-blue mb-2">{podcast.name}</h3>
                  <p className="text-gray-600 mb-4">{podcast.tagline}</p>
                  <p className="text-sm text-patriot-red font-semibold">{podcast.episodesCount} Episodes</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
