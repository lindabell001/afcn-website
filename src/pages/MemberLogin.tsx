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
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) navigate('/member-dashboard');
    };
    checkSession();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage('Login failed: ' + error.message);
    } else {
      navigate('/member-dashboard');
    }
    setLoading(false);
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setMessage('Enter your email first');
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'https://americafirstcitizensnetwork.org/member-login',
    });

    if (error) {
      setMessage('Error sending reset email: ' + error.message);
    } else {
      setMessage('Password reset email sent! Check your inbox.');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-md mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-patriot-blue">Member Login</h1>
          <p className="text-xl text-gray-600 mt-4">Sign in to your AFCN account</p>
        </div>

        <form onSubmit={handleLogin} className="bg-white rounded-3xl p-10">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-2xl mb-4 text-lg"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-2xl mb-6 text-lg"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-patriot-red text-white py-4 rounded-2xl font-bold text-xl hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>

          <button
            type="button"
            onClick={handleForgotPassword}
            className="w-full mt-4 text-patriot-red hover:underline text-sm"
          >
            Forgot Password?
          </button>

          {message && <p className="text-center mt-6 text-sm font-medium">{message}</p>}
        </form>

        <p className="text-center mt-8 text-gray-600">
          Don't have an account? <a href="/become-one" className="text-patriot-red hover:underline">Become a Member</a>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
