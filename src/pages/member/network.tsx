'use client'

import React from 'react';
import SiteFooter from '../../components/SiteFooter';

export default function MemberNetwork() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-patriot-blue">My Network</h1>
          <p className="text-2xl text-gray-600">Connected patriots</p>
        </div>

        <div className="bg-white rounded-3xl p-12">
          <p className="text-xl text-gray-600">Your network of fellow members. Coming soon.</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
