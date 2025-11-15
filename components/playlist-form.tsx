'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

interface PlaylistFormProps {
  onAddSong: (title: string, artist: string) => void;
}

export default function PlaylistForm({ onAddSong }: PlaylistFormProps) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && artist.trim()) {
      onAddSong(title, artist);
      setTitle('');
      setArtist('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label htmlFor="title" className="block text-base font-bold text-white mb-2 uppercase tracking-wide">
          Song Title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Enter song title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-3 border-2 border-white/30 rounded-lg bg-white/95 text-gray-800 text-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-white/50 transition-all font-semibold placeholder-gray-400"
        />
      </div>

      <div>
        <label htmlFor="artist" className="block text-base font-bold text-white mb-2 uppercase tracking-wide">
          Artist Name
        </label>
        <input
          id="artist"
          type="text"
          placeholder="Enter artist name..."
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          className="w-full px-4 py-3 border-2 border-white/30 rounded-lg bg-white/95 text-gray-800 text-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-white/50 transition-all font-semibold placeholder-gray-400"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-white hover:bg-blue-50 text-indigo-600 font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all uppercase text-lg tracking-wide shadow-lg hover:shadow-xl"
      >
        <Plus className="w-5 h-5" />
        Add Track
      </button>
    </form>
  );
}
