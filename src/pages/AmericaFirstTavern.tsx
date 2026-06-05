import { Link } from "react-router-dom";

const AmericaFirstTavern = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-red-600 mb-6">
            America First Tavern
          </h1>
          <p className="text-2xl text-gray-700">
            The Global Gathering Place for Patriots
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-12 shadow-sm">
          <div className="text-center mb-12">
            <p className="text-3xl font-semibold text-gray-800 mb-8">
              Come in, pull up a chair, and talk with fellow America First patriots.
            </p>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              This is our digital tavern — a warm, welcoming space for real conversation, 
              strategy, laughter, and building the next 250 years of America First.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Global Public Tavern</h3>
              <p className="text-gray-700">Open to all approved members — general discussion, news, and fellowship.</p>
              <span className="inline-block mt-6 text-sm bg-white px-4 py-2 rounded-full border">Coming Soon</span>
            </div>

            <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-600 mb-4">Private Pubs</h3>
              <p className="text-gray-700">Issue-based and location-based rooms for deeper conversations.</p>
              <span className="inline-block mt-6 text-sm bg-white px-4 py-2 rounded-full border">Coming Soon</span>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/become-one"
              className="inline-block bg-red-600 hover:bg-red-700 text-white text-2xl font-bold px-16 py-8 rounded-2xl transition"
            >
              JOIN AFCN TO ENTER THE TAVERN
            </Link>
          </div>

          <p className="text-center text-sm text-gray-500 mt-10">
            Only approved members of America First Citizens Network can access the Tavern.
          </p>
        </div>

        <p className="text-center text-sm text-gray-500 mt-12">
          We move at the speed of trust.<br />
          Real community starts here.
        </p>
      </div>
    </>
  );
};

export default AmericaFirstTavern;
