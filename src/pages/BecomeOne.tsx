import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iskownhurcvgjrcsgtbe.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlza293bmh1cmN2Z2pyY3NndGJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4MjY0MzYsImV4cCI6MjA5NjQwMjQzNn0.FQd5HUAN1iOvZEZVouudktuOwKsohxFl6QiFthc4Byg';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const BecomeOne = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const address = formData.get('address') as string;
    const password = formData.get('password') as string;
    const whyJoining = formData.get('whyJoining') as string;
    const xHandle = formData.get('xHandle') as string;

    try {
      const { data, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { first_name: firstName, last_name: lastName } }
      });

      if (authError) throw authError;

      const { error: profileError } = await supabase
        .from('profiles')
        .insert({
          id: data.user?.id,
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          address,
          why_joining: whyJoining,
          x_handle: xHandle || 'none',
          status: 'pending'
        });

      if (profileError) throw profileError;

      window.location.href = 'https://givingtools.com/give/4206';

    } catch (err: any) {
      alert('Error: ' + (err.message || 'Something went wrong. Please try again.'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-patriot-blue mb-4">Become One</h1>
          <p className="text-xl text-gray-600">Join the America First Citizens Network</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-2xl p-10 shadow-card">
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" name="firstName" placeholder="First Name" required className="w-full p-4 border border-border rounded-lg" />
            <input type="text" name="lastName" placeholder="Last Name" required className="w-full p-4 border border-border rounded-lg" />
          </div>

          <input type="email" name="email" placeholder="Email Address" required className="w-full p-4 border border-border rounded-lg" />
          <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-4 border border-border rounded-lg" />
          <input type="text" name="address" placeholder="Full Address" required className="w-full p-4 border border-border rounded-lg" />
          <input type="password" name="password" placeholder="Create Password (min 6 characters)" required className="w-full p-4 border border-border rounded-lg" />

          <textarea name="whyJoining" placeholder="Why do you want to join?" rows={5} required className="w-full p-4 border border-border rounded-lg" />

          <input type="text" name="xHandle" placeholder="X Handle (or type 'none')" required className="w-full p-4 border border-border rounded-lg" />

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-patriot-red hover:bg-red-700 text-white font-bold py-5 rounded-xl text-lg transition-all disabled:opacity-50"
          >
            Join AFCN Now – $25/year
          </button>
        </form>
      </div>
    </div>
  );
};

export default BecomeOne;
