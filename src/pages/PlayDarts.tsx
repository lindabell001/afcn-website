import PageShell from "@/components/PageShell";
import eagle from "@/assets/eagle-antigravity.png";

const PlayDarts = () => {
  return (
    <PageShell
      title="Play MAGA-DARTS"
      subtitle="The patriotic dart game built for citizen patriots."
    >
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <img
          src={eagle}
          alt="Cartoon eagle floating in zero gravity"
          className="mx-auto w-64 h-64 object-contain mb-8"
        />

        <h2 className="text-5xl font-bold text-red-600 mb-4">
          MAGA DARTS
        </h2>

        <p className="text-xl mb-8">
          Join the movement. Compete. Support the cause. Earn points.
        </p>

        <h3 className="text-3xl font-bold mb-8">How to Play MAGA DARTS</h3>
        
        <p className="text-lg mb-10 max-w-2xl mx-auto">
          Post, Like, Retweet, or Donate with <strong>#MAGADARTS</strong>.<br />
          Earn points • Climb the leaderboard • Help Make 2026 MAGA!
        </p>

        {/* Point System */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto">
          <div className="bg-white/10 border border-white/20 p-6 rounded-2xl">
            <div className="text-5xl font-bold text-green-400">10 pts</div>
            <div className="text-white/80">Original Post</div>
          </div>
          <div className="bg-white/10 border border-white/20 p-6 rounded-2xl">
            <div className="text-5xl font-bold text-green-400">5 pts</div>
            <div className="text-white/80">Retweet</div>
          </div>
          <div className="bg-white/10 border border-white/20 p-6 rounded-2xl">
            <div className="text-5xl font-bold text-green-400">1 pt</div>
            <div className="text-white/80">Like</div>
          </div>
          <div className="bg-white/10 border border-white/20 p-6 rounded-2xl">
            <div className="text-5xl font-bold text-green-400">500 pts</div>
            <div className="text-white/80">Per $25 Donated to AFCN</div>
          </div>
        </div>

        {/* Main Play Button */}
        <a
          href="https://magadarts.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-red-600 hover:bg-red-700 text-white text-2xl font-bold px-16 py-6 rounded-2xl shadow-xl transition-all mb-8"
        >
          → START PLAYING MAGA-DARTS NOW!
        </a>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="https://magadarts.netlify.app/leaderboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-xl font-semibold text-lg"
          >
            View Leaderboard
          </a>
          <a
            href="/donate"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-semibold text-lg"
          >
            Donate to AFCN
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-12">
          Donations to America First Citizens Network are not tax deductible.<br />
          This game is independently owned and operated.
        </p>
      </div>
    </PageShell>
  );
};

export default PlayDarts;
