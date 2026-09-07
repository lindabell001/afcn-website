import { createClient } from '@supabase/supabase-js';

export const SENATE_URL = 'https://pnxfelmnyqltuzgdraqh.supabase.co';

const SENATE_KEY = import.meta.env.VITE_SENATE_SUPABASE_ANON_KEY || '';

if (!SENATE_KEY) {
  console.error('Missing VITE_SENATE_SUPABASE_ANON_KEY');
}

export const senateDb = createClient(SENATE_URL, SENATE_KEY);
