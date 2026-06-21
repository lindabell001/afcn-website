import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://iskownhurcvgjrcsgtbe.supabase.co',
  'sb_publishable_hWBCyn-K588J_N9cBiKIVA_oYzK1KzB'
);

const BecomeOne = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const email = "test" + Date.now() + "@example.com";
      const password = "password123";

      const { data, error } = await supabase.auth.signUp({ email, password });

      if (error) throw error;

      alert("✅ Auth signup succeeded! Check your Supabase profiles table.");
      console.log("Success:", data);

    } catch (err) {
      alert("❌ Error: " + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 text-center">
      <h1 className="text-5xl font-bold text-patriot-blue mb-8">Test Signup</h1>
      <button 
        onClick={handleSubmit}
        disabled={loading}
        className="bg-patriot-red text-white font-bold py-5 px-10 rounded-xl text-lg"
      >
        {loading ? 'Testing...' : 'Run Test Signup'}
      </button>
      <p className="mt-8 text-gray-600">This test only does auth.signUp (no profile insert yet)</p>
    </div>
  );
};

export default BecomeOne;
