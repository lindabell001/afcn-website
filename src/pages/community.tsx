import React from 'react';
import SiteFooter from '../components/SiteFooter';

export default function Community() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-patriot-blue mb-6">Community</h1>
          <p className="text-2xl text-gray-600">Connect, cross-promote, and collaborate</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">Cross-Promotion</h2>
            <p className="text-gray-600">Find other AFCN podcasters to collaborate with.</p>
            <button className="mt-8 bg-patriot-blue hover:bg-patriot-red text-white px-12 py-6 rounded-3xl text-xl font-bold">Browse Podcasters</button>
          </div>

          <div className="bg-white rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">Fan Club Chats</h2>
            <p className="text-gray-600">Private chats for your loyal listeners.</p>
            <button className="mt-8 bg-white border-2 border-patriot-blue hover:border-patriot-red text-patriot-blue px-12 py-6 rounded-3xl text-xl font-bold">Manage Fan Clubs</button>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-6">Team Collaboration</h2>
          <p className="text-gray-600">Invite other vetted AFCN members to help with production.</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
