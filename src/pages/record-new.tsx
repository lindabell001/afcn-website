'use client'

import React, { useState, useRef } from 'react';
import { supabase } from '../lib/supabaseClient';
import SiteFooter from '../components/SiteFooter';

export default function RecordNew() {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);
  const videoRef = useRef(null);
  const mediaRecorder = useRef(null);
  const recordedChunks = useRef([]);
  const [uploading, setUploading] = useState(false);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true, 
        audio: true 
      });
      setMediaStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      mediaRecorder.current = new MediaRecorder(stream);
      recordedChunks.current = [];

      mediaRecorder.current.ondataavailable = (event) => {
        if (event.data.size > 0) recordedChunks.current.push(event.data);
      };

      mediaRecorder.current.start();
      setIsRecording(true);
    } catch (error) {
      alert('Error accessing camera/mic: ' + error.message);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
    }
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => track.stop());
    }
    setIsRecording(false);
  };

  const saveRecording = async () => {
    if (recordedChunks.current.length === 0) return;

    setUploading(true);
    const blob = new Blob(recordedChunks.current, { type: 'video/webm' });
    const fileName = `episode-${Date.now()}.webm`;

    try {
      const { data, error } = await supabase.storage
        .from('episodes')
        .upload(fileName, blob);

      if (error) throw error;

      const publicUrl = supabase.storage.from('episodes').getPublicUrl(fileName).data.publicUrl;

      alert('Recording saved to Supabase Storage!\nURL: ' + publicUrl);
      // In real app, save the URL to episodes table
    } catch (error) {
      alert('Upload error: ' + error.message);
    }

    setUploading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-6xl font-bold text-patriot-blue text-center mb-12">Record New Episode</h1>

        <div className="bg-white rounded-3xl p-12">
          <div className="text-center mb-8">
            <video ref={videoRef} autoPlay muted className="w-full max-w-2xl mx-auto rounded-2xl bg-black" />
          </div>

          <div className="flex justify-center gap-6">
            {!isRecording ? (
              <button 
                onClick={startRecording}
                className="bg-patriot-red text-white px-16 py-6 rounded-3xl text-2xl font-bold hover:bg-red-700"
              >
                Start Recording
              </button>
            ) : (
              <button 
                onClick={stopRecording}
                className="bg-red-600 text-white px-16 py-6 rounded-3xl text-2xl font-bold hover:bg-red-700"
              >
                Stop Recording
              </button>
            )}
          </div>

          {recordedChunks.current.length > 0 && !isRecording && (
            <button 
              onClick={saveRecording}
              disabled={uploading}
              className="w-full mt-8 bg-green-600 text-white py-6 rounded-3xl text-2xl font-bold"
            >
              {uploading ? "Saving to Supabase..." : "Save Recording"}
            </button>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
