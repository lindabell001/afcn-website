import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../../lib/supabaseClient';
import SiteFooter from '../../../components/SiteFooter';

export default function CommitteesChatRoom() {
  const { slug } = useParams<{ slug: string }>();
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<any>(null);

  const roomName = slug 
    ? slug.replace('-committee', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) + ' Committee' 
    : 'Committee';

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setCurrentUser(data.user));
  }, []);

  useEffect(() => {
    if (!slug) return;

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
        slug: slug,
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

  if (loading) return <div className="text-center py-20 text...
