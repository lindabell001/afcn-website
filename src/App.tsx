'use client'

import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';

export default function MemberDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-patriot-blue mb-6">Member Dashboard</h1>
          <p className="text-2xl text-gray-600">Welcome back, Patriot</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* My Podcasts */}
          <Link
            to="/my-podcasts"
            className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <div className="text-7xl mb-8">🎙️</div>
            <h2 className="text-4xl font-bold text-patriot-blue mb-4">My Podcasts</h2>
            <p className="text-xl text-gray-600">Record, manage, and grow your shows</p>
            <p className="mt-8 text-patriot-red font-semibold group-hover:underline">Go to My Podcasts →</p>
          </Link>

          {/* Taverns */}
          <Link
            to="/tavern/locations"
            className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <div className="text-7xl mb-8">🏠</div>
            <h2 className="text-4xl font-bold text-patriot-blue mb-4">Taverns & Pubs</h2>
            <p className="text-xl text-gray-600">Join your state and issue rooms</p>
            <p className="mt-8 text-patriot-red font-semibold group-hover:underline">Go to Taverns →</p>
          </Link>

          {/* Start Podcast */}
          <Link
            to="/podcast-setup"
            className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <div className="text-7xl mb-8">📻</div>
            <h2 className="text-4xl font-bold text-patriot-blue mb-4">Start a Podcast</h2>
            <p className="text-xl text-gray-600">Beginner or experienced setup</p>
            <p className="mt-8 text-patriot-red font-semibold group-hover:underline">Setup New Podcast →</p>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
