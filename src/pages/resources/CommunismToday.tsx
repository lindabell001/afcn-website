import React from 'react';
import { Link } from 'react-router-dom';

const CommunismToday = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* HERO */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold text-red-600 mb-6">Communism Today</h1>
        <p className="text-3xl text-gray-700 max-w-4xl mx-auto font-light">
          The ideology never died — it changed its clothing. Cultural Marxism, CCP influence, and woke narratives continue the assault on American sovereignty and ordered liberty.
        </p>
      </div>

      {/* PragerU Videos - Hollywood & Culture */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-red-600 mb-8 text-center">PragerU on Hollywood & Culture</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="aspect-video bg-black">
              <iframe 
                src="https://www.prageru.com/videos/why-is-hollywood-so-woke" 
                title="Why is Hollywood So Woke?" 
                className="w-full h-full" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h4 className="font-semibold">Why is Hollywood So Woke?</h4>
              <p className="text-gray-600 text-sm">The cultural front today</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="aspect-video bg-black">
              <iframe 
                src="https://www.prageru.com/videos/stories-of-us-roxanne-beckford-hoge" 
                title="Stories of Us - Roxanne Beckford Hoge" 
                className="w-full h-full" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h4 className="font-semibold">Stories of Us – Roxanne Beckford Hoge</h4>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="aspect-video bg-black">
              <iframe 
                src="https://www.prageru.com/videos/stories-of-us-kirk-cameron" 
                title="Stories of Us - Kirk Cameron" 
                className="w-full h-full" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h4 className="font-semibold">Stories of Us – Kirk Cameron</h4>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a 
            href="https://www.prageru.com/search?q=hollywood" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider px-10 py-4 rounded-lg text-lg transition-all shadow-lg"
          >
            Explore All PragerU Hollywood & Culture Content →
          </a>
        </div>
      </div>

      {/* Current Threats */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-red-600 mb-8 text-center">Current Threats</h2>
        <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center max-w-3xl mx-auto">
          <p className="text-gray-700 leading-relaxed">
            CCP influence operations in Hollywood and tech, identity politics as modern class warfare, Big Tech censorship, and the weaponization of entertainment against American values. 
            More primary sources and analysis coming soon.
          </p>
        </div>
      </div>

      {/* Back link */}
      <div className="text-center">
        <Link 
          to="/resources/communism-in-america" 
          className="inline-block border border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold uppercase tracking-wider px-10 py-4 rounded-lg text-lg transition-all"
        >
          ← Back to Communism In America
        </Link>
      </div>
    </div>
  );
};

export default CommunismToday;
