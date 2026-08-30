import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { membersDb, MEMBERS_URL } from '../../lib/membersClient';

function xUrl(handle) {
  if (!handle) return '';
  const clean = String(handle).trim().replace(/^@/, '');
  return clean ? `https://x.com/${clean}` : '';
}

function adminYes(value) {
  return value === true || value === 'true' || value === 't' || value === 1 || value === '1';
}

export default function PendingMembers() {
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);
  const [workingId, setWorkingId] = useState(null);
  const [error, setError] = useState('');
  const [debug, setDebug] = useState(null);

  useEffect(() => {
    const run = async () => {
      console.log('Pending members project URL:', MEMBERS_URL);

      const { data: sessionData } = await membersDb.auth.getSession();
      const sessionUser = sessionData?.session?.user || null;

      const { data: userData, error: userError } = await membersDb.auth.getUser();
      const user = userData?.user || sessionUser;

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

      const facts = {
        authEmail: user.email || '(none)',
        authId: user.id || '(none)',
        profileFound: !!profile,
        isAdminValue: profile ? String(profile.is_admin) : '(no row)',
        supabaseError: profileError?.message || userError?.message || '(none)',
        projectUrl: MEMBERS_URL,
      };
      setDebug(facts);

      if (adminYes(profile?.is_admin)) {
        setAllowed(true);
        const { data, error: listError } = await membersDb
          .from('profiles')
          .select('id, full_name, email, x_handle, state, paid_at, status')
          .eq('status', 'pending')
          .order('paid_at', { ascending: false });

        if (listError) setError('Could not load pending members: ' + listError.message);
        else setRows(data || []);
        setLoading(false);
        return;
      }

      setAllowed(false);
      setLoading(false);
    };

    run();
  }, [navigate]);

  const accept = async (id) => {
    setWorkingId(id);
    setError('');
    const { error: updateError } = await membersDb
      .from('profiles')
      .update({ status: 'member', approved_at: new Date().toISOString() })
      .eq('id', id)
      .eq('status', 'pending');
    if (updateError) {
      setError('Accept failed: ' + updateError.message);
      setWorkingId(null);
      return;
    }
    setRows((current) => current.filter((row) => row.id !== id));
    setWorkingId(null);
  };

  const decline = async (id) => {
    setWorkingId(id);
    setError('');
    const { error: updateError } = await membersDb
      .from('profiles')
      .update({ status: 'declined' })
      .eq('id', id)
      .eq('status', 'pending');
    if (updateError) {
      setError('Decline failed: ' + updateError.message);
      setWorkingId(null);
      return;
    }
    setRows((current) => current.filter((row) => row.id !== id));
    setWorkingId(null);
  };

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
        <div className="max-w-xl mx-auto text-left text-gray-800">
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
        <p className="text-gray-600 mb-6">
          Accept makes them a member. Decline keeps any $25 as a donation. No refund.
        </p>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        {rows.length === 0 ? (
          <p className="text-gray-500 py-16 text-center">No pending members.</p>
        ) : (
          <div className="space-y-4">
            {rows.map((row) => {
              const link = xUrl(row.x_handle);
              return (
                <div key={row.id} className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6">
                  <p className="font-bold text-lg text-patriot-blue">{row.full_name || '—'}</p>
                  <p className="text-gray-700">{row.email || '—'}</p>
                  <p className="text-gray-700">X: {row.x_handle || '—'}</p>
                  <p className="text-gray-700">State: {row.state || '—'}</p>
                  <p className="text-gray-700 mb-4">
                    Paid at: {row.paid_at ? new Date(row.paid_at).toLocaleString() : '—'}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    {link && (
                      <a href={link} target="_blank" rel="noopener noreferrer" className="bg-black text-white font-bold px-5 py-3 rounded-xl text-center">
                        Open on X
                      </a>
                    )}
                    <button type="button" disabled={workingId === row.id} onClick={() => accept(row.id)} className="bg-patriot-blue hover:bg-blue-900 text-white font-bold px-5 py-3 rounded-xl disabled:opacity-50">
                      Accept
                    </button>
                    <button type="button" disabled={workingId === row.id} onClick={() => decline(row.id)} className="bg-patriot-red hover:bg-red-700 text-white font-bold px-5 py-3 rounded-xl disabled:opacity-50">
                      Decline
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
