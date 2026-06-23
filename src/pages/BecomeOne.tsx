import React from 'react';

const BecomeOne = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-patriot-blue mb-4">
            Become One
          </h1>
          <p className="text-2xl text-gray-600">
            Join the America First Citizens Network — $25/year
          </p>
        </div>

        {/* Tally Form Embed */}
        <div className="bg-white border border-patriot-blue rounded-3xl p-8 shadow-xl">
          <iframe
            data-tally-src="https://tally.so/embed/VLqDvj?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="800"
            frameBorder="0"
            title="AFCN Membership Application"
            style={{ minHeight: '800px' }}
          ></iframe>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          After you submit the form, you will be guided to complete your $25/year payment.
        </p>
      </div>
    </div>
  );
};

export default BecomeOne;
