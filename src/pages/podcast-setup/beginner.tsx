'use client'

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import SiteFooter from '../../components/SiteFooter';

export default function BeginnerSetup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    tagline: '',
    category: ''
  });
  const [isCreating, setIsCreating] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.title || !formData.tagline) {
      setMessage('Please fill in title and tagline');
      return;
    }

    setIsCreating(true);
    setMessage('');

    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setMessage('You must be logged in');
        setIsCreating(false);
        return;
      }

      const { data, error } = await supabase
        .from('podcasts')
        .insert([{
          title: formData.title,
          tagline: formData.tagline,
          category: formData.category,
          host_id: session.user.id,
          status: 'active'
        }])
        .select()
        .single();

      if (error) throw error;

      setMessage('Podcast created successfully!');
      
      setTimeout(() => {
        navigate('/my-podcasts');
      }, 1500);
    } catch (error) {
      console.error(error);
      setMessage('Error creating podcast: ' + error.message);
    }

    setIsCreating(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-patriot-blue">Create New Podcast</h1>
          <p className="text-2xl text-gray-600 mt-4">Start sharing your voice</p>
        </div>

        <div className="bg-white rounded-3xl p-12">
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-semibold mb-2">Podcast Title</label>
              <input 
                type="text" 
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="My America First Show" 
                className="w-full p-4 border border-gray-300 rounded-2xl text-xl" 
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Tagline</label>
              <input 
                type="text" 
                name="tagline"
                value={formData.tagline}
                onChange={handleChange}
                placeholder="Truth, Liberty, and America First" 
                className="w-full p-4 border border-gray-300 rounded-2xl text-xl" 
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Category (optional)</label>
              <input 
                type="text" 
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="News & Politics" 
                className="w-full p-4 border border-gray-300 rounded-2xl text-xl" 
              />
            </div>

            <button 
              onClick={handleSubmit}
              disabled={isCreating || !formData.title || !formData.tagline}
              className="w-full bg-patriot-red text-white py-6 rounded-3xl text-2xl font-bold hover:bg-red-700 disabled:bg-gray-400 transition-all"
            >
              {isCreating ? "Creating Podcast..." : "Create My Podcast"}
            </button>

            {message && <p className="text-center text-lg font-medium mt-6">{message}</p>}
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="/my-podcasts" className="text-patriot-red hover:underline">← Back to My Podcasts</a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
