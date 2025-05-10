import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { LeftArrowIcon, RightArrowIcon } from '~/Svgs';
import Header from './Header';
import TrackLists from './TrackLists';

const PodcastSkeleton = () => {
    return (
        <div className="text-white mb-10">
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


interface TrackSectionProps {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const TrackSection: React.FC<TrackSectionProps> = ({ isLoading, setIsLoading }) => {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    const [canScroll, setCanScroll] = useState({ left: false, right: false });


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


    if (isLoading) {
        return <PodcastSkeleton />;
    }

    return (
        <div className="mb-10">
            <Header canScrollLeft={canScroll.left} canScrollRight={canScroll.right} scroll={scroll} />
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                ref={scrollContainerRef}
                className="flex overflow-x-auto hide-scrollbar scroll-smooth gap-4 md:gap-6"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onScroll={checkScrollability}
            >
                <TrackLists />
            </motion.div>
        </div>
    )
}

export default TrackSection