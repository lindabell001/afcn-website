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
              <div className="text-white text-2xl sm:text-3xl md:text-4xl font-light leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
                <p>Ben Franklin said we have a Republic, if we can keep it.</p>
                <p>Certain people running for office are trying to destroy America.</p>
                <p>Here We The People can keep the Republic.</p>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
                <Link
                  to="/mission"
                  className="inline-block bg-patriot-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-10 py-4 rounded-lg text-lg shadow-lg transition-all"
                >
                  OUR MISSION
                </Link>

                <Link
                  to="/resources"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider px-10 py-4 rounded-lg text-lg shadow-lg transition-all"
                >
                  RESOURCES
                </Link>

                <Link
                  to="/senate"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider px-10 py-4 rounded-lg text-lg shadow-lg transition-all"
                >
                  SENATE
                </Link>

                <span
                  className="inline-block bg-blue-600 text-white font-bold uppercase tracking-wider px-10 py-4 rounded-lg text-lg shadow-lg"
                >
                  HOUSE (IN PROGRESS)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
