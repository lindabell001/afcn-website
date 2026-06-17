import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../../lib/supabaseClient';
import SiteFooter from '../../../components/SiteFooter';

export default function ChatRoomPage() {
  const { slug } = useParams();
  const [room, setRoom] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load room info + messages
  useEffect(() => {
    const loadRoom = async () => {
      const { data: roomData } = await supabase
        .from('chat_rooms')
        .select('*')
        .eq('slug', slug)
        .single();

      setRoom(roomData);

      if (roomData) {
        const { data: msgData } = await supabase
          .from('messages')
          .select('*')
          .eq('room_id', roomData.id)
          .order('created_at', { ascending: true });

        setMessages(msgData || []);
      }
      setLoading(false);
    };

    loadRoom();

    // Realtime
    const channel = supabase
      .channel(`room-${slug}`)
      .on('postgres_changes', 
        { event: 'INSERT', schema: 'public', table: 'messages' },
        (payload) => {
          if (payload.new.room_id === room?.id) {
            setMessages(prev => [...prev, payload.new]);
          }
        }
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [slug, room?.id]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !room) return;

    const { data: { user } } = await supabase.auth.getUser();

    await supabase.from('messages').insert({
      room_id: room.id,
      user_id: user?.id,
      username: user?.email?.split('@')[0] || 'Patriot',
      message: newMessage.trim()
    });

    setNewMessage('');
  };

  if (loading) return <div className="p-20 text-center">Loading chat room...</div>;
  if (!room) return <div className="p-20 text-center text-red-600">Room not found</div>;

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden">
          <div className="bg-patriot-blue text-white p-6">
            <h1 className="text-3xl font-bold">{room.name}</h1>
            <p className="text-blue-100 mt-1">{room.description}</p>
          </div>

          <div className="h-[600px] p-6 overflow-y-auto bg-gray-50" ref={messagesEndRef}>
            {messages.map((msg) => (
              <div key={msg.id} className="mb-4">
                <span className="font-semibold text-patriot-blue">{msg.username}</span>
                <span className="text-xs text-gray-400 ml-3">
                  {new Date(msg.created_at).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
                </span>
                <p className="mt-1 text-gray-800">{msg.message}</p>
              </div>
            ))}
          </div>

          <form onSubmit={sendMessage} className="p-6 border-t bg-white">
            <div className="flex gap-3">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-2xl px-6 py-4 focus:outline-none focus:border-patriot-blue"
              />
              <button
                type="submit"
                className="bg-patriot-red hover:bg-red-700 text-white px-10 rounded-2xl font-bold"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
