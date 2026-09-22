import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { senateDb } from '../lib/senateClient';

function isRatedAf(value) {
  const n = Number(String(value ?? '').trim());
  return !Number.isNaN(n) && String(value).trim() !== '' && n >= 20;
}

function isSeated(person) {
  const seated = String(person.how_seated || '').trim().toLowerCase();
  return seated === 'elected' || seated === 'appointed';
}

function getYear(person) {
  if (person.election_year) return String(person.election_year);
  if (person.senate_class === 2 || person.senate_class === '2') return '2026';
  if (person.senate_class === 3 || person.senate_class === '3') return '2028';
  if (person.senate_class === 1 || person.senate_class === '1') return '2030';
  const reelection = String(person.reelection || '');
  if (reelection.includes('2026')) return '2026';
  if (reelection.includes('2028')) return '2028';
  if (reelection.includes('2030')) return '2030';
  return '';
}

export default function Senate() {
  const [ratedOnBallot, setRatedOnBallot] = useState(null);
  const [alreadyInOffice, setAlreadyInOffice] = useState(null);
  const [newNominees, setNewNominees] = useState(null);

  useEffect(() => {
    async function loadCounts() {
      const { data, error } = await senateDb
        .from('people')
        .select('status, america_first, how_seated, election_year, senate_class, reelection, trump_endorsed');

      if (error || !data) {
        setRatedOnBallot(0);
        setAlreadyInOffice(0);
        setNewNominees(0);
        return;
      }

      const ballot = data.filter((person) => {
        const status = String(person.status || '').trim();
        if (status !== 'Candidate' && status !== 'Nominee') return false;
        if (getYear(person) !== '2026') return false;
        return isRatedAf(person.america_first);
      });

      const seated = ballot.filter(isSeated);
      const fresh = ballot.filter((person) => !isSeated(person));

      setRatedOnBallot(ballot.length);
      setAlreadyInOffice(seated.length);
      setNewNominees(fresh.length);
    }

    loadCounts();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-10">
        <div className="text-center mb-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-patriot-red uppercase tracking-wide leading-tight mb-2">
            MAKE SENATE
            <br />
            AMERICA FIRST
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-patriot-blue">
            Rated AF on the 2026 ballot: {ratedOnBallot === null ? '…' : ratedOnBallot}
          </p>
        </div>

        <div className="bg-white px-5 py-5 sm:px-8 sm:py-6 rounded-2xl border border-gray-200 mb-6 max-w-3xl mx-auto shadow-sm">
          <div className="text-center text-gray-800 text-base sm:text-lg leading-[1.5]">
            <p className="font-bold text-patriot-blue mb-3">
              AFCN has the score. You don’t have to hunt.
            </p>

            <p>Vetted people are listed as candidates.</p>
            <p>Win the primary: Nominee.</p>
            <p>Lose: Also Ran.</p>

            <p className="mt-3">Already in office: {alreadyInOffice === null ? '…' : alreadyInOffice}</p>
            <p>New nominees: {newNominees === null ? '…' : newNominees}</p>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Trump Endorsed is a separate badge. Rated AF is a score of 20 or more.
            </p>

            <p className="mt-3">Listed below are the 2026 America First names.</p>
            <p>Everyone else is on the tracker.</p>

            <p className="mt-3">Ready now: names, status, and America First as Yes, No, or Insufficient.</p>
            <p>When finished: votes, lobbyists, and money on the same public ledger.</p>
            <p>That record is being built. It is not all live yet.</p>
          </div>

          <Link
            to="/senate-tracker"
            className="mt-5 block w-full bg-patriot-blue hover:bg-blue-900 text-white font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl text-base sm:text-lg text-center shadow-lg transition-all"
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
              <li>
                DE — Mike Katz
                <span className="block text-sm text-gray-600">
                  Delaware Republican nominee. On the November ballot vs Chris Coons.
                </span>
              </li>
              <li>GA — Mike Collins</li>
              <li>IA — Ashley Hinson</li>
              <li>KY — Andy Barr</li>
              <li>LA — Julia Letlow</li>
              <li>MI — Mike Rogers</li>
              <li>MT — Kurt Alme</li>
              <li>NC — Michael Whatley</li>
              <li>
                NH — John E. Sununu
                <span className="block text-sm text-gray-600">
                  New Hampshire Republican nominee. On the November ballot vs Chris Pappas.
                </span>
              </li>
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
