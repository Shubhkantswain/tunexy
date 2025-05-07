import { useState } from "react";
import {
  Home,
  Podcast,
  Library,
  Search,
  ChevronDown,
  SkipBack,
  SkipForward,
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  User,
} from "lucide-react";

export default function AmazonMusicKids({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const currentSong = {
    title:
      "ठ-ठूसन थ्योरी, चालान का चलन और जाम का झाम : तीन ताल Special - Ep.1",
    artist: "Teen Taal",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/en/6/6e/Teen_Taal_Album_Cover.jpg",
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-10 bg-black/50 backdrop-blur-md h-[72px] flex items-center justify-between px-6 py-7 border-b border-gray-800">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold flex items-center space-x-1">
            <span>amazon</span>
            <span>music</span>
          </div>
          <nav className="space-x-6 hidden md:flex">
            <div className="flex items-center space-x-2 text-cyan-400">
              <Home className="w-5 h-5" />
              <span className="uppercase font-semibold hidden lg:inline">
                Home
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Podcast className="w-5 h-5" />
              <span className="uppercase hidden lg:inline">Podcasts</span>
            </div>
            <div className="flex items-center space-x-2">
              <Library className="w-5 h-5" />
              <span className="uppercase hidden lg:inline">Library</span>
              <ChevronDown className="w-4 h-4 hidden lg:inline" />
            </div>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="bg-white text-black px-4 py-1 rounded-full items-center hidden md:flex">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none w-32 md:w-48 text-sm"
            />
            <Search className="ml-2 w-5 h-5 text-gray-500" />
          </div>
          <div className="bg-gray-800 p-2 rounded-full">
            <User className="w-6 h-6" />
          </div>
        </div>
      </header>

      {/* Scrollable Content Area */}
      <main className="pt-[72px] pb-[128px] px-4 md:px-8">
        {children || (
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-bold mb-2">Trending Playlists</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="space-y-1">
                    <div className="aspect-square bg-gray-700 rounded-lg" />
                    <div className="font-semibold truncate">
                      Kids Playlist {i + 1}
                    </div>
                    <div className="text-sm text-gray-400 truncate">
                      Artist names
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-2">Popular Songs</h2>
              <div className="space-y-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-4 bg-gray-800 p-2 rounded-md"
                  >
                    <div className="w-12 h-12 bg-gray-600 rounded" />
                    <div>
                      <div className="font-semibold">Song {i + 1}</div>
                      <div className="text-sm text-gray-400">
                        Artist {i + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Fixed Playback Footer */}
      <footer className="fixed bottom-14 left-0 right-0 z-20 bg-black/60 backdrop-blur-md border-t border-gray-800 px-4 py-3 h-[72px] flex items-center justify-between text-white">
        <div className="flex items-center space-x-4 overflow-hidden w-1/3">
          <img
            src={currentSong.thumbnail}
            alt="Song Cover"
            className="w-12 h-12 rounded"
          />
          <div className="truncate">
            <div className="font-semibold truncate">{currentSong.title}</div>
            <div className="text-sm text-gray-400 truncate">
              {currentSong.artist}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-6 justify-center">
          <RotateCcw className="w-5 h-5 text-gray-400 hidden lg:flex" />
          <SkipBack className="w-5 h-5 text-gray-400" />
          <button
            className="p-2 bg-white text-black rounded-full"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <SkipForward className="w-5 h-5 text-gray-400" />
          <RotateCw className="w-5 h-5 text-gray-400 hidden lg:flex" />
        </div>

        <div className="flex items-center space-x-2 w-1/3 justify-end pr-2">
          <Volume2 className="w-5 h-5 text-gray-400" />
        </div>
      </footer>

      {/* Fixed Mobile Navigation Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-10 bg-black border-t border-gray-800 md:hidden h-[56px]">
        <nav className="flex justify-around py-2">
          <div className="flex flex-col items-center text-xs text-white">
            <Home className="w-5 h-5 mb-1" />
            <span>Home</span>
          </div>
          <div className="flex flex-col items-center text-xs text-white">
            <Podcast className="w-5 h-5 mb-1" />
            <span>Podcasts</span>
          </div>
          <div className="flex flex-col items-center text-xs text-white">
            <Library className="w-5 h-5 mb-1" />
            <span>Library</span>
          </div>
        </nav>
      </footer>
    </div>
  );
}
