import React from 'react';
import SiteFooter from '../components/SiteFooter';

const SocialWelfareOrganization = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-patriot-blue mb-4">
            Social Welfare Organization (501c4)
          </h1>
          <div className="h-1 w-24 bg-patriot-red mx-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed">
          {/* Add your actual content here */}
          <p>America First Citizens Network operates as a 501(c)(4) social welfare organization dedicated to promoting civic engagement, education, and the preservation of American values.</p>
          
          <h2 className="text-2xl font-semibold text-patriot-blue mt-10">Our Mission as a 501c4</h2>
          <p>We focus on issue advocacy, voter education, and building a strong network of informed, active citizens who love this country and want to protect it for future generations.</p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default SocialWelfareOrganization;
