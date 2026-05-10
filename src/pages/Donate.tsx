import PageShell from "@/components/PageShell";

const Donate = () => {
  return (
    <PageShell
      title="Support the America First Citizens Network"
      subtitle="Empowering We the People"
    >
      <article className="prose-content space-y-5 text-foreground/85 leading-relaxed text-lg">
        <p>
          In the 1770s, the colonists had zero representation in Parliament. Today, we have
          representation on paper — but far too often our elected officials simply ignore what
          we clearly tell them to do on borders, spending, trade, energy, and putting America
          First. That's the big difference… and it's exactly why the America First Citizens
          Network exists.
        </p>
        <p>
          Back then, patriots coordinated through secret Committees of Correspondence. Today,
          we're connecting through a powerful, open digital grassroots network that links
          patriots in every corner of the country — instantly.
        </p>
        <p>
          Our Founders sometimes turned to destructive action and in fact had to fight a war.
          We use smarter, lawful tools: targeted boycotts, massive voter mobilization, primary
          challenges, and nonstop accountability campaigns — all driven by America First
          priorities.
        </p>
        <p>
          Our Founders created a permanent lawful structure: The Constitution. Today's Patriots
          are creating a lasting citizen participation scaffold: America First Citizens Network.
        </p>
        <p>
          Our Founders fought for independence so we could be the ones who delegate our divine
          power to our government. But our education system stopped teaching the citizens to be
          active in our government.
        </p>
        <p>
          We are proudly building America First Citizens Network so everyday citizens can step
          up, get active, and stay involved — exactly as Ben Franklin and our Founders intended.
        </p>
        <p className="font-semibold text-primary">
          Your donation directly fuels this network and helps close the representation gap once
          and for all.
        </p>
      </article>

      <div className="mt-10 bg-card border border-border rounded-md p-8 shadow-card text-center">
  <h2 className="text-2xl font-bold text-primary mb-6">Support the America First Citizens Network</h2>
  
  <a 
    href="https://givingtools.com/give/4206" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center h-16 px-12 bg-patriot-red hover:bg-red-700 text-white text-xl font-bold uppercase tracking-wider rounded-md transition-all shadow-lg"
  >
    DONATE NOW
  </a>

  <p className="mt-4 text-sm text-muted-foreground">
    Your donation is secure and goes directly to AFCN
  </p>
</div>      <p className="mt-4 text-xs text-center text-muted-foreground">
        America First Citizens Network is a grassroots movement. Contributions are not tax-deductible.
      </p>
    </PageShell>
  );
};

export default Donate;
