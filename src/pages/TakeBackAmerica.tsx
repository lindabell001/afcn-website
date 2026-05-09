import PageShell from "@/components/PageShell";

const sections = [
  {
    n: 1,
    title: "Report What You See",
    items: [
      "Suspected illegal activity: If you see possible human smuggling, cartel-related drug dealing, or gang activity, call your local ICE tip line (1-866-347-2423) or the FBI (tips.fbi.gov).",
      "Border concerns: In border states, report unusual activity to Border Patrol (1-866-225-0070).",
      "Use the DOJ tip line or your local U.S. Attorney's Office website to report sanctuary policies blocking immigration enforcement.",
    ],
  },
  {
    n: 2,
    title: "Support Strong Law Enforcement",
    items: [
      "Attend city council and county board meetings — speak up for full cooperation with federal immigration agents.",
      "Back sheriffs and police chiefs who support Operation Take Back America priorities.",
      "Vote for candidates who promise to enforce immigration laws and fight cartels.",
    ],
  },
  {
    n: 3,
    title: "Share Accurate Information",
    items: [
      "Follow official DOJ and ICE updates on arrests and prosecutions.",
      "Share facts (not rumors) with friends and family about the impact of illegal immigration, fentanyl deaths, and gang violence.",
      "Use social media to highlight success stories from Operation Take Back America cases.",
    ],
  },
  {
    n: 4,
    title: "Protect Your Own Community",
    items: [
      "Join or start Neighborhood Watch programs.",
      "Report crimes promptly — don't let minor crimes slide.",
      "Support local programs that keep guns out of the hands of repeat criminals and illegal immigrants.",
    ],
  },
  {
    n: 5,
    title: "Stay Informed and Involved",
    items: [
      "Visit Justice.gov regularly to see weekly case updates from Operation Take Back America.",
      "Contact your Members of Congress — tell them you support full funding and backing for this operation.",
      "If you own a business, follow E-Verify rules and report competitors who hire illegal workers.",
    ],
  },
];

const TakeBackAmerica = () => {
  return (
    <PageShell
      title="How Everyday American Citizens Can Help &ldquo;Take Back America&rdquo;"
      subtitle="Operation Take Back America is the Justice Department's big push to secure the border, dismantle cartels, and fight violent crime."
    >
      <div className="space-y-6">
        <p className="text-lg text-foreground/85 leading-relaxed">
          You don't need to be a cop or lawyer — here are simple, legal ways regular citizens
          can support it:
        </p>

        {sections.map((s) => (
          <article
            key={s.n}
            className="bg-card border border-border rounded-md p-6 md:p-8 shadow-card flex gap-6"
          >
            <div className="shrink-0 h-14 w-14 rounded-full bg-patriot-red text-white flex items-center justify-center font-serif text-2xl font-bold">
              {s.n}
            </div>
            <div>
              <h2 className="text-2xl font-bold">{s.title}</h2>
              <ul className="mt-3 space-y-2 list-disc pl-5 text-foreground/85 leading-relaxed">
                {s.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}

        <div className="bg-patriot-blue text-primary-foreground rounded-md p-8">
          <h3 className="font-serif text-2xl font-bold text-center">Bottom Line</h3>
          <p className="mt-4 leading-relaxed text-white/90">
            Operation Take Back America is the government's job, but it works best when citizens
            are its eyes and ears. Every report, every vote, every public comment adds pressure
            to enforce the laws and protect American communities. Small actions by millions of
            citizens = real results. Stay safe, stay legal, and stay involved. America gets
            stronger when we all do our part.
          </p>
        </div>
      </div>
    </PageShell>
  );
};

export default TakeBackAmerica;
