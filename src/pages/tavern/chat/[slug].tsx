import React from 'react';
import { useParams } from 'react-router-dom';
import SiteFooter from '../../../components/SiteFooter';

export default function ChatRoomPage() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-patriot-blue mb-8">
          Chat Room: {slug}
        </h1>
        <p className="text-2xl text-green-600">
          This is a minimal test chat room.
        </p>
        <p className="text-gray-500 mt-8">
          If you see this, the page loads.
        </p>
      </div>
      <SiteFooter />
    </div>
  );
}
