'use client'

import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import SiteFooter from '../../components/SiteFooter';
import { useNavigate } from 'react-router-dom';

export default function VerificationDashboard() {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminAndLoad = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/member-login');
        return;
      }

      // Check if user is admin
      const { data: profile } = await supabase
        .from('profiles')
        .select('is_admin')
        .eq('id', session.user.id)
        .single();

      if (!profile || !profile.is_admin) {
        alert("Access denied. Admin only.");
        navigate('/member-dashboard');
        return;
      }

      setIsAdmin(true);

      // Load pending profiles
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('status', 'pending')
        .order('created_at', { ascending: false });

      if (error) console.error(error);
      else setProfiles(data || []);

      setLoading(false);
    };

    checkAdminAndLoad();
  }, [navigate]);

  const approveUser = async (id) => {
    const { error } = await supabase
      .from('profiles')
      .update({ status: 'approved' })
      .eq('id', id);

    if (!error) {
      setProfiles(profiles.filter(p => p.id !== id));
      alert('User approved');
    }
  };

  const rejectUser = async (id) => {
    if (!window.confirm('Reject this user?')) return;

    const { error } = await supabase
      .from('profiles')
      .update({ status: 'rejected' })
      .eq('id', id);

    if (!error) {
      setProfiles(profiles.filter(p => p.id !== id));
      alert('User rejected');
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading Verification Dashboard...</div>;

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-6xl font-bold text-patriot-blue mb-6">Verification Dashboard</h1>
        <p className="text-2xl text-gray-600 mb-12">Pending Membership Applications</p>

        {profiles.length === 0 ? (
          <p className="text-3xl text-gray-500 text-center py-20">No pending applications.</p>
        ) : (
          <div className="grid gap-6">
            {profiles.map((profile) => (
              <div key={profile.id} className="bg-white rounded-3xl p-8 border border-gray-200 flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold">{profile.full_name || 'No Name'}</h3>
                  <p className="text-gray-600">{profile.email}</p>
                  <p className="text-sm text-gray-500">X: {profile.x_handle || 'None'}</p>
                </div>
                <div className="flex gap-4">
                  <button 
                    onClick={() => approveUser(profile.id)}
                    className="bg-green-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-700"
                  >
                    Approve
                  </button>
                  <button 
                    onClick={() => rejectUser(profile.id)}
                    className="bg-red-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-700"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
