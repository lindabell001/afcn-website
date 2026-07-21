'use client'

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import SiteFooter from '../../components/SiteFooter';

export default function ExperiencedSetup() {
  const navigate = useNavigate();
  const [rssUrls, setRssUrls] = useState(['']);
  const [isConnecting, setIsConnecting] = useState(false);
  const [message, setMessage] = useState('');

  const addRssField = () => {
    setRssUrls([...rssUrls, '']);
  };

  const updateRssUrl = (index, value) => {
    const newUrls = [...rssUrls];
    newUrls[index] = value;
    setRssUrls(newUrls);
  };

  const handleSubmit = async () => {
    if (rssUrls.every(url => !url.trim())) {
      setMessage('Please enter at least one RSS URL');
      return;
    }

    setIsConnecting(true);
    setMessage('');

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setMessage('You must be logged in.');
        setIsConnecting(false);
        return;
      }

      // For simplicity, update the most recent podcast or create new
      // You can improve this later to select which podcast to link
      const { data: existing } = await supabase
        .from('podcasts')
        .select('id')
        .eq('host_id', user.id)
        .limit(1);

      const rssUrl = rssUrls[0].trim(); // Use first for now

      if (existing && existing.length > 0) {
        // Update existing
        await supabase
          .from('podcasts')
          .update({ rss_url: rssUrl })
          .eq('id', existing[0].id);
      } else {
        // Create new with RSS
        await supabase
          .from('podcasts')
          .insert({
            title: 'Connected Podcast',
            description: 'RSS connected podcast',
            host_id: user.id,
            rss_url: rssUrl,
            status: 'active'
          });
      }

      setMessage('RSS feeds connected successfully!');
      setTimeout(() => navigate('/my-podcasts'), 1500);

    } catch (error) {
      setMessage('Error connecting RSS. Check console.');
      console.error(error);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-patriot-blue mb-4">Experienced Setup</h1>
          <p className="text-xl text-gray-600">Connect existing podcasts via RSS</p>
        </div>

        <div className="bg-white rounded-3xl p-12">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-patriot-blue mb-6">RSS Connect</h2>
            <p className="text-gray-600 mb-8">Paste your RSS feed URLs. You can add multiple.</p>

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
              className="text-patriot-red hover:underline mb-8 block"
            >
              + Add Another RSS URL
            </button>

            <button 
              onClick={handleSubmit}
              disabled={isConnecting}
              className="w-full bg-patriot-blue text-white py-6 rounded-3xl text-xl font-bold hover:bg-patriot-red disabled:bg-gray-400 transition-colors"
            >
              {isConnecting ? "Connecting..." : "Connect RSS Feeds"}
            </button>

            {message && <p className="text-center mt-6 text-green-600 font-semibold">{message}</p>}
          </div>

          <div className="text-center border-t pt-8">
            <p className="text-gray-600 mb-4">Or</p>
            <Link 
              to="/podcast-setup/beginner" 
              className="inline-block bg-white border-2 border-patriot-blue text-patriot-blue px-12 py-6 rounded-3xl text-xl font-bold hover:bg-patriot-red hover:text-white transition-all"
            >
              Start Fresh with Beginner Setup
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
