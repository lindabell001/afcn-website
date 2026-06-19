import { Link } from "react-router-dom";
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
                America First
                <br />
                Citizens Network
              </h1>

              <p className="mt-6 text-xl md:text-2xl font-light italic text-white/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] font-medium">
                The start of the next 250 years
              </p>

              {/* Buttons kept as-is for now */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/become-one"
                  className="inline-flex items-center gap-2 bg-[#002868] hover:bg-[#001f4d] text-white text-base font-bold uppercase tracking-wider px-10 py-4 rounded-lg shadow-lg transition-all duration-200"
                >
                  BECOME A MEMBER
                </Link>

                <a
                  href="https://magadarts.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-base font-bold uppercase tracking-wider px-10 py-4 rounded-lg shadow-lg transition-all duration-200 border-2 border-white/30"
                >
                  → PLAY MAGA-DARTS NOW!
                </a>

                <Link
                  to="/resources"
                  className="inline-flex items-center gap-2 bg-[#002868] hover:bg-[#001f4d] text-white text-base font-bold uppercase tracking-wider px-8 py-4 rounded-lg shadow-lg transition-all duration-200"
                >
                  EXPLORE RESOURCES
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
