import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import ChatRoom from '../components/Tavern/ChatRoom';
import SiteFooter from '../components/SiteFooter';

export default function Tavern() {
  const [rooms, setRooms] = useState<any[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const { data, error } = await supabase
          .from('chat_rooms')
          .select('*')
          .order('type', { ascending: false });

        if (error) {
          console.error('Error fetching rooms:', error);
          setError('Failed to load chat rooms. Please make sure you are logged in.');
        } else {
          setRooms(data || []);
          if (data && data.length > 0) {
            setSelectedRoom(data[0]); // Auto-select Tavern
          }
        }
      } catch (err) {
        setError('Something went wrong. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl">Loading America First Tavern...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md">
          <p className="text-red-600 text-xl mb-4">{error}</p>
          <p className="text-gray-600">You may need to log in first.</p>
        </div>
      </div>
    );
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
          {/* Sidebar */}
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

          {/* Main Chat */}
          <div className="md:col-span-3">
            {selectedRoom ? (
              <ChatRoom room={selectedRoom} />
            ) : (
              <p className="text-center text-gray-500 py-12">No rooms available yet.</p>
            )}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
