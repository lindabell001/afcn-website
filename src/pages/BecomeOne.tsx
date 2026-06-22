import React, { useState } from 'react';

const BecomeOne = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage('Sending application...');

    const formData = new FormData(e.currentTarget);

    const payload = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      address: formData.get('address') as string,
      whyJoining: formData.get('whyJoining') as string,
      xHandle: formData.get('xHandle') as string,
      password: formData.get('password') as string,
    };

    try {
      const response = await fetch('/.netlify/functions/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        setMessage("✅ Application received! Norine will review it soon.");
        alert("✅ Success! Your application has been submitted.");
      } else {
        throw new Error(result.error || "Server error");
      }
    } catch (err: any) {
      console.error(err);
      setMessage("❌ " + (err.message || "Failed to submit"));
      alert("Error: " + (err.message || "Failed to submit"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-16 px-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-5xl font-bold text-patriot-blue mb-8 text-center">Become One</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="firstName" placeholder="First Name" required className="w-full p-4 border rounded-lg" />
          <input type="text" name="lastName" placeholder="Last Name" required className="w-full p-4 border rounded-lg" />
          <input type="email" name="email" placeholder="Email" required className="w-full p-4 border rounded-lg" />
          <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-4 border rounded-lg" />
          <input type="text" name="address" placeholder="Full Address" required className="w-full p-4 border rounded-lg" />
          <input type="password" name="password" placeholder="Create Password (min 6 characters)" required className="w-full p-4 border rounded-lg" />
          <textarea name="whyJoining" placeholder="Why do you want to join?" rows={4} required className="w-full p-4 border rounded-lg" />
          <input type="text" name="xHandle" placeholder="X Handle (or type 'none')" required className="w-full p-4 border rounded-lg" />

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-patriot-red hover:bg-red-700 text-white font-bold py-5 rounded-xl text-lg transition-all disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Join AFCN Now – $25/year'}
          </button>
        </form>

        {message && <p className="mt-6 text-center text-lg">{message}</p>}
      </div>
    </div>
  );
};

export default BecomeOne;
