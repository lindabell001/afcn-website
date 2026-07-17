'use client'

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../../components/SiteFooter';

export default function ExperiencedSetup() {
  const [rssUrls, setRssUrls] = useState(['']);

  const addRssField = () => {
    setRssUrls([...rssUrls, '']);
  };

  const updateRssUrl = (index, value) => {
    const newUrls = [...rssUrls];
    newUrls[index] = value;
    setRssUrls(newUrls);
  };

  const handleSubmit = () => {
    alert('RSS feeds connected! (Demo)');
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-patriot-blue mb-4">Experienced Setup</h1>
          <p className="text-xl text-gray-600">Connect existing podcasts or upload new episodes</p>
        </div>

        <div className="bg-white rounded-3xl p-12">
          {/* RSS Connect - Main Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-patriot-blue mb-6">RSS Connect</h2>
            <p className="text-gray-600 mb-8">Paste your RSS feed URLs below. You can add as many as you need.</p>

            {rssUrls.map((url, index) => (
              <div key={index} className="mb-4">
                <input 
                  type="text" 
                  value={url} 
                  onChange={(e) => updateRssUrl(index, e.target.value)}
                  placeholder="https://your-rss-feed.com/feed.xml" 
                  className="w-full p-4 border border-gray-300 rounded-2xl" 
                />
              </div>
            ))}

            <button 
              onClick={addRssField}
              className="text-patriot-red hover:underline mb-8"
            >
              + Add Another RSS URL
            </button>

            <button 
              onClick={handleSubmit}
              className="w-full bg-patriot-blue text-white py-6 rounded-3xl text-xl font-bold hover:bg-patriot-red transition-colors"
            >
              Connect RSS Feeds
            </button>
          </div>

          {/* Upload Option */}
          <div className="text-center border-t pt-8">
            <p className="text-gray-600 mb-4">Or</p>
            <Link 
              to="/upload-episode" 
              className="inline-block bg-white border-2 border-patriot-blue text-patriot-blue px-12 py-6 rounded-3xl text-xl font-bold hover:bg-patriot-red hover:text-white transition-all"
            >
              Upload New Episodes Instead
            </Link>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link to="/my-podcasts" className="text-patriot-red hover:underline">← Back to My Podcasts</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
