import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../components/SiteFooter';

export default function MemberDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-patriot-blue mb-6">Member Dashboard</h1>
          <p className="text-2xl text-gray-600">Quick Access for Patriots</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Taverns & Pubs */}
          <Link to="/tavern/locations" className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="text-7xl mb-8">🏠</div>
            <h2 className="text-4xl font-bold text-patriot-blue mb-4">Taverns & Pubs</h2>
            <p className="text-xl text-gray-600">Join your state pub and issue rooms</p>
            <p className="mt-8 text-patriot-red font-semibold group-hover:underline">Go to Taverns →</p>
          </Link>

          {/* Committees */}
          <Link to="/committees" className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="text-7xl mb-8">🏛️</div>
            <h2 className="text-4xl font-bold text-patriot-blue mb-4">Committees of Observation</h2>
            <p className="text-xl text-gray-600">Local and issue-based committees</p>
            <p className="mt-8 text-patriot-red font-semibold group-hover:underline">Go to Committees →</p>
          </Link>

          {/* My Podcasts */}
          <Link to="/my-podcasts" className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="text-7xl mb-8">🎙️</div>
            <h2 className="text-4xl font-bold text-patriot-blue mb-4">My Podcasts</h2>
            <p className="text-xl text-gray-600">Manage your podcasts and episodes</p>
            <p className="mt-8 text-patriot-red font-semibold group-hover:underline">Go to My Podcasts →</p>
          </Link>

          {/* My Reports */}
          <Link to="/member/reports" className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="text-7xl mb-8">📊</div>
            <h2 className="text-4xl font-bold text-patriot-blue mb-4">My Reports</h2>
            <p className="text-xl text-gray-600">Stats and activity reports</p>
            <p className="mt-8 text-patriot-red font-semibold group-hover:underline">View Reports →</p>
          </Link>

          {/* My Events */}
          <Link to="/member/events" className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="text-7xl mb-8">📅</div>
            <h2 className="text-4xl font-bold text-patriot-blue mb-4">My Events</h2>
            <p className="text-xl text-gray-600">Upcoming events and meetings</p>
            <p className="mt-8 text-patriot-red font-semibold group-hover:underline">View Events →</p>
          </Link>

          {/* My Committees */}
          <Link to="/committees" className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="text-7xl mb-8">🏛️</div>
            <h2 className="text-4xl font-bold text-patriot-blue mb-4">My Committees</h2>
            <p className="text-xl text-gray-600">All committees you belong to</p>
            <p className="mt-8 text-patriot-red font-semibold group-hover:underline">View Committees →</p>
          </Link>

          {/* My Messages */}
          <Link to="/member/messages" className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="text-7xl mb-8">💬</div>
            <h2 className="text-4xl font-bold text-patriot-blue mb-4">My Messages</h2>
            <p className="text-xl text-gray-600">Chats and notifications</p>
            <p className="mt-8 text-patriot-red font-semibold group-hover:underline">View Messages →</p>
          </Link>

          {/* My Tasks */}
          <Link to="/member/tasks" className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="text-7xl mb-8">✅</div>
            <h2 className="text-4xl font-bold text-patriot-blue mb-4">My Tasks</h2>
            <p className="text-xl text-gray-600">Your to-do list</p>
            <p className="mt-8 text-patriot-red font-semibold group-hover:underline">View Tasks →</p>
          </Link>

          {/* My Network */}
          <Link to="/member/network" className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="text-7xl mb-8">🤝</div>
            <h2 className="text-4xl font-bold text-patriot-blue mb-4">My Network</h2>
            <p className="text-xl text-gray-600">Connected patriots</p>
            <p className="mt-8 text-patriot-red font-semibold group-hover:underline">View Network →</p>
          </Link>

          {/* My Resources */}
          <Link to="/member/resources" className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="text-7xl mb-8">📚</div>
            <h2 className="text-4xl font-bold text-patriot-blue mb-4">My Resources</h2>
            <p className="text-xl text-gray-600">Saved links and tools</p>
            <p className="mt-8 text-patriot-red font-semibold group-hover:underline">View Resources →</p>
          </Link>

          {/* Help & Support */}
          <Link to="/member/help" className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-3xl p-12 text-center transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="text-7xl mb-8">🛟</div>
            <h2 className="text-4xl font-bold text-patriot-blue mb-4">Help & Support</h2>
            <p className="text-xl text-gray-600">Get help when needed</p>
            <p className="mt-8 text-patriot-red font-semibold group-hover:underline">Get Support →</p>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
