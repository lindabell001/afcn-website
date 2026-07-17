'use client'

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';

export default function MyPodcasts() {
  // Demo data - replace with real data later
  const podcasts = [
    { id: 1, name: "America First Daily", tagline: "Truthful news and commentary", episodesCount: 12, status: "Active", logo: "🇺🇸" }
  ];

  const hasMultiple = podcasts.length > 1;

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-6xl font-bold text-patriot-blue">My Podcasts</h1>
            <p className="text-2xl text-gray-600">Manage your podcast platforms</p>
          </div>
          <Link to="/podcast-setup/beginner" className="bg-patriot-red text-white px-8 py-4 rounded-2xl font-bold hover:bg-patriot-blue transition-colors">
            + Create New Podcast Platform
          </Link>
        </div>

        {/* 4 Big Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Link to="/record-new" className="bg-patriot-blue text-white py-8 rounded-3xl text-center text-xl font-bold hover:bg-blue-700 transition-all">Record New Episode</Link>
          <Link to="/record-new" className="bg-patriot-blue text-white py-8 rounded-3xl text-center text-xl font-bold hover:bg-blue-700 transition-all">Record New Episode</Link>
          <Link to="/video-studio" className="bg-patriot-red text-white py-8 rounded-3xl text-center text-xl font-bold hover:bg-red-700 transition-all">Create Faceless Video</Link>
          <Link to="/record-new" className="bg-patriot-blue text-white py-8 rounded-3xl text-center text-xl font-bold hover:bg-blue-700 transition-all">Phone Recording</Link>
        </div>

        {hasMultiple ? (
          // Multiple platforms - show links
          <div className="grid gap-6">
            {podcasts.map(podcast => (
              <div key={podcast.id} className="bg-white rounded-3xl p-8 flex items-center justify-between border border-gray-100">
                <div className="flex items-center gap-6">
                  <div className="text-5xl">{podcast.logo}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-patriot-blue">{podcast.name}</h3>
                    <p className="text-gray-600">{podcast.tagline}</p>
                    <p className="text-sm text-gray-500 mt-1">{podcast.episodesCount} episodes • {podcast.status}</p>
                  </div>
                </div>
                <Link to={`/my-episodes?podcast=${podcast.id}`} className="px-8 py-4 border border-patriot-blue text-patriot-blue rounded-2xl hover:bg-patriot-blue hover:text-white transition-all">
                  Manage Episodes
                </Link>
              </div>
            ))}
          </div>
        ) : (
          // Single platform - show episodes
          podcasts.length > 0 && (
            <div className="bg-white rounded-3xl p-12">
              <div className="flex items-center gap-6 mb-12">
                <div className="text-6xl">🇺🇸</div>
                <div>
                  <h2 className="text-4xl font-bold text-patriot-blue">America First Daily</h2>
                  <p className="text-xl text-gray-600">Truthful news and commentary</p>
                </div>
              </div>

              {/* Episode Cards like your image */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Add your episode cards here or fetch from state */}
                <div className="bg-white border border-gray-200 rounded-3xl p-6">
                  <div className="text-sm text-gray-500">19t-2th, Published</div>
                  <h3 className="font-bold mt-2">Recore New Episode</h3>
                  <div className="flex gap-2 mt-6">
                    <button className="flex-1 py-2 border rounded-xl text-sm">Edit</button>
                    <button className="flex-1 py-2 border rounded-xl text-sm">Preview</button>
                    <button className="flex-1 py-2 border rounded-xl text-sm">Video</button>
                  </div>
                </div>
                {/* Repeat for more episodes */}
              </div>
            </div>
          )
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
