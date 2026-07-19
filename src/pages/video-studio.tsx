'use client'

import React, { useState } from 'react';
import SiteFooter from '../components/SiteFooter';

export default function VideoStudio() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [message, setMessage] = useState('');

  const generateEpisode = async () => {
    if (!title) {
      setMessage('Please enter a title');
      return;
    }

    setIsGenerating(true);
    setMessage('');

    try {
      // This will be connected to Supabase + Grok Imagine in the backend
      setTimeout(() => {
        setMessage('Episode created successfully! Thumbnail generated with Grok Imagine.');
        setIsGenerating(false);
        // Reset form
        setTitle('');
        setDescription('');
      }, 2000);
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-patriot-blue mb-6">Video Studio</h1>
          <p className="text-2xl text-gray-600">Create faceless videos, thumbnails, and episodes</p>
        </div>

        <div className="bg-white rounded-3xl p-12 max-w-2xl mx-auto">
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-semibold mb-2">Episode Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter episode title"
                className="w-full p-4 border border-gray-300 rounded-2xl text-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Short description of the episode"
                rows={4}
                className="w-full p-4 border border-gray-300 rounded-2xl text-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Upload Audio or Video</label>
              <input type="file" accept="audio/*,video/*" className="w-full p-4 border border-gray-300 rounded-2xl" />
            </div>

            <button 
              onClick={generateEpisode}
              disabled={isGenerating || !title}
              className="w-full bg-patriot-red text-white py-6 rounded-3xl text-2xl font-bold hover:bg-red-700 disabled:bg-gray-400 transition-all"
            >
              {isGenerating ? "Generating Thumbnail & Saving Episode..." : "Generate Thumbnail with Grok Imagine & Save Episode"}
            </button>

            {message && (
              <p className="text-center text-green-600 font-semibold mt-6">{message}</p>
            )}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500">Your Grok Imagine API key is stored in your profile for thumbnail generation.</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
