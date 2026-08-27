import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import SiteFooter from '../../components/SiteFooter';

export default function TavernIssues() {
  const [checking, setChecking] = useState(true);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setCurrentUser(data.user);
      setChecking(false);
    });
  }, []);

  if (checking) {
    return <div className="text-center py-20 text-2xl">Loading Pubs by Issue...</div>;
  }

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-background">
        <main className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-patriot-blue mb-6">
            Pubs by Issue
          </h1>
          <p className="text-xl text-gray-700 mb-4">Members only.</p>
          <p className="text-lg text-gray-600 mb-10">
            Log in or become a member to enter Issue Pubs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/member-login"
              className="bg-patriot-blue hover:bg-blue-900 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-xl"
            >
              Member Login
            </Link>
            <Link
              to="/become-one"
              className="bg-patriot-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-xl"
            >
              Become a Member – $25/Year
            </Link>
          </div>
          <p className="mt-10">
            <Link to="/tavern" className="text-patriot-blue font-semibold underline">
              ← Back to Tavern
            </Link>
          </p>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-patriot-blue mb-4">
            Pubs by Issue
          </h1>
          <p className="text-xl text-gray-600">Focused discussion rooms • Members only</p>
          <p className="mt-4">
            <Link to="/tavern" className="text-patriot-blue font-semibold underline">
              ← Back to Tavern
            </Link>
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <Link
            to="/tavern/chat/america-first-2026-senate"
            className="block bg-white p-10 rounded-3xl border-2 border-patriot-blue hover:border-patriot-red text-center transition-all hover:shadow-xl"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-patriot-blue mb-3">
              America First 2026 Senate
            </h2>
            <p className="text-gray-600 mb-4">Public slate discussion • Members only</p>
            <p className="text-patriot-red font-semibold">Join the conversation →</p>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
