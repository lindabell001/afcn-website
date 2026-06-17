import React from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../../components/SiteFooter';

export default function Locations() {
  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", 
    "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", 
    "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", 
    "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", 
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
    "District of Columbia", "Puerto Rico", "Guam", "American Samoa", 
    "U.S. Virgin Islands", "Northern Mariana Islands"
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-patriot-blue text-center mb-12">
          Pubs by Location
        </h1>
        <p className="text-center text-xl text-gray-600 mb-12">
          State/Territory, County, District, & City, Neighborhood Level
        </p>

        <div className="grid md:grid-cols-4 gap-4">
          {states.map((state) => {
            const slug = state.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '') + '-pub';
            return (
              <Link
                key={state}
                to={`/tavern/chat/${slug}`}
                className="bg-white p-6 rounded-2xl border border-patriot-blue hover:border-patriot-red hover:shadow-md transition-all text-center"
              >
                <div className="text-3xl mb-3">🏠</div>
                <div className="font-semibold text-patriot-blue">{state} Pub</div>
              </Link>
            );
          })}
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
