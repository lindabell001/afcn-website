import SiteLayout from "@/components/SiteLayout";

const TransparencyAndOperations = () => {
  return (
    <SiteLayout>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-red-600">
          Transparency &amp; Operations
        </h1>

        <div className="prose prose-lg mx-auto">
          <h2 className="text-2xl font-bold mt-10">Our Commitment to Transparency</h2>
          <p>America First Citizens Network operates with full openness and accountability. We believe citizens deserve to know exactly how their donations and membership dues are used.</p>

          <h2 className="text-2xl font-bold mt-10">Financial Transparency</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>All major expenditures and income sources will be summarized and published quarterly.</li>
            <li>Donations are used for website operations, member tools, outreach, educational materials, and lawful advocacy.</li>
            <li>We maintain clear separation between social welfare activities (primary) and any political activity (limited and compliant).</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10">Membership &amp; Data Handling</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Norine personally reviews every membership application.</li>
            <li>Member data is used only for organizing by location and issue.</li>
            <li>We never sell, rent, or share personal information with third parties.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10">Lawful Advocacy</h2>
          <p>We operate strictly within all federal, state, and local laws. All activities follow IRS 501(c)(4) guidelines for social welfare organizations.</p>

          <h2 className="text-2xl font-bold mt-10">Reporting &amp; Feedback</h2>
          <p>Members and the public are encouraged to ask questions or report concerns. We respond promptly and document resolutions.</p>
        </div>
      </div>
    </SiteLayout>
  );
};

export default TransparencyAndOperations;
