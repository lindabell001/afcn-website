import PageShell from "@/components/PageShell";
import eagle from "@/assets/eagle-cute.png";

const Resources = () => {
  return (
    <PageShell title="Resources" subtitle="Tools, guides, and training for citizen patriots.">
      <div className="text-center bg-card border border-border rounded-md p-10 shadow-card">
        <img
          src={eagle}
          alt="Friendly cartoon eagle mascot"
          loading="lazy"
          width={768}
          height={768}
          className="mx-auto w-56 h-56 object-contain"
        />
        <h2 className="mt-4 text-3xl font-bold">Coming Soon!</h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          Our eagle is hard at work gathering the best citizen toolkits, training videos, and
          chapter-building guides. Check back soon — freedom is on its way!
        </p>
      </div>
    </PageShell>
  );
};

export default Resources;
