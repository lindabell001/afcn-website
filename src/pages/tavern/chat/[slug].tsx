import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { supabase } from '../../../lib/supabaseClient';
import SiteFooter from '../../../components/SiteFooter';

const ROOM_TITLES: Record<string, string> = {
  'america-first-2026-senate': 'America First 2026 Senate',
  'america-first-tavern': 'America First Tavern',
};

const PINNED_NOTICES: Record<string, string> = {
  'america-first-2026-senate': `MAKE SENATE AMERICA FIRST
Public slate only: nomination won + America First = YES.
Now: 22 names.
Watch-list races stay off this list until they qualify.

Join AFCN: https://americafirstcitizensnetwork.org/become-one
Tracker: https://americafirstcitizensnetwork.org/senate-tracker
Senate page: https://americafirstcitizensnetwork.org/senate

Contributions to AFCN are not tax-deductible.`,
};

export default function TavernChatRoom() {
  const { slug } = useParams<{ slug: string }>();
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [authChecking, setAuthChecking] = useState(true);
  const [currentUser, setCurrentUser] = useState<any>(null);

  const roomName = slug
    ? ROOM_TITLES[slug] ||
      slug.replace('-pub', '').replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()) + ' Pub'
    : 'Pub';

  const pinnedNotice = slug ? PINNED_NOTICES[slug] : undefined;

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setCurrentUser(data.user);
      setAuthChecking(false);
    });
  }, []);

  useEffect(() => {
    if (!slug || !currentUser) return;

    const fetchMessages = async () => {
      const { data } = await supabase
        .from('messages')
        .select('*')
        .eq('slug', slug)
        .order('created_at', { ascending: true });
      setMessages(data || []);
      setLoading(false);
    };

    fetchMessages();

    const channel = supabase
      .channel(`room:${slug}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `slug=eq.${slug}`,
        },
        (payload) => setMessages((prev) => [...prev, payload.new])
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [slug, currentUser]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    if (!currentUser) {
      alert('You must be logged in to send messages');
      return;
    }

    const { error } = await supabase.from('messages').insert([
      {
        slug: slug,
        user_id: currentUser.id,
        username: currentUser.email || 'Member',
        message: newMessage.trim(),
      },
    ]);

    if (error) {
      alert('Send failed: ' + error.message);
    } else {
      setNewMessage('');
    }
  };

  if (authChecking) {
    return <div className="text-center py-20 text-2xl">Checking membership...</div>;
  }

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-background">
        <main className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-patriot-blue mb-6">{roomName}</h1>
          <p className="text-xl text-gray-700 mb-4">Members only.</p>
          <p className="text-lg text-gray-600 mb-10">
            Log in or become a member to enter this pub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/member-login"
              className="bg-patriot-blue hover:bg-blue-900 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-xl"
            >
              Member Login
            </Link>
            <Link
              to="/become-one"
              className="bg-patriot-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-xl"
            >
              Become a Member – $25/Year
            </Link>
          </div>
          <p className="mt-10">
            <Link to="/tavern/issues" className="text-patriot-blue font-semibold underline">
              ← Back to Pubs by Issue
            </Link>
          </p>
        </main>
        <SiteFooter />
      </div>
    );
  }

  if (loading) {
    return <div className="text-center py-20 text-2xl">Loading {roomName}...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-8">
        <p className="text-center mb-4">
          <Link to="/tavern/issues" className="text-patriot-blue font-semibold underline">
            ← Back to Pubs by Issue
          </Link>
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold text-patriot-blue text-center mb-6">
          {roomName}
        </h1>

        {pinnedNotice && (
          <div className="bg-patriot-blue text-white rounded-2xl p-6 mb-6 whitespace-pre-line text-left leading-relaxed shadow-lg">
            {pinnedNotice}
          </div>
        )}

        <div className="bg-white border-2 border-patriot-blue rounded-3xl h-[55vh] overflow-y-auto p-6 mb-6 space-y-4">
          {messages.length === 0 ? (
            <p className="text-center text-gray-500 py-10">No messages yet. Be the first to post!</p>
          ) : (
            messages.map((msg, i) => (
              <div key={msg.id || i} className="p-4 bg-gray-100 rounded-2xl">
                <strong>{msg.username || 'Anonymous'}:</strong> {msg.message}
              </div>
            ))
          )}
        </div>

        <form onSubmit={sendMessage} className="flex gap-3">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message here..."
            className="flex-1 border border-patriot-blue rounded-2xl px-6 py-4 text-lg focus:outline-none"
          />
          <button
            type="submit"
            className="bg-patriot-red hover:bg-red-700 text-white font-bold px-12 py-4 rounded-2xl transition"
          >
            Send
          </button>
        </form>
      </main>
      <SiteFooter />
    </div>
  );
}
