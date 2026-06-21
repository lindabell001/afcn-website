import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://iskownhurcvgjrcsgtbe.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlza293bmh1cmN2Z2pyY3NndGJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4MjY0MzYsImV4cCI6MjA5NjQwMjQzNn0.FQd5HUAN1iOvZEZVouudktuOwKsohxFl6QiFthc4Byg'
);

const BecomeOne = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async () => {
    setLoading(true);
    setMessage(null);

    try {
      const email = `test${Date.now()}@example.com`;
      const password = 'password123';

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      setMessage({ 
        type: 'success', 
        text: '✅ Account created successfully! Check Supabase dashboard.' 
      });

    } catch (err: any) {
      console.error("Signup error:", err);
      setMessage({ 
        type: 'error', 
        text: '❌ ' + (err.message || 'Unknown error occurred') 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-16 px-6 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-5xl font-bold text-patriot-blue mb-6">Become One</h1>
        <p className="text-xl text-gray-600 mb-10">Test Membership Signup</p>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-patriot-red hover:bg-red-700 text-white font-bold py-6 px-8 rounded-2xl text-xl transition-all disabled:opacity-50"
        >
          {loading ? 'Creating Account...' : 'Run Test Signup'}
        </button>

        {message && (
          <div className={`mt-8 p-6 rounded-2xl text-left ${message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
};

export default BecomeOne;
