// src/pages/senate-tracker.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export default function SenateTracker() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filters
  const [stateFilter, setStateFilter] = useState('All');
  const [partyFilter, setPartyFilter] = useState('All');
  const [afFilter, setAfFilter] = useState('All');

  useEffect(() => {
    async function fetchPeople() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('people')
          .select('full_name, state, party, status, current_office, america_first, core_1_send_them_home, core_2_election_enforcement, core_3_america_first_foreign_policy, core_4_american_workers_trade, core_5_constitution_court_cases, reelection')
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

  // Unique values for filters
  const states = ['All', ...new Set(people.map(p => p.state).filter(Boolean))].sort();
  const parties = ['All', ...new Set(people.map(p => p.party).filter(Boolean))].sort();

  // Apply filters
  const filtered = people.filter(person => {
    if (stateFilter !== 'All' && person.state !== stateFilter) return false;
    if (partyFilter !== 'All' && person.party !== partyFilter) return false;

    if (afFilter === 'true' && person.america_first !== true && person.america_first !== 'true' && person.america_first !== 'Yes') return false;
    if (afFilter === 'false' && (person.america_first === true || person.america_first === 'true' || person.america_first === 'Yes')) return false;
    if (afFilter === 'Insufficient' && person.america_first !== 'Insufficient') return false;

    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 py-12">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-patriot-blue mb-3">
            Senate Tracker – Live Data
          </h1>
          <p className="text-lg text-gray-600">
            Real-time America First scores from Supabase
          </p>
          <Link to="/senate" className="text-patriot-red hover:underline mt-2 inline-block">
            ← Back to Introduction
          </Link>
        </div>

        {/* Filters */}
        <div className="bg-white p-5 rounded-xl border border-gray-200 mb-8 flex flex-wrap gap-4 justify-center items-end">
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">State</label>
            <select
              value={stateFilter}
              onChange={(e) => setStateFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2"
            >
              {states.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Party</label>
            <select
              value={partyFilter}
              onChange={(e) => setPartyFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2"
            >
              {parties.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">America First</label>
            <select
              value={afFilter}
              onChange={(e) => setAfFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2"
            >
              <option value="All">All</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
              <option value="Insufficient">Insufficient</option>
            </select>
          </div>
        </div>

        {/* Loading / Error */}
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

        {/* Live Table */}
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
                  <th className="px-4 py-3 text-left">America First</th>
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
            ← Back to Introduction
          </Link>
        </div>

      </main>
    </div>
  );
}
