import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../../components/SiteFooter';

export default function ExperiencedSetup() {
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    category: '',
    rssUrl: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // TODO: Connect to Supabase later
    alert('Podcast connected successfully! (Demo)');
    window.location.href = '/my-podcasts';
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-patriot-blue mb-4">Connect Your Existing Podcast</h1>
          <p className="text-xl text-gray-600">Quick setup for experienced podcasters</p>
        </div>

        <div className="bg-white rounded-3xl p-12">
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-semibold mb-2">Podcast Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="Your Podcast Name" 
                className="w-full p-4 border border-gray-300 rounded-2xl" 
                onChange={handleChange} 
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Short Tagline</label>
              <input 
                type="text" 
                name="tagline" 
                placeholder="Short description for directories" 
                className="w-full p-4 border border-gray-300 rounded-2xl" 
                onChange={handleChange} 
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Category</label>
              <select name="category" className="w-full p-4 border border-gray-300 rounded-2xl" onChange={handleChange}>
                <option value="">Select Category</option>
                <option value="border-security">Border Security</option>
                <option value="faith">Faith & Values</option>
                <option value="politics">Politics</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Existing RSS Feed URL (optional)</label>
              <input 
                type="text" 
                name="rssUrl" 
                placeholder="https://your-rss-feed.com/feed.xml" 
                className="w-full p-4 border border-gray-300 rounded-2xl" 
                onChange={handleChange} 
              />
            </div>

            <div className="pt-6">
              <button 
                onClick={handleSubmit}
                className="w-full bg-patriot-blue text-white py-6 rounded-2xl text-xl font-bold hover:bg-patriot-red transition-colors"
              >
                Connect My Podcast
              </button>
            </div>
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
