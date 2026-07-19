'use client'

import React from 'react';
import SiteFooter from '../../../components/SiteFooter';

export default function GovernmentWasteIssue() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-patriot-blue">Government Waste</h1>
          <p className="text-2xl text-gray-600">Chat room for patriots</p>
        </div>

        <div className="bg-white rounded-3xl p-12">
          <p className="text-xl text-gray-600">Discuss government waste and spending. Coming soon with chat.</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
