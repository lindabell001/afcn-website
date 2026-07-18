'use client'

import React, { useState, useEffect } from 'react';
import SiteFooter from '../components/SiteFooter';

export default function TextToVideo() {
  const [script, setScript] = useState('');
  const [voice, setVoice] = useState('professional');
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [apiKey, setApiKey] = useState('');

  // Load key from localStorage (demo) - in real version from Supabase
  useEffect(() => {
    const savedKey = localStorage.getItem('grokApiKey');
    if (savedKey) setApiKey(savedKey);
  }, []);

  const generateVideo = () => {
    if (!script) return;
    
    setIsGenerating(true);
    
    // Real version would use apiKey to call Grok Imagine API
    setTimeout(() => {
      setIsGenerating(false);
      setVideoUrl('https://example.com/generated-video.mp4');
      alert('Video generated with Grok Imagine Video 1.5!');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-patriot-blue">Text-to-Video</h1>
          <p className="text-2xl text-gray-600 mt-4">Paste your script → Generate video with AI voiceover</p>
        </div>

        <div className="bg-white rounded-3xl p-12">
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-4">Your Script</label>
            <textarea 
              value={script} 
              onChange={(e) => setScript(e.target.value)}
              placeholder="Paste your script here..." 
              rows={8}
              className="w-full p-6 border border-gray-300 rounded-3xl text-xl"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <label className="block text-sm font-semibold mb-4">AI Voiceover</label>
              <select value={voice} onChange={(e) => setVoice(e.target.value)} className="w-full p-4 border border-gray-300 rounded-2xl">
                <option value="professional">Professional Male</option>
                <option value="female">Professional Female</option>
                <option value="patriotic">Patriotic Narrator</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-4">Style</label>
              <select className="w-full p-4 border border-gray-300 rounded-2xl">
                <option>Patriotic</option>
                <option>News Style</option>
                <option>Dramatic</option>
              </select>
            </div>
          </div>

          <button 
            onClick={generateVideo}
            disabled={!script || isGenerating}
            className="w-full bg-patriot-red text-white py-8 rounded-3xl text-3xl font-bold hover:bg-red-700 disabled:bg-gray-400 transition-all"
          >
            {isGenerating ? "Generating with Grok Imagine Video 1.5..." : "Generate Video"}
          </button>

          {videoUrl && (
            <div className="mt-12">
              <video controls className="w-full rounded-3xl" src={videoUrl} />
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
