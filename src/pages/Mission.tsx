import React from 'react';

const Mission = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-5xl font-bold text-center text-primary mb-12">
          Our Mission
        </h1>

        <div className="space-y-10 text-lg leading-relaxed text-foreground/90">
          <p>
            <strong>Benjamin Franklin’s famous remark, “A Republic, if you can keep it,”</strong> is more than a warning — it is our call to action.
          </p>

          <p>
            Republics are fragile. They depend on an informed, virtuous, and actively engaged citizenry. Without constant vigilance, corruption, factionalism, apathy, or concentrated power can turn any government into despotism or oligarchy.
          </p>

          <p className="text-2xl font-semibold text-patriot-red">
            We almost lost our Republic.
          </p>

          <p className="text-2xl font-semibold">
            But now <span className="text-patriot-red">we are awake</span>.
          </p>

          <p>
            <strong>This is a new organization, but our mission is as old as the Republic itself.</strong>
          </p>

          <p>
            Come meet and chat with fellow patriots in the <strong>America First Tavern</strong> — whether by your location or by the issues that matter most to you. Come plan and take action together in our <strong>Committees of Observation</strong>, again organized by location or by issue, just as our Founders did. We have built this online so patriots across the country can connect easily, share knowledge, and coordinate peacefully.
          </p>

          <p className="font-medium">
            Come help build this network.<br />
            Come be part of something real.
          </p>

          <p className="text-xl font-semibold text-patriot-red">
            This is your opportunity to help shape the next 250 years.
          </p>

          <div className="pt-8 border-t border-border">
            <p className="text-xl font-semibold">
              <strong>We the People</strong> of the United States, in Order to form a more perfect Union, <strong>reestablish Justice</strong>, secure our borders, insure domestic Tranquility, provide for the common defense, promote the general Welfare <strong>of American citizens first</strong>, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this <strong>America First Citizens Network</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
