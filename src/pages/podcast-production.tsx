import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';

export default function PodcastProduction() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-6xl font-bold text-patriot-blue">
            Podcast Production
          </h1>

          <Link
            to="/episode-calendar"
            className="bg-patriot-blue text-white px-6 py-3 rounded-2xl hover:opacity-90 transition-all"
          >
            Episode Calendar
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <Link
            to="/record-new"
            className="bg-white rounded-3xl p-12 text-center hover:shadow-xl transition-all border border-patriot-blue"
          >
            <div className="text-6xl mb-6">🎙️</div>
            <h3 className="text-2xl font-bold">Record New</h3>
          </Link>

          <Link
            to="/live-recording"
            className="bg-white rounded-3xl p-12 text-center hover:shadow-xl transition-all border border-patriot-blue"
          >
            <div className="text-6xl mb-6">🔴</div>
            <h3 className="text-2xl font-bold">Go Live</h3>
          </Link>

          <Link
            to="/faceless-options"
            className="bg-white rounded-3xl p-12 text-center hover:shadow-xl transition-all border border-patriot-blue"
          >
            <div className="text-6xl mb-6">🎥</div>
            <h3 className="text-2xl font-bold">Faceless Video</h3>
          </Link>

          <Link
            to="/phone-recording"
            className="bg-white rounded-3xl p-12 text-center hover:shadow-xl transition-all border border-patriot-blue"
          >
            <div className="text-6xl mb-6">📱</div>
            <h3 className="text-2xl font-bold">Phone Recording</h3>
          </Link>

          <Link
            to="/text-to-video"
            className="bg-white rounded-3xl p-12 text-center hover:shadow-xl transition-all border border-patriot-blue"
          >
            <div className="text-6xl mb-6">✍️</div>
            <h3 className="text-2xl font-bold">Text To Video</h3>
          </Link>

          <Link
            to="/shorts-generator"
            className="bg-white rounded-3xl p-12 text-center hover:shadow-xl transition-all border border-patriot-blue"
          >
            <div className="text-6xl mb-6">📲</div>
            <h3 className="text-2xl font-bold">Shorts Generator</h3>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
