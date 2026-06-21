import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iskownhurcvgjrcsgtbe.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlza293bmh1cmN2Z2pyY3NndGJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4MjY0MzYsImV4cCI6MjA5NjQwMjQzNn0.FQd5HUAN1iOvZEZVouudktuOwKsohxFl6QiFthc4Byg';

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: {
    headers: {
      apikey: supabaseAnonKey,
    },
  },
});

const BecomeOne = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setMessage('Sending request to Supabase...');

    try {
      const email = `test${Date.now()}@example.com`;
      const password = 'password123';

      const { data, error } = await supabase.auth.signUp({ email, password });

      if (error) throw error;

      setMessage("✅ Success! Account created.");
      alert("✅ Success!");
    } catch (err: any) {
      console.error("Full error:", err);
      const errorText = err.message || JSON.stringify(err, null, 2);
      setMessage("❌ " + errorText);
      alert("Error: " + errorText);
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
