'use client'

import React from 'react';
import SiteFooter from '../../components/SiteFooter';

export default function MemberEvents() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-patriot-blue">My Events</h1>
          <p className="text-2xl text-gray-600">Upcoming events and meetings</p>
        </div>

        <div className="bg-white rounded-3xl p-12">
          <p className="text-xl text-gray-600">Your upcoming tavern meetings, committee events, and more coming soon.</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
