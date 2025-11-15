'use client';

import { useState } from 'react';
import { Music, Plus } from 'lucide-react';
import PlaylistForm from '@/components/playlist-form';
import PlaylistDisplay from '@/components/playlist-display';

interface Song {
  id: string;
  title: string;
  artist: string;
}

export default function PlaylistPage() {
  const [songs, setSongs] = useState<Song[]>([]);

  const addSong = (title: string, artist: string) => {
    const newSong: Song = {
      id: Date.now().toString(),
      title,
      artist,
    };
    setSongs([...songs, newSong]);
  };

  const removeSong = (id: string) => {
    setSongs(songs.filter((song) => song.id !== id));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-3 shadow-lg mb-4">
            <div className="accent-section rounded-full p-3 shadow-md">
              <Music className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-slate-800">
              BMETT Playlist
            </h1>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Input Section */}
          <div className="accent-section rounded-3xl p-8 shadow-2xl">
            <h2 className="text-white text-base font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add New Track
            </h2>
            <PlaylistForm onAddSong={addSong} />
          </div>

          {/* Right: Playlist Section */}
          <div className="accent-accent rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Music className="w-5 h-5 text-white" />
              <h2 className="text-white text-lg font-bold uppercase tracking-widest">
                Playlist ({songs.length})
              </h2>
            </div>
            <div className="bg-white rounded-xl p-4 max-h-96 overflow-y-auto">
              <PlaylistDisplay 
                songs={songs} 
                onRemoveSong={removeSong}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
