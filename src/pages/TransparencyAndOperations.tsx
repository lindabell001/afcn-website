import React from 'react';
import SiteFooter from '../components/SiteFooter';

const TransparencyAndOperations = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-patriot-blue mb-4">
            Transparency & Operations
          </h1>
          <div className="h-1 w-24 bg-patriot-red mx-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed">
          {/* Add your actual content here */}
          <p>We believe in full transparency. This page details how America First Citizens Network operates, our governance, and our commitment to accountability.</p>
          
          <h2 className="text-2xl font-semibold text-patriot-blue mt-10">Our Commitment to Transparency</h2>
          <p>All financial records, board decisions, and operational practices are available upon request. We operate with integrity and openness as we work to restore and preserve our Republic.</p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default TransparencyAndOperations;
