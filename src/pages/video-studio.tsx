import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';

export default function VideoStudio() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-patriot-blue mb-6">Video Studio</h1>
          <p className="text-2xl text-gray-600">Create faceless videos and shorts from your episodes</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Go Live */}
          <Link to="/live-recording" className="group bg-white rounded-3xl p-8 text-center border border-gray-100 hover:border-patriot-red transition-all hover:shadow-xl">
            <div className="text-6xl mb-6">🎤</div>
            <h2 className="text-3xl font-bold text-patriot-blue mb-4">Go Live</h2>
            <p className="text-gray-600">Live streaming with audience chat</p>
          </Link>

          {/* Record New Episode */}
          <Link to="/record-new" className="group bg-white rounded-3xl p-8 text-center border border-gray-100 hover:border-patriot-red transition-all hover:shadow-xl">
            <div className="text-6xl mb-6">🎙️</div>
            <h2 className="text-3xl font-bold text-patriot-blue mb-4">Record New Episode</h2>
            <p className="text-gray-600">Desktop recording with mic and camera</p>
          </Link>

          {/* Create Faceless Video */}
          <Link to="/text-to-video" className="group bg-white rounded-3xl p-8 text-center border border-gray-100 hover:border-patriot-red transition-all hover:shadow-xl">
            <div className="text-6xl mb-6">🎥</div>
            <h2 className="text-3xl font-bold text-patriot-blue mb-4">Create Faceless Video</h2>
            <p className="text-gray-600">Turn audio or script into animated video</p>
          </Link>

          {/* Phone Recording */}
          <Link to="/phone-recording" className="group bg-white rounded-3xl p-8 text-center border border-gray-100 hover:border-patriot-red transition-all hover:shadow-xl">
            <div className="text-6xl mb-6">📱</div>
            <h2 className="text-3xl font-bold text-patriot-blue mb-4">Phone Recording</h2>
            <p className="text-gray-600">Record from your phone (live or saved)</p>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
