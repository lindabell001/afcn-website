import PageShell from "@/components/PageShell";

const steps = [
  {
    n: 1,
    title: "Identify and Contact the District Office",
    body: "Look up your U.S. Representative's home district office (not the D.C. office). Call during business hours and ask to speak with the District Director or Communications staffer. Be respectful, brief, and clear: you are a constituent volunteer offering free help.",
  },
  {
    n: 2,
    title: "Make the Offer — Free Communications Coaching",
    body: "Explain that you are with the America First Citizens Network and you'd like to volunteer to teach the Representative's team how to film short, unfiltered weekly video updates and host live Q&A sessions — using their own equipment and their own staff. No cost. No middleman. No spin.",
  },
  {
    n: 3,
    title: "Train the Staff Using the Burchett Model",
    body: "Schedule one or two on-site sessions. Show them how Rep. Tim Burchett records honest, plain-spoken updates from his phone or office. Teach them framing, lighting, captions, posting cadence, and how to handle live constituent questions without scripts or talking points.",
  },
  {
    n: 4,
    title: "Hold Them to It — Publicly",
    body: "Once a Representative has been trained, there is no excuse left for secrecy. If they refuse to communicate directly with constituents, document it. If they do it well, celebrate it loudly. Either way, the era of closed-door politics ends in your district.",
  },
];

const BurchettBlueprint = () => {
  return (
    <PageShell
      title="The Burchett Blueprint"
      subtitle="Citizen-to-Representative teaching — eliminating every excuse for closed-door politics."
    >
      <div className="space-y-6">
        {steps.map((s) => (
          <article
            key={s.n}
            className="bg-card border border-border rounded-md p-6 md:p-8 shadow-card flex gap-6"
          >
            <div className="shrink-0 h-14 w-14 rounded-full bg-patriot-blue text-white flex items-center justify-center font-serif text-2xl font-bold">
              {s.n}
            </div>
            <div>
              <h2 className="text-2xl font-bold">{s.title}</h2>
              <p className="mt-2 text-foreground/85 leading-relaxed">{s.body}</p>
            </div>
          </article>
        ))}

        <div className="bg-cream border border-border rounded-md p-8 text-center">
          <p className="font-serif italic text-lg text-primary">
            When citizens teach their Representatives how to be transparent, secrecy has nowhere
            left to hide.
          </p>
        </div>
      </div>
    </PageShell>
  );
};

export default BurchettBlueprint;
