import React from 'react'
import { motion } from 'framer-motion';
import TrackCard from './TrackCard';

type Podcast = {
    id: number;
    title: string;
    color: string;
};

function TrackLists() {
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

    return (
        <>
            {
                spotlightPodcasts.map((podcast) => (
                    <div key={podcast.id}>
                        <TrackCard podcast={podcast} />
                    </div>
                ))
            }
        </>
    )
}

export default TrackLists