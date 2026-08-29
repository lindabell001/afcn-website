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
              <div className="text-white text-xl sm:text-2xl md:text-3xl font-light leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
                <p>Ben Franklin said we have a Republic, if we can keep it.</p>
                <p>Certain people running for office are trying to destroy America.</p>
                <p className="font-semibold">Here We The People can keep the Republic.</p>
              </div>

              <div className="mt-12 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <Link
                  to="/about"
                  className="inline-block w-full bg-patriot-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-4 py-4 rounded-lg text-sm sm:text-base shadow-lg transition-all text-center whitespace-nowrap"
                >
                  OUR MISSION
                </Link>
                <Link
                  to="/resources"
                  className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider px-4 py-4 rounded-lg text-sm sm:text-base shadow-lg transition-all text-center whitespace-nowrap"
                >
                  RESOURCES
                </Link>
                <Link
                  to="/senate"
                  className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider px-4 py-4 rounded-lg text-sm sm:text-base shadow-lg transition-all text-center whitespace-nowrap"
                >
                  SENATE
                </Link>
                <Link
                  to="/house"
                  className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider px-3 py-4 rounded-lg text-sm sm:text-base shadow-lg transition-all text-center"
                >
                  HOUSE (IN PROGRESS)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-sm sm:text-base mb-5">
            A household of citizens. Score in public. Rooms that meet. Captains in the states.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm sm:text-base">
            <Link to="/senate" className="text-patriot-blue font-semibold underline">
              Senate ledger →
            </Link>
            <Link to="/take-action" className="text-patriot-blue font-semibold underline">
              Take action →
            </Link>
            <Link to="/about" className="text-patriot-blue font-semibold underline">
              Offices 2026 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
