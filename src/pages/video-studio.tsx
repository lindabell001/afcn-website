'use client'

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

        <div className="grid md:grid-cols-3 gap-8">
          {/* Generate Faceless Video */}
          <div className="bg-white rounded-3xl p-8 text-center">
            <div className="text-6xl mb-8">🎥</div>
            <h2 className="text-3xl font-bold mb-4">Generate Faceless Video</h2>
            <p className="text-gray-600 mb-6">Turn your audio into animated video with Grok Imagine</p>
            <p className="text-sm text-gray-500 mb-8">Upload audio → AI creates scenes → full video (30s–5min)</p>
            <Link to="/faceless-generate" className="bg-patriot-blue hover:bg-patriot-red text-white px-12 py-6 rounded-3xl text-xl font-bold w-full inline-block">
              Start Generating
            </Link>
          </div>

          {/* Text-to-Video */}
          <div className="bg-white rounded-3xl p-8 text-center">
            <div className="text-6xl mb-8">📝</div>
            <h2 className="text-3xl font-bold mb-4">Text-to-Video</h2>
            <p className="text-gray-600 mb-6">Paste a script and generate a video with AI voiceover</p>
            <p className="text-sm text-gray-500 mb-8">Choose voice → Grok generates images → full video</p>
            <button className="bg-white border-2 border-patriot-blue hover:border-patriot-red text-patriot-blue px-12 py-6 rounded-3xl text-xl font-bold w-full">Start with Text</button>
          </div>

          {/* Shorts & Clips */}
          <div className="bg-white rounded-3xl p-8 text-center">
            <div className="text-6xl mb-8">✂️</div>
            <h2 className="text-3xl font-bold mb-4">Shorts & Clips</h2>
            <p className="text-gray-600 mb-6">Auto-generate vertical shorts with captions</p>
            <p className="text-sm text-gray-500 mb-8">Perfect for X, TikTok, Reels (15–60 seconds)</p>
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
