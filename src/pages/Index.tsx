import React from 'react';
import { Link } from 'react-router-dom';
import heroRays from "@/assets/hero-rays.jpg";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
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
            <div className="container text-center px-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] leading-none">
                America First<br />Citizens Network
              </h1>
              <p className="mt-6 text-3xl md:text-4xl font-light italic text-white/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
                The start of the next 250 years
              </p>

              {/* Your Requested Text */}
              <div className="mt-8 text-white text-3xl md:text-4xl font-light">
                We the People<br />
                Rebuilding America First — Citizen by Citizen
              </div>
              <div className="mt-4 text-white/90 text-lg md:text-xl">
                Organized by state, district, county, city, and neighborhood, and Issue.<br />
                By the people. For the people.
              </div>

              {/* Buttons - Blue, Red, Blue */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/resources"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider px-10 py-4 rounded-lg text-lg shadow-lg transition-all"
                >
                  EXPLORE RESOURCES
                </Link>

                <Link
                  to="/mission"
                  className="inline-block bg-patriot-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-10 py-4 rounded-lg text-lg shadow-lg transition-all"
                >
                  OUR MISSION
                </Link>

                <Link
                  to="/become-one"
                  onClick={() => {
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: 'instant' });
                    }, 100);
                  }}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider px-10 py-4 rounded-lg text-lg shadow-lg transition-all"
                >
                  BECOME ONE
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
