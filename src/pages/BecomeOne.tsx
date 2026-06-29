import React, { useState } from 'react';
import { supabase } from '../lib/supabase'; // Make sure this path is correct in your project
import SiteFooter from '../components/SiteFooter';

export default function BecomeOne() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    congressionalDistrict: '',
    phone: '',
    xHandle: '',
    isCitizen: false,
    isVeteran: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isOfficer = formData.email.toLowerCase().trim().endsWith('@americafirstcitizensnetwork.org');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const profileData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      street_address: formData.street,
      city: formData.city,
      state: formData.state,
      zip: formData.zip,
      congressional_district: formData.congressionalDistrict,
      phone: formData.phone,
      x_handle: formData.xHandle || 'none',
      why_joining: 'New member via form',
      status: isOfficer ? 'approved' : 'pending',
      role: isOfficer ? 'admin' : 'member',
    };

    if (isOfficer) {
      const { error } = await supabase.from('profiles').insert([profileData]);
      if (error) {
        alert('Error saving: ' + error.message);
      } else {
        alert('✅ Officer added as approved member!');
        setSubmitted(true);
      }
    } else {
      // Normal payment flow
      window.location.href = 'https://givingtools.com/give/4206';
    }

    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flexSorry about that, something didn't go as planned. Please try again, and if you're still seeing this message, go ahead and restart the app.
