import PageShell from "@/components/PageShell";

const PlayDarts = () => {
  return (
    <PageShell
      title="Play MAGA-DARTS"
      subtitle="The patriotic dart game built for citizen patriots."
    >
      <div className="min-h-screen bg-[#0A1428] text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            MAGA <span className="text-red-600">DARTS</span>
          </h1>

          <p className="text-xl md:text-2xl text-yellow-400 mb-12">
            Join the movement. Compete. Support the cause. Earn points.
          </p>

          <h2 className="text-4xl font-bold text-yellow-400 mb-10">
            How to Play MAGA DARTS
          </h2>

          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12">
            Post, Like, Retweet, or Donate with <strong>#MAGADARTS</strong>.<br />
            Earn points • Climb the leaderboard • Help Make 2026 MAGA!
          </p>

          {/* Point System */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            <div className="bg-[#1E2A44] p-8 rounded-2xl border border-white/10">
              <div className="text-5xl font-bold text-green-400">10 pts</div>
              <div className="text-white/80 mt-2">Original Post</div>
            </div>
            <div className="bg-[#1E2A44] p-8 rounded-2xl border border-white/10">
              <div className="text-5xl font-bold text-green-400">5 pts</div>
              <div className="text-white/80 mt-2">Retweet</div>
            </div>
            <div className="bg-[#1E2A44] p-8 rounded-2xl border border-white/10">
              <div className="text-5xl font-bold text-green-400">1 pt</div>
              <div className="text-white/80 mt-2">Like</div>
            </div>
            <div className="bg-[#1E2A44] p-8 rounded-2xl border border-white/10">
              <div className="text-5xl font-bold text-green-400">500 pts</div>
              <div className="text-white/80 mt-2">Per $25 Donated to AFCN</div>
            </div>
          </div>

          {/* Big Red Button */}
          <a
            href="https://magadarts.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white text-2xl font-bold px-16 py-6 rounded-full shadow-2xl transition-all duration-200"
          >
            🔥 Learn Full Rules & Start Playing Now
          </a>

          <div className="mt-12">
            <a
              href="https://magadarts.netlify.app/leaderboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline text-lg"
            >
              Check your score at Leaderboard →
            </a>
          </div>

          <p className="text-xs text-white/50 mt-16">
            Donations to America First Citizens Network are not tax deductible.<br />
            This game is independently owned and operated.
          </p>
        </div>
      </div>
    </PageShell>
  );
};

export default PlayDarts;
