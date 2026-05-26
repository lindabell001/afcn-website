import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";

const Index = () => {
  return (
    <SiteLayout>
      {/* Hero */}
      <div className="relative h-screen min-h-[600px] flex items-center justify-center bg-cover bg-center text-white"
           style={{ 
             backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://picsum.photos/id/1015/2000/1200')" 
           }}>
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">America First Citizens Network</h1>
          <p className="text-2xl mb-10">— Active Citizenship for the Next 250 Years —</p>
          <a href="/play-darts.html" 
             className="inline-block bg-red-600 hover:bg-red-700 text-white text-xl font-semibold px-12 py-5 rounded-lg">
            → PLAY MAGA-DARTS NOW!
          </a>
        </div>
      </div>

      {/* Be Active */}
      <section className="bg-[#0a2540] text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Be Active</h2>
          <p className="text-2xl">Any America First patriot can play <strong>MAGA DARTS</strong> and earn points daily.</p>
          <a href="/play-darts.html" className="mt-8 inline-block bg-red-600 hover:bg-red-700 text-white text-xl px-10 py-4 rounded-lg">
            See Live Leaderboard →
          </a>
        </div>
      </section>

      {/* The Vision */}
      <section className="py-20 text-center bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-red-600 mb-10">The Vision</h2>
          <p className="text-xl leading-relaxed mb-8">
            America First Citizens Network is your organization to secure the future for the next 250 years. 
            We provide the education, tools, and community you need to become an active American citizen 
            and for you to share your knowledge with fellow patriots.
          </p>
          <p className="text-xl leading-relaxed">
            We have modernized the time-tested <strong>Committees of Observation</strong> our Founders used 
            to mobilize on the issues that matter most — and to lawfully hold our representatives accountable 
            at every level of government.
          </p>
          <a href="/committees-of-observation.html" className="mt-10 inline-block bg-red-600 hover:bg-red-700 text-white text-xl px-10 py-4 rounded-lg">
            Learn About Committees of Observation →
          </a>
        </div>
      </section>

      {/* Early Momentum */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-red-600 mb-8">Early Momentum</h2>
          <h3 className="text-2xl mb-6">Members & Committees</h3>
          <p className="text-lg mb-8">
            The first wave is forming — by location and by issue — building the grassroots structure our Republic was always meant to have.
          </p>
          <a href="/join.html" className="inline-block bg-red-600 hover:bg-red-700 text-white text-xl px-10 py-4 rounded-lg">
            Join Now →
          </a>
        </div>
      </section>

      {/* Patriots Stories */}
      <section className="py-20 text-center bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-red-600 mb-6">Patriots Stories</h2>
          <p className="text-xl">This is what our descendants in 2276 will read.</p>
          <a href="/patriots-stories.html" className="mt-8 inline-block bg-red-600 hover:bg-red-700 text-white text-xl px-10 py-4 rounded-lg">
            Members submit Your Patriot Story →
          </a>
        </div>
      </section>

    </SiteLayout>
  );
};

export default Index;
