import React from 'react';
import PageShell from '../components/PageShell';

const TransparencyAndOperations: React.FC = () => {
  return (
    <PageShell
      title="Transparency & Operations"
      subtitle="Full Accountability • Open to WE THE PEOPLE • America First"
    >
      <div className="max-w-4xl mx-auto px-6 py-12">

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-4">
            Transparency &amp; Operations
          </h1>
          <p className="text-xl text-blue-900 font-semibold">
            WE THE PEOPLE Demand and Deliver Full Accountability
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">

          <h2 className="text-3xl font-bold text-red-600 mt-8 mb-8">Our Commitment to Transparency</h2>
          <p className="text-lg mb-12">
            WE THE PEOPLE expect transparency from our government — AFCN delivers the same standard 
            to our members and donors.
          </p>

          <h2 className="text-3xl font-bold text-red-600 mt-12 mb-8">Our Commitments</h2>
          <ul className="list-disc pl-8 space-y-4 text-lg mb-12">
            <li>All members are vetted before joining.</li>
            <li>Patriots Stories are reviewed and approved before publishing.</li>
            <li>Member data is used only for organizing by location and issue.</li>
            <li>We never sell, rent, or share personal information with third parties.</li>
            <li>All major decisions and operating summaries will be publicly reported as decisions are made.</li>
            <li>WE THE PEOPLE operate strictly within all federal, state, and local laws. All activities follow IRS 501(c)(4) guidelines for social welfare organizations.</li>
          </ul>

          <div className="my-16 p-10 bg-blue-50 border-l-8 border-blue-600 italic text-2xl text-center text-blue-900 rounded-r-xl">
            Transparency builds trust. Accountability builds strength.
          </div>

          <div className="text-center mt-12">
            <a
              href="/become-one"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-12 py-6 rounded-xl transition-all duration-200 shadow-lg"
            >
              Join WE THE PEOPLE →
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
};

export default TransparencyAndOperations;
