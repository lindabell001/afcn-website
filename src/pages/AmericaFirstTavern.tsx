import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-red-600 mb-6">
            We’re Building a One Stop America First Resources
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
            Curated tools, knowledge, and inspiration for active patriots — 
            built by and for the America First movement.
          </p>

          {/* Prominent CTA */}
          <div className="mt-10">
            <p className="text-xl text-gray-700 mb-6">
              Want full access to Member-Only Resources and tools as we build them?
            </p>
            <Link 
              to="/become-one"
              className="inline-block bg-red-600 hover:bg-red-700 text-white text-2xl font-bold px-12 py-6 rounded-2xl transition"
            >
              BECOME A MEMBER – $25 / YEAR
            </Link>
          </div>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition">
            <h2 className="text-3xl font-bold text-red-600 mb-4">Take Action</h2>
            <p className="text-gray-600">Petitions, contacting representatives, observation guides, and civic tools.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition">
            <h2 className="text-3xl font-bold text-red-600 mb-4">Constitution Academy</h2>
            <p className="text-gray-600 mb-4">Study founding documents, history, webinars, quizzes, and reading trackers.</p>
            <span className="inline-block bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full">Member Recommended</span>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition">
            <h2 className="text-3xl font-bold text-red-600 mb-4">Self-Reliance Vault</h2>
            <p className="text-gray-600">Preparedness guides, American-made lists, homesteading, and emergency resources.</p>
            <span className="inline-block bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full">Member Recommended</span>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition">
            <h2 className="text-3xl font-bold text-red-600 mb-4">Patriotic & Religious Music</h2>
            <p className="text-gray-600">Inspiring patriotic songs and religious music.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition">
            <h2 className="text-3xl font-bold text-red-600 mb-4">Faith Resources</h2>
            <p className="text-gray-600">Scripture study, prayer resources, and faith-based content.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition">
            <h2 className="text-3xl font-bold text-red-600 mb-4">America First Podcasts</h2>
            <p className="text-gray-600">The best America First based podcasts and audio content.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition">
            <h2 className="text-3xl font-bold text-red-600 mb-4">Deep Dives</h2>
            <p className="text-gray-600">Articles, research reports, essays, and historical analysis.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition">
            <h2 className="text-3xl font-bold text-red-600 mb-4">Webinars & Live Events</h2>
            <p className="text-gray-600">Live and recorded webinars and training sessions.</p>
            <span className="inline-block bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full">Member Recommended</span>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition">
            <h2 className="text-3xl font-bold text-red-600 mb-4">Educational Travel</h2>
            <p className="text-gray-600">Historic sites and patriotic destinations.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition lg:col-span-2">
            <h2 className="text-3xl font-bold text-red-600 mb-4">Books</h2>
            <p className="text-gray-600">Recommended reading list — America First, founding era classics, and essential patriot literature.</p>
            <span className="inline-block bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full">Member Recommended</span>
          </div>

        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <Link 
            to="/become-one"
            className="inline-block bg-red-600 hover:bg-red-700 text-white text-xl font-bold px-12 py-6 rounded-2xl transition"
          >
            JOIN AFCN & Unlock Everything
          </Link>
        </div>
      </div>
    </>
  );
};

export default Resources;
