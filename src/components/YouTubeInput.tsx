import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { Youtube, AlertCircle } from 'lucide-react';
import { extractVideoId, validateYouTubeUrl } from '../utils/youtube';

export const YouTubeInput: React.FC = () => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const setCurrentVideo = useStore((state) => state.setCurrentVideo);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsChecking(true);
    
    if (!validateYouTubeUrl(url)) {
      setError('Please enter a valid YouTube URL');
      setIsChecking(false);
      return;
    }
    
    try {
      const response = await fetch('https://www.youtube.com/favicon.ico');
      if (!response.ok) {
        throw new Error('Failed to connect to YouTube');
      }
      
      const videoId = extractVideoId(url);
      if (videoId) {
        setCurrentVideo({
          id: videoId,
          url,
          title: 'Loading...'
        });
        setUrl('');
      }
    } catch (err) {
      setError('Unable to connect to YouTube. Please check your internet connection.');
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-2">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Youtube className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste YouTube URL here..."
          className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
          aria-label="YouTube URL input"
          disabled={isChecking}
        />
      </div>
      {error && (
        <div className="flex items-center space-x-2 text-red-500 text-sm">
          <AlertCircle className="w-4 h-4" />
          <p>{error}</p>
        </div>
      )}
      {isChecking && (
        <div className="flex items-center space-x-2 text-gray-500 text-sm">
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-300 border-t-gray-600"></div>
          <p>Checking connection...</p>
        </div>
      )}
    </form>
  );
};