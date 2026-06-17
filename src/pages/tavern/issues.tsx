import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../../components/SiteFooter';

export default function Issues() {
  const issueRooms = [
    {
      name: "Election Integrity Pub",
      slug: "election-integrity",
      description: "Secure elections and election integrity"
    },
    {
      name: "Children & Families Pub",
      slug: "children-families",
      description: "Protecting children, parental rights, and strong families"
    },
    {
      name: "Deep State Accountability Pub",
      slug: "deep-state-accountability",
      description: "Government transparency and accountability"
    },
    {
      name: "American Prosperity Pub",
      slug: "american-prosperity",
      description: "American jobs, economy, and prosperity first"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-patriot-blue text-center mb-4">
          Issue Pubs
        </h1>
        <p className="text-center text-xl text-gray-600 mb-12">
          Focused discussion rooms
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {issueRooms.map((room) => (
            <Link
              key={room.slug}
              to={`/tavern/chat/${room.slug}`}
              className="bg-white border border-gray-200 hover:border-patriot-red rounded-3xl p-8 transition-all hover:shadow-md group"
            >
              <h3 className="text-2xl font-bold text-patriot-blue mb-3 group-hover:text-patriot-red">
                {room.name}
              </h3>
              <p className="text-gray-600">{room.description}</p>
              <p className="text-patriot-red font-medium mt-6 group-hover:underline">
                Enter this Pub →
              </p>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
