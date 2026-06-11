import { Link } from "react-router-dom";

const ConstitutionAcademy = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold text-red-600 mb-6">Constitution Academy</h1>
        <p className="text-3xl text-gray-700 max-w-4xl mx-auto font-light">
          We the People — Free videos and tools to truly understand our Founding Documents
        </p>
      </div>

      {/* Core Founding Documents - Improved */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-red-600 mb-8 text-center">Core Founding Documents</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Official transcripts from the National Archives — the most accurate sources available.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a href="https://www.archives.gov/founding-docs/declaration-transcript" 
             target="_blank" rel="noopener noreferrer" 
             className="group block bg-white border border-gray-200 rounded-3xl p-10 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-5xl mb-6">🗽</div>
            <h3 className="text-2xl font-bold text-red-600 mb-3">Declaration of Independence</h3>
            <p className="text-gray-600 leading-relaxed">July 4, 1776 — The unanimous declaration of the thirteen united States of America</p>
            <span className="inline-block mt-6 text-red-600 font-medium group-hover:underline">Read Full Transcript →</span>
          </a>

          <a href="https://www.archives.gov/founding-docs/constitution-transcript" 
             target="_blank" rel="noopener noreferrer" 
             className="group block bg-white border border-gray-200 rounded-3xl p-10 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-5xl mb-6">📜</div>
            <h3 className="text-2xl font-bold text-red-600 mb-3">U.S. Constitution</h3>
            <p className="text-gray-600 leading-relaxed">Signed September 17, 1787 — The supreme law of the land</p>
            <span className="inline-block mt-6 text-red-600 font-medium group-hover:underline">Read Full Transcript →</span>
          </a>

          <a href="https://www.archives.gov/founding-docs/bill-of-rights-transcript" 
             target="_blank" rel="noopener noreferrer" 
             className="group block bg-white border border-gray-200 rounded-3xl p-10 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-5xl mb-6">🛡️</div>
            <h3 className="text-2xl font-bold text-red-600 mb-3">Bill of Rights</h3>
            <p className="text-gray-600 leading-relaxed">The first 10 Amendments — Ratified December 15, 1791</p>
            <span className="inline-block mt-6 text-red-600 font-medium group-hover:underline">Read Full Transcript →</span>
          </a>
        </div>
      </div>

      {/* Video Library */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-red-600 mb-8 text-center">Hillsdale College Constitution 101 Series</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">Watch in the exact order Linda arranged:</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            { title: "The Declaration: From Universal Truth to a Particular Choice", url: "https://youtu.be/28z1U0ytCS8" },
            { title: "What it Means to Be “Created Equal”", url: "https://www.youtube.com/watch?v=9Sp7SJ_r7_U" },
            { title: "Why Do We Need Popular Consent in Free Government?", url: "https://www.youtube.com/watch?v=RlkNOuQkaFY" },
            { title: "How Representative Government Prevents Tyranny", url: "https://www.youtube.com/watch?v=fv9RY2dsVLw" },
            { title: "Constitution 101 | Lecture 1", url: "https://www.youtube.com/watch?v=oU5gasRxYdU" },
            { title: "Constitution 101 | Lecture 2", url: "https://www.youtube.com/watch?v=wvCWORnRy1A" },
            { title: "God Alone Can Be Trusted With All Three Powers of Government", url: "https://www.youtube.com/watch?v=1-tHeUFn2Bg" },
            { title: "A Constitution That Encourages Good Character", url: "https://www.youtube.com/watch?v=qH-Xoku34SM" },
            { title: "Lesson One | The Connection Between the Constitution and the Declaration", url: "https://youtu.be/vGGx7sTDnMY" },
            { title: "James Madison’s Arrangements For Three Equal Branches", url: "https://www.youtube.com/watch?v=iV3aW07FFrM" },
            { title: "Lesson Three | Freedom and Equality", url: "https://youtu.be/iP97Xi-srnc" },
            { title: "Lesson Five | Representation", url: "https://youtu.be/lb--PjsgmA4" },
            { title: "Lesson Six | The People Rule, But They Do Not Govern", url: "https://youtu.be/XzCwSzZ-cEw" },
            { title: "Lesson Seven | A Constitution that Encourages Reason to Rule the Passions", url: "https://youtu.be/oXUFzLd9VtQ" },
            { title: "Lesson Eight | The People are the Most Powerful and the Most Dangerous", url: "https://youtu.be/a4IyRndlUhk" },
            { title: "Lesson Nine | A Virtuous People is Necessary for Good Government", url: "https://youtu.be/1hrCFUoAVDs" },
            { title: "Lesson Ten | Ballots Rather Than Bullets", url: "https://youtu.be/Owp9j84NtCk" },
            { title: "Lesson Eleven | The Importance of Limited Government", url: "https://youtu.be/bn_5eiWH2z4" },
            { title: "Lesson Twelve | The Problem with Progressivism", url: "https://youtu.be/4vutqN-v0lQ" },
          ].map((video, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition">
              <div className="aspect-video bg-black">
                <iframe 
                  src={video.url.replace("youtu.be/", "www.youtube.com/embed/").replace("watch?v=", "embed/")} 
                  title={video.title}
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-gray-800 leading-tight">{video.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strong CTA */}
      <div className="text-center bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-3xl p-16">
        <h2 className="text-4xl font-bold text-red-600 mb-6">Ready to Take Action?</h2>
        <p className="text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Join the America First family and become part of the Committees of Observation today.
        </p>
        <Link 
          to="/become-one"
          className="inline-block bg-red-600 hover:bg-red-700 text-white text-2xl font-bold px-12 py-6 rounded-2xl transition"
        >
          Become a Member & Join This Committee
        </Link>
      </div>
    </div>
  );
};

export default ConstitutionAcademy;
