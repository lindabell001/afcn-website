import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../../lib/supabaseClient';

interface ChatRoomProps {
  room: any;
}

export default function ChatRoom({ room }: ChatRoomProps) {
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const { data } = await supabase
        .from('messages')
        .select('*')
        .eq('room_id', room.id)
        .order('created_at', { ascending: true });
      setMessages(data || []);
    };

    loadMessages();

    const channel = supabase
      .channel(`room:${room.id}`)
      .on(
        'postgres_changes',
        { 
          event: 'INSERT', 
          schema: 'public', 
          table: 'messages',
          filter: `room_id=eq.${room.id}` 
        },
        (payload) => {
          setMessages((prev) => [...prev, payload.new]);
        }
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [room.id]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const { data: { user } } = await supabase.auth.getUser();

    await supabase.from('messages').insert({
      room_id: room.id,
      user_id: user?.id,
      username: user?.email?.split('@')[0] || 'Patriot',
      message: newMessage.trim(),
    });

    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-[600px] border border-gray-300 rounded-2xl overflow-hidden bg-white">
      <div className="bg-patriot-blue text-white p-4 font-bold text-lg">
        {room.name}
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50" ref={messagesEndRef}>
        {messages.map((msg) => (
          <div key={msg.id} className="flex flex-col">
            <div>
              <span className="font-semibold text-patriot-blue">{msg.username}</span>
              <span className="text-gray-400 text-xs ml-2">
                {new Date(msg.created_at).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
              </span>
            </div>
            <p className="mt-1 text-gray-800">{msg.message}</p>
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className="p-4 border-t bg-gray-50">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:border-patriot-blue"
          />
          <button
            type="submit"
            className="bg-patriot-red hover:bg-red-700 text-white px-10 rounded-xl font-bold"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
