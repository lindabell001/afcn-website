import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../../lib/supabaseClient';
import SiteFooter from '../../../components/SiteFooter';

export default function TavernChatRoom() {
  const { slug } = useParams<{ slug: string }>();
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('main');

  const roomName = slug 
    ? slug.replace('-pub', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + ' Pub' 
    : 'Pub';

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setCurrentUser(data.user));
  }, []);

  useEffect(() => {
    if (!slug) return;

    const fetchMessages = async () => {
      const { data } = await supabase
        .from('messages')
        .select('*')
        .eq('slug', slug)   // Changed to 'slug'
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
          filter: `slug=eq.${slug}` 
        },
        (payload) => setMessages(prev => [...prev, payload.new])
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [slug]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    if (!currentUser) {
      alert('You must be logged in to send messages');
      return;
    }

    const { error } = await supabase
      .from('messages')
      .insert([{
        slug: slug,                    // Changed to 'slug'
        user_id: currentUser.id,
        username: currentUser.email || 'Test User',
        message: newMessage.trim(),
      }]);

    if (error) {
      alert('Send failed: ' + error.message);
    } else {
      setNewMessage('');
    }
  };

  if (loading) return <div className="text-center py-20 text-2xl">Loading {roomName}...</div>;

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-5xl font-bold text-patriot-blue text-center mb-8">{roomName}</h1>

        <div className="flex gap-4 mb-6 border-b">
          <button 
            onClick={() => setActiveTab('main')}
            className={`px-6 py-3 font-semibold ${activeTab === 'main' ? 'border-b-4 border-patriot-red text-patriot-red' : 'text-gray-600'}`}
          >
            Main Pub
          </button>
          <button 
            onClick={() => setActiveTab('issues')}
            className={`px-6 py-3 font-semibold ${activeTab === 'issues' ? 'border-b-4 border-patriot-red text-patriot-red' : 'text-gray-600'}`}
          >
            Issues (Save America Act)
          </button>
        </div>

        <div className="bg-white border-2 border-patriot-blue rounded-3xl h-[65vh] overflow-y-auto p-6 mb-6 space-y-4">
          {messages.length === 0 ? (
            <p className="text-center text-gray-500 py-10">No messages yet. Be the first to post!</p>
          ) : (
            messages.map((msg, i) => (
              <div key={i} className="p-4 bg-gray-100 rounded-2xl">
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
