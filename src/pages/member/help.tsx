'use client'

import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../../components/SiteFooter';

export default function MemberHelp() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-patriot-blue">Help & Support</h1>
          <p className="text-2xl text-gray-600">What each section is for</p>
        </div>

        <div className="bg-white rounded-3xl p-12 space-y-12">
          <div>
            <h3 className="text-3xl font-bold text-patriot-blue mb-4">Taverns & Pubs</h3>
            <p>Tavern is the Nationwide chat group. Pubs are by State/County/District/City/Neighborhood or by issue. Ask for new ones to be set up.</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-patriot-blue mb-4">Committees of Observation</h3>
            <p>by State/County/District/City/Neighborhood or by issue to take action on important topics. Ask for new ones to be set up.</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-patriot-blue mb-4">My Podcasts</h3>
            <p>Create and manage your own podcasts and episodes.</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-patriot-blue mb-4">My Reports</h3>
            <p>Your affiliate payments and podcast information.</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-patriot-blue mb-4">My Events</h3>
            <p>See meetings and events you're going to or hosting.</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-patriot-blue mb-4">My Committees</h3>
            <p>See all the committees you're part of.</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-patriot-blue mb-4">My Messages</h3>
            <p>Your chats and notifications from other members.</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-patriot-blue mb-4">My Tasks</h3>
            <p>Your simple to-do list — add tasks and check them off.</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-patriot-blue mb-4">My Network</h3>
            <p>Your connections with other patriots.</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-patriot-blue mb-4">My Resources</h3>
            <p>Save useful links and tools from anywhere on the web.</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-patriot-blue mb-4">Help & Support</h3>
            <p>Get help if you get stuck.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
