import React from 'react';
import PageShell from '../components/PageShell';

const Resources = () => {
  return (
    <PageShell
      title="AFCN Resource Page"
      subtitle="Building a one stop page for and by Patriots"
    >
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-4">AFCN RESOURCE PAGE</h1>
          <p className="text-2xl text-muted-foreground">
            Building a one stop page for and by Patriots
          </p>
        </div>

        <div className="space-y-16">

          <div>
            <h2 className="text-3xl font-bold text-primary mb-3">Take Action</h2>
            <p className="text-lg text-muted-foreground">Building a one stop page</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary mb-3">Podcasts</h2>
            <p className="text-lg text-muted-foreground">America First Voices</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary mb-3">Music & Radio</h2>
            <p className="text-lg text-muted-foreground">Patriotic and modern religious music</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary mb-3">Educational Travel</h2>
            <p className="text-lg text-muted-foreground">Have fun with education</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary mb-3">Deep Dives</h2>
            <p className="text-lg text-muted-foreground">Articles, analysis, essays, research reports</p>
          </div>

        </div>
      </div>
    </PageShell>
  );
};

export default Resources;
