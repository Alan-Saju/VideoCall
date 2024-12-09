export interface Video {
  id: string;
  title: string;
  url: string;
}

export interface Note {
  id: string;
  videoId: string;
  content: string;
  timestamp: number;
  type: 'text' | 'flowchart' | 'diagram';
}

export interface UserPreferences {
  captionSize: 'small' | 'medium' | 'large';
  captionColor: string;
  language: string;
  highContrastMode: boolean;
}