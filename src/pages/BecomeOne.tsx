import { Link } from "react-router-dom";

const PatriotsStories = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-red-600 mb-6">Patriot Stories</h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
            Real Americans. Real Stories. Standing strong for the next 250 years of America First.
          </p>
        </div>

        {/* Story Gallery - Public for Everyone */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-red-600 text-center mb-12">Featured Patriot Stories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Story Card 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="h-64 bg-[url('https://picsum.photos/id/1015/800/600')] bg-cover bg-center"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Why I Fight for Election Integrity</h3>
                <p className="text-gray-600 mb-6 line-clamp-4">
                  After watching my local election, I knew I had to stand up. This is my story of becoming an active citizen...
                </p>
                <button className="text-red-600 font-semibold hover:underline">Read Full Story →</button>
              </div>
            </div>

            {/* Story Card 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="h-64 bg-[url('https://picsum.photos/id/64/800/600')] bg-cover bg-center"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">From California to Texas: My American Homecoming</h3>
                <p className="text-gray-600 mb-6 line-clamp-4">
                  I left everything behind to raise my family in a state that still believes in freedom...
                </p>
                <button className="text-red-600 font-semibold hover
