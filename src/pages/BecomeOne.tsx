import React from 'react';
import SiteLayout from '@/components/SiteLayout';

const BecomeOne = () => {
  return (
    <SiteLayout>
      <div className="max-w-4xl mx-auto px-6 py-16">

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-4">Become a Member</h1>
          <p className="text-2xl text-blue-900">America First Citizens Network — $25 per year</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm mb-12">
          <p className="text-center text-xl mb-8">
            <strong>WE THE PEOPLE</strong> are building a serious network of committed America First Patriots.
          </p>

          <div className="bg-yellow-50 border-l-8 border-yellow-600 p-8 mb-10 rounded-r-xl text-lg">
            <strong>Important:</strong><br />
            If your application is not approved because you do not align with America First values, 
            your $25 payment will automatically become a donation. No membership access will be granted.
          </div>

          <h2 className="text-3xl font-bold text-red-600 text-center mb-10">Two-Step Application Process</h2>

          {/* Step 1 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-red
