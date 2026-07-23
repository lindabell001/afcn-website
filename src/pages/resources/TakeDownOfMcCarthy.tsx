import React from 'react';
import { Link } from 'react-router-dom';

const TakeDownOfMcCarthy = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold text-red-600 mb-6">The Take Down of McCarthy</h1>
        <p className="text-3xl text-gray-700 max-w-4xl mx-auto font-light">
          Army-McCarthy Hearings Key Exchanges (1954)
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="aspect-video bg-black">
            <iframe 
              src="https://www.youtube.com/embed/UBXoopRCrcE" 
              title="Stevens Testimony & McCarthy Response" 
              className="w-full h-full" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-xl">Secretary Stevens Testimony & McCarthy Response</h3>
            <p className="text-gray-600 mt-2">Army counter-attack begins</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
          <div className="aspect-video bg-black">
            <iframe 
              src="https://www.youtube.com/embed/jdvGFVHYYTI" 
              title="Welch Decency Exchange" 
              className="w-full h-full" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-xl">Welch “Have You No Sense of Decency?” + McCarthy Rebuttal</h3>
            <p className="text-gray-600 mt-2">Famous climax of the hearings</p>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-white border border-gray-200 rounded-2xl p-8 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-red-600 mb-6">From an America First Viewpoint</h3>
        <p className="text-gray-700 leading-relaxed">
          In the spring of 1954, the U.S. Army — under Secretary Robert T. Stevens — launched a counter-attack against Senator Joseph R. McCarthy and his chief counsel Roy Cohn. Stevens and Army officials accused McCarthy’s team of pressuring the Army for special treatment for Private G. David Schine while McCarthy was aggressively investigating Communist infiltration in the Army Signal Corps and other defense installations.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          <strong>America First perspective:</strong> Senator McCarthy was exposing a very real and documented threat — Soviet espionage and Communist sympathizers embedded in sensitive government and military positions during the height of the Cold War. The Army’s aggressive pushback, including the highly publicized hearings, was widely seen by McCarthy’s supporters as an attempt to shield institutions from legitimate scrutiny and to silence one of the few voices willing to name names and demand accountability.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Welch’s famous rebuke — “Have you no sense of decency, sir?” — was portrayed in the establishment media as the moral takedown of McCarthy. To McCarthy’s defenders, it was a calculated deflection that shifted focus away from the substantive issue of Communist subversion and toward personal attacks on the investigators.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          These hearings ultimately contributed to McCarthy’s censure by the Senate later in 1954. From the America First viewpoint, they represent a pivotal moment when the permanent bureaucracy and political establishment successfully pushed back against a populist anti-Communist crusader, protecting institutional power at the expense of national security vigilance.
        </p>
      </div>

      <div className="text-center mt-16">
        <Link 
          to="/resources/communism-in-america" 
          className="inline-block border border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold uppercase tracking-wider px-10 py-4 rounded-lg text-lg transition-all"
        >
          ← Back to Communism In America
        </Link>
      </div>
    </div>
  );
};

export default TakeDownOfMcCarthy;
