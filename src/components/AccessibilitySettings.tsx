import React from 'react';
import { useStore } from '../store/useStore';
import { Type, Globe, Eye } from 'lucide-react';

export const AccessibilitySettings: React.FC = () => {
  const { preferences, updatePreferences } = useStore();

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Accessibility Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="flex items-center space-x-2 text-sm text-gray-600">
            <Type className="w-4 h-4" />
            <span>Caption Size</span>
          </label>
          <select
            value={preferences.captionSize}
            onChange={(e) =>
              updatePreferences({ captionSize: e.target.value as any })
            }
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        <div>
          <label className="flex items-center space-x-2 text-sm text-gray-600">
            <Globe className="w-4 h-4" />
            <span>Language</span>
          </label>
          <select
            value={preferences.language}
            onChange={(e) => updatePreferences({ language: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>

        <div>
          <label className="flex items-center space-x-2 text-sm text-gray-600">
            <Eye className="w-4 h-4" />
            <span>High Contrast Mode</span>
          </label>
          <div className="mt-1">
            <input
              type="checkbox"
              checked={preferences.highContrastMode}
              onChange={(e) =>
                updatePreferences({ highContrastMode: e.target.checked })
              }
              className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};