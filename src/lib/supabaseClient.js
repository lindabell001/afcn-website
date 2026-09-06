import { createClient } from '@supabase/supabase-js';

const MEMBERS_URL = 'https://iskownhurcvgjrcsgtbe.supabase.co';
const MEMBERS_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!MEMBERS_ANON_KEY) {
  console.error('Missing members VITE_SUPABASE_ANON_KEY');
}

export const supabase = createClient(MEMBERS_URL, MEMBERS_ANON_KEY);
