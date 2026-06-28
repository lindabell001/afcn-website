import React from 'react';
import SiteFooter from '../../components/SiteFooter';

export default function TavernLocations() {
  const locations = [
    { name: 'Alabama', slug: 'alabama-pub' },
    { name: 'Alaska', slug: 'alaska-pub' },
    { name: 'Arizona', slug: 'arizona-pub' },
    { name: 'Arkansas', slug: 'arkansas-pub' },
    { name: 'California', slug: 'california-pub' },
    { name: 'Colorado', slug: 'colorado-pub' },
    { name: 'Connecticut', slug: 'connecticut-pub' },
    { name: 'Delaware', slug: 'delaware-pub' },
    { name: 'Florida', slug: 'florida-pub' },
    { name: 'Georgia', slug: 'georgia-pub' },
    { name: 'Hawaii', slug: 'hawaii-pub' },
    { name: 'Idaho', slug: 'idaho-pub' },
    { name: 'Illinois', slug: 'illinois-pub' },
    { name: 'Indiana', slug: 'indiana-pub' },
    { name: 'Iowa', slug: 'iowa-pub' },
    { name: 'Kansas', slug: 'kansas-pub' },
    { name: 'Kentucky', slug: 'kentucky-pub' },
    { name: 'Louisiana', slug: 'louisiana-pub' },
    { name: 'Maine', slug: 'maine-pub' },
    { name: 'Maryland', slug: 'maryland-pub' },
    { name: 'Massachusetts', slug: 'massachusetts-pub' },
    { name: 'Michigan', slug: 'michigan-pub' },
    { name: 'Minnesota', slug: 'minnesota-pub' },
    { name: 'Mississippi', slug: 'mississippi-pub' },
    { name: 'Missouri', slug: 'missouri-pub' },
    { name: 'Montana', slug: 'montana-pub' },
    { name: 'Nebraska', slug: 'nebraska-pub' },
    { name: 'Nevada', slug: 'nevada-pub' },
    { name: 'New Hampshire', slug: 'new-hampshire-pub' },
    { name: 'New Jersey', slug: 'new-jersey-pub' },
    { name: 'New Mexico', slug: 'new-mexico-pub' },
    { name: 'New York', slug: 'new-york-pub' },
    { name: 'North Carolina', slug: 'north-carolina-pub' },
    { name: 'North Dakota', slug: 'north-dakota-pub' },
    { name: 'Ohio', slug: 'ohio-pub' },
    { name: 'Oklahoma', slug: 'oklahoma-pub' },
    { name: 'Oregon', slug: 'oregon-pub' },
    { name: 'Pennsylvania', slug: 'pennsylvania-pub' },
    { name: 'Rhode Island', slug: 'rhode-island-pub' },
    { name: 'South Carolina', slug: 'south-carolina-pub' },
    { name: 'South Dakota', slug: 'south-dakota-pub' },
    { name: 'Tennessee', slug: 'tennessee-pub' },
    { name: 'Texas', slug: 'texas-pub' },
    { name: 'Utah', slug: 'utah-pub' },
    { name: 'Vermont', slug: 'vermont-pub' },
    { name: 'Virginia', slug: 'virginia-pub' },
    { name: 'Washington', slug: 'washington-pub' },
    { name: 'West Virginia', slug: 'west-virginia-pub' },
    { name: 'Wisconsin', slug: 'wisconsin-pub' },
    { name: 'Wyoming', slug: 'wyoming-pub' },
    // Territories
    { name: 'Puerto Rico', slug: 'puerto-rico-pub' },
    { name: 'Guam', slug: 'guam-pub' },
    { name: 'U.S. Virgin Islands', slug: 'us-virgin-islands-pub' },
    { name: 'Northern Mariana Islands', slug: 'northern-mariana-islands-pub' },
    { name: 'American Samoa', slug: 'american-samoa-pub' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-patriot-blue mb-6 tracking-tight">
            Pubs by Location
          </h1>
          <p className="text-2xl text-gray-600">Join your State or Territory Pub</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {locations.map((location) => (
            <a
              key={location.slug}
              href={`https://americafirstcitizensnetwork.org/tavern/chat/${location.slug}`}
              className="group bg-white border-2 border-patriot-blue hover:border-patriot-red rounded-2xl p-8 text-center transition-all hover:shadow-xl hover:-translate-y-1 block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-5xl mb-6">🏠</div>
              <h3 className="text-2xl font-bold text-patriot-blue mb-2">{location.name}</h3>
              <p className="text-patriot-red font-semibold group-hover:underline">
                Join the Pub →
              </p>
            </a>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-16">
          All Pubs are for vetted members only • Real-time chat
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
