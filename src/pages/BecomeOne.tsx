import React, { useState } from 'react';
import SiteFooter from '../components/SiteFooter';

export default function BecomeOne() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    // add other fields as needed
  });

  const officerEmails = [
    'lindabell001@outlook.com',
    'randy@email.com',        // add Randy's email
    'noreen@email.com',       // add Norine's email
    // add more here
  ];

  const isOfficer = officerEmails.includes(formData.email.toLowerCase());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isOfficer) {
      alert('Officer bypass - Welcome! No payment required.');
      // Here you can call your Supabase insert for free
    } else {
      // Normal payment flow
      window.location.href = 'https://givingtools.com/give/4206';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-patriot-blue text-center mb-8">Become One</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Your form fields here - keep them as is */}
          <input type="email" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-4 border rounded" />

          <button type="submit" className="w-full bg-patriot-red text-white py-4 rounded font-bold">
            {isOfficer ? 'Join as Officer (Free)' : 'Continue to Payment'}
          </button>
        </form>
      </main>
      <SiteFooter />
    </div>
  );
}
