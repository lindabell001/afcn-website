import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { membersDb, MEMBERS_URL } from '../../lib/membersClient';

function adminYes(value) {
  return value === true || value === 'true' || value === 't' || value === 1 || value === '1';
}

export default function PendingMembers() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);
  const [debug, setDebug] = useState(null);
  const [error, setError] = useState('');
  const [workingId, setWorkingId] = useState(null);
  const [tavernRows, setTavernRows] = useState([]);
  const [memberRows, setMemberRows] = useState([]);
  const [captainRows, setCaptainRows] = useState([]);

  const loadLists = async () => {
    const { data, error: listError } = await membersDb
      .from('profiles')
      .select('id, full_name, email, x_handle, state, paid_at, status')
      .in('status', ['tavern_pending', 'pending', 'captain_pending'])
      .order('paid_at', { ascending: false });

    if (listError) {
      setError('Could not load lists: ' + listError.message);
      return;
    }

    const rows = data || [];
    setTavernRows(rows.filter((r) => r.status === 'tavern_pending'));
    setMemberRows(rows.filter((r) => r.status === 'pending'));
    setCaptainRows(rows.filter((r) => r.status === 'captain_pending'));
  };

  useEffect(() => {
    const run = async () => {
      const { data: { user }, error: userError } = await membersDb.auth.getUser();
      if (!user) {
        setLoading(false);
        navigate('/member-login');
        return;
      }

      const { data: profile, error: profileError } = await membersDb
        .from('profiles')
        .select('id, email, is_admin, status')
        .eq('id', user.id)
        .maybeSingle();

      setDebug({
        authEmail: user.email || '(none)',
        authId: user.id || '(none)',
        profileFound: !!profile,
        isAdminValue: profile ? String(profile.is_admin) : '(no row)',
        supabaseError: profileError?.message || userError?.message || '(none)',
        projectUrl: MEMBERS_URL,
      });

      if (!adminYes(profile?.is_admin)) {
        setAllowed(false);
        setLoading(false);
        return;
      }

      setAllowed(true);
      await loadLists();
      setLoading(false);
    };

    run();
  }, [navigate]);

  const decide = async (id, nextStatus) => {
    setWorkingId(id);
    setError('');
    const patch = { status: nextStatus };
    if (nextStatus === 'member' || nextStatus === 'guest' || nextStatus === 'captain') {
      patch.approved_at = new Date().toISOString();
    }
    const { error: updateError } = await membersDb.from('profiles').update(patch).eq('id', id);
    if (updateError) setError('Update failed: ' + updateError.message);
    else await loadLists();
    setWorkingId(null);
  };

  const CardList = ({ title, rows, acceptTo, showState }) => (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-patriot-blue mb-3">{title}</h2>
      {rows.length === 0 ? (
        <p className="text-gray-500 mb-6">None.</p>
      ) : (
        <div className="space-y-4">
          {rows.map((row) => (
            <div key={row.id} className="bg-white border border-gray-200 rounded-2xl p-5">
              <p className="font-bold text-lg text-patriot-blue">{row.full_name || '—'}</p>
              <p className="text-gray-700">{row.email || '—'}</p>
              {showState && <p className="text-gray-700">State: {row.state || '—'}</p>}
              <p className="text-gray-500 text-sm mb-4">Status: {row.status}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  disabled={workingId === row.id}
                  onClick={() => decide(row.id, acceptTo)}
                  className="bg-patriot-blue hover:bg-blue-900 text-white font-bold px-5 py-3 rounded-xl disabled:opacity-50"
                >
                  Accept
                </button>
                <button
                  type="button"
                  disabled={workingId === row.id}
                  onClick={() => decide(row.id, 'declined')}
                  className="bg-patriot-red hover:bg-red-700 text-white font-bold px-5 py-3 rounded-xl disabled:opacity-50"
                >
                  Decline
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center text-patriot-blue font-semibold">
        Checking admin access…
      </div>
    );
  }

  if (!allowed) {
    return (
      <div className="min-h-screen bg-background px-6 py-16">
        <div className="max-w-xl mx-auto text-gray-800">
          <h1 className="text-2xl font-bold text-patriot-blue mb-4">Pending members</h1>
          <p className="mb-1">Auth email: {debug?.authEmail}</p>
          <p className="mb-1">Auth id: {debug?.authId}</p>
          <p className="mb-1">Profiles row found: {debug?.profileFound ? 'yes' : 'no'}</p>
          <p className="mb-1">is_admin: {debug?.isAdminValue}</p>
          <p className="mb-1">Supabase error: {debug?.supabaseError}</p>
          <p className="mb-1">Project: {debug?.projectUrl}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-patriot-blue mb-2">Pending members</h1>
        <p className="text-gray-600 mb-8">Accept or Decline only. Declined $25 stays a donation.</p>
        {error && <p className="text-red-600 mb-4">{error}</p>}

        <CardList title="Tavern pending" rows={tavernRows} acceptTo="guest" showState={false} />
        <CardList title="Member pending" rows={memberRows} acceptTo="member" showState={false} />
        <CardList title="Captain pending" rows={captainRows} acceptTo="captain" showState={true} />
      </main>
    </div>
  );
}
