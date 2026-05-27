import SiteLayout from "@/components/SiteLayout";

const PatriotsStories = () => {
  return (
    <SiteLayout>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-red-600 mb-4">Patriots Stories</h1>
          <p className="text-2xl text-gray-700">Your story. Our history. Their future.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm mb-12">
          <p className="text-lg leading-relaxed text-center mb-8">
            This is what our descendants in 2276 will read.<br />
            Your children, grandchildren, and great-grandchildren will want to know what it was like to live through this time — 
            and how everyday patriots stood up to protect America.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-red-600">How to Share Your Story</h2>
          
          <div className="text-center mb-10">
            <p className="text-xl mb-4">Email your personal story to:</p>
            <a 
              href="mailto:PatriotStories@americafirstcitizensnetwork.org" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white text-xl font-bold px-10 py-4 rounded-xl transition"
            >
              PatriotStories@americafirstcitizensnetwork.org
            </a>
          </div>

          <p className="text-center text-lg mb-6">
            In the subject line, please write: <strong>“My Patriot Story”</strong>
          </p>

          <p className="text-center text-lg">
            Tell us in your own words — what you’ve seen, what you’ve fought for, why you love this country, 
            and what you want future generations to know.
          </p>
        </div>

        <p className="text-center text-sm text-gray-500 mt-12 italic">
          Linda personally reads every story submitted. Approved stories will be published here for other patriots to be encouraged 
          and for history to remember the truth of what we lived through.
        </p>
      </div>
    </SiteLayout>
  );
};

export default PatriotsStories;
