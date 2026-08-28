import React from 'react';
import { Link } from 'react-router-dom';

export default function House() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-patriot-blue mb-4">
          HOUSE (IN PROGRESS)
        </h1>
        <p className="text-xl text-gray-700 mb-10">
          The House tracker is not live yet.
        </p>
        <Link
          to="/senate"
          className="inline-block bg-patriot-blue hover:bg-blue-900 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-xl"
        >
          Open the Senate page →
        </Link>
      </main>
    </div>
  );
}
