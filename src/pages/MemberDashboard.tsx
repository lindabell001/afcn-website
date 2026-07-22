'use client'

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import SiteFooter from '../components/SiteFooter';

export default function MemberDashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        // Not logged in → send to login
        navigate('/member-login');
      } else {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-2xl">Loading Dashboard...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-patriot-blue mb-6">Member Dashboard</h1>
          <p className="text-2xl text-gray-600">Welcome back, Patriot</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Link to="/my-podcasts" className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="text-7xl mb-8">🎙️</div>
            <h2 className="text-4xl font-bold text-patriot-blue mb-4">My Podcasts</h2>
            <p className="text-xl text-gray-600">Record, manage, and grow your shows</p>
          </Link>

          <Link to="/tavern/locations" className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="text-7xl mb-8">🏠</div>
            <h2 className="text-4xl font-bold text-patriot-blue mb-4">Taverns & Pubs</h2>
            <p className="text-xl text-gray-600">Join your state and issue rooms</p>
          </Link>

          <Link to="/podcast-setup" className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="text-7xl mb-8">📻</div>
            <h2 className="text-4xl font-bold text-patriot-blue mb-4">Start a Podcast</h2>
            <p className="text-xl text-gray-600">Beginner or experienced setup</p>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
