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
    street: '',
    city: '',
    state: '',
    zip: '',
    congressionalDistrict: '',
    phone: '',
    xHandle: '',
    isCitizen: false,
    isVeteran: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isOfficer = formData.email.toLowerCase().trim().endsWith('@americafirstcitizensnetwork.org');

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (authError) {
      alert('Auth error: ' + authError.message);
      setLoading(false);
      return;
    }

    const profileData = {
      id: authData.user.id,
      full_name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      x_handle: formData.xHandle,
      membership_tier: 'basic',
      status: 'pending',                    // ← Pending until admin approves
      is_admin: isOfficer,
    };

    const { error: profileError } = await supabase
      .from('profiles')
      .insert([profileData]);

    if (profileError) {
      alert('Profile error: ' + profileError.message);
    } else {
      setSubmitted(true);
    }

    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-5xl font-bold text-patriot-blue mb-6">Application Received</h1>
          <p className="text-2xl text-gray-600">Thank you! Your membership is pending admin review.</p>
          <p className="mt-8 text-lg">You will be notified once approved.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-2xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-patriot-blue">Become a Member</h1>
          <p className="text-2xl text-gray-600 mt-6">$25/year — America First Patriots Only</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-12">
          {/* Form fields here - same as before */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required className="p-4 border rounded-2xl" />
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required className="p-4 border rounded-2xl" />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="p-4 border rounded-2xl" />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="p-4 border rounded-2xl" />
            <input type="text" name="xHandle" placeholder="X Handle (@username)" onChange={handleChange} className="p-4 border rounded-2xl" />
            {/* Add other fields as needed */}
          </div>

          <button 
            type="submit" 
            disabled={loading} 
            className="w-full mt-10 bg-patriot-red hover:bg-red-700 text-white font-bold py-5 rounded-2xl text-xl disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Join for $25/Year – Continue to Payment'}
          </button>

          {isOfficer && (
            <p className="text-center text-green-600 mt-6 font-semibold">Officer email detected — Immediate approval</p>
          )}
        </form>
      </main>
      <SiteFooter />
    </div>
  );
}
