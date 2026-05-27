import SiteLayout from "@/components/SiteLayout";

const CommitteesOfObservation = () => {
  return (
    <SiteLayout>
      <div className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Hero Image + Title */}
        <div className="text-center mb-12">
          <img 
            src="https://picsum.photos/id/1015/1200/600" 
            alt="Modern patriots gathered in historic courthouse" 
            className="rounded-2xl shadow-2xl mx-auto mb-8 w-full"
          />
          <h1 className="text-5xl font-bold text-red-600 mb-4">Committees of Observation</h1>
          <p className="text-2xl text-gray-700">Reviving the Founders’ proven tool for lawful grassroots action</p>
        </div>

        {/* Historical Context */}
        <div className="bg-white border border-gray-200 rounded-2xl p-10 shadow-sm mb-12">
          <h2 className="text-3xl font-bold mb-6 text-red-600">From 1774 to 2026</h2>
          <p className="text-lg leading-relaxed mb-4">
            In 1774, our Founding Fathers created Committees of Observation in cities and towns across the colonies. 
            These committees monitored government actions, shared information, coordinated peaceful resistance, 
            and held officials accountable — all while staying within the rule of law.
          </p>
          <p className="text-lg leading-relaxed">
            Today, the America First Citizens Network is proudly reviving this powerful model for the modern era.
          </p>
        </div>

        {/* How It Works */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border border-gray-200 rounded-2xl p-10">
            <h3 className="text-2xl font-bold mb-4 text-red-600">Organized By Location</h3>
            <p className="text-lg">Neighborhood • City • County • Congressional District • State</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-10">
            <h3 className="text-2xl font-bold mb-4 text-red-600">Organized By Issue</h3>
            <p className="text-lg">Border Security • Election Integrity • Education • Economy • 2nd Amendment • Parental Rights • and more</p>
          </div>
        </div>

        {/* Core Principles */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-10 mb-16">
          <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">Core Principles</h2>
          <ul className="space-y-4 text-lg max-w-3xl mx-auto">
            <li>• Facts First — Only verifiable information</li>
            <li>• Rule of Law — Fully within the Constitution</li>
            <li>• Peaceful & Respectful — No harassment or violence</li>
            <li>• Transparency — We hold ourselves accountable</li>
            <li>• America First — Focused on securing our Republic</li>
          </ul>
        </div>

        {/* Connection to Tavern */}
        <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-6">From Tavern to Action</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Ideas are born and friendships are made in the <strong>America First Tavern</strong>.<br />
            Serious plans are developed and executed in the <strong>Committees of Observation</strong>.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a 
            href="/become-one" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white text-xl font-bold px-12 py-5 rounded-xl transition"
          >
            Become a Member → Join or Start a Committee
          </a>
          <p className="mt-6 text-gray-600">Norine personally reviews every membership application.</p>
        </div>
      </div>
    </SiteLayout>
  );
};

export default CommitteesOfObservation;
