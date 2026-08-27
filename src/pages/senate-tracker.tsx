import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export default function SenateTracker() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [stateFilter, setStateFilter] = useState('All');
  const [partyFilter, setPartyFilter] = useState('All');
  const [afFilter, setAfFilter] = useState('All');
  const [yearFilter, setYearFilter] = useState('All');
  const [viewMode, setViewMode] = useState('current');

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

    if (afFilter === 'true' && person.america_first !== true && person.america_first !== 'true' && person.america_first !== 'Yes') return false;
    if (afFilter === 'false' && (person.america_first === true || person.america_first === 'true' || person.america_first === 'Yes')) return false;
    if (afFilter === 'Insufficient' && person.america_first !== 'Insufficient') return false;

    if (yearFilter !== 'All' && getYear(person) !== yearFilter) return false;

    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-patriot-blue mb-3">
            MAKE SENATE AMERICA FIRST
          </h1>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 mb-8 max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-patriot-blue mb-4 text-center">
            No more guessing who actually stands with America.
          </h2>
          <div className="space-y-4 text-gray-700 text-base md:text-lg text-center">
            <p>This live tracker scores every U.S. Senate candidate and incumbent on the issues that matter most:</p>
            <p className="font-semibold text-patriot-blue text-lg md:text-xl leading-relaxed">
              Border security * Election integrity * American workers * The Constitution * America First foreign policy
            </p>
            <p className="text-sm md:text-base text-gray-600">
              <strong>How to use this tracker:</strong> Filter by State, Party, America First status, or election year.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://givingtools.com/give/4206"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-patriot-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-10 py-4 rounded-lg text-lg text-center shadow-lg"
          >
            DONATE NOW
          </a>
          <Link
            to="/become-one"
            className="bg-patriot-blue hover:bg-blue-900 text-white font-bold uppercase tracking-wider px-10 py-4 rounded-lg text-lg text-center shadow-lg"
          >
            JOIN $25
          </Link>
        </div>

        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-lg border border-gray-300 overflow-hidden">
            <button
              onClick={() => setViewMode('current')}
              className={`px-6 py-3 font-semibold text-sm uppercase tracking-wider ${
                viewMode === 'current' ? 'bg-patriot-blue text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Current Candidates
            </button>
            <button
              onClick={() => setViewMode('historical')}
              className={`px-6 py-3 font-semibold text-sm uppercase tracking-wider ${
                viewMode === 'historical' ? 'bg-patriot-blue text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Historical / Also Ran
            </button>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 mb-8 flex flex-wrap gap-4 justify-center items-end">
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">State</label>
            <select value={stateFilter} onChange={(e) => setStateFilter(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2">
              {states.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Party</label>
            <select value={partyFilter} onChange={(e) => setPartyFilter(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2">
              {parties.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">America First?</label>
            <select value={afFilter} onChange={(e) => setAfFilter(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2">
              <option value="All">All</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
              <option value="Insufficient">Insufficient</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Election Year</label>
            <select value={yearFilter} onChange={(e) => setYearFilter(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2">
              <option value="All">All</option>
              <option value="2026">2026 / Class 2</option>
              <option value="2028">2028 / Class 3</option>
              <option value="2030">2030 / Class 1</option>
            </select>
          </div>
        </div>

        {loading && (
          <div className="text-center py-20 text-xl text-patriot-blue font-semibold">
            Loading America First scores…
          </div>
        )}

        {error && (
          <div className="text-center py-20 text-red-600 text-xl">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="overflow-x-auto bg-white rounded-xl border border-gray-200 shadow-sm">
            <table className="min-w-full text-sm">
              <thead className="bg-patriot-blue text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">State</th>
                  <th className="px-4 py-3 text-left">Party</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Office</th>
                  <th className="px-4 py-3 text-left">America First?</th>
                  <th className="px-4 py-3 text-left">Send Them Home</th>
                  <th className="px-4 py-3 text-left">Election Enforcement</th>
                  <th className="px-4 py-3 text-left">Foreign Policy</th>
                  <th className="px-4 py-3 text-left">American Workers</th>
                  <th className="px-4 py-3 text-left">Constitution</th>
                  <th className="px-4 py-3 text-left">Reelection</th>
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
                  filtered.map((person, index) => (
                    <tr key={index} className="border-t hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">{person.full_name || '—'}</td>
                      <td className="px-4 py-3">{person.state || '—'}</td>
                      <td className="px-4 py-3">{person.party || '—'}</td>
                      <td className="px-4 py-3">{person.status || '—'}</td>
                      <td className="px-4 py-3">{person.current_office || '—'}</td>
                      <td className="px-4 py-3">
                        <span className={
                          person.america_first === true || person.america_first === 'true' || person.america_first === 'Yes'
                            ? 'text-green-600 font-bold'
                            : person.america_first === 'Insufficient'
                            ? 'text-yellow-600'
                            : 'text-red-600'
                        }>
                          {person.america_first === true || person.america_first === 'true' || person.america_first === 'Yes'
                            ? 'YES'
                            : person.america_first || 'NO'}
                        </span>
                      </td>
                      <td className="px-4 py-3">{person.core_1_send_them_home || '—'}</td>
                      <td className="px-4 py-3">{person.core_2_election_enforcement || '—'}</td>
                      <td className="px-4 py-3">{person.core_3_america_first_foreign_policy || '—'}</td>
                      <td className="px-4 py-3">{person.core_4_american_workers_trade || '—'}</td>
                      <td className="px-4 py-3">{person.core_5_constitution_court_cases || '—'}</td>
                      <td className="px-4 py-3">{person.reelection || '—'}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        <div className="text-center mt-10">
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
