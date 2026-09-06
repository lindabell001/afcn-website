import { useEffect, useState } from 'react';
import { membersDb } from '../lib/membersClient';

type Note = {
  id: number;
  username: string | null;
  message: string | null;
  created_at: string;
};

function canWrite(status: string | null) {
  return ['guest', 'member', 'captain', 'captain_pending'].includes(status || '');
}

export default function Tavern() {
  const [allowed, setAllowed] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [username, setUsername] = useState('Member');
  const [roomId, setRoomId] = useState<number | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);
  const [text, setText] = useState('');
  const [msg, setMsg] = useState('');

  async function load() {
    const { data: auth } = await membersDb.auth.getUser();
    const user = auth.user || null;
    setUserId(user?.id || null);

    if (user) {
      const { data: profile } = await membersDb
        .from('profiles')
        .select('full_name, email, status')
        .eq('id', user.id)
        .maybeSingle();

      setAllowed(canWrite(profile?.status || null));
      setUsername(profile?.full_name || profile?.email || user.email || 'Member');
    } else {
      setAllowed(false);
    }

    const { data: room, error: roomError } = await membersDb
      .from('chat_rooms')
      .select('id')
      .eq('slug', 'america-first-tavern')
      .maybeSingle();

    if (roomError || !room) {
      setMsg(roomError?.message || 'America First Tavern was not found.');
      return;
    }

    setRoomId(room.id);

    const { data: rows, error: noteError } = await membersDb
      .from('messages')
      .select('id, username, message, created_at')
      .eq('room_id', room.id)
      .order('created_at', { ascending: true });

    if (noteError) {
      setMsg(noteError.message);
      return;
    }

    setNotes((rows || []) as Note[]);
    setMsg('');
  }

  useEffect(() => {
    load();
  }, []);

  async function send() {
    if (!allowed || !roomId || !userId || !text.trim()) return;

    const { error } = await membersDb.from('messages').insert({
      room_id: roomId,
      user_id: userId,
      username,
      message: text.trim(),
      room_slug: 'america-first-tavern',
      slug: 'america-first-tavern',
    });

    if (error) {
      setMsg(error.message);
      return;
    }

    setText('');
    await load();
  }

  return (
    <main style={{ maxWidth: 900, margin: '40px auto', padding: 24, fontFamily: 'Georgia, serif' }}>
      <h1 style={{ textAlign: 'center', color: '#1e3a5f' }}>America First Tavern</h1>
      {msg && <p>{msg}</p>}

      <div style={{ border: '1px solid #ccc', borderRadius: 16, minHeight: 240, padding: 24 }}>
        {notes.length === 0 && <p style={{ textAlign: 'center', color: '#888' }}>No notes yet.</p>}
        {notes.map((n) => (
          <p key={n.id}>
            <strong>{n.username || 'Member'}:</strong> {n.message}
          </p>
        ))}
      </div>

      {allowed && (
        <div style={{ marginTop: 16 }}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type a note..."
            rows={4}
            style={{ width: '100%', padding: 12 }}
          />
          <button type="button" onClick={send} style={{ marginTop: 8, padding: '8px 16px' }}>
            Post
          </button>
        </div>
      )}
    </main>
  );
}
