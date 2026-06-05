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

    window.location.href = `mailto:membership@americafirstcitizensnetwork.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

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
          <p className="text-center text-xl mb-8">
            <strong>Becoming a member of the America First Citizens Network is simple.</strong><br />
            It’s only <strong className="text-3xl text-red-600">$25 a year</strong>.
          </p>

          <div className="text-center mb-10">
            <a 
              href="https://givingtools.com/give/4206" 
              target="_blank"
              className="inline-block bg-red-600 hover:bg-red-700 text-white text-2xl font-bold px-16 py-6 rounded-xl transition"
            >
              JOIN NOW – $25 / YEAR
            </a>
          </div>

          <p className="text-center text-lg mb-8">
            Your application will go to our Director of Membership, <strong>Norine Cantor</strong>, 
            who personally reviews every application.
          </p>

          <h2 className="text-3xl font-bold text-red-600 text-center mb-8">
            Once Approved You Can:
          </h2>

          <ul className="max-w-2xl mx-auto space-y-6 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold text-xl">•</span>
              Submit your Patriot Story for publication
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold text-xl">•</span>
              <Link to="/committees-of-observation" className="text-red-600 hover:underline font-semibold">
                Join or start Committees of Observation
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold text-xl">•</span>
              <Link to="/america-first-tavern" className="text-red-600 hover:underline font-semibold">
                Meet in America First Tavern
              </Link>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold text-xl">•</span>
              Connect with other patriots by location and issue
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 font-bold text-xl">•</span>
              Access member resources and tools
            </li>
          </ul>
        </div>

        <p className="text-center text-sm text-gray-500 mt-12">
          We move at the speed of trust.<br />
          Help us build the next 250 years of America First.
        </p>
      </div>
    </>
  );
};

export default BecomeOne;
