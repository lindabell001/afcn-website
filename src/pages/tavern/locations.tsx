import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../../components/SiteFooter';

export default function Locations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // For now we'll use static list. Later we can pull from Supabase if needed.
    setLocations([
      "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", 
      "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", 
      "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", 
      "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", 
      "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", 
      "New Hampshire", "New Jersey", "New Mexico", "New York", 
      "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", 
      "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
      "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", 
      "West Virginia", "Wisconsin", "Wyoming",
      "Puerto Rico", "Guam", "American Samoa", 
      "U.S. Virgin Islands", "Northern Mariana Islands"
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-patriot-blue text-center mb-4">
          Location Pubs
        </h1>
        <p className="text-center text-xl text-gray-600 mb-12">
          Join your State or Territory
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {locations.map((state) => (
            <Link
              key={state}
              to={`/tavern/chat/${state.toLowerCase().replace(/\s+/g, '-')}`}
              className="bg-white border border-gray-200 hover:border-patriot-red rounded-2xl p-6 text-center transition-all hover:shadow-md"
            >
              <p className="font-semibold text-lg">{state} Pub</p>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
