import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const BecomeOne = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setMessage('Connecting to Supabase...');

    try {
      const email = `test${Date.now()}@example.com`;
      const password = 'password123';

      const { data, error } = await supabase.auth.signUp({ email, password });

      if (error) throw error;

      setMessage("✅ Success! Account created in Supabase.");
      alert("✅ Success! Check your Supabase dashboard under Authentication > Users.");
    } catch (err: any) {
      console.error("Full error:", err);
      setMessage("❌ " + (err.message || JSON.stringify(err)));
      alert("Error: " + (err.message || JSON.stringify(err)));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-16 px-6 text-center">
      <h1 className="text-5xl font-bold text-patriot-blue mb-8">Become One</h1>
      
      <button 
        onClick={handleSubmit}
        disabled={loading}
        className="bg-patriot-red hover:bg-red-700 text-white font-bold py-6 px-12 rounded-2xl text-xl disabled:opacity-50"
      >
        {loading ? 'Testing...' : 'Run Test Signup'}
      </button>

      {message && <p className="mt-8 text-lg max-w-md mx-auto">{message}</p>}
    </div>
  );
};

export default BecomeOne;
