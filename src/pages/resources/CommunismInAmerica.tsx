import React from 'react';
import { Link } from 'react-router-dom';

const CommunismInAmerica = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* HERO */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold text-red-600 mb-6">Communism In America</h1>
        <p className="text-3xl text-gray-700 max-w-4xl mx-auto font-light">
          Primary Senate records, historical evidence, and current threats — so We the People can recognize and defeat Communism
        </p>
      </div>

      {/* SECTION 1: McCarthy Era */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-red-600 mb-8 text-center">McCarthy Era</h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Official U.S. Senate Permanent Subcommittee on Investigations transcripts (1953–54) and archival footage of the fight against Communist infiltration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="https://www.senate.gov/about/resources/pdf/mccarthy-hearings-volume1.pdf" target="_blank" rel="noopener noreferrer" className="block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-2">Senate Vol. 1 (1953)</h3>
            <p className="text-gray-600">Executive sessions</p>
          </a>
          <a href="https://www.senate.gov/about/resources/pdf/mccarthy-hearings-volume2.pdf" target="_blank" rel="noopener noreferrer" className="block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-2">Senate Vol. 2 (1953)</h3>
            <p className="text-gray-600">Executive sessions</p>
          </a>
          <a href="https://www.senate.gov/about/resources/pdf/mccarthy-hearings-volume3.pdf" target="_blank" rel="noopener noreferrer" className="block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-2">Senate Vol. 3 (1953)</h3>
            <p className="text-gray-600">Executive sessions</p>
          </a>
          <a href="https://www.senate.gov/about/resources/pdf/mccarthy-hearings-volume4.pdf" target="_blank" rel="noopener noreferrer" className="block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-2">Senate Vol. 4 (1953)</h3>
            <p className="text-gray-600">Executive sessions</p>
          </a>
          <a href="https://www.senate.gov/about/resources/pdf/mccarthy-hearings-volume5.pdf" target="_blank" rel="noopener noreferrer" className="block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-2">Senate Vol. 5 (1954)</h3>
            <p className="text-gray-600">Includes Army-McCarthy hearings</p>
          </a>
          <a href="https://www.senate.gov/about/resources/pdf/mccarthy-hearings-index.pdf" target="_blank" rel="noopener noreferrer" className="block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-2">Full Index</h3>
            <p className="text-gray-600">Navigate all volumes</p>
          </a>
        </div>

        {/* Video examples */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="aspect-video bg-black">
              <iframe 
                src="https://www.youtube.com/embed/qAuGKmqq3fM" 
                title="Army-McCarthy Opening" 
                className="w-full h-full" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h4 className="font-semibold">Army-McCarthy Hearings - Opening Session</h4>
            </div>
          </div>
          {/* Add more video cards here as needed */}
        </div>
      </div>

      {/* SECTION 2: Americanism v Communism */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-red-600 mb-8 text-center">Americanism v Communism</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Placeholder cards - replace with real links */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-2">Founding Documents vs. Communist Manifesto</h3>
            <p className="text-gray-600">Primary contrasts (coming soon)</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-2">Classic Anti-Communist Resources</h3>
            <p className="text-gray-600">HUAC, FBI pamphlets, etc.</p>
          </div>
        </div>
      </div>

      {/* SECTION 3: Communism Today */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-red-600 mb-8 text-center">Communism Today</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Placeholder cards - replace with real links */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-2">CCP Influence & Modern Threats</h3>
            <p className="text-gray-600">Congressional reports (coming soon)</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-2">Current Hearings & Analysis</h3>
            <p className="text-gray-600">Latest primary sources</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-3xl p-16">
        <h2 className="text-4xl font-bold text-red-600 mb-6">Ready to Take Action?</h2>
        <p className="text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Join the America First family and become part of the Committees of Observation today.
        </p>
        <Link
          to="/become-one"
          className="inline-block bg-red-600 hover:bg-red-700 text-white text-2xl font-bold px-12 py-6 rounded-2xl transition"
        >
          Become a Member & Join This Committee
        </Link>
      </div>
    </div>
  );
};

export default CommunismInAmerica;
