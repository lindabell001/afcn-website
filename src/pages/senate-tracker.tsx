import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

function formatAmericaFirst(value) {
  const v = String(value ?? '').trim().toLowerCase();
  if (value === true || v === 'true' || v === 'yes' || v === 'y') return 'YES';
  if (v === 'insufficient') return 'INSUFFICIENT';
  return 'NO';
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
        const { data, error } = await supabase
          .from('people')
          .select('full_name, state, party, status, current_office, america_first, core_1_send_them_home, core_2_election_enforcement, core_3_america_first_foreign_policy, core_4_american_workers_trade, core_5_constitution_court_cases, reelection, election_year, senate_class')
          .order('state', { ascending: true });

        if (error) throw error;
        setPeople(data || []);
      } catch (err) {
        console.error(err);
        setError('Could not load data. Please check Supabase connection.');
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

    const afLabel = formatAmericaFirst(person.america_first);
    if (afFilter === 'YES' && afLabel !== 'YES') return false;
    if (afFilter === 'NO' && afLabel !== 'NO') return false;
    if (afFilter === 'INSUFFICIENT' && afLabel !== 'INSUFFICIENT') return false;

    if (yearFilter !== 'All' && getYear(person) !== yearFilter) return false;

    return true;
  });

  const afClass = (label) =>
    label === 'YES'
      ? 'text-green-600 font-bold'
      : label === 'INSUFFICIENT'
      ? 'text-yellow-600 font-bold'
      : 'text-red-600 font-bold';

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
            <p className="mb-2">This is the live Senate record — all 100, plus 2026 challengers.</p>
            <p>The table opens on 2026 because those are the seats up now.</p>
            <p>Change Election Year to All to see the rest of the chamber.</p>
            <p className="mb-2">Also Ran is the other tab.</p>
            <p>Names, status, and scores are active now.</p>
            <p>Search for bills, votes, and money — coming on this page.</p>
            <p className="mt-2">Win the primary: Nominee.</p>
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
                <option value="YES">YES</option>
                <option value="NO">NO</option>
                <option value="INSUFFICIENT">INSUFFICIENT</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-0.5">Election Year</label>
              <select value={yearFilter} onChange={(e) => setYearFilter(e.target.value)} className="w-full border border-gray-300 rounded-md px-2 py-1.5 text-sm">
                <option value="All">All</option>
                <option value="2026">2026 / Class 2</option>
                <option value="2028">2028 / Class 3</option>
                <option value="2030">2030 / Class 1</option>
              </select>
            </div>
          </div>
        </div>

        {loading && (
          <div className="text-center py-10 text-lg text-patriot-blue font-semibold">
            Loading America First scores…
          </div>
        )}

        {error && (
          <div className="text-center py-10 text-red-600 text-lg">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="md:hidden space-y-3 pb-8">
              {filtered.length === 0 ? (
                <p className="text-center py-8 text-gray-500">No matching records found.</p>
              ) : (
                filtered.map((person, index) => {
                  const afLabel = formatAmericaFirst(person.america_first);
                  const year = getYear(person) || '—';
                  const isOpen = openCard === index;
                  return (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-4">
                      <p className="font-bold text-patriot-blue text-lg leading-tight">{person.full_name || '—'}</p>
                      <p className="text-sm text-gray-700 mt-1">
                        {[person.state, person.party, person.status].filter(Boolean).join(' · ') || '—'}
                      </p>
                      <p className="mt-2 text-sm">
                        America First:{' '}
                        <span className={afClass(afLabel)}>{afLabel}</span>
                      </p>
                      <p className="text-sm text-gray-600">Election year: {year}</p>
                      <button
                        type="button"
                        onClick={() => setOpenCard(isOpen ? null : index)}
                        className="mt-2 text-sm font-semibold text-patriot-blue underline"
                      >
                        {isOpen ? 'Hide scores' : 'Show issue scores'}
                      </button>
                      {isOpen && (
                        <div className="mt-2 text-sm text-gray-800 space-y-1 border-t pt-2">
                          <p>Send Them Home: {person.core_1_send_them_home || '—'}</p>
                          <p>Election Enforcement: {person.core_2_election_enforcement || '—'}</p>
                          <p>Foreign Policy: {person.core_3_america_first_foreign_policy || '—'}</p>
                          <p>American Workers: {person.core_4_american_workers_trade || '—'}</p>
                          <p>Constitution: {person.core_5_constitution_court_cases || '—'}</p>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            <div className="hidden md:block overflow-x-auto bg-white rounded-xl border border-gray-200 shadow-sm">
              <table className="min-w-full text-sm">
                <thead className="bg-patriot-blue text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">State</th>
                    <th className="px-4 py-2 text-left">Party</th>
                    <th className="px-4 py-2 text-left">Status</th>
                    <th className="px-4 py-2 text-left">Office</th>
                    <th className="px-4 py-2 text-left">America First?</th>
                    <th className="px-4 py-2 text-left">Send Them Home</th>
                    <th className="px-4 py-2 text-left">Election Enforcement</th>
                    <th className="px-4 py-2 text-left">Foreign Policy</th>
                    <th className="px-4 py-2 text-left">American Workers</th>
                    <th className="px-4 py-2 text-left">Constitution</th>
                    <th className="px-4 py-2 text-left">Reelection</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={12} className="text-center py-10 text-gray-500">
                        No matching records found.
                      </td>
                    </tr>
                  ) : (
                    filtered.map((person, index) => {
                      const afLabel = formatAmericaFirst(person.america_first);
                      return (
                        <tr key={index} className="border-t hover:bg-gray-50">
                          <td className="px-4 py-2 font-medium">{person.full_name || '—'}</td>
                          <td className="px-4 py-2">{person.state || '—'}</td>
                          <td className="px-4 py-2">{person.party || '—'}</td>
                          <td className="px-4 py-2">{person.status || '—'}</td>
                          <td className="px-4 py-2">{person.current_office || '—'}</td>
                          <td className="px-4 py-2">
                            <span className={afClass(afLabel)}>{afLabel}</span>
                          </td>
                          <td className="px-4 py-2">{person.core_1_send_them_home || '—'}</td>
                          <td className="px-4 py-2">{person.core_2_election_enforcement || '—'}</td>
                          <td className="px-4 py-2">{person.core_3_america_first_foreign_policy || '—'}</td>
                          <td className="px-4 py-2">{person.core_4_american_workers_trade || '—'}</td>
                          <td className="px-4 py-2">{person.core_5_constitution_court_cases || '—'}</td>
                          <td className="px-4 py-2">{person.reelection || '—'}</td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}

        <div className="text-center mt-8">
          <Link
            to="/senate"
            className="inline-block bg-patriot-blue hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-lg"
          >
            ← Back to 22 FOR THE SENATE
          </Link>
        </div>
      </main>
    </div>
  );
}
