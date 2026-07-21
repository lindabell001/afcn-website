'use client'

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import SiteFooter from '../../components/SiteFooter';

export default function ExperiencedSetup() {
  const navigate = useNavigate();
  const [rssUrls, setRssUrls] = useState(['']);
  const [x_handle, setXHandle] = useState('');
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

      const rssUrl = rssUrls[0].trim();

      const { data: existing } = await supabase
        .from('podcasts')
        .select('id')
        .eq('host_id', user.id)
        .limit(1);

      if (existing && existing.length > 0) {
        await supabase
          .from('podcasts')
          .update({ 
            rss_url: rssUrl,
            x_handle: x_handle || null 
          })
          .eq('id', existing[0].id);
      } else {
        await supabase
          .from('podcasts')
          .insert({
            title: 'Connected Podcast',
            description: 'RSS connected podcast',
            host_id: user.id,
            rss_url: rssUrl,
            x_handle: x_handle || null,
            status: 'active'
          });
      }

      setMessage('RSS feeds connected successfully! Your page will be at afcnus.org/@' + (x_handle || 'your-show-name'));
      setTimeout(() => navigate('/my-podcasts'), 2000);

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

            {/* X Handle Field */}
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-2">X Handle for this Podcast (optional)</label>
              <input
                type="text"
                value={x_handle}
                onChange={(e) => setXHandle(e.target.value)}
                placeholder="@YourXHandle"
                className="w-full p-4 border border-gray-300 rounded-2xl"
              />
              <p className="text-sm text-gray-500 mt-2">Your podcast page will be afcnus.org/@YourXHandle (or afcnus.org/your-show-name)</p>
            </div>

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
