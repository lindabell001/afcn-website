import SiteLayout from "@/components/SiteLayout";
import heroRays from "@/assets/hero-rays.jpg";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <SiteLayout>
      {/* Hero - Original Divine Light Flag */}
      <section className="relative overflow-hidden">
        <div className="relative h-[88vh] min-h-[560px] w-full">
          <img
            src={heroRays}
            alt="American flag with divine light rays"
            className="absolute inset-0 h-full w-full object-cover"
          />
          
          {/* Divine rays overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 0%, hsl(45 100% 80% / 0.55), transparent 60%), linear-gradient(180deg, hsl(45 100% 95% / 0.35) 0%, transparent 35%, hsl(220 70% 15% / 0.35) 100%)",
            }}
          />

          <div className="relative z-10 h-full flex items-center">
            <div className="container text-center">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
                America First Citizens Network
              </h1>
              <p className="mt-6 text-xl md:text-2xl font-serif italic text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
                — Active Citizenship for the Next 250 Years —
              </p>
              <div className="mt-10">
                <a
                  href="/play-darts.html"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white text-xl font-bold uppercase tracking-wide px-10 py-4 rounded-lg shadow-lg"
                >
                  → PLAY MAGA-DARTS NOW!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Be Active - Right under hero */}
      <section className="bg-[#0a2540] text-white py-12 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-2xl">Any America First patriot can play <strong>MAGA DARTS</strong> and earn points daily.</p>
        </div>
      </section>

      {/* The Vision */}
      <section className="py-20 text-center bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-red-600 mb-10">The Vision</h2>
          <p className="text-xl leading-relaxed mb-8">
            America First Citizens Network is your organization to secure the future for the next 250 years.
          </p>
          <p className="text-xl leading-relaxed">
            We provide the education, tools, and community you need to become an active American citizen 
            and for you to share your knowledge with fellow patriots.
          </p>
          <p className="text-xl leading-relaxed mt-8">
            We have modernized the time-tested <strong>Committees of Observation</strong> our Founders used 
            to mobilize on the issues that matter most.
          </p>
          <a 
            href="/committees-of-observation.html" 
            className="mt-10 inline-block bg-red-600 hover:bg-red-700 text-white text-xl px-10 py-4 rounded-lg"
          >
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
          <a 
            href="/join.html" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white text-xl px-10 py-4 rounded-lg"
          >
            Join Now →
          </a>
        </div>
      </section>

      {/* Patriots Stories */}
      <section className="py-20 text-center bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-red-600 mb-6">Patriots Stories</h2>
          <p className="text-xl">This is what our descendants in 2276 will read.</p>
          <a 
            href="/patriots-stories.html" 
            className="mt-8 inline-block bg-red-600 hover:bg-red-700 text-white text-xl px-10 py-4 rounded-lg"
          >
            Members submit Your Patriot Story →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#0a2540',
        color: '#ffffff',
        padding: '50px 20px 30px',
        textAlign: 'center',
        borderTop: '5px solid #ff0000'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}><strong>America First Citizens Network</strong></p>
          
          <p style={{ margin: '15px 0 25px' }}>
            <a href="/committees-of-observation.html" style={{ color: '#ffcc00', margin: '0 12px' }}>Committees of Observation</a> • 
            <a href="/transparency-and-operations.html" style={{ color: '#ffcc00', margin: '0 12px' }}>Transparency & Operations</a> • 
            <a href="/privacy-and-data.html" style={{ color: '#ffcc00', margin: '0 12px' }}>Privacy & Data</a> • 
            <a href="/social-welfare-organization.html" style={{ color: '#ffcc00', margin: '0 12px' }}>Social Welfare Organization (501c4)</a>
          </p>

          <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
            We operate lawfully.<br />
            Norine personally reviews all membership applications.<br />
            We never sell or share your personal data.
          </p>

          <p style={{ fontSize: '13px', opacity: '0.9' }}>
            © 2026 America First Citizens Network • All advocacy is lawful, grassroots, and America First.
          </p>
        </div>
      </footer>
    </SiteLayout>
  );
};

export default Index;
