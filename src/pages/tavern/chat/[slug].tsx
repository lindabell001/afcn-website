import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../../../lib/supabaseClient';
import SiteFooter from '../../../components/SiteFooter';

export default function ChatRoomPage() {
  const { slug } = useParams();
  const [room, setRoom] = useState<any>(null);
  const [isMember, setIsMember] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthAndLoad = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        setIsMember(true);
        
        const { data } = await supabase
          .from('chat_rooms')
          .select('*')
          .eq('slug', slug)
          .single();
        
        setRoom(data);
      }
      setLoading(false);
    };

    checkAuthAndLoad();
  }, [slug]);

  if (loading) {
    return <div className="p-12 text-center">Loading...</div>;
  }

  if (!isMember) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center py-20">
        <div className="max-w-md text-center px-6">
          <h1 className="text-5xl font-bold text-patriot-blue mb-6">Members Only</h1>
          <p className="text-xl text-gray-600 mb-10">
            This chat room is for America First Citizens Network members only.
          </p>
          <Link
            to="/become-one"
            className="inline-block bg-patriot-red text-white font-bold text-xl px-10 py-4 rounded-xl hover:bg-red-700 transition-all"
          >
            Become a Member →
          </Link>
          <p className="text-sm text-gray-500 mt-8">
            Already a member? <Link to="/login" className="text-patriot-blue underline">Log in here</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-patriot-blue text-center mb-2">
          {room?.name || "Chat Room"}
        </h1>
        <p className="text-center text-green-600 mb-10">
          Welcome, member! You are now in the live chat.
        </p>

        <div className="bg-white border border-gray-300 rounded-3xl h-[600px] flex items-center justify-center">
          <p className="text-xl text-gray-500">Real-time chat coming next...</p>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
