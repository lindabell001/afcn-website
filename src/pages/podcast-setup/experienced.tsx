'use client'

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';

export default function UploadEpisode() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file || !title) return;
    
    setIsUploading(true);
    
    // Demo upload - replace with real Supabase upload later
    setTimeout(() => {
      setIsUploading(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background">
        <main className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-patriot-blue mb-6">Upload Successful!</h1>
          <p className="text-2xl text-gray-600 mb-12">Your episode has been uploaded and saved as draft.</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/my-episodes" className="bg-patriot-blue text-white px-10 py-6 rounded-3xl text-xl font-bold hover:bg-patriot-red transition-all">
              Go to My Episodes
            </Link>
            <Link to="/upload-episode" className="bg-white border-2 border-patriot-blue text-patriot-blue px-10 py-6 rounded-3xl text-xl font-bold hover:bg-patriot-red hover:text-white transition-all">
              Upload Another
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-patriot-blue">Upload Episode</h1>
          <p className="text-2xl text-gray-600 mt-4">Upload audio or video from your computer</p>
        </div>

        <div className="bg-white rounded-3xl p-12">
          {/* File Upload Area */}
          <div className="border-2 border-dashed border-patriot-blue rounded-3xl p-12 text-center mb-10">
            <div className="text-6xl mb-6">📁</div>
            <p className="text-2xl mb-4">Drag & Drop or</p>
            
            <label className="inline-block bg-patriot-blue text-white px-8 py-4 rounded-2xl text-xl font-bold cursor-pointer hover:bg-patriot-red transition-all">
              Choose File
              <input 
                type="file" 
                accept="audio/*,video/*" 
                onChange={handleFileChange} 
                className="hidden" 
              />
            </label>
            
            <p className="text-sm text-gray-500 mt-4">MP3, MP4, WAV supported</p>
            
            {file && (
              <p className="mt-4 text-green-600 font-semibold">Selected: {file.name}</p>
            )}
          </div>

          {/* Form */}
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-semibold mb-2">Episode Title *</label>
              <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Episode Title" 
                className="w-full p-4 border border-gray-300 rounded-2xl text-xl" 
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Description</label>
              <textarea 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write a short description..." 
                rows={5}
                className="w-full p-4 border border-gray-300 rounded-2xl text-xl" 
              />
            </div>

            <button 
              onClick={handleUpload}
              disabled={!file || !title || isUploading}
              className="w-full bg-patriot-red text-white py-6 rounded-3xl text-2xl font-bold hover:bg-red-700 transition-all disabled:bg-gray-400"
            >
              {isUploading ? "Uploading..." : "Upload Episode"}
            </button>
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
