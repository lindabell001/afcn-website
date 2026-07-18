'use client'

import React, { useState } from 'react';
import SiteFooter from '../components/SiteFooter';

export default function ShortsGenerator() {
  const [episode, setEpisode] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [shorts, setShorts] = useState([]);

  const generateShorts = () => {
    if (!episode) return;
    
    setIsGenerating(true);
    
    // Demo
    setTimeout(() => {
      setIsGenerating(false);
      setShorts([
        { id: 1, title: 'Short Clip 1', url: 'https://example.com/short1.mp4' },
        { id: 2, title: 'Short Clip 2', url: 'https://example.com/short2.mp4' },
      ]);
      alert("Shorts generated! (Demo)");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-patriot-blue">Shorts & Clips</h1>
          <p className="text-2xl text-gray-600 mt-4">Auto-generate vertical shorts with captions</p>
        </div>

        <div className="bg-white rounded-3xl p-12">
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-4">Select Episode</label>
            <select value={episode} onChange={(e) => setEpisode(e.target.value)} className="w-full p-4 border border-gray-300 rounded-2xl">
              <option value="">Select an episode</option>
              <option value="ep1">The Future of America</option>
              <option value="ep2">Standing for Liberty</option>
            </select>
          </div>

          <button 
            onClick={generateShorts}
            disabled={!episode || isGenerating}
            className="w-full bg-patriot-red text-white py-8 rounded-3xl text-3xl font-bold hover:bg-red-700 disabled:bg-gray-400 transition-all"
          >
            {isGenerating ? "Generating Shorts..." : "Generate Shorts"}
          </button>

          {shorts.length > 0 && (
            <div className="mt-12 grid gap-6">
              {shorts.map(short => (
                <div key={short.id} className="bg-gray-100 rounded-2xl p-6">
                  <video controls className="w-full rounded-xl" src={short.url} />
                  <p className="mt-4 font-semibold">{short.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
