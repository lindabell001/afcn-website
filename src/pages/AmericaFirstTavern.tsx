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

          <div className="mt-10">
            <Link 
              to="/become-one"
              className="inline-block bg-red-600 hover:bg-red-700 text-white text-2xl font-bold px-12 py-6 rounded-2xl transition"
            >
              BECOME A MEMBER – $25 / YEAR
            </Link>
          </div>
        </div>

        {/* 10 Cards - Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">
            <h2 className="text-2xl font-bold text-red-600 mb-3">Take Action</h2>
            <p className="text-gray-600 text-sm">Petitions, contacting representatives, observation guides, and civic tools.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">
            <h2 className="text-2xl font-bold text-red-600 mb-3">Constitution Academy</h2>
            <p className="text-gray-600 text-sm mb-3">Study founding documents, history, webinars, quizzes, and reading trackers.</p>
            <span className="inline-block bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Member Recommended</span>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">
            <h2 className="text-2xl font-bold text-red-600 mb-3">Self-Reliance Vault</h2>
            <p className="text-gray-600 text-sm mb-3">Preparedness guides, American-made lists, homesteading, and emergency resources.</p>
            <span className="inline-block bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Member Recommended</span>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">
            <h2 className="text-2xl font-bold text-red-600 mb-3">Patriotic & Religious Music</h2>
            <p className="text-gray-600 text-sm">Inspiring patriotic songs and religious music.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">
            <h2 className="text-2xl font-bold text-red-600 mb-3">Faith Resources</h2>
            <p className="text-gray-600 text-sm">Scripture study, prayer resources, and faith-based content.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">
            <h2 className="text-2xl font-bold text-red-600 mb-3">America First Podcasts</h2>
            <p className="text-gray-600 text-sm">The best America First based podcasts and audio content.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">
            <h2 className="text-2xl font-bold text-red-600 mb-3">Deep Dives</h2>
            <p className="text-gray-600 text-sm">Articles, research reports, essays, and historical analysis.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">
            <h2 className="text-2xl font-bold text-red-600 mb-3">Webinars & Live Events</h2>
            <p className="text-gray-600 text-sm mb-3">Live and recorded webinars and training sessions.</p>
            <span className="inline-block bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Member Recommended</span>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">
            <h2 className="text-2xl font-bold text-red-600 mb-3">Educational Travel</h2>
            <p className="text-gray-600 text-sm">Historic sites and patriotic destinations.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">
            <h2 className="text-2xl font-bold text-red-600 mb-3">Books</h2>
            <p className="text-gray-600 text-sm">Recommended reading list — America First books, founding era classics, and essential patriot literature.</p>
            <span className="inline-block bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full">Member Recommended</span>
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
