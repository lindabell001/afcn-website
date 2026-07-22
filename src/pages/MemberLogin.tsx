'use client'

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import SiteFooter from '../components/SiteFooter';

export default function MemberLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Redirect if already logged in
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate('/member-dashboard');
    });
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      navigate('/member-dashboard');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-md mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-patriot-blue">Member Login</h1>
          <p className="text-2xl text-gray-600 mt-4">Sign in to access your dashboard and podcasts</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-10 shadow-xl">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-5 border border-gray-300 rounded-2xl mb-6 text-lg"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-5 border border-gray-300 rounded-2xl mb-8 text-lg"
            required
          />

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-patriot-red text-white py-5 rounded-2xl font-bold text-xl hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          {message && <p className="text-red-600 text-center mt-6 font-medium">{message}</p>}
        </form>

        <p className="text-center mt-10 text-gray-600">
          New here? <a href="/become-one" className="text-patriot-red font-semibold">Become a Member</a>
        </p>
      </div>
    </div>
  );
}
