import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../../components/SiteFooter';

export default function CommitteesLocal() {
  const locations = [
    { name: 'Alabama', slug: 'alabama-committee' },
    { name: 'Alaska', slug: 'alaska-committee' },
    { name: 'Arizona', slug: 'arizona-committee' },
    { name: 'Arkansas', slug: 'arkansas-committee' },
    { name: 'California', slug: 'california-committee' },
    { name: 'Colorado', slug: 'colorado-committee' },
    { name: 'Connecticut', slug: 'connecticut-committee' },
    { name: 'Delaware', slug: 'delaware-committee' },
    { name: 'Florida', slug: 'florida-committee' },
    { name: 'Georgia', slug: 'georgia-committee' },
    { name: 'Hawaii', slug: 'hawaii-committee' },
    { name: 'Idaho', slug: 'idaho-committee' },
    { name: 'Illinois', slug: 'illinois-committee' },
    { name: 'Indiana', slug: 'indiana-committee' },
    { name: 'Iowa', slug: 'iowa-committee' },
    { name: 'Kansas', slug: 'kansas-committee' },
    { name: 'Kentucky', slug: 'kentucky-committee' },
    { name: 'Louisiana', slug: 'louisiana-committee' },
    { name: 'Maine', slug: 'maine-committee' },
    { name: 'Maryland', slug: 'maryland-committee' },
    { name: 'Massachusetts', slug: 'massachusetts-committee' },
    { name: 'Michigan', slug: 'michigan-committee' },
    { name: 'Minnesota', slug: 'minnesota-committee' },
    { name: 'Mississippi', slug: 'mississippi-committee' },
    { name: 'Missouri', slug: 'missouri-committee' },
    { name: 'Montana', slug: 'montana-committee' },
    { name: 'Nebraska', slug: 'nebraska-committee' },
    { name: 'Nevada', slug: 'nevada-committee' },
    { name: 'New Hampshire', slug: 'new-hampshire-committee' },
    { name: 'New Jersey', slug: 'new-jersey-committee' },
    { name: 'New Mexico', slug: 'new-mexico-committee' },
    { name: 'New York', slug: 'new-york-committee' },
    { name: 'North Carolina', slug: 'north-carolina-committee' },
    { name: 'North Dakota', slug: 'north-dakota-committee' },
    { name: 'Ohio', slug: 'ohio-committee' },
    { name: 'Oklahoma', slug: 'oklahoma-committee' },
    { name: 'Oregon', slug: 'oregon-committee' },
    { name: 'Pennsylvania', slug: 'pennsylvania-committee' },
    { name: 'Rhode Island', slug: 'rhode-island-committee' },
    { name: 'South Carolina', slug: 'south-carolina-committee' },
    { name: 'South Dakota', slug: 'south-dakota-committee' },
    { name: 'Tennessee', slug: 'tennessee-committee' },
    { name: 'Texas', slug: 'texas-committee' },
    { name: 'Utah', slug: 'utah-committee' },
    { name: 'Vermont', slug: 'vermont-committee' },
    { name: 'Virginia', slug: 'virginia-committee' },
    { name: 'Washington', slug: 'washington-committee' },
    { name: 'West Virginia', slug: 'west-virginia-committee' },
    { name: 'Wisconsin', slug: 'wisconsin-committee' },
    { name: 'Wyoming', slug: 'wyoming-committee' },
    // Territories
    { name: 'Puerto Rico', slug: 'puerto-rico-committee' },
    { name: 'Guam', slug: 'guam-committee' },
    { name: 'U.S. Virgin Islands', slug: 'us-virgin-islands-committee' },
    { name: 'Northern Mariana Islands', slug: 'northern-mariana-islands-committee' },
    { name: 'American Samoa', slug: 'american-samoa-committee' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-patriot-blue mb-6 tracking-tight">
            Committees by Location
          </h1>
          <p className="text-2xl text-gray-600">Join or Start a Local Committee</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {locations.map((location) => (
            <Link
              key={location.slug}
              to={`/committees/chat/${location.slug}`}
              className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-2xl p-8 text-center transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="text-5xl mb-6">🏛️</div>
              <h3 className="text-2xl font-bold text-patriot-blue mb-2">{location.name}</h3>
              <p className="text-patriot-red font-semibold group-hover:underline">
                Join the Committee →
              </p>
            </Link>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-16">
          All Committees are for members only • Lawful vigilance
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
