import React from 'react';

const BecomeOne = () => {
  return (
    <div className="min-h-screen bg-background py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-6xl font-bold text-patriot-blue mb-6">Become One</h1>
        <p className="text-2xl text-gray-600 mb-12">
          Join the America First Citizens Network<br />
          — Active Citizenship for the Next 250 Years —
        </p>

        <div className="bg-white border-2 border-patriot-blue rounded-3xl p-16 shadow-xl max-w-lg mx-auto">
          <p className="text-xl leading-relaxed mb-10">
            Fill out the membership application below. After submission, you will be directed to complete your $25/year payment on GivingTools.
          </p>

          <a
            href="https://tally.so/r/VLqDvj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-patriot-red hover:bg-red-700 text-white font-bold text-2xl px-12 py-6 rounded-2xl transition-all shadow-lg"
          >
            Start Membership Application
          </a>
        </div>

        <p className="mt-12 text-sm text-gray-500">
          After payment, Norine will review your application and contact you.
        </p>
      </div>
    </div>
  );
};

export default BecomeOne;
