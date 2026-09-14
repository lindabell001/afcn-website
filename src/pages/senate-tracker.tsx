import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { senateDb } from '../lib/senateClient';

function isTrumpEndorsed(value) {
  const v = String(value ?? '').trim().toUpperCase();
  return v === 'T' || v === 'TRUE' || v === 'YES' || v === 'Y';
}

function trumpColumn(value) {
  if (value === null || value === undefined || String(value).trim() === '') return '';
  if (isTrumpEndorsed(value)) return 'Yes';
  return '';
}

function americaFirstColumn(value) {
  if (value === null || value === undefined || String(value).trim() === '') return '';
  const raw = String(value).trim();
  if (raw.toLowerCase() === 'insufficient') return 'Insufficient';
  const n = Number(raw);
  if (!Number.isNaN(n)) return String(n);
  return raw;
}

function isRatedAf(value) {
  const n = Number(String(value ?? '').trim());
  return !Number.isNaN(n) && n >= 20;
}

function afFilterBucket(value) {
  if (value === null || value === undefined || String(value).trim() === '') return '';
  const raw = String(value).trim();
  if (raw.toLowerCase() === 'insufficient') return 'INSUFFICIENT';
  const n = Number(raw);
  if (!Number.isNaN(n)) return n >= 20 ? 'YES' : 'NO';
  return '';
}

function Badges({ person }) {
  const trump = isTrumpEndorsed(person.trump_endorsed);
  const rated = isRatedAf(person.america_first);
  if (!trump && !rated) return null;
  return (
    <span className="inline-flex flex-wrap gap-1 mt-1">
      {trump && (
        <span className="inline-block bg-patriot-red text-white text-xs font-semibold px-2 py-0.5 rounded-full">
          Trump endorsed
        </span>
      )}
      {rated && (
        <span className="inline-block bg-patriot-blue text-white text-xs font-semibold px-2 py-0.5 rounded-full">
          Rated AF
        </span>
      )}
    </span>
  );
}

export default function SenateTracker() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [stateFilter, setStateFilter] = useState('All');
  const [partyFilter, setPartyFilter] = useState('All');
  const [afFilter, setAfFilter] = useState('All');
  const [yearFilter, setYearFilter] = useState('2026');
  const [viewMode, setViewMode] = useState('current');
  const [openCard, setOpenCard] = useState(null);

  useEffect(() => {
    async function fetchPeople() {
      try {
        setLoading(true);
        const { data, error } = await senateDb
          .from('people')
          .select('full_name, state, party, status, current_office, america_first, trump_endorsed, core_1_send_them_home, core_2_election_enforcement, core_3_america_first_foreign_policy, core_4_american_workers_trade, core_5_constitution_court_cases, reelection, election_year, senate_class')
          .order('state', { ascending: true });

        if (error) throw error;
        setPeople(data || []);
      } catch (err) {
        console.error(err);
        setError('Could not load data. Please check Senate Supabase connection.');
      } finally {
        setLoading(false);
      }
    }

    fetchPeople();
  }, []);

  const states = ['All', ...new Set(people.map(p => p.state).filter(Boolean))].sort();
  const parties = ['All', ...new Set(people.map(p => p.party).filter(Boolean))].sort();

  const getYear = (person) => {
    if (person.election_year) return String(person.election_year);
    if (person.senate_class === 2 || person.senate_class === '2') return '2026';
    if (person.senate_class === 3 || person.senate_class === '3') return '2028';
    if (person.senate_class === 1 || person.senate_class === '1') return '2030';
    const reelection = String(person.reelection || '');
    if (reelection.includes('2026')) return '2026';
    if (reelection.includes('2028')) return '2028';
    if (reelection.includes('2030')) return '2030';
    return '';
  };

  const filtered = people.filter(person => {
    if (viewMode === 'current') {
      if (!['Candidate', 'Senator'].includes(person.status)) return false;
    } else {
      if (!['Lost Primary', 'Withdrawn', 'Former'].includes(person.status)) return false;
    }

    if (stateFilter !== 'All' && person.state !== stateFilter) return false;
    if (partyFilter !== 'All' && person.party !== partyFilter) return false;

    const bucket = afFilterBucket(person.america_first);
    if (afFilter === 'YES' && bucket !== 'YES') return false;
    if (afFilter === 'NO' && bucket !== 'NO') return false;
    if (afFilter === 'INSUFFICIENT' && bucket !== 'INSUFFICIENT') return false;

    if (yearFilter !== 'All' && getYear(person) !== yearFilter) return false;

    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 pt-3 pb-16">
        <div className="text-center mb-3">
          <h1 className="text-3xl md:text-4xl font-bold text-patriot-blue leading-tight">
            MAKE SENATE AMERICA FIRST
          </h1>
        </div>

        <div className="bg-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl border border-gray-200 mb-3 max-w-4xl mx-auto">
          <div className="text-center text-gray-700 text-sm md:text-base leading-snug">
            <p className="text-lg md:text-xl font-bold text-patriot-blue mb-2">
              Keep the Republic starts here.
            </p>
            <p>This is the live Senate record — all 100, plus 2026 challengers.</p>
            <p className="mb-2">Win the primary: Nominee.</p>
            <p>The table opens on 2026 because those are the seats up now.</p>
            <p>Change Election Year to All to see the rest of the chamber.</p>
            <p className="mb-2">Also Ran is the other tab.</p>
            <p>Names, status, and scores are active now.</p>
            <p>Search for bills, votes, and money — coming on this page.</p>
          </div>
        </div>

        <div className="flex flex-row gap-3 justify-center mb-3">
          <a
            href="https://givingtools.com/give/4206"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-patriot-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-5 py-2 rounded-lg text-sm text-center shadow"
          >
            DONATE NOW
          </a>
          <Link
            to="/become-one"
            className="bg-patriot-blue hover:bg-blue-900 text-white font-bold uppercase tracking-wider px-5 py-2 rounded-lg text-sm text-center shadow"
          >
            JOIN $25
          </Link>
        </div>

        <div className="bg-white p-3 rounded-xl border border-gray-200 mb-3">
          <div className="flex justify-center mb-2">
            <div className="inline-flex rounded-lg border border-gray-300 overflow-hidden">
              <button
                onClick={() => setViewMode('current')}
                className={`px-3 py-1.5 font-semibold text-xs uppercase tracking-wider ${
                  viewMode === 'current' ? 'bg-patriot-blue text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Current Candidates
              </button>
              <button
                onClick={() => setViewMode('historical')}
                className={`px-3 py-1.5 font-semibold text-xs uppercase tracking-wider ${
                  viewMode === 'historical' ? 'bg-patriot-blue text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Historical / Also Ran
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 items-end">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-0.5">State</label>
              <select value={stateFilter} onChange={(e) => setStateFilter(e.target.value)} className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-sm">
                {states.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-0.5">Party</label>
              <select value={partyFilter} onChange={(e) => setPartyFilter(e.target.value)} className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-sm">
                {parties.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-0.5">America First?</label>
              <select value={afFilter} onChange={(e) => setAfFilter(e.target.value)} className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-sm">
                <option value="All">All</option>
                <option value="YES">20 or more</option>
                <option value="NO">Under 20</option>
                <option value="INSUFFICIENT">Insufficient</option>
              </select>
            </
