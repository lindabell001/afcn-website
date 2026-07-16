import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SiteFooter from '../../components/SiteFooter';

export default function BeginnerSetup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    tagline: '',
    category: '',
    mission: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-patriot-blue mb-4">Create Your Podcast Platform</h1>
          <p className="text-xl text-gray-600">Step {step} of 5</p>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-gray-200 rounded-full mb-12">
          <div className="h-2 bg-patriot-blue rounded-full" style={{ width: `${(step / 5) * 100}%` }}></div>
        </div>

        {step === 1 && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Podcast Basics</h2>
            
            <input 
              type="text" 
              name="name" 
              placeholder="Podcast Name" 
              className="w-full p-4 border border-gray-300 rounded-2xl mb-6" 
              onChange={handleChange} 
            />
            
            <input 
              type="text" 
              name="tagline" 
              placeholder="Short Tagline" 
              className="w-full p-4 border border-gray-300 rounded-2xl mb-6" 
              onChange={handleChange} 
            />
            
            <select 
              name="category" 
              className="w-full p-4 border border-gray-300 rounded-2xl mb-6" 
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="border-security">Border Security</option>
              <option value="faith">Faith & Values</option>
              <option value="politics">Politics</option>
              <option value="other">Other</option>
            </select>

            <label className="block text-sm font-semibold mb-2">
              Mission Statement 
              <span className="text-gray-500 font-normal text-sm ml-2">(Recommended)</span>
            </label>
            <textarea 
              name="mission" 
              placeholder="Example: To deliver truthful, America First perspectives on border security..." 
              className="w-full p-4 border border-gray-300 rounded-2xl h-32" 
              onChange={handleChange} 
            />
            <p className="text-sm text-gray-500 mt-2">
              Helps generate better topics, notes, tools tailored to your platform
            </p>

            <button 
              onClick={nextStep} 
              className="w-full bg-patriot-blue text-white py-6 rounded-2xl text-xl font-bold mt-8"
            >
              Continue to Branding
            </button>
          </div>
        )}

        {/* Placeholder for other steps */}
        {step === 2 && (
          <div>
            <h2 className="text-3xl font-bold mb-8">Branding</h2>
            <p className="text-gray-600 mb-8">Upload your logo and cover art (we'll add upload fields soon)</p>
            <button onClick={nextStep} className="w-full bg-patriot-blue text-white py-6 rounded-2xl text-xl font-bold">Continue</button>
          </div>
        )}

        <div className="flex justify-between mt-12">
          {step > 1 && <button onClick={prevStep} className="text-patriot-blue font-medium">← Back</button>}
          {step < 5 && <div />}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
