'use client'

import React from 'react';
import SiteFooter from '../../components/SiteFooter';

export default function MemberProfile() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-patriot-blue">My Profile</h1>
          <p className="text-2xl text-gray-600">Your personal profile</p>
        </div>

        <div className="bg-white rounded-3xl p-12">
          <p className="text-xl text-gray-600">Update your photo, bio, and contact info here. Coming soon.</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
