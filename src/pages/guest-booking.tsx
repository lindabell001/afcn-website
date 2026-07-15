import React from 'react';
import SiteFooter from '../components/SiteFooter';

export default function GuestBooking() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-patriot-blue mb-6">Guest Booking</h1>
          <p className="text-2xl text-gray-600">Schedule guests and manage requests</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <div className="bg-white rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-8">Availability Calendar</h2>
            <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
              <p className="text-gray-500">Calendar view will go here</p>
            </div>
          </div>

          {/* Pending Requests */}
          <div className="bg-white rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-8">Pending Guest Requests</h2>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-2xl p-6">
                <p className="font-semibold">Guest Name</p>
                <p className="text-gray-600">Topic: Border Security</p>
                <div className="flex gap-4 mt-4">
                  <button className="bg-green-600 text-white px-6 py-3 rounded-2xl">Accept</button>
                  <button className="bg-red-600 text-white px-6 py-3 rounded-2xl">Decline</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-patriot-blue text-white px-12 py-6 rounded-3xl text-2xl font-bold">Invite New Guest</button>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
