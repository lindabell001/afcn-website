'use client'

import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../../components/SiteFooter';

export default function PodcastSetupHub() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-patriot-blue">Podcast Setup</h1>
          <p className="text-2xl text-gray-600 mt-4">Choose how you want to get started</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Beginner */}
          <Link to="/podcast-setup/beginner" className="group">
            <div className="bg-white rounded-3xl p-12 border-2 border-transparent hover:border-patriot-blue transition-all h-full flex flex-col items-center text-center">
              <div className="text-7xl mb-8">🌱</div>
              <h2 className="text-4xl font-bold text-patriot-blue mb-4">Beginner Setup</h2>
              <p className="text-gray-600 text-lg flex-1">New to podcasting? We'll guide you step-by-step to create your first podcast.</p>
              <div className="mt-8 text-patriot-red font-bold text-xl group-hover:underline">Start Beginner →</div>
            </div>
          </Link>

          {/* Experienced */}
          <Link to="/podcast-setup/experienced" className="group">
            <div className="bg-white rounded-3xl p-12 border-2 border-transparent hover:border-patriot-red transition-all h-full flex flex-col items-center text-center">
              <div className="text-7xl mb-8">🔗</div>
              <h2 className="text-4xl font-bold text-patriot-blue mb-4">Experienced Setup</h2>
              <p className="text-gray-600 text-lg flex-1">Already have a podcast? Connect your RSS feed or existing platforms.</p>
              <div className="mt-8 text-patriot-red font-bold text-xl group-hover:underline">Connect Existing →</div>
            </div>
          </Link>
        </div>

        <div className="text-center mt-12">
          <Link to="/my-podcasts" className="text-patriot-red hover:underline text-lg">← Back to My Podcasts</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
