'use client'

import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import SiteFooter from '../components/SiteFooter';

export default function BecomeOne() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    xHandle: '',
    isCitizen: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const isOfficer = formData.email.toLowerCase().trim().endsWith('@americafirstcitizensnetwork.org');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (authError) throw authError;

      const { error: profileError } = await supabase
        .from('profiles')
        .insert([{
          id: authData.user.id,
          full_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          x_handle: formData.xHandle,
          membership_tier: 'basic',
          status: isOfficer ? 'approved' : 'pending',
          is_admin: isOfficer,
        }]);

      if (profileError) throw profileError;

      // Notification
      if (!isOfficer) {
        await fetch('https://iskownhurcvjrcsgtbe.supabase.co/functions/v1/hyper-responder', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            email: formData.email,
            full_name: `${formData.firstName} ${formData.lastName}`,
            x_handle: formData.xHandle,
          }),
        });
      }

      setMessage(isOfficer ? 'Officer account approved!' : 'Account created. Please complete payment to activate.');
    } catch (error) {
      setMessage('Error: ' + error.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-2xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-patriot-blue">Become a Member</h1>
          <p className="text-2xl text-gray-600 mt-6">$25/year — America First Patriots Only</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-12">
          <div className="space-y-6">
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required className="w-full p-4 border rounded-2xl" />
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required className="w-full p-4 border rounded-2xl" />
            <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required className="w-full p-4 border rounded-2xl" />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="w-full p-4 border rounded-2xl" />
            <input type="text" name="xHandle" placeholder="X Handle (@username)" onChange={handleChange} className="w-full p-4 border rounded-2xl" />
            
            <label className="flex items-center gap-3">
              <input type="checkbox" name="isCitizen" onChange={handleChange} className="w-6 h-6" />
              <span>I am a US Citizen</span>
            </label>
          </div>

          <button 
            type="submit" 
            disabled={loading} 
            className="w-full mt-10 bg-patriot-red text-white py-5 rounded-2xl text-xl font-bold hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Join for $25/Year – Continue to Secure Payment'}
          </button>

          {message && <p className="text-center mt-6 text-lg font-medium text-green-600">{message}</p>}
        </form>
      </main>
      <SiteFooter />
    </div>
  );
}
