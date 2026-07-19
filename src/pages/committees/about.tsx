'use client'

import React from 'react';
import SiteFooter from '../../components/SiteFooter';

export default function CommitteeAbout() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-patriot-blue">Committee of Observation Charter</h1>
          <p className="text-2xl text-gray-600">America First Citizens Network</p>
        </div>

        <div className="bg-white rounded-3xl p-12 prose max-w-none">
          <h2>Preamble</h2>
          <p>Before the American Revolution, everyday citizens formed local “Committees of Observation” to watch what was happening in their communities, share accurate information, and take lawful action to defend liberty. These committees were essential to the birth of the Republic.</p>
          <p>America First Citizens Network is reviving this honored tradition for the 21st century.</p>

          <h2>Purpose</h2>
          <p>The Committee of Observation exists to:</p>
          <ul>
            <li>Observe and document issues affecting our communities and nation.</li>
            <li>Share verified information and lawful recommendations.</li>
            <li>Coordinate peaceful, legal civic action to restore and protect our Constitutional Republic.</li>
            <li>Uphold the principles of truth, integrity, and America First.</li>
          </ul>

          <h2>Core Principles</h2>
          <ul>
            <li>Lawful Action Only — All activities must be 100% legal and peaceful.</li>
            <li>Truth First — We prioritize facts over narratives.</li>
            <li>Local Focus — Committees operate at neighborhood, city, county, or state levels.</li>
            <li>Transparency — Major observations and actions are reported back to the broader AFCN network.</li>
            <li>No Vigilantism — We observe, document, and report. We do not take enforcement into our own hands.</li>
          </ul>

          <h2>Responsibilities</h2>
          <p>Committee members agree to:</p>
          <ol>
            <li>Actively observe issues in their local area or area of expertise.</li>
            <li>Document facts accurately and fairly.</li>
            <li>Share observations in their assigned AFCN chat/group.</li>
            <li>Participate in lawful civic actions (calls to legislators, petitions, public records requests, peaceful assembly, etc.).</li>
            <li>Maintain respectful and productive dialogue.</li>
            <li>Uphold the America First mission and AFCN principles.</li>
          </ol>

          <h2>Structure</h2>
          <ul>
            <li>Any 5+ active AFCN members may form a local or issue-specific Committee of Observation.</li>
            <li>Each committee selects a Coordinator (rotating or permanent) to help organize communication.</li>
            <li>Committees operate with significant autonomy but remain aligned with AFCN’s core mission.</li>
            <li>National coordination is minimal and only occurs when issues affect the entire network.</li>
          </ul>

          <h2>Membership</h2>
          <ul>
            <li>Open to verified AFCN members in good standing.</li>
            <li>Members may join multiple committees if they have the time and interest.</li>
            <li>Inactive members may be gently rotated out to keep committees effective.</li>
          </ul>

          <h2>Code of Conduct</h2>
          <ul>
            <li>Treat all people with dignity, even when we disagree.</li>
            <li>No doxxing, threats, harassment, or illegal activity.</li>
            <li>Focus on solutions, not just complaints.</li>
            <li>Protect the reputation of AFCN and the broader America First movement.</li>
          </ul>

          <h2>Official Statement</h2>
          <p>The Committee of Observation is the eyes and ears of the American people — lawful, organized, and committed to restoring our Republic. We do not replace government. We watch it, hold it accountable, and exercise our rights as free citizens.</p>
          <p>“A Republic, if you can keep it.” — Benjamin Franklin</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
