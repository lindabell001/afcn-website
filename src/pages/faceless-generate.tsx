'use client'

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';

export default function FacelessGenerate() {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [style, setStyle] = useState('patriotic');
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setAudioFile(e.target.files[0]);
  };

  const generateVideo = () => {
    if (!audioFile) return;
    
    setIsGenerating(true);
    
    // Demo - in real version this would call Grok Imagine + video generator
    setTimeout(() => {
      setIsGenerating(false);
      setVideoUrl('https://example.com/generated-video.mp4'); // placeholder
      alert("Video generated! (Demo - real version will create actual video)");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-patriot-blue">Generate Faceless Video</h1>
          <p className="text-2xl text-gray-600 mt-4">Turn your audio into professional animated video</p>
        </div>

        <div className="bg-white rounded-3xl p-12">
          <div className="mb-10">
            <label className="block text-sm font-semibold mb-4">Upload Episode Audio</label>
            <input type="file" accept="audio/*" onChange={handleFileChange} className="w-full p-4 border border-gray-300 rounded-2xl" />
            {audioFile && <p className="text-green-600 mt-2">Selected: {audioFile.name}</p>}
          </div>

          <div className="mb-10">
            <label className="block text-sm font-semibold mb-4">Video Style</label>
            <select value={style} onChange={(e) => setStyle(e.target.value)} className="w-full p-4 border border-gray-300 rounded-2xl">
              <option value="patriotic">Patriotic / America First</option>
              <option value="news">News Style</option>
              <option value="dramatic">Dramatic</option>
              <option value="simple">Simple & Clean</option>
            </select>
          </div>

          <button 
            onClick={generateVideo}
            disabled={!audioFile || isGenerating}
            className="w-full bg-patriot-red text-white py-8 rounded-3xl text-3xl font-bold hover:bg-red-700 disabled:bg-gray-400 transition-all"
          >
            {isGenerating ? "Generating Video with Grok Imagine..." : "Generate Faceless Video"}
          </button>

          {videoUrl && (
            <div className="mt-12">
              <video controls className="w-full rounded-3xl" src={videoUrl} />
              <div className="flex gap-4 mt-6">
                <Link to="/my-episodes" className="flex-1 bg-patriot-blue text-white py-6 rounded-3xl text-center text-xl font-bold">Save & Publish</Link>
                <button className="flex-1 bg-white border-2 border-patriot-blue text-patriot-blue py-6 rounded-3xl text-xl font-bold">Download</button>
              </div>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
