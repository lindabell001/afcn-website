'use client'

import React, { useState } from 'react';
import SiteFooter from '../../components/SiteFooter';

export default function MemberTasks() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Record next podcast episode", done: false },
    { id: 2, text: "Attend tavern meeting", done: false },
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-patriot-blue">My Tasks</h1>
          <p className="text-2xl text-gray-600">Your to-do list</p>
        </div>

        <div className="bg-white rounded-3xl p-12">
          <div className="space-y-4">
            {tasks.map(task => (
              <div key={task.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-2xl">
                <input type="checkbox" checked={task.done} onChange={() => toggleTask(task.id)} className="w-6 h-6" />
                <span className={task.done ? 'line-through text-gray-500' : ''}>{task.text}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
