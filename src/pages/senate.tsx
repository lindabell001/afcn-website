// src/pages/senate.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export default function Senate() {
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
          .select('*')
          .order('state', { ascending: true });

        if (error) throw error;
        setPeople(data || []);
      } catch (err) {
        console.error(err);
        setError('Could not load data. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchPeople();
  }, []);

  // Get unique values for filters
  const states = ['All', ...new Set(people.map(p => p.state).filter(Boolean))].sort();
  const parties = ['All', ...new Set(people.map(p => p.party).filter(Boolean))].sort();

  // Apply filters
  const filtered = people.filter(person => {
    if (stateFilter !== 'All' && person.state !== stateFilter) return false;
    if (partyFilter !== 'All' && person.party !== partyFilter) return false;
    if (afFilter === 'Yes' && person.america_first !== true && person.america_first !== 'Yes') return false;
    if (afFilter === 'No' && (person.america_first === true || person.america_first === 'Yes')) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-6xl mx-auto px-6 py-16">

        {/* Hero */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-patriot-blue mb-3">
            MAKE SENATE AMERICA FIRST
          </h1>
          <p className="text-xl text-patriot-red font-semibold">
            Tracking Every Senator — Holding Them Accountable
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 mb-8 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-patriot-blue mb-3 text-center">
            No more guessing who’s America First.
          </h2>
          <div className="space-y-2 text-gray-700 text-base">
            <p>This is a public scorecard that rates every Senate candidate and incumbent on the issues that actually matter:</p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>Border security</li>
              <li>Election integrity</li>
              <li>American workers</li>
              <li>The Constitution</li>
              <li>America First foreign policy</li>
            </ul>
            <p>Clear scores. Real evidence. One place.</p>
            <p className="font-semibold text-patriot-blue">And this is only the beginning.</p>
          </div>
        </div>

        {/* Smaller Highlight Box */}
        <div className="bg-patriot-blue text-white px-6 py-4 rounded-xl mb-8 text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-xl">
            If all non-incumbent America First Republicans win, we add <span className="text-yellow-300 font-bold">14 new America First Senators</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="https://givingtools.com/give/4206"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-patriot-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-8 py-3 rounded-lg text-center shadow-lg"
          >
            DONATE NOW
          </a>
          <Link
            to="/become-one"
            className="bg-patriot-blue hover:bg-blue-800 text-white font-bold uppercase tracking-wider px-8 py-3 rounded-lg text-center shadow-lg"
          >
            BECOME A MEMBER ($25/year)
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
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        {/* Loading / Error / Data */}
        {loading && (
          <div className="text-center py-16 text-xl text-patriot-blue font-semibold">
            Loading America First scores…
          </div>
        )}

        {error && (
          <div className="text-center py-16 text-red-600 text-xl">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.length === 0 ? (
              <div className="col-span-full text-center py-16 text-gray-500 text-xl">
                No matching records found.
              </div>
            ) : (
              filtered.map((person) => (
                <div
                  key={person.id || person.full_name}
                  className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-lg font-bold text-patriot-blue mb-1">
                    {person.full_name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {person.state} • {person.party}
                  </p>

                  <div className="space-y-1 text-sm">
                    <p><span className="font-semibold">Status:</span> {person.status || '—'}</p>
                    <p><span className="font-semibold">Office:</span> {person.current_office || '—'}</p>
                    <p>
                      <span className="font-semibold">America First:</span>{' '}
                      <span className={person.america_first === true || person.america_first === 'Yes' ? 'text-green-600 font-bold' : 'text-red-600'}>
                        {person.america_first === true || person.america_first === 'Yes' ? 'YES' : 'NO'}
                      </span>
                    </p>
                  </div>

                  {(person.website || person.x_handle) && (
                    <div className="mt-3 flex gap-3 text-sm">
                      {person.website && (
                        <a href={person.website} target="_blank" rel="noopener noreferrer" className="text-patriot-blue hover:underline">
                          Website
                        </a>
                      )}
                      {person.x_handle && (
                        <a href={`https://x.com/${person.x_handle.replace('@','')}`} target="_blank" rel="noopener noreferrer" className="text-patriot-blue hover:underline">
                          X
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <Link
            to="/take-action"
            className="inline-block bg-patriot-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-10 py-3 rounded-lg shadow-lg"
          >
            TAKE ACTION →
          </Link>
        </div>

      </main>
    </div>
  );
}
