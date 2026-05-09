import PageShell from "@/components/PageShell";
import eagle from "@/assets/eagle-antigravity.png";

const PlayDarts = () => {
  return (
    <PageShell
      title="Play MAGA-DARTS"
      subtitle="The patriotic dart game built for citizen patriots."
    >
      <div className="text-center bg-card border border-border rounded-md p-10 shadow-card">
        <img
          src={eagle}
          alt="Cartoon eagle floating in zero gravity"
          loading="lazy"
          width={768}
          height={768}
          className="mx-auto w-64 h-64 object-contain animate-pulse"
        />
        <h2 className="mt-4 text-3xl font-bold">Hold On — We're Defying Gravity!</h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          MAGA-DARTS is launching soon. Our eagle is testing the antigravity arena right now.
          Check back shortly to take your first throw for freedom!
        </p>
      </div>
    </PageShell>
  );
};

export default PlayDarts;
