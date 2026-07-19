'use client'

import React, { useState } from 'react';
import SiteFooter from '../../components/SiteFooter';

export default function MemberRequestNew() {
  const [formData, setFormData] = useState({
    type: 'tavern',
    name: '',
    description: '',
    location: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setMessage('Request submitted successfully! (Demo)');
    setFormData({ type: 'tavern', name: '', description: '', location: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-patriot-blue">Request New Tavern or Committee</h1>
          <p className="text-2xl text-gray-600 mt-4">Fill out the form and we'll set it up</p>
        </div>

        <div className="bg-white rounded-3xl p-12">
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-semibold mb-2">Type</label>
              <select name="type" value={formData.type} onChange={handleChange} className="w-full p-4 border border-gray-300 rounded-2xl">
                <option value="tavern">Tavern (Location)</option>
                <option value="committee">Committee (Issue)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name of the new group" className="w-full p-4 border border-gray-300 rounded-2xl" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Tell us about your group..." rows={4} className="w-full p-4 border border-gray-300 rounded-2xl" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Location (if applicable)</label>
              <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="State, County, or City" className="w-full p-4 border border-gray-300 rounded-2xl" />
            </div>

            <button 
              onClick={handleSubmit}
              className="w-full bg-patriot-blue text-white py-6 rounded-3xl text-xl font-bold hover:bg-patriot-red transition-colors"
            >
              Submit Request
            </button>

            {message && (
              <p className="text-green-600 text-center mt-6">{message}</p>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
