import React, { useState, useRef, useEffect } from 'react';
import SiteFooter from '../components/SiteFooter';

export default function RecordNewEpisode() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [mediaStream, setMediaStream] = useState(null);
  const [selectedMic, setSelectedMic] = useState('');
  const [selectedCamera, setSelectedCamera] = useState('');
  const [availableMics, setAvailableMics] = useState([]);
  const [availableCameras, setAvailableCameras] = useState([]);

  const mediaRecorderRef = useRef(null);
  const videoRef = useRef(null);

  // Get available devices
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

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { deviceId: selectedMic ? { exact: selectedMic } : undefined },
        video: selectedCamera ? { deviceId: { exact: selectedCamera } } : false
      });
      
      setMediaStream(stream);
      if (videoRef.current) videoRef.current.srcObject = stream;

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      const chunks = [];

      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
      mediaRecorder.onstop = () => setRecordedChunks(chunks);

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      alert("Error accessing microphone/camera. Please check permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaStream?.getTracks().forEach(track => track.stop());
      setIsRecording(false);
    }
  };

  const saveAsDraft = () => {
    alert("Episode saved as draft! (Demo - we'll upload to Supabase later)");
    window.location.href = '/my-podcasts';
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-patriot-blue mb-8 text-center">Record New Episode</h1>

        <div className="bg-white rounded-3xl p-10">
          {/* Device Selection */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <label className="block text-sm font-semibold mb-3">Microphone</label>
              <select 
                value={selectedMic} 
                onChange={(e) => setSelectedMic(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-2xl"
              >
                {availableMics.map(mic => (
                  <option key={mic.deviceId} value={mic.deviceId}>{mic.label || 'Default Mic'}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-3">Camera (optional)</label>
              <select 
                value={selectedCamera} 
                onChange={(e) => setSelectedCamera(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-2xl"
              >
                <option value="">No Video</option>
                {availableCameras.map(cam => (
                  <option key={cam.deviceId} value={cam.deviceId}>{cam.label || 'Default Camera'}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Video Preview */}
          {selectedCamera && (
            <div className="mb-12">
              <video ref={videoRef} autoPlay muted className="w-full rounded-3xl bg-black" />
            </div>
          )}

          {/* Record Controls */}
          <div className="flex justify-center gap-6">
            {!isRecording ? (
              <button 
                onClick={startRecording}
                className="bg-patriot-red text-white px-16 py-8 rounded-3xl text-3xl font-bold hover:bg-red-700 transition-all"
              >
                Start Recording
              </button>
            ) : (
              <button 
                onClick={stopRecording}
                className="bg-red-600 text-white px-16 py-8 rounded-3xl text-3xl font-bold hover:bg-red-700 transition-all"
              >
                Stop Recording
              </button>
            )}
          </div>

          {recordedChunks.length > 0 && (
            <div className="mt-12 text-center">
              <p className="text-green-600 font-semibold mb-6">Recording complete!</p>
              <button 
                onClick={saveAsDraft}
                className="bg-patriot-blue text-white px-12 py-6 rounded-3xl text-xl font-bold hover:bg-patriot-red"
              >
                Save as Draft & Go to Editor
              </button>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
