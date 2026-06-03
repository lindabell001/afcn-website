const CommitteesOfObservation: React.FC = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Modern Mission */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-4 tracking-tight">
            COMMITTEE OF OBSERVATION
          </h1>
          <p className="text-xl text-blue-900 font-semibold">
            Reviving the Spirit of 1776 • America First Lawful Vigilance
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
          <p className="text-lg mb-10">
            WE THE PEOPLE are the ultimate guardians of our Republic. Committees of Observation 
            are local, decentralized citizen networks that peacefully observe, document, and 
            advocate for secure elections, strong borders, fiscal responsibility, constitutional 
            governance, and America First principles.
          </p>

          <p className="text-lg mb-12">
            We revive the spirit of our Founding Fathers through lawful vigilance, transparency, 
            and active citizenship.
          </p>

          {/* Call to Action - Top */}
          <div className="text-center my-10">
            <a
              href="/become-one"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-12 py-6 rounded-xl transition-all duration-200 shadow-lg"
            >
              Join & Become Part of a Committee →
            </a>
          </div>

          <hr className="my-16 border-gray-300" />

          {/* Historical Section */}
          <h2 className="text-3xl font-bold text-red-600 mb-8">Historical Roots: Committees of Observation in the American Revolution</h2>
          
          <p className="text-lg mb-6">
            In the early 1770s, Committees of Observation were formed across the American colonies 
            as local revolutionary committees to monitor public affairs, enforce revolutionary policies, 
            and detect disloyalty to the Patriot cause.
          </p>

          <p className="text-lg mb-8">
            They worked alongside Committees of Correspondence and Committees of Safety, becoming 
            the <strong>shadow government</strong> of the colonies during the fight for Independence.
          </p>

          <div className="bg-blue-50 border-l-8 border-blue-600 p-8 my-10 rounded-r-xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Their Critical Role in 1776:</h3>
            <ul className="list-disc pl-6 space-y-3 text-base">
              <li>Watched for violations of non-importation agreements against British goods</li>
              <li>Monitored suspected Loyalists and enforced revolutionary measures locally</li>
              <li>Reported to higher authorities and coordinated resistance across colonies</li>
              <li>In many areas, they effectively replaced royal authority as the real governing power</li>
            </ul>
          </div>

          <p className="italic text-lg text-center my-10 border-l-4 border-red-600 pl-6">
            Without these local Committees of Observation, historians argue the American Revolution 
            might never have gained the momentum or coordination it needed to succeed.
          </p>

          <hr className="my-16 border-gray-300" />

          {/* Transition + Modern Mission */}
          <h2 className="text-3xl font-bold text-red-600 mb-6">Our Modern Committees of Observation</h2>
          <p className="text-lg mb-12">
            Today we revive this proud tradition — not as revolutionaries against a king, but as 
            lawful guardians restoring constitutional order and America First principles.
          </p>

          {/* Core Principles */}
          <h2 className="text-3xl font-bold text-red-600 mt-12 mb-6">Core Principles</h2>
          <ul className="list-disc pl-8 space-y-4 text-lg mb-12">
            <li><strong>Facts First</strong> — Only verifiable, evidence-based observations.</li>
            <li><strong>Rule of Law</strong> — We operate fully within the Constitution and all laws.</li>
            <li><strong>Peace & Respect</strong> — Peaceful advocacy, never confrontation.</li>
            <li><strong>Transparency</strong> — We hold ourselves accountable to the same standards we expect from government.</li>
            <li><strong>America First</strong> — Focused on policies that strengthen our nation.</li>
          </ul>

          <h2 className="text-3xl font-bold text-red-600 mt-12 mb-6">What We Observe</h2>
          <ul className="list-disc pl-8 space-y-4 text-lg mb-12">
            <li>Public meetings (city councils, school boards, election boards)</li>
            <li>Election processes and procedures</li>
            <li>Government spending and transparency</li>
            <li>Impacts of border security and immigration policies</li>
            <li>Legislative actions affecting American families</li>
          </ul>

          <h2 className="text-3xl font-bold text-red-600 mt-12 mb-6">How We Operate</h2>
          <ul className="list-disc pl-8 space-y-4 text-lg mb-12">
            <li>Attend open public meetings and review public records</li>
            <li>Submit factual reports through our secure member portal</li>
            <li>Share verified information to educate fellow citizens</li>
            <li>Provide toolkits for petitions, letters, and public comments</li>
          </ul>

          <h2 className="text-3xl font-bold text-red-600 mt-12 mb-6">We Never:</h2>
          <ul className="list-disc pl-8 space-y-4 text-lg mb-12">
            <li>Engage in harassment, intimidation, or illegal activity</li>
            <li>Trespass or record secretly</li>
            <li>Spread unverified claims</li>
          </ul>

          {/* Final Call to Action */}
          <div className="text-center my-16">
            <a
              href="/become-one"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-12 py-6 rounded-xl transition-all duration-200 shadow-lg"
            >
              Join & Become Part of a Committee →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommitteesOfObservation;
