const Donate = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-red-600 mb-4">
            Support the America First Citizens Network
          </h1>
          <p className="text-4xl font-bold text-red-600">
            Empowering WE THE PEOPLE
          </p>
        </div>

        {/* Big Donate Button - Moved directly under the headline */}
        <div className="text-center mb-12">
          <a 
            href="https://givingtools.com/give/4206" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-16 px-12 bg-red-600 hover:bg-red-700 text-white text-xl font-bold uppercase tracking-wider rounded-md transition-all shadow-lg"
          >
            DONATE NOW
          </a>
        </div>

        <article className="prose-content space-y-6 text-lg leading-relaxed text-gray-700">
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
          <p className="font-semibold text-red-600">
            Your donation directly fuels this network and helps close the representation gap once
            and for all.
          </p>
        </article>

        <p className="mt-8 text-xs text-center text-gray-500">
          America First Citizens Network is a grassroots movement. Contributions are not tax-deductible.
        </p>
      </div>
    </>
  );
};

export default Donate;
