import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';

export default function FacelessOptions() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-patriot-blue">Faceless Video Options</h1>
          <p className="text-2xl text-gray-600">Choose how you want to create your faceless video</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Generate Faceless Video */}
          <Link to="/faceless-generate" className="group bg-white rounded-3xl p-8 text-center border border-gray-100 hover:border-patriot-red transition-all hover:shadow-xl">
            <div className="text-6xl mb-8">🎥</div>
            <h2 className="text-3xl font-bold text-patriot-blue mb-4">Generate Faceless Video</h2>
            <p className="text-gray-600 mb-8">Turn your audio into animated video with Grok Animate</p>
            <button className="bg-patriot-blue text-white px-12 py-6 rounded-3xl text-xl font-bold w-full">Start Generating</button>
          </Link>

          {/* Text-to-Video */}
          <Link to="/text-to-video" className="group bg-white rounded-3xl p-8 text-center border border-gray-100 hover:border-patriot-red transition-all hover:shadow-xl">
            <div className="text-6xl mb-8">📝</div>
            <h2 className="text-3xl font-bold text-patriot-blue mb-4">Text-to-Video</h2>
            <p className="text-gray-600 mb-8">Paste a script and generate a video with AI voiceover</p>
            <button className="bg-white border-2 border-patriot-blue text-patriot-blue px-12 py-6 rounded-3xl text-xl font-bold w-full">Start with Text</button>
          </Link>

          {/* Shorts & Clips */}
          <Link to="/shorts-generator" className="group bg-white rounded-3xl p-8 text-center border border-gray-100 hover:border-patriot-red transition-all hover:shadow-xl">
            <div className="text-6xl mb-8">✂️</div>
            <h2 className="text-3xl font-bold text-patriot-blue mb-4">Shorts & Clips</h2>
            <p className="text-gray-600 mb-8">Auto-generate vertical shorts with captions</p>
            <button className="bg-white border-2 border-patriot-blue text-patriot-blue px-12 py-6 rounded-3xl text-xl font-bold w-full">Generate Shorts</button>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
