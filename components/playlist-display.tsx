'use client';

import { Trash2, Music } from 'lucide-react';

interface Song {
  id: string;
  title: string;
  artist: string;
}

interface PlaylistDisplayProps {
  songs: Song[];
  onRemoveSong: (id: string) => void;
}

export default function PlaylistDisplay({
  songs,
  onRemoveSong,
}: PlaylistDisplayProps) {
  if (songs.length === 0) {
    return (
      <div className="text-center py-8">
        <Music className="w-10 h-10 mx-auto text-gray-300 mb-2" />
        <p className="text-gray-400 text-base tracking-wide">no tracks yet, add one in the form!</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {songs.map((song, index) => (
        <div
          key={song.id}
          className="flex items-center justify-between bg-gradient-to-r from-slate-50 to-blue-50 p-3 rounded-lg hover:from-orange-100 hover:to-yellow-50 transition-all group border-2 border-transparent hover:border-orange-300 cursor-pointer"
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-indigo-600 w-6 text-right">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-gray-800 text-sm">{song.title}</p>
                <p className="text-xs text-gray-500">{song.artist}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 ml-2">
            <Button
              onClick={() => onRemoveSong(song.id)}
              size="sm"
              className="h-8 w-8 p-0 rounded-full flex items-center justify-center bg-red-500 hover:bg-red-600 text-white opacity-0 group-hover:opacity-100 transition-all shadow-md"
              aria-label={`Remove ${song.title}`}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
