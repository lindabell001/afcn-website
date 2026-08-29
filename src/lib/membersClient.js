import { createClient } from '@supabase/supabase-js';

export const MEMBERS_PROJECT_REF = 'iskownhurcvgjrcsgtbe';
export const MEMBERS_URL = 'https://iskownhurcvgjrcsgtbe.supabase.co';

const MEMBERS_KEY = import.meta.env.VITE_MEMBERS_SUPABASE_ANON_KEY || '';

if (!MEMBERS_KEY) {
  console.error('Missing VITE_MEMBERS_SUPABASE_ANON_KEY (afcn-members only)');
}

export const membersDb = createClient(MEMBERS_URL, MEMBERS_KEY);
