import React from 'react';
import SiteFooter from '../components/SiteFooter';

export default function Analytics() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-patriot-blue mb-6">Analytics</h1>
          <p className="text-2xl text-gray-600">Track how your content is performing</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-3xl p-8 text-center">
            <div className="text-4xl mb-4">▶️</div>
            <h3 className="text-4xl font-bold text-patriot-blue">12,450</h3>
            <p className="text-gray-600">Total Plays</p>
          </div>
          <div className="bg-white rounded-3xl p-8 text-center">
            <div className="text-4xl mb-4">⏱️</div>
            <h3 className="text-4xl font-bold text-patriot-blue">28 min</h3>
            <p className="text-gray-600">Avg. Listen Time</p>
          </div>
          <div className="bg-white rounded-3xl p-8 text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-4xl font-bold text-patriot-blue">Episode 7</h3>
            <p className="text-gray-600">Top Episode</p>
          </div>
          <div className="bg-white rounded-3xl p-8 text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-4xl font-bold text-green-600">+42%</h3>
            <p className="text-gray-600">Growth This Month</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">Plays Over Time</h2>
          <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center">
            <p className="text-gray-500">Line chart would go here</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-6">Niche Comparison</h2>
          <p className="text-xl text-green-600">Your episodes are performing 35% better than similar shows in the border security niche.</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
