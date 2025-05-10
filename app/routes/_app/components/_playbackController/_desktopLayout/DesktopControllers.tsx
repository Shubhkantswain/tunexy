import React, { useState } from 'react'
import { NextIcon, PauseIcon, PlayIcon, PrevIcon, SkipBackwardIcon, SkipForwardIcon, VolumeIcon } from '~/Svgs';

function DesktopControllers() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="hidden md:flex items-center justify-center flex-1 md:w-1/3 space-x-2 md:space-x-4">
            {/* Skip Backward 15s */}
            <div className="hidden lg:block md:hidden">
                <button
                    className={`p-2 rounded-full relative group ${true ? "opacity-100 hover:text-[#A8EDF0]" : "opacity-50 cursor-not-allowed"} transition-colors text-white`}
                // onClick={() => handleSkip('backward')}
                // disabled={!hasTrack}
                >

                    <SkipBackwardIcon width="24" height="24" />
                </button>
            </div>

            {/* Previous Button */}
            <button
                className={`p-2 relative group rounded-full ${true ? "opacity-100 hover:text-[#A8EDF0]" : "opacity-50 cursor-not-allowed"} transition-colors text-white`}
            // onClick={() => playTrack('prev')}
            // disabled={isDisabledForDirection('prev')}
            >

                <PrevIcon width="24" height="24" />
            </button>

            {/* Play/Pause Button */}
            <div className="relative group rounded-full">

                <button
                    className={`${true ? "opacity-100 hover:scale-105" : "opacity-50 cursor-not-allowed"} w-12 h-12 bg-white rounded-full flex items-center justify-center transition-transform text-black`}
                // onClick={togglePlay}
                // disabled={!hasTrack}
                >
                    {isPlaying ? <PauseIcon width="24" height="24" /> : <PlayIcon width="24" height="24" />}
                </button>
            </div>

            {/* Next Button */}
            <button
                className={`p-2 relative group ${true ? "opacity-100 hover:text-[#A8EDF0]" : "opacity-50 cursor-not-allowed"} transition-colors text-white rounded-full`}
            // onClick={() => playTrack('next')}
            // disabled={isDisabledForDirection('next')}
            >

                <NextIcon width="24" height="24" />
            </button>

            {/* Skip Forward 30s */}
            <div className="hidden lg:block md:hidden">
                <button
                    className={`p-2 relative group rounded-full ${true ? "opacity-100 hover:text-[#A8EDF0]" : "opacity-50 cursor-not-allowed"} transition-colors text-white`}
                // onClick={() => handleSkip('forward')}
                // disabled={!hasTrack}
                >

                    <SkipForwardIcon width="24" height="24" />
                </button>
            </div>

        </div>
    )
}

export default DesktopControllers