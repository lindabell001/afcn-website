'use client'

import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import SiteFooter from '../components/SiteFooter';

export default function FreeMembership() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    xHandle: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
          membership_tier: 'free',
          status: 'approved',
          is_admin: false,
        }]);

      if (profileError) throw profileError;

      setMessage('Free membership created successfully! They can now log in.');
    } catch (error) {
      setMessage('Error: ' + error.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-2xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-patriot-blue">Free Membership</h1>
          <p className="text-2xl text-gray-600 mt-6">Admin Approved Only</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-12">
          <div className="space-y-6">
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required className="w-full p-4 border rounded-2xl" />
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required className="w-full p-4 border rounded-2xl" />
            <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required className="w-full p-4 border rounded-2xl" />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="w-full p-4 border rounded-2xl" />
            <input type="text" name="xHandle" placeholder="X Handle (@username)" onChange={handleChange} className="w-full p-4 border rounded-2xl" />
          </div>

          <button 
            type="submit" 
            disabled={loading} 
            className="w-full mt-10 bg-green-600 text-white py-5 rounded-2xl text-xl font-bold hover:bg-green-700 disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'Create Free Membership'}
          </button>

          {message && <p className="text-center mt-6 text-lg font-medium text-green-600">{message}</p>}
        </form>
      </main>
      <SiteFooter />
    </div>
  );
}
