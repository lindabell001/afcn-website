'use client'

import React from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function NotifyAdmins() {
  const sendNotification = async () => {
    // Example: Send email to Norine and Linda
    const message = "New pending member signup. Please review in Verification Dashboard.";

    // This is a placeholder - real email would use Supabase Edge Function or your email service
    alert(`Notification would be sent to:\n- Norine\n- Linda\n\nMessage: ${message}`);

    // In real production, we would call an Edge Function here
  };

  return (
    <div className="p-8">
      <button onClick={sendNotification} className="bg-patriot-red text-white px-8 py-4 rounded-2xl">
        Test Admin Notification (X Handle Vet)
      </button>
    </div>
  );
}
