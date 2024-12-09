import React, { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { Play, Pause, Settings, AlertCircle } from 'lucide-react';

export const VideoPlayer: React.FC = () => {
  const { currentVideo, preferences } = useStore();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (currentVideo) {
      setIsLoading(true);
      setError(null);
      
      // Simulate checking connection to YouTube
      const checkConnection = async () => {
        try {
          const response = await fetch('https://www.youtube.com/favicon.ico');
          if (!response.ok) {
            throw new Error('Failed to connect to YouTube');
          }
          setError(null);
        } catch (err) {
          setError('Unable to connect to YouTube. Please check your internet connection.');
        } finally {
          setIsLoading(false);
        }
      };

      checkConnection();
    }
  }, [currentVideo]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-red-50 rounded-lg p-6">
        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
        <p className="text-red-600 text-center font-medium">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-md transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!currentVideo) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
        <p className="text-gray-500">No video selected</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative rounded-lg overflow-hidden bg-black">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={`https://www.youtube.com/embed/${currentVideo.id}?cc_load_policy=1&cc_lang_pref=${preferences.language}`}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={currentVideo.title}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <button 
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Play/Pause"
            >
              <Play className="w-5 h-5 text-white" />
            </button>
            <button 
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Video Settings"
            >
              <Settings className="w-5 h-5 text-white" />
            </button>
          </div>
          <div className="text-white text-sm font-medium truncate max-w-[50%]">
            {currentVideo.title}
          </div>
        </div>
      </div>
    </div>
  );
};