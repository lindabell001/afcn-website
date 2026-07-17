'use client'

import React, { useState, useRef, useEffect } from 'react';
import SiteFooter from '../components/SiteFooter';

export default function LiveRecording() {
  const [isLive, setIsLive] = useState(false);
  const [selectedMic, setSelectedMic] = useState('');
  const [selectedCamera, setSelectedCamera] = useState('');
  const [availableMics, setAvailableMics] = useState([]);
  const [availableCameras, setAvailableCameras] = useState([]);

  const mediaRecorderRef = useRef(null);
  const videoRef = useRef(null);
  const timerRef = useRef(null);
  const [time, setTime] = useState(0);

  // Get devices
  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(devices => {
      const mics = devices.filter(d => d.kind === 'audioinput');
      const cameras = devices.filter(d => d.kind === 'videoinput');
      setAvailableMics(mics);
      setAvailableCameras(cameras);
      if (mics.length > 0) setSelectedMic(mics[0].deviceId);
      if (cameras.length > 0) setSelectedCamera(cameras[0].deviceId);
    });
  }, []);

  const startLive = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { deviceId: selectedMic ? { exact: selectedMic } : undefined },
        video: selectedCamera ? { deviceId: { exact: selectedCamera } } : false
      });

      if (videoRef.current) videoRef.current.srcObject = stream;

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.start();
      setIsLive(true);
      setTime(0);

      timerRef.current = setInterval(() => setTime(t => t + 1), 1000);
    } catch (err) {
      alert("Please allow microphone and camera access to go live.");
    }
  };

  const stopLive = () => {
    if (mediaRecorderRef.current) mediaRecorderRef.current.stop();
    if (timerRef.current) clearInterval(timerRef.current);
    setIsLive(false);
    alert("Live ended. Recording saved as draft!");
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-patriot-blue mb-8 text-center">Start Live Episode</h1>

        <div className="bg-white rounded-3xl p-10">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <label className="block text-sm font-semibold mb-3">Microphone</label>
              <select value={selectedMic} onChange={(e) => setSelectedMic(e.target.value)} className="w-full p-4 border border-gray-300 rounded-2xl">
                {availableMics.map(mic => (
                  <option key={mic.deviceId} value={mic.deviceId}>{mic.label || 'Default Mic'}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-3">Camera (optional)</label>
              <select value={selectedCamera} onChange={(e) => setSelectedCamera(e.target.value)} className="w-full p-4 border border-gray-300 rounded-2xl">
                <option value="">No Video</option>
                {availableCameras.map(cam => (
                  <option key={cam.deviceId} value={cam.deviceId}>{cam.label || 'Default Camera'}</option>
                ))}
              </select>
            </div>
          </div>

          {selectedCamera && (
            <div className="mb-12">
              <video ref={videoRef} autoPlay muted className="w-full rounded-3xl bg-black" />
            </div>
          )}

          <div className="text-center mb-8">
            <div className="text-4xl font-mono text-patriot-blue">{formatTime(time)}</div>
          </div>

          <div className="flex justify-center gap-6">
            {!isLive ? (
              <button onClick={startLive} className="bg-patriot-red text-white px-16 py-8 rounded-3xl text-3xl font-bold hover:bg-red-700 transition-all">
                Go Live
              </button>
            ) : (
              <button onClick={stopLive} className="bg-red-600 text-white px-16 py-8 rounded-3xl text-3xl font-bold hover:bg-red-700 transition-all">
                End Live
              </button>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
