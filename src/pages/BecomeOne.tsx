import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const BecomeOne = () => {
  return (
    <PageShell
      title="Become One"
      subtitle="Join the movement of citizens taking back America."
    >
      <div className="bg-card border border-border rounded-md p-10 shadow-card text-center">
        <div className="mx-auto h-14 w-14 rounded-full bg-patriot-red/10 flex items-center justify-center">
          <Mail className="h-7 w-7 text-patriot-red" />
        </div>
        <h2 className="mt-5 text-3xl font-bold">Step Up. Stand Up. Sign Up.</h2>
        <p className="mt-4 text-foreground/85 leading-relaxed max-w-xl mx-auto">
          Becoming a member of the America First Citizens Network is simple. Send a short email
          introducing yourself to our Director of Membership, Norine Cantor. Tell her your name,
          your city and state, and why you're ready to fight for the Republic.
        </p>

        <p className="mt-6 text-foreground/85">Email Norine directly:</p>
        <a
          href="mailto:nhcantor58@gmail.com?subject=I want to Become One — America First Citizens Network"
          className="mt-2 inline-block text-2xl font-bold text-patriot-red hover:underline"
        >
          nhcantor58@gmail.com
        </a>

        <div className="mt-8">
          <Button
            asChild
            size="lg"
            className="bg-patriot-red hover:bg-patriot-red/90 text-white h-14 px-8 font-bold uppercase tracking-wide"
          >
            <a href="mailto:nhcantor58@gmail.com?subject=I want to Become One — America First Citizens Network">
              Email Norine Now
            </a>
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Norine personally reads and replies to every email. Welcome to the family.
        </p>
      </div>
    </PageShell>
  );
};

export default BecomeOne;
