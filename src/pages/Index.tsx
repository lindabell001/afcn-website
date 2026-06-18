import { Link } from "react-router-dom";
import heroRays from "@/assets/hero-rays.jpg";

const Index = () => {
  return (
    <>
      {/* Hero Section - Clean & Powerful */}
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
              {/* No repeated text here - Header logo handles branding */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                
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
