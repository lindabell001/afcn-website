import React from 'react';
import PageShell from '../components/PageShell';

const SocialWelfareOrganization: React.FC = () => {
  return (
    <PageShell
      title="Social Welfare Organization (501c4)"
      subtitle="America First Citizens Network • Lawful Grassroots Advocacy • America First"
    >
      <div className="max-w-4xl mx-auto px-6 py-12">

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-4">
            Social Welfare Organization (501c4)
          </h1>
          <p className="text-xl text-blue-900 font-semibold">
            Lawful • Grassroots • America First
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">

          <h2 className="text-3xl font-bold text-red-600 mt-8 mb-8">America First Citizens Network is a 501(c)(4) Social Welfare Organization</h2>
          <p className="text-lg mb-10">
            This structure gives us significantly more flexibility for lobbying and issue advocacy than a 501(c)(3) charity.
          </p>

          <h2 className="text-3xl font-bold text-red-600 mt-12 mb-6">Key Permissions for Lobbying</h2>
          <ul className="list-disc pl-8 space-y-4 text-lg mb-12">
            <li>Unlimited lobbying is allowed as long as it relates to our social welfare purpose (civic betterment and promoting the common good).</li>
            <li>Lobbying can even be a primary activity.</li>
            <li><strong>Direct Lobbying</strong>: Contacting legislators or staff about specific legislation.</li>
            <li><strong>Grassroots Lobbying</strong>: Urging the public to contact legislators about bills.</li>
          </ul>

          <h2 className="text-3xl font-bold text-red-600 mt-12 mb-6">What This Enables for Members</h2>
          <ul className="list-disc pl-8 space-y-4 text-lg mb-12">
            <li>Strong issue advocacy campaigns through Committees of Observation</li>
            <li>Public education, toolkits, and coordinated awareness efforts</li>
            <li>MAGA DARTS campaigns focused on America First priorities</li>
            <li>Petitions and lawful grassroots mobilization</li>
          </ul>

          <h2 className="text-3xl font-bold text-red-600 mt-12 mb-6">Important Limitations</h2>
          <ul className="list-disc pl-8 space-y-4 text-lg mb-12">
            <li><strong>Not Primary Political Campaign Activity</strong>: Our main focus remains social welfare, education, and issue advocacy.</li>
            <li><strong>No Direct Contributions to Candidates</strong>: AFCN cannot make direct donations to candidates.</li>
            <li><strong>Dues &amp; Donations Are Not Tax-Deductible</strong>: Because a portion of funds supports lobbying.</li>
            <li><strong>Donor Disclosure</strong>: 501(c)(4) organizations are not required to publicly disclose their donors.</li>
          </ul>

          <h2 className="text-3xl font-bold text-red-600 mt-12 mb-6">Our Commitment</h2>
          <p className="text-lg mb-12">
            WE THE PEOPLE believe in grassroots lobbying by WE THE PEOPLE. We will never hire professional lobbyists. 
            All advocacy will remain lawful, issue-based, and driven by American patriots.
          </p>

          <p className="text-lg italic mb-16">
            This 501(c)(4) structure perfectly supports our 250-year mission of restoring power to the American people.
          </p>

          <hr className="my-16 border-gray-300" />

          {/* Official IRS Section */}
          <h2 className="text-3xl font-bold text-red-600 mb-8">Official IRS Definition</h2>
          <p className="text-lg mb-8">
            Internal Revenue Code Section 501(c)(4) exempts civic leagues or organizations not organized for profit but operated 
            <strong> exclusively for the promotion of social welfare</strong>. This includes organizations whose primary purpose is 
            to bring about civic betterment and social improvements for the community.
          </p>

          <div className="text-center">
            <a 
              href="https://www.irs.gov/charities-non-profits/other-non-profits/types-of-organizations-exempt-under-section-501c4" 
              target="_blank"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-xl transition-all"
            >
              More info from IRS: Types of organizations exempt under Section 501(c)(4)
            </a>
          </div>

        </div>
      </div>
    </PageShell>
  );
};

export default SocialWelfareOrganization;
