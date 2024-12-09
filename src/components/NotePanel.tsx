import React from 'react';
import { useStore } from '../store/useStore';
import { FileText, Download, Mic } from 'lucide-react';

export const NotePanel: React.FC = () => {
  const { notes, currentVideo } = useStore();

  const currentNotes = notes.filter(
    (note) => currentVideo && note.videoId === currentVideo.id
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Notes</h2>
        <div className="flex space-x-2">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <Download className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <Mic className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {currentNotes.map((note) => (
          <div
            key={note.id}
            className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-start space-x-2">
              <FileText className="w-4 h-4 mt-1 text-gray-500" />
              <div>
                <p className="text-sm text-gray-600">{note.content}</p>
                <span className="text-xs text-gray-400">
                  {new Date(note.timestamp).toLocaleTimeString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};