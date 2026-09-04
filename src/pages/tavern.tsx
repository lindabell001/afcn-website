import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { membersDb } from '../lib/membersClient';
import SiteFooter from '../components/SiteFooter';

const SLUG = 'america-first-tavern';
const CAN_WRITE = ['guest', 'member', 'captain', 'captain_pending'];

function badgeText(profile) {
  if (!profile) return '';
  const status = String(profile.status || '').toLowerCase();
  const state = String(profile.state || '').trim().toUpperCase();
  const area = String(profile.volunteer_area || '').trim();

  if (status === 'guest') return 'Guest';
  if (status === 'member') return 'AFCN member';
  if (status === 'captain') return state ? `${state} Captain` : 'Captain';
  if (status === 'captain_pending') return state ? `${state} Captain pending` : 'Captain pending';
  if (area) return area;
  return '';
}

export default function Tavern() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [checking, setChecking] = useState(true);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [asking, setAsking] = useState(false);

  const status = String(profile?.status || '').toLowerCase();
  const canWrite = !!user && CAN_WRITE.includes(status);
  const badge = badgeText(profile);

  useEffect(() => {
    const run = async () => {
      const { data: { user: authUser } } = await membersDb.auth.getUser();
      setUser(authUser || null);

      if (authUser) {
        const { data } = await membersDb
          .from('profiles')
          .select('id, email, full_name, status, state, volunteer_area, is_admin')
          .eq('id', authUser.id)
          .maybeSingle();
        setProfile(data || null);
      }

      const { data: rows, error: listError } = await membersDb
        .from('messages')
        .select('*')
        .eq('slug', SLUG)
        .order('created_at', { ascending: true });

      if (listError) setError(listError.message);
      else setMessages(rows || []);

      setChecking(false);
    };

    run();
  }, []);

  useEffect(() => {
    const channel = membersDb
      .channel(`room:${SLUG}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `slug=eq.${SLUG}`,
        },
        (payload) => setMessages((prev) => [...prev, payload.new])
      )
      .subscribe();

    return () => {
      membersDb.removeChannel(channel);
    };
  }, []);

  const send = async (e) => {
    e.preventDefault();
    if (!canWrite || !text.trim() || !user) return;
    setError('');

    const { error: sendError } = await membersDb.from('messages').insert([
      {
        slug: SLUG,
        user_id: user.id,
        username: profile?.full_name || user.email || 'Member',
        message: text.trim(),
      },
    ]);

    if (sendError) setError(sendError.message);
    else setText('');
  };

  const askGuestSeat = async () => {
    if (!user) return;
    setAsking(true);
    setError('');
    const { error: updateError } = await membersDb
      .from('profiles')
      .update({ status: 'tavern_pending' })
      .eq('id', user.id);
    if (updateError) setError(updateError.message);
    else setProfile((p) => (p ? { ...p, status: 'tavern_pending' } : p));
    setAsking(false);
  };

  if (checking) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center text-patriot-blue font-semibold">
        Opening the Tavern…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-patriot-blue text-center mb-2">
          America First Tavern
        </h1>
        {badge && (
          <p className="text-center mb-6">
            <span className="inline-block bg-patriot-blue text-white text-sm font-semibold px-3 py-1 rounded-full">
              {badge}
            </span>
          </p>
        )}
        {!badge && <div className="mb-6" />}

        <div className="bg-white border-2 border-patriot-blue rounded-3xl h-[50vh] overflow-y-auto p-5 mb-5 space-y-3">
          {messages.length === 0 ? (
            <p className="text-center text-gray-500 py-10">No notes yet.</p>
          ) : (
            messages.map((msg, i) => (
              <div key={msg.id || i} className="p-3 bg-gray-100 rounded-2xl">
                <strong>{msg.username || 'Anonymous'}:</strong> {msg.message}
              </div>
            ))
          )}
        </div>

        {error && <p className="text-red-600 mb-3">{error}</p>}

        {!user && (
          <div className="text-center bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-gray-700 mb-4">Sign in to post. Guests and members may write here.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/member-login" className="bg-patriot-blue text-white font-bold px-6 py-3 rounded-xl">
                Member login
              </Link>
              <Link to="/become-one" className="bg-patriot-red text-white font-bold px-6 py-3 rounded-xl">
                Become a member
              </Link>
            </div>
          </div>
        )}

        {user && canWrite && (
          <form onSubmit={send} className="flex gap-3">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type a note…"
              className="flex-1 border border-patriot-blue rounded-2xl px-5 py-3 text-lg"
            />
            <button type="submit" className="bg-patriot-red hover:bg-red-700 text-white font-bold px-8 py-3 rounded-2xl">
              Send
            </button>
          </form>
        )}

        {user && !canWrite && (
          <div className="text-center bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-xl font-bold text-patriot-blue mb-2">Become a member</p>
            <p className="text-gray-700 mb-4">
              Or ask for a Guest seat so you can write in the Tavern.
            </p>
            {status === 'tavern_pending' ? (
              <p className="text-gray-600">Guest seat request is pending.</p>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/become-one" className="bg-patriot-red text-white font-bold px-6 py-3 rounded-xl">
                  Become a member
                </Link>
                <button
                  type="button"
                  disabled={asking}
                  onClick={askGuestSeat}
                  className="bg-patriot-blue text-white font-bold px-6 py-3 rounded-xl disabled:opacity-50"
                >
                  Ask for a Guest seat
                </button>
              </div>
            )}
          </div>
        )}

        <p className="text-center text-sm text-gray-500 mt-8">
          <Link to="/tavern/locations" className="underline">Pubs by location</Link>
          {' · '}
          <Link to="/tavern/issues" className="underline">Pubs by issue</Link>
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
