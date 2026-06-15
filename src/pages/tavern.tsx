import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import ChatRoom from '../components/Tavern/ChatRoom';
import SiteFooter from '../components/SiteFooter';

export default function Tavern() {
  const [rooms, setRooms] = useState<any[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      const { data, error } = await supabase
        .from('chat_rooms')
        .select('*')
        .order('type', { ascending: false }); // Tavern first

      if (error) console.error('Error fetching rooms:', error);
      else {
        setRooms(data || []);
        if (data && data.length > 0) {
          setSelectedRoom(data[0]); // Auto-select the Tavern
        }
      }
      setLoading(false);
    };

    fetchRooms();
  }, []);

  if (loading) {
    return <div className="p-12 text-center">Loading America First Tavern...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-patriot-blue text-center mb-4">
          America First Tavern
        </h1>
        <p className="text-center text-xl text-gray-600 mb-12">
          The main gathering place for vetted America First patriots
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar - List of Pubs */}
          <div className="md:col-span-1 bg-white border border-gray-200 rounded-2xl p-6 h-fit">
            <h3 className="font-bold mb-4 text-patriot-blue">ROOMS & PUBS</h3>
            {rooms.map((room) => (
              <button
                key={room.id}
                onClick={() => setSelectedRoom(room)}
                className={`w-full text-left px-4 py-3 rounded-xl mb-2 transition-all ${
                  selectedRoom?.id === room.id 
                    ? 'bg-patriot-blue text-white' 
                    : 'hover:bg-gray-100'
                }`}
              >
                {room.name}
              </button>
            ))}
          </div>

          {/* Main Chat Area */}
          <div className="md:col-span-3">
            {selectedRoom ? (
              <ChatRoom room={selectedRoom} />
            ) : (
              <p>No rooms available yet.</p>
            )}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
