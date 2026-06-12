import React from 'react';
import SiteFooter from '../components/SiteFooter';

export default function Mission() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-8 pb-20">
        <div className="container max-w-4xl mx-auto px-6">

          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-patriot-blue mb-6 tracking-tight">
              Our Mission
            </h1>
            
            <p className="text-2xl md:text-3xl font-medium text-patriot-red max-w-3xl mx-auto leading-tight">
              Here, at America First Citizens Network, we’re building the practical scaffold for active America First citizenship — one citizen, one community, one victory at a time.
            </p>

            <div className="mt-10 space-y-6 text-xl">
              <p>This is <strong>your</strong> network for real, lasting impact.</p>
              <p className="text-2xl font-semibold text-patriot-blue">
                YOU tell US what you need to be active citizens.
              </p>
              <p className="max-w-2xl mx-auto">
                We exist to empower everyday patriots like you to take back control of our Republic and secure prosperity, liberty, and self-governance for the next 250 years.
              </p>
            </div>
          </div>

          {/* Central Purpose */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-patriot-blue mb-8 text-center">
              Rebuilding Active Citizenship — Now and for Future Generations
            </h2>
            
            <div className="bg-white border border-border rounded-2xl p-10 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Central Purpose</h3>
              <p className="text-lg leading-relaxed">
                Benjamin Franklin’s famous remark, “A Republic, if you can keep it,” is more than a warning — it is our call to action.
              </p>
              <p className="text-lg leading-relaxed mt-6">
                Republics are fragile. They depend on an informed, virtuous, and actively engaged citizenry. Without constant vigilance, corruption, factionalism, apathy, or concentrated power can turn any government into despotism or oligarchy.
              </p>
              <p className="text-lg leading-relaxed mt-6">
                <strong>We The People are restoring</strong> the great American tradition of active, informed, and courageous citizenship.
              </p>
              <p className="text-lg leading-relaxed mt-6">
                <strong>We equip each other</strong> with the knowledge, tools, training, and community we need to engage locally and nationally — not as spectators, but as the true sovereigns of this Republic.
              </p>
              <p className="text-lg leading-relaxed mt-6">
                <strong>It is time we return</strong> our country to the foundational truth that we are endowed by our Creator with intellect and reason — the God-given capacity to think clearly, govern ourselves, and build a just society based on truth, not tyranny or trends.
              </p>
            </div>
          </div>

          {/* Pillars */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-patriot-blue mb-10 text-center">
              We Stand Firm on These Essential Pillars
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-border p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-patriot-red mb-4">SAVE America Act & Election Integrity</h3>
                <p className="text-lg">Every legal vote must count. Every citizen’s voice must matter. We work to secure honest elections through transparency, verifiable processes, voter ID, strict enforcement of election laws, and the SAVE America Act — because free and fair elections are the bedrock of self-government.</p>
              </div>

              <div className="bg-white border border-border p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-patriot-red mb-4">Protect Our Children & Families</h3>
                <p className="text-lg">Parents have the fundamental right to raise and educate their own children. We defend strong families, safe communities, and education that teaches real American history, critical thinking, and moral clarity — not indoctrination.</p>
              </div>

              <div className="bg-white border border-border p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-patriot-red mb-4">Deep State Accountability</h3>
                <p className="text-lg">We demand full transparency and accountability from <strong>ANY government institutions</strong>. We will expose and dismantle the weaponization of government against the American people and restore the Republic to its rightful owners — We The People.</p>
              </div>

              <div className="bg-white border border-border p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-patriot-red mb-4">Revive American Prosperity</h3>
                <p className="text-lg">Trade, energy, manufacturing, and economic policy must put American families, farms, factories, and future generations first. We reject globalist deals that hollow out our communities.</p>
              </div>
            </div>
          </div>

          {/* As a Member */}
          <div className="mb-16 bg-white border border-border rounded-2xl p-10">
            <h2 className="text-4xl font-bold text-patriot-blue mb-8 text-center">
              As a Member
            </h2>
            <p className="text-center text-xl mb-10">
              This is where the real work begins. Here’s how you actively participate and make an impact:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-lg leading-relaxed">
              <div>
                <strong>Join or start Committees of Observation</strong><br />
                Private chat groups on the website forming watchdog groups that monitor and act in your community or about your issue.
              </div>
              <div>
                <strong>Chat with all members in America First Tavern</strong><br />
                The main gathering place for everyone in the Network.
              </div>
              <div>
                <strong>Connect in our Pubs</strong><br />
                Smaller group chats by location or specific issue.
              </div>
              <div>
                <strong>Send Direct Messages</strong><br />
                Privately message other members for one-on-one conversations, collaboration, or networking.
              </div>
              <div>
                <strong>Add Resources</strong><br />
                Share your own materials, videos, links, or documents by requesting Linda (she built this website) to embed high-quality content.
              </div>
              <div className="md:col-span-2">
                <strong>Submit Your Patriot Story</strong><br />
                Share your experiences, victories, or testimony for publication on our site to inspire others. Submit Your Patriot Story to Linda. (She loves reading them!) They are published so everyone can read them.
              </div>
            </div>
          </div>

          {/* How You Make This Happen - Very Tight */}
          <div className="bg-gradient-to-br from-patriot-blue to-blue-900 text-white rounded-3xl p-8 text-center">
            <h2 className="text-4xl font-bold mb-4">How You Make This Happen</h2>

            <a 
              href="/signup.html"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-12 py-6 rounded-xl transition-all"
            >
              Become a Member – Fill Out Application
            </a>

            <p className="text-3xl font-medium mt-6">
              You are not just joining an organization.<br />
              <span className="text-patriot-red">You are rebuilding the Republic.</span>
            </p>
          </div>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
