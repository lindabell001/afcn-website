import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';

export default function EpisodeEditor() {
  const { id } = useParams(); // episode id
  const [title, setTitle] = useState("My New Episode");
  const [description, setDescription] = useState("");
  const [transcript, setTranscript] = useState("This is where the transcript appears. Edit the text and the audio will sync (demo).");

  const publishEpisode = () => {
    alert("Episode published successfully! RSS updated.");
    window.location.href = '/my-podcasts';
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-5xl font-bold text-patriot-blue">Episode Editor</h1>
            <p className="text-xl text-gray-600">Editing Episode #{id}</p>
          </div>
          <Link to="/my-podcasts" className="text-patriot-red font-medium hover:underline">← Back to My Podcasts</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Sidebar - Basic Info */}
          <div className="md:col-span-1 bg-white rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">Episode Info</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Episode Title</label>
                <input 
                  type="text" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-2xl" 
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Short Description</label>
                <textarea 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-2xl h-24" 
                  placeholder="For podcast directories..."
                />
              </div>
            </div>
          </div>

          {/* Main Editor - Text-Based Editing */}
          <div className="md:col-span-2 bg-white rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">Text-Based Editing</h2>
            <p className="text-gray-600 mb-6">Edit the transcript below. Changes sync to audio (demo mode).</p>
            
            <textarea 
              value={transcript} 
              onChange={(e) => setTranscript(e.target.value)}
              className="w-full p-8 border border-gray-300 rounded-3xl h-96 font-mono text-lg" 
            />

            <div className="flex gap-4 mt-8">
              <button className="flex-1 bg-gray-100 py-6 rounded-3xl text-xl font-bold">Play Audio</button>
              <button className="flex-1 bg-patriot-blue text-white py-6 rounded-3xl text-xl font-bold">Save Draft</button>
              <button 
                onClick={publishEpisode}
                className="flex-1 bg-patriot-red text-white py-6 rounded-3xl text-xl font-bold"
              >
                Publish Episode
              </button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
