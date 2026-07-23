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
        </div>

        {/* Communism in the Movie Industry */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-red-600 mb-6 text-center">Communism in the Movie Industry</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="aspect-video bg-black">
                <iframe 
                  src="https://www.youtube.com/embed/5gK4z2mF1cQ" 
                  title="Ronald Reagan HUAC Testimony" 
                  className="w-full h-full" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h4 className="font-semibold">Ronald Reagan HUAC Testimony (1947)</h4>
                <p className="text-gray-600 text-sm">SAG President on Communist tactics in Hollywood</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="aspect-video bg-black">
                <iframe 
                  src="https://www.youtube.com/embed/0t3c1v4f6zQ" 
                  title="HUAC Hollywood Hearings" 
                  className="w-full h-full" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h4 className="font-semibold">HUAC Hollywood Hearings Original Newsreel</h4>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="aspect-video bg-black">
                <iframe 
                  src="https://www.prageru.com/videos/why-is-hollywood-so-woke" 
                  title="Why is Hollywood So Woke? - PragerU" 
                  className="w-full h-full" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h4 className="font-semibold">PragerU – Why is Hollywood So Woke?</h4>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://www.prageru.com/search?q=hollywood" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-patriot-red font-semibold hover:underline"
            >
              Explore All PragerU Hollywood Content →
            </a>
          </div>
        </div>

        {/* Link to Take Down page */}
        <div className="text-center mt-12">
          <Link 
            to="/resources/take-down-of-mccarthy" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider px-10 py-4 rounded-lg text-lg transition-all shadow-lg"
          >
            The Take Down of McCarthy → Key Hearings & Analysis
          </Link>
        </div>
      </div>

      {/* Communism Today */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-red-600 mb-8 text-center">Communism Today</h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          The ideology didn't disappear — it changed its clothing. Modern cultural Marxism, CCP influence, and "woke" narratives continue the same assault on American sovereignty and ordered liberty.
        </p>
        <div className="text-center">
          <Link 
            to="/resources/communism-today" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider px-10 py-4 rounded-lg text-lg transition-all shadow-lg"
          >
            Explore Communism Today →
          </Link>
        </div>
      </div>

      {/* Americanism v Communism - Placeholder */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-red-600 mb-8 text-center">Americanism v Communism</h2>
        <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-red-600 mb-4">Lessons Coming Soon</h3>
          <p className="text-gray-600">Founding principles vs. Marxist ideology — deep contrasts and primary source comparisons.</p>
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
