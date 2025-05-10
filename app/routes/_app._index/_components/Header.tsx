import React from 'react'
import { motion } from 'framer-motion';
import { LeftArrowIcon, RightArrowIcon } from '~/Svgs';


interface HeaderProps {
    canScrollLeft: boolean;
    canScrollRight: boolean;
    scroll: (direction: "left" | "right") => void
}

const Header: React.FC<HeaderProps> = ({ canScrollLeft, canScrollRight, scroll }) => {
        // adding animation 
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

    return (
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
                                className={`${canScrollLeft
                                    ? 'cursor-pointer opacity-100'
                                    : 'cursor-not-allowed opacity-30'
                                    } text-white rounded-full flex items-center justify-center transition-colors`}
                                onClick={() => scroll('left')}
                                disabled={!canScrollLeft}
                            >
                                <LeftArrowIcon width="20" height="20" />
                            </motion.button>

                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                className={`${canScrollRight
                                    ? 'cursor-pointer opacity-100'
                                    : 'cursor-not-allowed opacity-30'
                                    } text-white rounded-full flex items-center justify-center transition-colors`}
                                onClick={() => scroll('right')}
                                disabled={!canScrollRight}
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
    )
}

export default Header