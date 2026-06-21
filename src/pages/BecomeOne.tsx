import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

console.log("=== Environment Variables Debug ===");
console.log("VITE_SUPABASE_URL:", import.meta.env.VITE_SUPABASE_URL);
console.log("VITE_SUPABASE_ANON_KEY:", import.meta.env.VITE_SUPABASE_ANON_KEY ? "✅ Present" : "❌ Missing");
console.log("SUPABASE_DATABASE_URL:", import.meta.env.SUPABASE_DATABASE_URL);
console.log("SUPABASE_ANON_KEY:", import.meta.env.SUPABASE_ANON_KEY ? "✅ Present" : "❌ Missing");

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.SUPABASE_DATABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.SUPABASE_ANON_KEY;

console.log("Final URL used:", supabaseUrl);
console.log("Final Key used:", supabaseKey ? "✅ Has key" : "❌ No key");

const supabase = createClient(supabaseUrl, supabaseKey, {
  global: { headers: { apikey: supabaseKey } }
});

const BecomeOne = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setMessage('Testing...');

    try {
      const { data, error } = await supabase.auth.signUp({
        email: `test${Date.now()}@example.com`,
        password: 'password123'
      });

      if (error) throw error;
      setMessage("✅ Success!");
      alert("✅ Success!");
    } catch (err: any) {
      console.error("Full Supabase Error:", err);
      setMessage("❌ " + (err.message || JSON.stringify(err)));
      alert("Error: " + (err.message || JSON.stringify(err)));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-16 px-6 text-center">
      <h1 className="text-5xl font-bold text-patriot-blue mb-8">Become One</h1>
      <button onClick={handleSubmit} disabled={loading} className="bg-patriot-red text-white font-bold py-6 px-12 rounded-2xl text-xl">
        {loading ? 'Testing...' : 'Run Test Signup'}
      </button>
      {message && <p className="mt-8 text-lg">{message}</p>}
    </div>
  );
};

export default BecomeOne;
