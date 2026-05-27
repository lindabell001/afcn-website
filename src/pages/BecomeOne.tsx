import SiteLayout from "@/components/SiteLayout";

const BecomeOne = () => {
  return (
    <SiteLayout>
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
              href="/join.html" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white text-2xl font-bold px-16 py-6 rounded-xl transition"
            >
              JOIN NOW – $25 / YEAR
            </a>
          </div>

          <p className="text-center text-lg mb-8">
            Your application will go to our Director of Membership, <strong>Norine Cantor</strong>, 
            who personally reviews every application.
          </p>

          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-bold text-center mb-6 text-red-600">Once Approved You Can:</h3>
            <ul className="max-w-md mx-auto space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">•</span> Submit your Patriot Story for publication
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">•</span> Join or start Committees of Observation
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">•</span> Connect with other patriots by location and issue
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 font-bold">•</span> Access member resources and tools
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-12">
          We move at the speed of trust.<br />
          Help us build the next 250 years of America First.
        </p>
      </div>
    </SiteLayout>
  );
};

export default BecomeOne;
