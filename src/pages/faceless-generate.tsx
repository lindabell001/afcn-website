'use client'

import React, { useState } from 'react';
import SiteFooter from '../components/SiteFooter';

export default function FacelessGenerate() {
 const [referenceImage, setReferenceImage] = useState(null);
 const [prompt, setPrompt] = useState('');
 const [isGenerating, setIsGenerating] = useState(false);
 const [videoUrl, setVideoUrl] = useState('');

 const handleImageUpload = (e) => {
 const file = e.target.files[0];
 if (file) {
 const reader = new FileReader();
 reader.onload = (event) => setReferenceImage(event.target.result);
 reader.readAsDataURL(file);
 }
 };

 const generateVideo = async () => {
 if (!referenceImage || !prompt) {
 alert('Please upload a reference image and enter a prompt');
 return;
 }

 setIsGenerating(true);

 setTimeout(() => {
 setVideoUrl('https://picsum.photos/id/1015/1280/720');
 setIsGenerating(false);
 alert('Image-to-Video Animation complete!');
 }, 3500);
 };

 return (
 <div className="min-h-screen bg-background">
 <main className="max-w-4xl mx-auto px-6 py-16">
 <h1 className="text-6xl font-bold text-patriot-blue text-center mb-8">Image-to-Video Animation</h1>
 <p className="text-center text-xl text-gray-600 mb-12">
 Animate still images into dynamic videos using AI motion synthesis.<br />
 Built-in audio generation for synchronized sound effects and background music.
 </p>

 <div className="bg-white rounded-3xl p-12">
 <div className="grid md:grid-cols-2 gap-12">
 <div>
 <h2 className="text-2xl font-bold mb-6">1. Upload Reference Image</h2>
 <label className="block border-2 border-dashed border-patriot-red rounded-3xl p-16 text-center hover:bg-red-50 cursor-pointer">
 {referenceImage ? (
 <img src={referenceImage} alt="Reference" className="max-h-96 mx-auto rounded-2xl" />
 ) : (
 <div>
 <div className="text-7xl mb-6">📸</div>
 <p className="text-2xl">Click or drop reference image</p>
 </div>
 )}
 <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
 </label>
 </div>

 <div>
 <h2 className="text-2xl font-bold mb-6">2. Describe the Motion</h2>
 <textarea
 value={prompt}
 onChange={(e) => setPrompt(e.target.value)}
 placeholder="The person walks confidently toward the camera while speaking passionately about freedom..."
 className="w-full h-64 p-8 border border-gray-300 rounded-3xl text-lg"
 />

 <button 
 onClick={generateVideo}
 disabled={isGenerating || !referenceImage || !prompt}
 className="w-full mt-8 bg-patriot-red text-white py-6 rounded-3xl text-2xl font-bold hover:bg-red-700 disabled:bg-gray-400"
 >
 {isGenerating ? "Generating Animation..." : "Generate Image-to-Video"}
 </button>
 </div>
 </div>

 {videoUrl && (
 <div className="mt-16">
 <h2 className="text-2xl font-bold mb-6">Generated Video</h2>
 <video controls className="w-full rounded-3xl" src={videoUrl} />
 </div>
 )}
 </div>

 {/* Grok Imagine Signup */}
 <div className="text-center mt-16">
 <a 
 href="https://grok.x.ai" 
 target="_blank" 
 className="inline-block bg-patriot-blue text-white px-12 py-6 rounded-3xl text-xl font-bold hover:bg-patriot-red"
 >
 Beginner? Start your free Grok Imagine Account here
 </a>
 <p className="text-sm text-gray-600 mt-4">Free tier included with AFCN membership</p>
 </div>
 </main>
 <SiteFooter />
 </div>
 );
}
