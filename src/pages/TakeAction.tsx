import React from 'react';
import PageShell from '../components/PageShell';

const TakeAction = () => {
  return (
    <PageShell
      title="Take Action - AFCN"
      subtitle="Building a one stop page"
    >
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">Take Action</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg">Here are the Top 5 recommended actions you can take right now to support the America First Citizens Network.</p>
          
          {/* We'll fill this in later with your Top 5 */}
          <p className="text-muted-foreground mt-8">Content coming soon...</p>
        </div>
      </div>
    </PageShell>
  );
};

export default TakeAction;
