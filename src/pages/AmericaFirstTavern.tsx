import SiteLayout from "@/components/SiteLayout";
import tavernImage from "@/assets/AmericaFirstTavern.jpg";   // ← This line uses your uploaded image

const AmericaFirstTavern = () => {
  return (
    <SiteLayout>
      <div className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Hero Image */}
        <div className="text-center mb-12">
          <img 
            src={tavernImage}
            alt="Founding Fathers at America First Tavern" 
            className="rounded-2xl shadow-2xl mx-auto mb-8 w-full"
          />
          <h1 className="text-5xl font-bold text-red-600 mb-4">America First Tavern</h1>
          <p className="text-2xl text-gray-700 italic">“Where Patriots Gather, Ideas Flow, and America First Lives”</p>
        </div>

        <div className="prose max-w-3xl mx-auto text-lg leading-relaxed text-center mb-16">
          <p>
            Just like the colonial taverns where our Founders met to plan the Revolution, 
            the <strong>America First Tavern</strong> is our digital gathering place.
          </p>
        </div>

        {/* Current Pubs */}
        <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-red-600">Current Pubs</h2>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-gray-50 p-6 rounded-xl">🇺🇸 <strong>Border Security Pub</strong></div>
            <div className="bg-gray-50 p-6 rounded-xl">🗳️ <strong>Election Integrity Pub</strong></div>
            <div className="bg-gray-50 p-6 rounded-xl">🏫 <strong>Education Freedom Pub</strong></div>
            <div className="bg-gray-50 p-6 rounded-xl">💰 <strong>Economy & Trade Pub</strong></div>
          </div>

          <p className="text-center mt-10 text-xl font-medium text-gray-600">
            …and <span className="text-red-600 font-bold">any others members want</span>
          </p>
        </div>

        <div className="text-center">
          <p className="text-2xl font-bold text-red-600 mb-4">
            More Pubs Coming Soon — As Members Want!
          </p>
        </div>
      </div>
    </SiteLayout>
  );
};

export default AmericaFirstTavern;
