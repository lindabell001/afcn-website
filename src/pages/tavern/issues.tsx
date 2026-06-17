import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../../components/SiteFooter';

export default function Issues() {
  const issues = [
    { name: "Election Integrity Pub", slug: "election-integrity" },
    { name: "Children & Families Pub", slug: "children-families" },
    { name: "Deep State Accountability Pub", slug: "deep-state-accountability" },
    { name: "American Prosperity Pub", slug: "american-prosperity" }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-patriot-blue text-center mb-12">
          Pubs by Issue
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {issues.map((issue) => (
            <Link
              key={issue.slug}
              to={`/tavern/chat/${issue.slug}`}
              className="bg-white p-10 rounded-3xl border-2 border-patriot-blue hover:border-patriot-red text-center transition-all hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold text-patriot-blue mb-3">{issue.name}</h3>
              <p className="text-patriot-red font-semibold">Join the conversation →</p>
            </Link>
          ))}
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
