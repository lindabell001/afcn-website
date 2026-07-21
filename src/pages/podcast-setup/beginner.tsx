'use client'

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import SiteFooter from '../../components/SiteFooter';

export default function BeginnerSetup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    category: '',
    x_handle: ''   // New field
  });
  const [isCreating, setIsCreating] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.tagline) {
      setMessage('Please fill in name and tagline');
      return;
    }

    setIsCreating(true);
    setMessage('');

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setMessage('You must be logged in.');
        setIsCreating(false);
        return;
      }

      const slug = formData.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

      const newPodcast = {
        title: formData.name,
        description: formData.tagline,
        category: formData.category || 'other',
        host_id: user.id,
        slug: slug,
        x_handle: formData.x_handle || null,   // Save X handle
        status: 'active',
        is_public: false
      };

      const { error } = await supabase
        .from('podcasts')
        .insert(newPodcast);

      if (error) throw error;

      setMessage('Podcast created successfully! Your page will be at afcnus.org/@' + (formData.x_handle || slug));
      
      setTimeout(() => {
        navigate('/my-podcasts');
      }, 2000);

    } catch (error) {
      setMessage('Error creating podcast. Check console.');
      console.error(error);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-patriot-blue">Create New Podcast</h1>
          <p className="text-2xl text-gray-600 mt-4">Beginner Setup</p>
        </div>

        <div className="bg-white rounded-3xl p-12">
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-semibold mb-2">Podcast Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. America First Daily"
                className="w-full p-4 border border-gray-300 rounded-2xl text-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Tagline</label>
              <input
                type="text"
                name="tagline"
                value={formData.tagline}
                onChange={handleChange}
                placeholder="Short description of your podcast"
                className="w-full p-4 border border-gray-300 rounded-2xl text-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-2xl text-lg"
              >
                <option value="">Select Category</option>
                <option value="news">News & Commentary</option>
                <option value="politics">Politics</option>
                <option value="faith">Faith & Values</option>
                <option value="border">Border Security</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* New X Handle Field */}
            <div>
              <label className="block text-sm font-semibold mb-2">X Handle for this Podcast (optional)</label>
              <input
                type="text"
                name="x_handle"
                value={formData.x_handle}
                onChange={handleChange}
                placeholder="@YourXHandle"
                className="w-full p-4 border border-gray-300 rounded-2xl text-lg"
              />
              <p className="text-sm text-gray-500 mt-2">Your podcast page will be afcnus.org/@YourXHandle (or afcnus.org/your-show-name)</p>
            </div>

            <button 
              onClick={handleSubmit}
              disabled={isCreating}
              className="w-full bg-patriot-red text-white py-6 rounded-3xl text-2xl font-bold hover:bg-red-700 disabled:bg-gray-400 transition-all"
            >
              {isCreating ? "Creating Podcast..." : "Create My Podcast"}
            </button>

            {message && (
              <p className="text-center text-green-600 font-semibold mt-6">{message}</p>
            )}
          </div>
        </div>

        <div className="text-center mt-8">
          <Link to="/podcast-setup/experienced" className="text-patriot-red hover:underline">Already have a podcast? Connect existing one →</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
