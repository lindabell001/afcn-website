'use client'

import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';

export default function PhoneRecording() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-patriot-blue">Phone Recording</h1>
          <p className="text-2xl text-gray-600 mt-4">Record or go live from your phone</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Go Live */}
          <Link to="/live-recording" className="bg-patriot-red text-white p-12 rounded-3xl text-center hover:bg-red-700 transition-all hover:-translate-y-1">
            <div className="text-7xl mb-6">📡</div>
            <h2 className="text-4xl font-bold mb-4">Go Live</h2>
            <p className="text-xl">Stream live with audience chat</p>
          </Link>

          {/* Record Episode */}
          <Link to="/record-new" className="bg-patriot-blue text-white p-12 rounded-3xl text-center hover:bg-blue-700 transition-all hover:-translate-y-1">
            <div className="text-7xl mb-6">🎤</div>
            <h2 className="text-4xl font-bold mb-4">Record Episode</h2>
            <p className="text-xl">Record & save for later</p>
          </Link>
        </div>

        <p className="text-center text-gray-600 mt-12">Works great on mobile browsers</p>
      </main>
      <SiteFooter />
    </div>
  );
}
