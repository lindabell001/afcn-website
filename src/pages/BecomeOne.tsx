import React, { useState } from 'react';

const BecomeOne = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const address = formData.get('address') as string;
    const password = formData.get('password') as string;
    const whyJoining = formData.get('whyJoining') as string;
    const xHandle = formData.get('xHandle') as string;

    try {
      const supabaseUrl = 'https://iskownhurcvgjrcsgtbe.supabase.co';
      const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlza293bmh1cmN2Z2pyY3NndGJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4MjY0MzYsImV4cCI6MjA5NjQwMjQzNn0.FQd5HUAN1iOvZEZVouudktuOwKsohxFl6QiFthc4Byg';

      const { createClient } = await import('@supabase/supabase-js');
      const supabase = createClient(supabaseUrl, supabaseAnonKey);

      console.log("=== Starting Signup for:", email);

      const { data, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { first_name: firstName, last_name: lastName } }
      });

      if (authError) throw authError;
      console.log("✅ Auth success");

      const { error: profileError } = await supabase
        .from('profiles')
        .insert({
          id: data.user?.id,
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          address,
          why_joining: whyJoining,
          x_handle: xHandle || 'none',
          status: 'pending'
        });

      if (profileError) throw profileError;
      console.log("✅ Profile inserted successfully");

      setMessage({ 
        type: 'success', 
        text: '✅ Account created successfully! Redirecting to payment...' 
      });

      setTimeout(() => {
        window.location.href = 'https://givingtools.com/give/4206';
      }, 1800);

    } catch (err: any) {
      console.error("❌ Signup Error:", err);
      setMessage({ 
        type: 'error', 
        text: err.message?.includes('Failed to fetch') 
          ? 'Connection issue. Please check your internet and try again.' 
          : err.message || 'Something went wrong. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-patriot-blue mb-4">Become One</h1>
          <p className="text-xl text-gray-600">Join the America First Citizens Network</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-2xl p-10 shadow-card">
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" name="firstName" placeholder="First Name" required className="w-full p-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-patriot-red" />
            <input type="text" name="lastName" placeholder="Last Name" required className="w-full p-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-patriot-red" />
          </div>

          <input type="email" name="email" placeholder="Email Address" required className="w-full p-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-patriot-red" />
          <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-patriot-red" />
          <input type="text" name="address" placeholder="Full Address" required className="w-full p-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-patriot-red" />
          <input type="password" name="password" placeholder="Create Password (min 6 characters)" required className="w-full p-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-patriot-red" />

          <textarea 
            name="whyJoining" 
            placeholder="Why do you want to join? What are your main concerns or interests?" 
            rows={5} 
            required 
            className="w-full p-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-patriot-red"
          />

          <input type="text" name="xHandle" placeholder="X Handle (or type 'none')" required className="w-full p-4 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-patriot-red" />

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-patriot-red hover:bg-red-700 text-white font-bold py-5 rounded-xl text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating Account...' : 'Join AFCN Now – $25/year'}
          </button>
        </form>

        {message && (
          <div className={`mt-8 p-6 rounded-xl text-center text-lg font-medium border ${
            message.type === 'success' 
              ? 'bg-green-50 text-green-700 border-green-200' 
              : 'bg-red-50 text-red-700 border-red-200'
          }`}>
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
};

export default BecomeOne;
