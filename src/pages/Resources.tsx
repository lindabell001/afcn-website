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

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Take Action */}
          <a href="/action" className="group block p-8 bg-card border border-border rounded-2xl hover:border-patriot-red transition-all hover:shadow-xl">
            <h2 className="text-3xl font-bold text-primary mb-3">Take Action</h2>
            <p className="text-lg text-muted-foreground">Building a one stop page</p>
          </a>

          {/* Podcasts */}
          <a href="/podcasts" className="group block p-8 bg-card border border-border rounded-2xl hover:border-patriot-red transition-all hover:shadow-xl">
            <h2 className="text-3xl font-bold text-primary mb-3">Podcasts</h2>
            <p className="text-lg text-muted-foreground">America First Voices</p>
          </a>

          {/* Music & Radio */}
          <a href="/music" className="group block p-8 bg-card border border-border rounded-2xl hover:border-patriot-red transition-all hover:shadow-xl">
            <h2 className="text-3xl font-bold text-primary mb-3">Music & Radio</h2>
            <p className="text-lg text-muted-foreground">Patriotic and modern religious music</p>
          </a>

          {/* Educational Travel */}
          <a href="/travel" className="group block p-8 bg-card border border-border rounded-2xl hover:border-patriot-red transition-all hover:shadow-xl">
            <h2 className="text-3xl font-bold text-primary mb-3">Educational Travel</h2>
            <p className="text-lg text-muted-foreground">Have fun with education</p>
          </a>

          {/* Deep Dives */}
          <a href="/deep-dives" className="group block p-8 bg-card border border-border rounded-2xl hover:border-patriot-red transition-all hover:shadow-xl md:col-span-2">
            <h2 className="text-3xl font-bold text-primary mb-3">Deep Dives</h2>
            <p className="text-lg text-muted-foreground">Articles, analysis, essays, research reports</p>
          </a>

        </div>

        <div className="text-center mt-16 text-sm text-muted-foreground">
          America First Citizens Network — Faith • Family • Freedom
        </div>
      </div>
    </PageShell>
  );
};

export default Resources;
