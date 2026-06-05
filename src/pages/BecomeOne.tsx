import { Link } from "react-router-dom";
import { useState } from "react";

const BecomeOne = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `New AFCN Membership Application - ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;

    // 1. Open email to Zoho
    window.location.href = `mailto:membership@americafirstcitizensnetwork.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // 2. After a tiny delay, open GivingTools payment in new tab
    setTimeout(() => {
      window.open("https://givingtools.com/give/4206", "_blank");
    }, 800);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-red-600 mb-4">Become One</h1>
          <p className="text-2xl text-gray-700">Step Into Active Citizenship</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm">
          <
