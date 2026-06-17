import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../../components/SiteFooter';

export default function CommitteesIssues() {
  const issues = [
    { name: "Election Integrity Committee", slug: "election-integrity" },
    { name: "Children & Families Committee", slug: "children-families" },
    { name: "Deep State Accountability Committee", slug: "deep-state-accountability" },
    { name: "American Prosperity Committee", slug: "american-prosperity" },
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-patriot-blue text-center mb-4">
          Committees by Issue
        </h1>
        <p className="text-center text-xl text-gray-600 mb-12">
          State/Territory, County, District, & City, Neighborhood Level
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {issues.map((issue) => (
            <Link
              key={issue.slug}
              to={`/committees/chat/${issue.slug}`}
              className="bg-white p-10 rounded-3xl border-2 border-patriot-blue hover:border-patriot-red text-center transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="text-6xl mb-6">📋</div>
              <h3 className="text-2xl font-bold text-patriot-blue mb-3">{issue.name}</h3>
              <p className="text-patriot-red font-semibold">Join the Committee →</p>
            </Link>
          ))}
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
