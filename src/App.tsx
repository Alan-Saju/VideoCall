import React from 'react';
import { VideoPlayer } from './components/VideoPlayer';
import { NotePanel } from './components/NotePanel';
import { AccessibilitySettings } from './components/AccessibilitySettings';
import { YouTubeInput } from './components/YouTubeInput';
import { OutputDisplay } from './components/OutputDisplay';
import { BookOpen, Settings } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Main Content */}
      <div className="flex-1">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                Inclusive Learning Platform
              </h1>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <YouTubeInput />
            </div>
            <OutputDisplay />
            <VideoPlayer />
            <NotePanel />
          </div>
        </main>
      </div>

      {/* Sidebar */}
      <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto">
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-6">
            <Settings className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-semibold text-gray-900">Settings</h2>
          </div>
          <AccessibilitySettings />
        </div>
      </div>
    </div>
  );
}

export default App;