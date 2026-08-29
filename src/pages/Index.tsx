import React from 'react';
import { Link } from 'react-router-dom';
import heroRays from "@/assets/hero-rays.jpg";

const Index = () => {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="relative h-[88vh] min-h-[560px] w-full">
          <img
            src={heroRays}
            alt="American flag with divine light rays"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 0%, hsl(45 100% 80% / 0.55), transparent 60%), linear-gradient(180deg, hsl(45 100% 95% / 0.35) 0%, transparent 35%, hsl(220 70% 15% / 0.35) 100%)",
            }}
          />

          <div className="relative z-10 h-full flex items-center">
            <div className="container text-center px-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] leading-none">
                America First<br />Citizens Network
              </h1>
              <p className="mt-6 text-3xl md:text-4xl font-light italic text-white/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
                The start of the next 250 years
              </p>

              <div className="mt-8 text-white text-lg md:text-xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                <p>Ben Franklin said we have a Republic, if we can keep it.</p>
                <p>Certain people running for office are trying to destroy America.</p>
                <p className="font-semibold">Here We The People can keep the Republic.</p>
              </div>

              <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
                <Link
                  to="/mission"
                  className="inline-block w-full bg-patriot-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-3 py-4 rounded-lg text-sm sm:text-base shadow-lg transition-all text-center"
                >
                  OUR MISSION
                </Link>
                <Link
                  to="/become-one"
                  className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider px-3 py-4 rounded-lg text-sm sm:text-base shadow-lg transition-all text-center"
                >
                  BECOME ONE
                </Link>
                <Link
                  to="/senate"
                  className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider px-3 py-4 rounded-lg text-sm sm:text-base shadow-lg transition-all text-center"
                >
                  SENATE
                </Link>
                <Link
                  to="/house"
                  className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider px-2 py-4 rounded-lg text-sm sm:text-base shadow-lg transition-all text-center"
                >
                  HOUSE (IN PROGRESS)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
