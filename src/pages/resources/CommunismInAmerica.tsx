import React from 'react';
import { Link } from 'react-router-dom';

const CommunismInAmerica = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* HERO */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold text-red-600 mb-6">Communism In America</h1>
        <p className="text-3xl text-gray-700 max-w-4xl mx-auto font-light">
          Primary Senate records, historical evidence, and current threats — so We the People can recognize and defeat Communism
        </p>
      </div>

      {/* SECTION 1: McCarthy Era */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-red-600 mb-8 text-center">McCarthy Era</h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Official U.S. Senate Permanent Subcommittee on Investigations transcripts (1953–54) and archival footage of the fight against Communist infiltration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="https://www.senate.gov/about/resources/pdf/mccarthy-hearings-volume1.pdf" target="_blank" rel="noopener noreferrer" className="block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-2">Senate Vol. 1 (1953)</h3>
            <p className="text-gray-600">Executive sessions</p>
          </a>
          <a href="https://www.senate.gov/about/resources/pdf/mccarthy-hearings-volume2.pdf" target="_blank" rel="noopener noreferrer" className="block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-2">Senate Vol. 2 (1953)</h3>
            <p className="text-gray-600">Executive sessions</p>
          </a>
          <a href="https://www.senate.gov/about/resources/pdf/mccarthy-hearings-volume3.pdf" target="_blank" rel="noopener noreferrer" className="block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-2">Senate Vol. 3 (1953)</h3>
            <p className="text-gray-600">Executive sessions</p>
          </a>
          <a href="https://www.senate.gov/about/resources/pdf/mccarthy-hearings-volume4.pdf" target="_blank" rel="noopener noreferrer" className="block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-2">Senate Vol. 4 (1953)</h3>
            <p className="text-gray-600">Executive sessions</p>
          </a>
          <a href="https://www.senate.gov/about/resources/pdf/mccarthy-hearings-volume5.pdf" target="_blank" rel="noopener noreferrer" className="block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-2">Senate Vol. 5 (1954)</h3>
            <p className="text-gray-600">Includes Army-McCarthy hearings</p>
          </a>
          <a href="https://www.senate.gov/about/resources/pdf/mccarthy-hearings-index.pdf" target="_blank" rel="noopener noreferrer" className="block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-2">Full Index</h3>
            <p className="text-gray-600">Navigate all volumes</p>
          </a>
        </div>

        {/* Video examples */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="aspect-video bg-black">
              <iframe 
                src="https://www.youtube.com/embed/qAuGKmqq3fM" 
                title="Army-McCarthy Opening" 
                className="w-full h-full" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h4 className="font-semibold">Army-McCarthy Hearings - Opening Session</h4>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="aspect-video bg-black">
              <iframe 
                src="https://www.youtube.com/embed/UBXoopRCrcE" 
                title="Stevens Testimony" 
                className="w-full h-full" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h4 className="font-semibold">Secretary Stevens Testimony & McCarthy Response</h4>
            </div>
          </div>
        </div>

        {/* NEW SUB-SECTION: The Take Down of McCarthy */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-red-600 mb-6 text-center">The Take Down of McCarthy</h3>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              In the spring of 1954, the U.S. Army — under Secretary Robert T. Stevens — launched a counter-attack against Senator Joseph R. McCarthy and his chief counsel Roy Cohn. Stevens and Army officials accused McCarthy’s team of pressuring the Army for special treatment for Private G. David Schine while McCarthy was aggressively investigating Communist infiltration in the Army Signal Corps and other defense installations.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>From an America First perspective:</strong> Senator McCarthy was exposing a very real and documented threat — Soviet espionage and Communist sympathizers embedded in sensitive government and military positions during the height of the Cold War. The Army’s aggressive pushback, including the highly publicized hearings, was widely seen by McCarthy’s supporters as an attempt to shield institutions from legitimate scrutiny and to silence one of the few voices willing to name names and demand accountability. McCarthy argued that even a small number of Communists in the military represented an unacceptable security risk to the nation.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              The exchanges between Stevens (and Army counsel Joseph Welch) and McCarthy became the dramatic centerpiece of the televised hearings. Welch’s famous rebuke — “Have you no sense of decency, sir?” — was portrayed in the establishment media as the moral takedown of McCarthy. To McCarthy’s defenders, it was a calculated deflection that shifted focus away from the substantive issue of Communist subversion and toward personal attacks on the investigators.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              These hearings ultimately contributed to McCarthy’s censure by the Senate later in 1954. From the America First viewpoint, they represent a pivotal moment when the permanent bureaucracy and political establishment successfully pushed back against a populist anti-Communist crusader, protecting institutional power at the expense of national security vigilance.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2: Americanism v Communism */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-red-600 mb-8 text-center">Americanism v Communism</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-2">Founding Documents vs. Communist Manifesto</h3>
            <p className="text-gray-600">Primary contrasts (coming soon)</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-2">Classic Anti-Communist Resources</h3>
            <p className="text-gray-600">HUAC, FBI pamphlets, etc.</p>
          </div>
        </div>
      </div>

      {/* SECTION 3: Communism Today */}
      <div className="mb-20">
        <h2 className="text-4xl font-bold text-red-600 mb-8 text-center">Communism Today</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-2">CCP Influence & Modern Threats</h3>
            <p className="text-gray-600">Congressional reports (coming soon)</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-red-600 mb-2">Current Hearings & Analysis</h3>
            <p className="text-gray-600">Latest primary sources</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-3xl p-16">
        <h2 className="text-4xl font-bold text-red-600 mb-6">Ready to Take Action?</h2>
        <p className="text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Join the America First family and become part of the Committees of Observation today.
        </p>
        <Link
          to="/become-one"
          className="inline-block bg-red-600 hover:bg-red-700 text-white text-2xl font-bold px-12 py-6 rounded-2xl transition"
        >
          Become a Member & Join This Committee
        </Link>
      </div>
    </div>
  );
};

export default CommunismInAmerica;
