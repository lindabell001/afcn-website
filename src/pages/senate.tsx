import React from 'react';
import { Link } from 'react-router-dom';

export default function Senate() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-3 sm:pt-4 pb-10">
        <div className="text-center mb-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-patriot-blue mb-1 leading-tight">
            22 FOR THE SENATE
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-patriot-red uppercase tracking-wide">
            MAKE SENATE AMERICA FIRST
          </p>
        </div>

        <div className="bg-white px-5 py-4 sm:px-8 sm:py-5 rounded-2xl border border-gray-200 mb-6 max-w-3xl mx-auto shadow-sm">
          <div className="text-center text-gray-800 text-base sm:text-lg leading-snug">
            <p className="mb-1">
              Public slate: <span className="font-bold text-patriot-blue">22 names only</span>.
            </p>
            <p className="mb-1">
              <span className="font-bold text-patriot-blue">10 America First incumbents</span>.
            </p>
            <p className="mb-4">
              <span className="font-bold text-patriot-blue">12 America First new nominees</span>.
            </p>

            <p className="text-lg sm:text-xl font-bold text-patriot-blue mb-1">
              Stop guessing. See who is America First.
            </p>
            <p className="text-sm sm:text-base text-gray-700 mb-3">
              Every senator. Every candidate. Yes, No, or Insufficient.
            </p>
            <Link
              to="/senate-tracker"
              className="block w-full bg-patriot-blue hover:bg-blue-900 text-white font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl text-base sm:text-lg text-center shadow-lg transition-all"
            >
              OPEN THE LIVE TRACKER →
            </Link>
            <p className="mt-2 text-xs sm:text-sm text-gray-600">
              The 22 names below are the public slate. The tracker is the full ledger — including Also Ran.
            </p>

            <p className="mt-3 text-sm sm:text-base">
              A name is added only after winning the nomination and scoring America First.
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Watch-list races stay off this page. Last updated: August 27, 2026
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl border border-gray-200">
            <h2 className="text-xl font-bold text-patriot-blue mb-4 text-center">
              AMERICA FIRST INCUMBENTS
            </h2>
            <ul className="space-y-2 text-gray-800">
              <li>AK — Dan Sullivan</li>
              <li>AR — Tom Cotton</li>
              <li>ID — Jim Risch</li>
              <li>KS — Roger Marshall</li>
              <li>MS — Cindy Hyde-Smith</li>
              <li>NE — Pete Ricketts</li>
              <li>OH — Jon Husted</li>
              <li>SD — Mike Rounds</li>
              <li>TN — Bill Hagerty</li>
              <li>WV — Shelley Moore Capito</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200">
            <h2 className="text-xl font-bold text-patriot-red mb-4 text-center">
              AMERICA FIRST NEW NOMINEES
            </h2>
            <ul className="space-y-2 text-gray-800">
              <li>AL — Barry Moore</li>
              <li>GA — Mike Collins</li>
              <li>IA — Ashley Hinson</li>
              <li>KY — Andy Barr</li>
              <li>LA — Julia Letlow</li>
              <li>MI — Mike Rogers</li>
              <li>MT — Kurt Alme</li>
              <li>NC — Michael Whatley</li>
              <li>OK — Kevin Hern</li>
              <li>SC — Darline Graham</li>
              <li>TX — Ken Paxton</li>
              <li>WY — Harriet Hageman</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
          <Link
            to="/become-one"
            className="bg-patriot-blue hover:bg-blue-900 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-xl text-base text-center shadow-lg transition-all"
          >
            JOIN $25
          </Link>

          <a
            href="https://givingtools.com/give/4206"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-patriot-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-xl text-base text-center shadow-lg transition-all"
          >
            DONATE TO AFCN
          </a>

          <Link
            to="/tavern"
            className="bg-patriot-blue hover:bg-blue-900 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-xl text-base text-center shadow-lg transition-all"
          >
            ENTER THE TAVERN
          </Link>
        </div>
      </main>
    </div>
  );
}
