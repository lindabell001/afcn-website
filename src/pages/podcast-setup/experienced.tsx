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

  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background">
        <main className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-patriot-blue mb-6">Podcast Connected Successfully!</h1>
          <p className="text-2xl text-gray-600 mb-12">Your podcast is now connected.</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => window.location.reload()} 
              className="bg-white border-2 border-patriot-blue text-patriot-blue px-10 py-6 rounded-3xl text-xl font-bold hover:bg-patriot-red hover:text-white transition-all"
            >
              Add Another Existing Podcast
            </button>
            
            <Link 
              to="/my-podcasts" 
              className="bg-patriot-blue text-white px-10 py-6 rounded-3xl text-xl font-bold hover:bg-patriot-red transition-all"
            >
              Go to My Podcasts
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
          <h1 className="text-5xl font-bold text-patriot-blue mb-4">Connect Your Existing Podcast</h1>
          <p className="text-xl text-gray-600">Quick setup for experienced podcasters</p>
        </div>

        <div className="bg-white rounded-3xl p-12">
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-semibold mb-2">Podcast Name</label>
              <input type="text" name="name" placeholder="Your Podcast Name" className="w-full p-4 border border-gray-300 rounded-2xl" onChange={handleChange} />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Short Tagline</label>
              <input type="text" name="tagline" placeholder="Short description" className="w-full p-4 border border-gray-300 rounded-2xl" onChange={handleChange} />
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
              <input type="text" name="rssUrl" placeholder="https://your-rss-feed.com/feed.xml" className="w-full p-4 border border-gray-300 rounded-2xl" onChange={handleChange} />
            </div>

            <button 
              onClick={handleSubmit}
              className="w-full bg-patriot-blue text-white py-6 rounded-2xl text-xl font-bold hover:bg-patriot-red transition-colors mt-6"
            >
              Connect My Podcast
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
