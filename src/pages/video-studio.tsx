'use client'

import React, { useState } from 'react';
import SiteFooter from '../components/SiteFooter';

export default function VideoStudio() {
  const [selectedPodcastId, setSelectedPodcastId] = useState(1); // Demo
  const [isCreating, setIsCreating] = useState(false);

  const createEpisode = async () => {
    setIsCreating(true);
    
    // This will be connected to Supabase in the backend
    setTimeout(() => {
      alert('Episode created! Check in my-podcasts.');
      setIsCreating(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-patriot-blue mb-6">Video Studio</h1>
          <p className="text-2xl text-gray-600">Create faceless videos and shorts from your episodes</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 text-center">
            <div className="text-6xl mb-8">🎥</div>
            <h2 className="text-3xl font-bold mb-4">Generate Faceless Video</h2>
            <p className="text-gray-600 mb-8">Turn your audio into animated video with Grok Imagine</p>
            <button onClick={createEpisode} disabled={isCreating} className="bg-patriot-blue hover:bg-patriot-red text-white px-12 py-6 rounded-3xl text-xl font-bold w-full">
              {isCreating ? "Creating..." : "Start Generating"}
            </button>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center">
            <div className="text-6xl mb-8">📝</div>
            <h2 className="text-3xl font-bold mb-4">Text-to-Video</h2>
            <p className="text-gray-600 mb-8">Paste a script and generate a video with AI voiceover</p>
            <button className="bg-white border-2 border-patriot-blue hover:border-patriot-red text-patriot-blue px-12 py-6 rounded-3xl text-xl font-bold w-full">Start with Text</button>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center">
            <div className="text-6xl mb-8">✂️</div>
            <h2 className="text-3xl font-bold mb-4">Shorts & Clips</h2>
            <p className="text-gray-600 mb-8">Auto-generate vertical shorts with captions</p>
            <button className="bg-white border-2 border-patriot-blue hover:border-patriot-red text-patriot-blue px-12 py-6 rounded-3xl text-xl font-bold w-full">Generate Shorts</button>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Preview Area</h2>
          <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
            <p className="text-gray-500">Generated video preview will appear here</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
