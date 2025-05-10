import React from 'react'
import { motion } from 'framer-motion';

type Podcast = {
    id: number;
    title: string;
    color: string;
};

interface TrackCardProps {
    podcast: Podcast;
}

const TrackCard: React.FC<TrackCardProps> = ({ podcast }) => {
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
        <motion.div
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
    )
}

export default TrackCard