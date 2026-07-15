import React from 'react';
import { useParams } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';

export default function EpisodeEditor() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-5xl font-bold text-patriot-blue">Episode Editor</h1>
            <p className="text-xl text-gray-600">Editing Episode #{id}</p>
          </div>
          <a href="/my-podcasts" className="text-patriot-red font-semibold hover:underline">← Back to My Podcasts</a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 bg-white rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">Basic Info</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Episode Title</label>
                <input type="text" className="w-full border border-gray-300 rounded-xl p-4" placeholder="Episode Title" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Short Description</label>
                <textarea className="w-full border border-gray-300 rounded-xl p-4 h-32" placeholder="Short description for directories" />
              </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-white rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">Text-Based Editing</h2>
            <div className="border border-gray-300 rounded-2xl p-8 h-96 bg-gray-50">
              <p className="text-gray-500">Transcript editor goes here. Edit text → audio updates automatically.</p>
            </div>
          </div>
        </div>

        <div className="flex gap-6 justify-center mt-16">
          <button className="bg-patriot-blue text-white px-16 py-6 rounded-3xl text-2xl font-bold">Publish Episode</button>
          <button className="bg-white border-2 border-patriot-blue text-patriot-blue px-16 py-6 rounded-3xl text-2xl font-bold">Save as Draft</button>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
