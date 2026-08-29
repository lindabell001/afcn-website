import React from 'react';
import { Link } from 'react-router-dom';

export default function House() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-3xl mx-auto px-6 py-12 sm:py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-patriot-blue mb-3">
            House of Representatives
          </h1>
          <p className="text-xl text-gray-700">
            In progress. Same method as the Senate.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 text-gray-800 text-lg leading-relaxed space-y-4">
          <p>
            We score who is America First. We put the record in public. We organize voters to elect them — and hold them accountable after.
          </p>

          <p>Yes. No. Insufficient.</p>
          <p>Nominee — AF Yes. Nominee — AF No.</p>
          <p>America First or we primary them later.</p>

          <p>This is one of the tools We the People use to keep the Republic.</p>

          <h2 className="text-2xl font-bold text-patriot-blue pt-2">Why you will use it</h2>

          <p className="font-semibold">As one person</p>
          <p>
            You look up the name on your ballot. Is this person America First? Then you vote, you call, or you wait for the next primary — using the public record, not a thread of guesses.
          </p>

          <p className="font-semibold">As a member</p>
          <p>You take a chair.</p>
          <p>The tavern is the nationwide conversation.</p>
          <p>Pubs are smaller rooms — by place or by issue, nationwide or local.</p>
          <p>Committees are where you plan and take action.</p>
          <p>
            You make friends the way the Founders did. You learn. You share what you know. Then a committee turns that into work where you live.
          </p>

          <p className="font-semibold">As a captain</p>
          <p>
            You help your state have a pub and a committee, not just a feed. Citizen, not candidate. All it takes is you.
          </p>

          <p className="font-semibold">Now</p>
          <p>
            The House table is being built. The Senate slate is live — the people running, scored. Bills, votes, and money come onto that ledger next. Use what is ready. Become one of the people keeping the Republic.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
          <Link
            to="/senate"
            className="bg-patriot-blue hover:bg-blue-900 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-xl text-center shadow-lg"
          >
            Senate slate →
          </Link>
          <Link
            to="/become-one"
            className="bg-patriot-blue hover:bg-blue-900 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-xl text-center shadow-lg"
          >
            Become One →
          </Link>
          <Link
            to="/take-action"
            className="bg-patriot-blue hover:bg-blue-900 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-xl text-center shadow-lg"
          >
            Take action →
          </Link>
        </div>
      </main>
    </div>
  );
}
