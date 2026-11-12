import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { senateDb } from '../../lib/senateClient';

function slugify(name) {
  return String(name || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function isTrumpEndorsed(value) {
  return String(value ?? '').trim().toUpperCase() === 'T';
}

function isRatedAf(value) {
  const n = Number(String(value ?? '').trim());
  return !Number.isNaN(n) && String(value).trim() !== '' && n >= 20;
}

export default function SenatorPage() {
  const { slug } = useParams();
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const { data, error } = await senateDb
          .from('people')
          .select('*');

        if (error) throw error;

        const match = (data || []).find(p => slugify(p.full_name) === slug);
        setPerson(match || null);
      } catch (err) {
        console.error(err);
        setError('Could not load this senator.');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <main className="max-w-4xl mx-auto px-6 py-16 text-center text-patriot-blue text-xl">
          Loading…
        </main>
      </div>
    );
  }

  if (error || !person) {
    return (
      <div className="min-h-screen bg-background">
        <main className="max-w-4xl mx-auto px-6 py-16 text-center">
          <p className="text-xl text-red-600 mb-6">{error || 'Senator not found.'}</p>
          <Link to="/senate-tracker" className="text-patriot-blue underline">
            ← Back to the tracker
          </Link>
        </main>
      </div>
    );
  }

  const trump = isTrumpEndorsed(person.trump_endorsed);
  const rated = isRatedAf(person.america_first);

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/senate-tracker" className="text-patriot-red hover:underline mb-8 inline-block">
          ← Back to the tracker
        </Link>

        <h1 className="text-5xl font-bold text-patriot-blue mb-2">
          {person.full_name}
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          {[person.state, person.party, person.status].filter(Boolean).join(' · ')}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {trump && (
            <span className="inline-block bg-patriot-red text-white text-sm font-semibold px-3 py-1 rounded-full">
              Trump endorsed
            </span>
          )}
          {rated && (
            <span className="inline-block bg-patriot-blue text-white text-sm font-semibold px-3 py-1 rounded-full">
              Rated AF
            </span>
          )}
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-patriot-blue mb-4">America First Score</h2>
          <p className="text-4xl font-bold text-patriot-blue">
            {person.america_first ?? '—'}
          </p>
          <p className="text-gray-600 mt-2">
            Rated AF when the score is 20 or higher.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-patriot-blue mb-4">Current Active Action</h2>
          <p className="text-gray-700">
            One clear next step for citizens will appear here.
          </p>
          <Link
            to="/take-action"
            className="mt-6 inline-block bg-patriot-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-xl"
          >
            Take Action
          </Link>
        </div>

        <div className="text-sm text-gray-500">
          More records (organizations, bills, votes, money) will be added to this page next.
        </div>
      </main>
    </div>
  );
}
