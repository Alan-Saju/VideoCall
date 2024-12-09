import React from 'react';
import { useStore } from '../store/useStore';
import { Terminal } from 'lucide-react';

export const OutputDisplay: React.FC = () => {
  const currentVideo = useStore((state) => state.currentVideo);

  if (!currentVideo) return null;

  return (
    <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-green-400 space-y-2">
      <div className="flex items-center space-x-2 mb-4">
        <Terminal className="w-4 h-4" />
        <span className="text-white">Output</span>
      </div>
      <div className="space-y-1">
        <div className="flex space-x-2">
          <span className="text-blue-400">&gt;</span>
          <span>Loading video ID: {currentVideo.id}</span>
        </div>
        <div className="flex space-x-2">
          <span className="text-blue-400">&gt;</span>
          <span>Title: {currentVideo.title}</span>
        </div>
        <div className="flex space-x-2">
          <span className="text-blue-400">&gt;</span>
          <span>URL: {currentVideo.url}</span>
        </div>
      </div>
    </div>
  );
};