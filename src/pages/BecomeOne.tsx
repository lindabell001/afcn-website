import React, { useState } from 'react';

const BecomeOne = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('Sending application...');

    // For now, using test data. Later we'll use a real form.
    const formData = {
      email: `test${Date.now()}@example.com`,
      password: 'password123',
      firstName: "Test",
      lastName: "User",
      phone: "123-456-7890",
      address: "123 Test St, USA",
      whyJoining: "I want to be an active citizen",
      xHandle: "@testuser"
    };

    try {
      const response = await fetch('/.netlify/functions/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setMessage("✅ Application received! Norine will review it soon.");
        alert("✅ Success! Your application has been submitted.");
      } else {
        throw new Error(result.error || "Unknown error");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ " + err.message);
      alert("Error: " + err.message);
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
        {loading ? 'Submitting...' : 'Become a Member – $25/year'}
      </button>

      {message && <p className="mt-8 text-lg max-w-md mx-auto">{message}</p>}
    </div>
  );
};

export default BecomeOne;
