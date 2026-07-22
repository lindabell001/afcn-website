'use client'

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../../components/SiteFooter';

export default function ExperiencedSetup() {
  const [rssUrls, setRssUrls] = useState(['']);
  const [files, setFiles] = useState([]);

  const addRssField = () => setRssUrls([...rssUrls, '']);

  const updateRssUrl = (index, value) => {
    const newUrls = [...rssUrls];
    newUrls[index] = value;
    setRssUrls(newUrls);
  };

  const handleFileUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    alert('Setup complete! RSS + uploaded episodes saved (demo).');
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-patriot-blue mb-4">Experienced Setup</h1>
          <p className="text-xl text-gray-600">Connect RSS or upload episodes directly</p>
        </div>

        <div className="bg-white rounded-3xl p-12">
          {/* RSS Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-patriot-blue mb-6">1. Connect RSS Feeds</h2>
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
            <button onClick={addRssField} className="text-patriot-red hover:underline mb-8">+ Add Another RSS</button>
          </div>

          {/* Upload Section */}
          <div>
            <h2 className="text-3xl font-bold text-patriot-blue mb-6">2. Upload Episodes</h2>
            <p className="text-gray-600 mb-8">Drag & drop audio or video files</p>

            <label className="block border-2 border-dashed border-patriot-red rounded-3xl p-16 text-center hover:bg-red-50 cursor-pointer">
              <div className="text-7xl mb-6">📤</div>
              <p className="text-2xl">Click or drop files here</p>
              <input type="file" multiple accept="audio/*,video/*" onChange={handleFileUpload} className="hidden" />
            </label>

            {files.length > 0 && (
              <div className="mt-8">
                <h3 className="font-bold mb-4">Selected Files:</h3>
                {files.map((file, i) => (
                  <div key={i} className="flex justify-between bg-gray-50 p-4 rounded-2xl mb-3">
                    <span>{file.name}</span>
                    <button onClick={() => removeFile(i)} className="text-red-600">Remove</button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button 
            onClick={handleSubmit}
            className="w-full mt-12 bg-patriot-red text-white py-6 rounded-3xl text-xl font-bold hover:bg-red-700"
          >
            Finish Setup
          </button>
        </div>

        <div className="text-center mt-8">
          <Link to="/my-podcasts" className="text-patriot-red hover:underline">← Back to My Podcasts</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
