import React from 'react';
import { Link } from 'react-router-dom';

export default function Senate() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-patriot-blue mb-3">
            22 FOR THE SENATE
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-patriot-red uppercase tracking-wide">
            MAKE SENATE AMERICA FIRST
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 mb-10 max-w-3xl mx-auto shadow-sm">
          <div className="space-y-4 text-gray-800 text-lg md:text-xl leading-relaxed text-center">
            <p className="font-bold text-patriot-blue">
              AFCN has the score. You don’t have to hunt.
            </p>

            <p>Vetted people are listed as candidates.</p>
            <p>Win the primary: Nominee.</p>
            <p>Lose: Also Ran.</p>

            <p>The list is currently 22.</p>

            <p>
              10 incumbents · 12 nominees
              <br />
              2 still in a primary (Sununu, Katz).
            </p>

            <p>A republic is kept by holding the elected official accountable. We do.</p>
            <p>Votes. Lobbyists. All public. Easy to find.</p>

            <p>Listed below are the 22 best.</p>
            <p>Everyone else is on the tracker.</p>
          </div>

          <Link
            to="/senate-tracker"
            className="mt-6 block w-full bg-patriot-blue hover:bg-blue-900 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-xl text-base text-center shadow-lg transition-all"
          >
            OPEN THE LIVE TRACKER →
          </Link>
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
