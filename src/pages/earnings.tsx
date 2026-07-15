import React from 'react';
import SiteFooter from '../components/SiteFooter';

export default function Earnings() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-patriot-blue mb-6">Earnings & Affiliate</h1>
          <p className="text-2xl text-gray-600">Your 25% commissions and referral earnings</p>
        </div>

        <div className="bg-white rounded-3xl p-12 mb-12 text-center">
          <h2 className="text-5xl font-bold text-green-600 mb-4">$1,245.50</h2>
          <p className="text-2xl">This Month's Earnings</p>
        </div>

        <div className="bg-white rounded-3xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6">Your Affiliate Link</h3>
          <div className="bg-gray-100 p-6 rounded-2xl flex items-center justify-between">
            <code className="text-lg break-all">https://afcnus.org/join?ref=YOURCODE123</code>
            <button className="bg-patriot-blue text-white px-8 py-4 rounded-2xl font-bold">Copy Link</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Referral History</h3>
            <p className="text-gray-600">People you referred and earnings from them will appear here.</p>
          </div>

          <div className="bg-white rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Payout History</h3>
            <p className="text-gray-600">Previous payouts will appear here.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
