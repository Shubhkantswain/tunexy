import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PodcastHomepage() {
  const spotlightRef = useRef(null);

  const spotlightPodcasts = [
    { id: 1, title: 'The Desi Crime Podcast', color: 'bg-orange-600' },
    { id: 2, title: 'Teen Taal', color: 'bg-yellow-500' },
    { id: 3, title: 'The Stories of Mahabharata', color: 'bg-amber-300' },
    { id: 4, title: 'Finshots Daily', color: 'bg-green-500' },
    { id: 5, title: 'Global News Podcast', color: 'bg-red-600' },
    { id: 6, title: 'Mahabharat Simplified', color: 'bg-amber-100' },
    { id: 7, title: 'Cyrus Says', color: 'bg-blue-500' },
    { id: 8, title: 'The Joe Rogan Experience', color: 'bg-purple-500' },
  ];

  const scroll = (ref, direction) => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollTo = direction === 'left'
        ? scrollLeft - clientWidth * 0.75
        : scrollLeft + clientWidth * 0.75;

      ref.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  const PodcastCard = ({ title, color }) => (
    <div
      className="flex flex-col items-center flex-none w-36 md:w-40 lg:w-44"
    >
      {/* <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-lg overflow-hidden"> */}
      <div className="w-36 h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-lg overflow-hidden">

        <img
          src="https://m.media-amazon.com/images/I/411iKfRsBeL._SX354_SY354_BL0_QL100__UX250_FMwebp_QL85_.jpg"
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-white text-sm font-medium truncate w-full mt-2">{title}</p>
    </div>
  );

  return (
    <div className="min-h-screen text-white p-4 md:p-6">
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-2xl font-bold">Podcasts</h2>
          <div className="flex items-center">
            <button
              onClick={() => scroll(spotlightRef, 'left')}
              className="text-white p-1 mr-2 rounded-full bg-gray-800 hover:bg-gray-700"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll(spotlightRef, 'right')}
              className="text-white p-1 mr-2 rounded-full bg-gray-800 hover:bg-gray-700"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold py-1 px-4 rounded-full"
            >
              SEE ALL
            </a>
          </div>
        </div>
        <div
          ref={spotlightRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-4 md:gap-6"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {spotlightPodcasts.map((podcast) => (
            <PodcastCard
              key={podcast.id}
              title={podcast.title}
              color={podcast.color}
            />
          ))}
        </div>
      </div>
      
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-2xl font-bold">Podcasts</h2>
          <div className="flex items-center">
            <button
              onClick={() => scroll(spotlightRef, 'left')}
              className="text-white p-1 mr-2 rounded-full bg-gray-800 hover:bg-gray-700"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll(spotlightRef, 'right')}
              className="text-white p-1 mr-2 rounded-full bg-gray-800 hover:bg-gray-700"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold py-1 px-4 rounded-full"
            >
              SEE ALL
            </a>
          </div>
        </div>
        <div
          ref={spotlightRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-4 md:gap-6"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {spotlightPodcasts.map((podcast) => (
            <PodcastCard
              key={podcast.id}
              title={podcast.title}
              color={podcast.color}
            />
          ))}
        </div>
      </div>



      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-2xl font-bold">Podcasts</h2>
          <div className="flex items-center">
            <button
              onClick={() => scroll(spotlightRef, 'left')}
              className="text-white p-1 mr-2 rounded-full bg-gray-800 hover:bg-gray-700"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll(spotlightRef, 'right')}
              className="text-white p-1 mr-2 rounded-full bg-gray-800 hover:bg-gray-700"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold py-1 px-4 rounded-full"
            >
              SEE ALL
            </a>
          </div>
        </div>
        <div
          ref={spotlightRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-4 md:gap-6"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {spotlightPodcasts.map((podcast) => (
            <PodcastCard
              key={podcast.id}
              title={podcast.title}
              color={podcast.color}
            />
          ))}
        </div>
      </div><div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-2xl font-bold">Podcasts</h2>
          <div className="flex items-center">
            <button
              onClick={() => scroll(spotlightRef, 'left')}
              className="text-white p-1 mr-2 rounded-full bg-gray-800 hover:bg-gray-700"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll(spotlightRef, 'right')}
              className="text-white p-1 mr-2 rounded-full bg-gray-800 hover:bg-gray-700"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold py-1 px-4 rounded-full"
            >
              SEE ALL
            </a>
          </div>
        </div>
        <div
          ref={spotlightRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-4 md:gap-6"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {spotlightPodcasts.map((podcast) => (
            <PodcastCard
              key={podcast.id}
              title={podcast.title}
              color={podcast.color}
            />
          ))}
        </div>
      </div><div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-2xl font-bold">Podcasts</h2>
          <div className="flex items-center">
            <button
              onClick={() => scroll(spotlightRef, 'left')}
              className="text-white p-1 mr-2 rounded-full bg-gray-800 hover:bg-gray-700"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll(spotlightRef, 'right')}
              className="text-white p-1 mr-2 rounded-full bg-gray-800 hover:bg-gray-700"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold py-1 px-4 rounded-full"
            >
              SEE ALL
            </a>
          </div>
        </div>
        <div
          ref={spotlightRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-4 md:gap-6"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {spotlightPodcasts.map((podcast) => (
            <PodcastCard
              key={podcast.id}
              title={podcast.title}
              color={podcast.color}
            />
          ))}
        </div>
      </div><div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-2xl font-bold">Podcasts</h2>
          <div className="flex items-center">
            <button
              onClick={() => scroll(spotlightRef, 'left')}
              className="text-white p-1 mr-2 rounded-full bg-gray-800 hover:bg-gray-700"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll(spotlightRef, 'right')}
              className="text-white p-1 mr-2 rounded-full bg-gray-800 hover:bg-gray-700"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold py-1 px-4 rounded-full"
            >
              SEE ALL
            </a>
          </div>
        </div>
        <div
          ref={spotlightRef}
          className="flex overflow-x-auto scrollbar-hide scroll-smooth gap-4 md:gap-6"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {spotlightPodcasts.map((podcast) => (
            <PodcastCard
              key={podcast.id}
              title={podcast.title}
              color={podcast.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}