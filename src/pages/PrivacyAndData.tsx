import React from 'react';
import PageShell from '../components/PageShell';

const PrivacyAndData: React.FC = () => {
  return (
    <PageShell
      title="Privacy & Data Handling"
      subtitle="Your Information is Safe • Transparency First • America First"
    >
      <div className="max-w-4xl mx-auto px-6 py-12">

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-4">
            Privacy &amp; Data Handling
          </h1>
          <p className="text-xl text-blue-900 font-semibold">
            Your Information is Safe with Us
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">

          <h2 className="text-3xl font-bold text-red-600 mt-8 mb-8">How We Protect Your Information</h2>
          <ul className="list-disc pl-8 space-y-4 text-lg mb-12">
            <li>Your data is stored securely in Supabase</li>
            <li>Used only to connect you with patriots in your area and on your issues</li>
            <li>Norine personally reviews every membership application</li>
            <li>We never sell, rent, or share your personal data with third parties</li>
            <li>You can request deletion of your data at any time</li>
          </ul>

          <h2 className="text-3xl font-bold text-red-600 mt-12 mb-6">Our Promise</h2>
          <p className="text-lg mb-12">
            We respect your privacy as we rebuild trust in citizen networks. Your information 
            is used solely to strengthen our grassroots movement and never for commercial purposes.
          </p>

          <div className="my-16 p-10 bg-blue-50 border-l-8 border-blue-600 italic text-2xl text-center text-blue-900 rounded-r-xl">
            Transparency and security are core to everything we do.
          </div>

          <div className="text-center mt-16">
            <a
              href="/become-one"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-12 py-6 rounded-xl transition-all duration-200 shadow-lg"
            >
              Join America First Citizens Network →
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
};

export default PrivacyAndData;
