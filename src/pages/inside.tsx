import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

type Profile = {
  email: string | null;
  status: string | null;
  is_admin: boolean | null;
};

function kindLabel(profile: Profile | null) {
  if (!profile) return 'Guest';
  if (profile.is_admin) return 'Admin';
  if (profile.status === 'guest') return 'Guest';
  if (['member', 'captain', 'captain_pending'].includes(profile.status || '')) {
    return 'AFCN member';
  }
  return 'Guest';
}

export default function Inside() {
  const [email, setEmail] = useState('');
  const [profile, setProfile] = useState<Profile | null>(null);
  const [msg, setMsg] = useState('Loading...');

  useEffect(() => {
    async function load() {
      const { data: auth } = await supabase.auth.getUser();
      const user = auth.user;
      if (!user) {
        window.location.href = '/member-login';
        return;
      }

      const { data, error } = await supabase
        .from('profiles')
        .select('email, status, is_admin')
        .eq('id', user.id)
        .maybeSingle();

      if (error) {
        setMsg(error.message);
        return;
      }

      const row = (data || {
        email: user.email || null,
        status: 'pending',
        is_admin: false,
      }) as Profile;

      setEmail(user.email || row.email || '');
      setProfile(row);
      setMsg('');
    }

    load();
  }, []);

  const kind = kindLabel(profile);
  const isAdmin = !!profile?.is_admin;

  return (
    <main style={{ maxWidth: 800, margin: '40px auto', padding: 24, fontFamily: 'Georgia, serif' }}>
      <p>
        You are signed in as {email || 'unknown'} — {kind}.
      </p>
      {msg && <p>{msg}</p>}

      <h1>Inside AFCN</h1>

      <div style={{ display: 'grid', gap: 12 }}>
        <a href="/tavern" style={{ padding: 16, border: '1px solid #1e3a5f', borderRadius: 8, textDecoration: 'none', color: '#1e3a5f' }}>
          America First Tavern
        </a>
        <a href="/senate-tracker" style={{ padding: 16, border: '1px solid #1e3a5f', borderRadius: 8, textDecoration: 'none', color: '#1e3a5f' }}>
          Senate tracker
        </a>
        <a href="/my-podcasts" style={{ padding: 16, border: '1px solid #1e3a5f', borderRadius: 8, textDecoration: 'none', color: '#1e3a5f' }}>
          My podcasts
        </a>
        {isAdmin && (
          <a href="/admin/pending-members" style={{ padding: 16, border: '1px solid #1e3a5f', borderRadius: 8, textDecoration: 'none', color: '#1e3a5f' }}>
            Pending members
          </a>
        )}
      </div>
    </main>
  );
}
