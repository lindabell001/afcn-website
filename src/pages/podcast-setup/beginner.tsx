'use client'

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SiteFooter from '../../components/SiteFooter';

export default function BeginnerSetup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    category: ''
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
      // This will be connected to Supabase in the backend
      setTimeout(() => {
        setMessage('Podcast created successfully!');
        setIsCreating(false);
        
        // Redirect to my-podcasts after 1 second
        setTimeout(() => {
          navigate('/my-podcasts');
        }, 1000);
      }, 1500);
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
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
