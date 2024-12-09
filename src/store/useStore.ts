import { create } from 'zustand';
import { Video, Note, UserPreferences } from '../types';

interface Store {
  currentVideo: Video | null;
  notes: Note[];
  preferences: UserPreferences;
  setCurrentVideo: (video: Video | null) => void;
  addNote: (note: Note) => void;
  updatePreferences: (preferences: Partial<UserPreferences>) => void;
}

export const useStore = create<Store>((set) => ({
  currentVideo: null,
  notes: [],
  preferences: {
    captionSize: 'medium',
    captionColor: '#FFFFFF',
    language: 'en',
    highContrastMode: false,
  },
  setCurrentVideo: (video) => set({ currentVideo: video }),
  addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
  updatePreferences: (preferences) =>
    set((state) => ({
      preferences: { ...state.preferences, ...preferences },
    })),
}));