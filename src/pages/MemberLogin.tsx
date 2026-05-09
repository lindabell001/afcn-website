import PageShell from "@/components/PageShell";
import eagle from "@/assets/eagle-locked.png";

const MemberLogin = () => {
  return (
    <PageShell title="Member Login" subtitle="Patriot portal access.">
      <div className="text-center bg-card border border-border rounded-md p-10 shadow-card">
        <img
          src={eagle}
          alt="Cartoon eagle guarding a locked door"
          loading="lazy"
          width={768}
          height={768}
          className="mx-auto w-64 h-64 object-contain"
        />
        <h2 className="mt-4 text-3xl font-bold">Coming Soon!</h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          The members-only portal is being built. Soon, registered patriots will sign in here to
          access exclusive briefings, chapter tools, and event RSVPs.
        </p>
      </div>
    </PageShell>
  );
};

export default MemberLogin;
