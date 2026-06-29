import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import SiteFooter from '../components/SiteFooter';

const MemberLogin = () => {
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
      setMessage('Login successful! Redirecting...');
      window.location.href = '/tavern/chat/alabama-pub';
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-md mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-patriot-blue">Member Login</h1>
          <p className="text-gray-600 mt-2">Sign in to access the pubs and committees</p>
        </div>

        <form onSubmit={handleLogin} className="bg-white p-8 rounded-3xl shadow-xl space-y-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full p-4 border border-patriot-blue rounded-2xl"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-4 border border-patriot-blue rounded-2xl"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-patriot-red hover:bg-red-700 text-white font-bold py-4 rounded-2xl text-xl disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>

          {message && <p className="text-center text-red-600 font-medium">{message}</p>}
        </form>

        <p className="text-center text-gray-500 mt-8">
          Don't have an account? <a href="/become-one" className="text-patriot-red">Become One</a>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
};

export default MemberLogin;
