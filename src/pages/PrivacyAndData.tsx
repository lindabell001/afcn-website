import React from 'react';
import SiteFooter from '../components/SiteFooter';

const PrivacyAndData = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-patriot-blue mb-4">
            Privacy & Data Handling
          </h1>
          <div className="h-1 w-24 bg-patriot-red mx-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed">
          {/* Add your actual content here */}
          <p>We respect your privacy. This page explains how America First Citizens Network collects, uses, and protects your information.</p>
          
          {/* Placeholder content - replace with your real text */}
          <h2 className="text-2xl font-semibold text-patriot-blue mt-10">Our Commitment</h2>
          <p>Your data is safe with us. We do not sell your information. We only use it to improve your experience in the network.</p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default PrivacyAndData;
