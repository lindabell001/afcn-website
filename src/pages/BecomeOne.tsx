import React from 'react';

const BecomeOne = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-patriot-blue mb-4">
            Become One
          </h1>
          <p className="text-2xl text-gray-600">
            Join the America First Citizens Network — $25/year
          </p>
        </div>

        {/* Your Important Text */}
        <div className="bg-white border-2 border-patriot-blue rounded-3xl p-10 mb-12 shadow-xl">
          <p className="text-lg leading-relaxed">
            To protect our America First values, we carefully vet all applications.
          </p>
          
          <p className="text-xl font-semibold mt-8 mb-3">NEXT STEP:</p>
          <p className="text-lg">Please complete your $25/year payment below.</p>

          <p className="mt-8 text-lg">
            Norine will review your application and contact you soon from (XXX) 425-1776.
          </p>
          
          <p className="mt-6 text-lg">
            If approved, you will gain full access to our private Taverns, Pubs, and Committees.<br />
            If not approved, your $25 will be treated as a non-tax-deductible donation to support the network.
          </p>
        </div>

        {/* Tally Form Embed */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-xl overflow-hidden">
          <iframe
            src="https://tally.so/embed/VLqDvj?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="1100"
            frameBorder="0"
            title="AFCN Membership Application"
            style={{ minHeight: '1100px', border: 'none' }}
          ></iframe>
        </div>

        <p className="text-center text-sm text-gray-500 mt-10">
          After you submit the form, you will be guided to complete your payment.
        </p>
      </div>
    </div>
  );
};

export default BecomeOne;
