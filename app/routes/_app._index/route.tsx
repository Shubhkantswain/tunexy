import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { LeftArrowIcon, RightArrowIcon } from '~/Svgs';

type Podcast = {
  id: number;
  title: string;
  color: string;
};

const PodcastSkeleton = () => {
  return (
    <div className="text-white px-4 py-4 md:px-10 md:py-8">
      <div className="mb-4 md:mb-6">
        <div className="flex flex-row justify-between items-center gap-4">
          <div>
            <div className="h-8 w-32 bg-[#313232] rounded-md animate-pulse"></div>
          </div>
          <div className="flex items-center gap-5">
            <div className="gap-8 flex">
              <div className="h-6 w-6 bg-[#313232] rounded-full animate-pulse"></div>
              <div className="h-6 w-6 bg-[#313232] rounded-full animate-pulse"></div>
            </div>
            <div className="h-8 w-16 bg-[#313232] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="flex overflow-x-auto hide-scrollbar scroll-smooth gap-4 md:gap-6">
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center flex-none w-36 md:w-40 lg:w-44"
            >
              <div className="w-36 h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-lg overflow-hidden bg-[#313232] animate-pulse"></div>
              <div className="h-4 w-28 bg-[#313232] rounded-md mt-2 animate-pulse"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default function PodcastHomepage() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [canScroll, setCanScroll] = useState({ left: false, right: false });

  const spotlightPodcasts: Podcast[] = [
    { id: 1, title: 'The Desi Crime Podcast', color: 'bg-orange-600' },
    { id: 2, title: 'Teen Taal', color: 'bg-yellow-500' },
    { id: 3, title: 'The Stories of Mahabharata', color: 'bg-amber-300' },
    { id: 4, title: 'Finshots Daily', color: 'bg-green-500' },
    { id: 5, title: 'Global News Podcast', color: 'bg-red-600' },
    { id: 6, title: 'Mahabharat Simplified', color: 'bg-amber-100' },
    { id: 7, title: 'Cyrus Says', color: 'bg-blue-500' },
    { id: 8, title: 'The Joe Rogan Experience', color: 'bg-purple-500' },
  ];

  const checkScrollability = (): void => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const hasHorizontalScroll = container.scrollWidth > container.clientWidth;
      const atStart = container.scrollLeft <= 0;
      const atEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 5;

      setCanScroll({
        left: hasHorizontalScroll && !atStart,
        right: hasHorizontalScroll && !atEnd,
      });
    }
  };

  const scroll = (direction: 'left' | 'right'): void => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -350 : 350;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });

      // Update scroll buttons after scrolling
      setTimeout(checkScrollability, 300);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setTimeout(checkScrollability, 100);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <PodcastSkeleton />;
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="text-white px-4 py-4 md:px-10 md:py-8">
      <motion.div initial="hidden" animate="visible" variants={headerVariants}>
        <header className="mb-4 md:mb-6">
          <div className="flex flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                Podcast
              </h1>
            </div>
            <div className="flex items-center gap-5">
              <div className="gap-8 flex">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className={`${canScroll.left
                    ? 'cursor-pointer opacity-100'
                    : 'cursor-not-allowed opacity-30'
                    } text-white rounded-full flex items-center justify-center transition-colors`}
                  onClick={() => scroll('left')}
                  disabled={!canScroll.left}
                >
                  <LeftArrowIcon width="20" height="20" />
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className={`${canScroll.right
                    ? 'cursor-pointer opacity-100'
                    : 'cursor-not-allowed opacity-30'
                    } text-white rounded-full flex items-center justify-center transition-colors`}
                  onClick={() => scroll('right')}
                  disabled={!canScroll.right}
                >
                  <RightArrowIcon width="20" height="20" />
                </motion.button>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1.5 md:px-4 md:py-2 bg-[#313232] hover:bg-[#5D5E5E] text-white rounded-full transition-colors text-xs font-medium"
              >
                SEE ALL
              </motion.button>
            </div>
          </div>
        </header>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        ref={scrollContainerRef}
        className="flex overflow-x-auto hide-scrollbar scroll-smooth gap-4 md:gap-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onScroll={checkScrollability}
      >
        {spotlightPodcasts.map((podcast) => (
          <motion.div
            key={podcast.id}
            variants={itemVariants}
            className="flex flex-col items-center flex-none w-36 md:w-40 lg:w-44"
          >
            <div className="w-36 h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-lg overflow-hidden">
              <img
                src="https://m.media-amazon.com/images/I/411iKfRsBeL._SX354_SY354_BL0_QL100__UX250_FMwebp_QL85_.jpg"
                alt={podcast.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-white text-sm font-medium truncate w-full mt-2">
              {podcast.title}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}