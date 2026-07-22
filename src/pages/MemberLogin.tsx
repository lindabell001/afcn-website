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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage('Error: ' + error.message);
    } else {
      // ✅ FIXED: Send to Member Dashboard after login
      navigate('/memberdashboard');
    }
    setLoading(false);
  };

  // If already logged in, go straight to dashboard
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/memberdashboard');
      }
    };
    checkSession();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-md mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-patriot-blue">Member Login</h1>
        </div>

        <form onSubmit={handleLogin} className="bg-white rounded-3xl p-10">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-2xl mb-4"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-2xl mb-6"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-patriot-red text-white py-4 rounded-2xl font-bold text-xl hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>

          {message && <p className="text-red-600 text-center mt-4">{message}</p>}
        </form>

        <p className="text-center mt-8">
          Don't have an account? <a href="/become-one" className="text-patriot-red">Become a Member</a>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
