'use client'

import React, { useState, useRef, useEffect } from 'react';
import SiteFooter from '../components/SiteFooter';

export default function RecordNew() {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaStream, setMediaStream] = useState(null);
  const videoRef = useRef(null);
  const mediaRecorder = useRef(null);
  const recordedChunks = useRef([]);

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
        if (event.data.size > 0) {
          recordedChunks.current.push(event.data);
        }
      };

      mediaRecorder.current.onstop = () => {
        const blob = new Blob(recordedChunks.current, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        console.log('Recording saved:', url);
        alert('Recording saved! (Demo - saved to console)');
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

          <p className="text-center text-gray-600 mt-8">Mic and camera will be used. Recording saved as demo.</p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
