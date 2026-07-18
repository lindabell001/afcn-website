'use client'

import React, { useState } from 'react';
import SiteFooter from '../../components/SiteFooter';

export default function ApiKeyPage() {
  const [apiKey, setApiKey] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const saveKey = () => {
    if (apiKey) {
      // In real version, save to Supabase
      setIsSaved(true);
      alert('Grok API Key saved safely! (Demo)');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-patriot-blue">Grok API Key</h1>
          <p className="text-2xl text-gray-600 mt-4">Private setting for video generation</p>
        </div>

        <div className="bg-white rounded-3xl p-12">
          <p className="text-gray-600 mb-8">Enter your Grok API key here. Only you can see it.</p>

          <input 
            type="password" 
            value={apiKey} 
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="xai-..." 
            className="w-full p-6 border border-gray-300 rounded-3xl text-xl mb-8"
          />

          <button 
            onClick={saveKey}
            className="w-full bg-patriot-blue text-white py-6 rounded-3xl text-xl font-bold hover:bg-patriot-red transition-colors"
          >
            Save My Key
          </button>

          {isSaved && (
            <p className="text-green-600 text-center mt-6">Key saved safely!</p>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
