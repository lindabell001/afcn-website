// src/pages/take-action.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function TakeAction() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-patriot-blue mb-6">
            TAKE ACTION
          </h1>
          <p className="text-2xl text-patriot-red font-semibold">
            We the People — Organized and Moving Forward
          </p>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Real change happens when citizens get off the sidelines and into the fight. 
            Choose your path below.
          </p>
        </div>

        {/* Action Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* 1. Join the Network */}
          <div className="bg-white p-10 rounded-3xl border border-gray-200 hover:border-patriot-red transition-all group">
            <div className="text-6xl mb-6">🇺🇸</div>
            <h3 className="text-3xl font-bold text-patriot-blue mb-4">1. Become One</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Join America First Citizens Network for $25/year. Get access to chat rooms, 
              action alerts, committees, training, and more.
            </p>
            <Link
              to="/become-one"
              className="inline-block bg-patriot-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-10 py-4 rounded-lg text-lg transition-all shadow-lg group-hover:scale-105"
            >
              JOIN NOW →
            </Link>
          </div>

          {/* 2. Donate */}
          <div className="bg-white p-10 rounded-3xl border border-gray-200 hover:border-patriot-red transition-all group">
            <div className="text-6xl mb-6">💰</div>
            <h3 className="text-3xl font-bold text-patriot-blue mb-4">2. Donate</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Fuel the movement. Every dollar helps build tools, host training, and expand our reach.
            </p>
            <a
              href="https://givingtools.com/give/4206"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-patriot-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-10 py-4 rounded-lg text-lg transition-all shadow-lg group-hover:scale-105"
            >
              DONATE NOW →
            </a>
          </div>

          {/* 3. Join Committees */}
          <div className="bg-white p-10 rounded-3xl border border-gray-200 hover:border-patriot-red transition-all group">
            <div className="text-6xl mb-6">📋</div>
            <h3 className="text-3xl font-bold text-patriot-blue mb-4">3. Committees of Observation</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Become part of local or issue-based committees. Observe, report, plan, and act.
            </p>
            <Link
              to="/committees"
              className="inline-block border-2 border-patriot-blue hover:bg-patriot-blue hover:text-white text-patriot-blue font-bold uppercase tracking-wider px-10 py-4 rounded-lg text-lg transition-all group-hover:scale-105"
            >
              EXPLORE COMMITTEES →
            </Link>
          </div>

          {/* 4. Enter the Tavern */}
          <div className="bg-white p-10 rounded-3xl border border-gray-200 hover:border-patriot-red transition-all group">
            <div className="text-6xl mb-6">🍺</div>
            <h3 className="text-3xl font-bold text-patriot-blue mb-4">4. America First Tavern</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Connect with fellow patriots in real-time chat rooms by state, county, or issue.
            </p>
            <Link
              to="/tavern"
              className="inline-block border-2 border-patriot-blue hover:bg-patriot-blue hover:text-white text-patriot-blue font-bold uppercase tracking-wider px-10 py-4 rounded-lg text-lg transition-all group-hover:scale-105"
            >
              ENTER THE TAVERN →
            </Link>
          </div>

          {/* 5. Share the Movement */}
          <div className="bg-white p-10 rounded-3xl border border-gray-200 hover:border-patriot-red transition-all group md:col-span-2 lg:col-span-1">
            <div className="text-6xl mb-6">🔁</div>
            <h3 className="text-3xl font-bold text-patriot-blue mb-4">5. Share & Recruit</h3>
            <p className="text-gray-600 mb-8 text-lg">
              The fastest way to grow our strength is to bring more patriots into the network.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-patriot-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                Share on X →
              </button>
              <button className="border border-patriot-blue text-patriot-blue px-8 py-3 rounded-lg font-semibold hover:bg-patriot-blue hover:text-white transition">
                Copy Invite Link
              </button>
            </div>
          </div>

          {/* 6. Stay Informed */}
          <div className="bg-white p-10 rounded-3xl border border-gray-200 hover:border-patriot-red transition-all group md:col-span-2 lg:col-span-1">
            <div className="text-6xl mb-6">🛎️</div>
            <h3 className="text-3xl font-bold text-patriot-blue mb-4">6. Action Alerts</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Get notified when important votes, events, or local actions need citizen pressure.
            </p>
            <p className="text-patriot-red font-semibold">Coming soon — Sign up after joining</p>
          </div>
        </div>

        {/* Final Strong CTA */}
        <div className="text-center bg-patriot-blue text-white py-16 rounded-3xl">
          <h2 className="text-4xl font-bold mb-6">The Time for Action is Now</h2>
          <p className="text-xl mb-10 max-w-md mx-auto">
            Our Republic was built by citizens who refused to be spectators.
          </p>
          <Link
            to="/become-one"
            className="inline-block bg-patriot-red hover:bg-red-700 text-white font-bold uppercase tracking-widest px-16 py-5 rounded-xl text-xl shadow-xl hover:scale-105 transition-all"
          >
            JOIN THE NETWORK TODAY
          </Link>
        </div>
      </main>
    </div>
  );
}
