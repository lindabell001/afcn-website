import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import heroRays from "@/assets/hero-rays.jpg";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative h-[88vh] min-h-[560px] w-full">
          <img
            src={heroRays}
            alt="American flag with divine light rays"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* divine rays overlay starting from top (just below nav) */}
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
                Preserving Our Values, Protecting Our Future.
              </p>
              <div className="mt-10">
                <Button
                  asChild
                  size="lg"
                  className="bg-patriot-red hover:bg-patriot-red/90 text-white border-0 h-14 px-8 text-base md:text-lg font-bold uppercase tracking-wide shadow-elegant"
                >
                  <Link to="/play-darts">→ Play MAGA-DARTS Now!</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="py-20 bg-cream">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold">America First Agenda</h2>
            <div className="mt-4 mx-auto h-1 w-24 bg-patriot-red" />
            <p className="mt-5 text-muted-foreground text-lg">
              Three pillars guiding our movement to restore the Republic and return power to the American people.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <article className="bg-card border-t-4 border-patriot-red rounded-md p-8 shadow-card flex flex-col">
              <h3 className="text-xl font-bold uppercase tracking-tight">
                The Citizens Declaration of Independence
              </h3>
              <p className="mt-4 text-foreground/80 leading-relaxed flex-1">
                In Convention of American Citizens assembled July 4, 2027, we declare the
                reestablishment of the Republic founded in 1776.
              </p>
              <Link
                to="/declaration"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-patriot-red hover:underline"
              >
                📜 Read the Full Declaration <ArrowRight className="h-4 w-4" />
              </Link>
            </article>

            {/* Box 2 */}
            <article className="bg-card border-t-4 border-patriot-blue rounded-md p-8 shadow-card flex flex-col">
              <h3 className="text-xl font-bold">Citizens Take Back Power</h3>
              <div className="mt-4 text-foreground/80 leading-relaxed flex-1 space-y-4">
                <p>
                  It's time for everyday Americans to take back control from Washington. We are
                  building strong local chapters in every county so patriots can educate, mobilize,
                  and hold our leaders accountable. Power belongs to We the People — not the
                  politicians.
                </p>
                <p>
                  Operation Take Back America is the government's plan. But small actions by
                  millions of citizens = real results. Stay safe, stay legal, and stay involved.
                  America gets stronger when we all do our part.
                </p>
              </div>
              <Link
                to="/take-back-america"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-patriot-blue hover:underline"
              >
                Read the Full Plan → Citizens Take Back America
              </Link>
            </article>

            {/* Box 3 */}
            <article className="bg-card border-t-4 border-patriot-red rounded-md p-8 shadow-card flex flex-col">
              <h3 className="text-xl font-bold">The Burchett Blueprint</h3>
              <p className="mt-1 text-sm uppercase tracking-wide text-muted-foreground">
                Citizen-to-Representative Teaching
              </p>
              <p className="mt-4 text-foreground/80 leading-relaxed flex-1">
                Our tech-savvy volunteers contact their representative's home district office and
                offer to teach them how to film short unfiltered weekly updates, hold live Q&amp;A
                sessions, and communicate directly with constituents using their own equipment and
                staff — like Rep. Tim Burchett. Eliminating every excuse for secrecy and
                closed-door politics.
              </p>
              <Link
                to="/burchett-blueprint"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-patriot-red hover:underline"
              >
                Read the Full Guide <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Index;
