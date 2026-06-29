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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Create auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (authError) {
      alert('Auth error: ' + authError.message);
      setLoading(false);
      return;
    }

    // Create profile
    const profileData = {
      id: authData.user.id,
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      street_address: formData.street,
      city: formData.city,
      state: formData.state,
      zip: formData.zip,
      congressional_district: formData.congressionalDistrict,
      phone: formData.phone,
      x_handle: formData.xHandle || 'none',
      why_joining: 'New member via Become One form',
      status: isOfficer ? 'approved' : 'pending',
      role: isOfficer ? 'admin' : 'member',
    };

    const { error: profileError } = await supabase.from('profiles').insert([profileData]);

    if (profileError) {
      alert('Profile error: ' + profileError.message);
    } else {
      if (isOfficer) {
        alert('✅ Officer approved! You can now log in.');
        setSubmitted(true);
      } else {
        // Send email to Norine
        await supabase.functions.invoke('notify-norine', {
          body: {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            xHandle: formData.xHandle,
            message: 'New member pending approval'
          }
        });

        alert('Thank you! Your profile is pending approval. Norine has been notified.');
        window.location.href = 'https://givingtools.com/give/4206';
      }
    }

    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-5xl font-bold text-patriot-blue mb-6">Welcome, Officer!</h1>
          <p className="text-2xl">You have been added as an approved member.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-6xl font-bold text-patriot-blue text-center mb-4">Become One</h1>
        <p className="text-center text-xl mb-12">Join the America First Citizens Network</p>

        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl shadow-xl space-y-6">
          {/* form fields same as before */}
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" name="firstName" placeholder="First Name *" value={formData.firstName} onChange={handleChange} className="p-4 border rounded-xl" required />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="p-4 border rounded-xl" />
          </div>

          <input type="email" name="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} className="w-full p-4 border rounded-xl" required />

          <input type="password" name="password" placeholder="Password *" value={formData.password} onChange={handleChange} className="w-full p-4 border rounded-xl" required />

          <input type="text" name="street" placeholder="House number and street (neighborhood)" value={formData.street} onChange={handleChange} className="w-full p-4 border rounded-xl" />

          <div className="grid md:grid-cols-3 gap-6">
            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="p-4 border rounded-xl" />
            <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} className="p-4 border rounded-xl" />
            <input type="text" name="zip" placeholder="Zip" value={formData.zip} onChange={handleChange} className="p-4 border rounded-xl" />
          </div>

          <input type="text" name="congressionalDistrict" placeholder="Congressional District (e.g. TX-03 or CA-12)" value={formData.congressionalDistrict} onChange={handleChange} className="w-full p-4 border rounded-xl" />

          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-4 border rounded-xl" />

          <input type="text" name="xHandle" placeholder="X Account (@username) - enter 'none' if none" value={formData.xHandle} onChange={handleChange} className="w-full p-4 border rounded-xl" />

          <div className="flex items-center gap-3">
            <input type="checkbox" name="isCitizen" checked={formData.isCitizen} onChange={handleChange} className="w-5 h-5" />
            <label>I confirm I am a United States citizen</label>
          </div>

          <div>
            <p className="mb-2 font-medium">Are you current military or a veteran?</p>
            <div className="flex gap-4">
              <button type="button" onClick={() => setFormData(prev => ({ ...prev, isVeteran: 'yes' }))} className={`px-6 py-2 rounded-xl border ${formData.isVeteran === 'yes' ? 'bg-patriot-red text-white' : ''}`}>Yes</button>
              <button type="button" onClick={() => setFormData(prev => ({ ...prev, isVeteran: 'no' }))} className={`px-6 py-2 rounded-xl border ${formData.isVeteran === 'no' ? 'bg-patriot-red text-white' : ''}`}>No</button>
            </div>
          </div>

          <button type="submit" disabled={loading} className="w-full bg-patriot-red hover:bg-red-700 text-white font-bold py-4 rounded-2xl text-xl mt-6 disabled:opacity-50">
            {loading ? 'Saving...' : 'Continue to Payment'}
          </button>

          {isOfficer && (
            <p className="text-center text-patriot-red font-semibold text-lg">
              Officer email detected — Immediate approved membership (no payment)
            </p>
          )}
        </form>
      </main>
      <SiteFooter />
    </div>
  );
}
