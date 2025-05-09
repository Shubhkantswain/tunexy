import { useState } from 'react'
import CenterControllers from './_desktopLayout/CenterControllers'
import VolumeController from './_desktopLayout/VolumeController'
import DesktopLeftSideInfo from './_desktopLayout/DesktopLeftSideInfo'
import MobileLeftSideInfo from './_mobileLayout/MobileLeftSideInfo'
import MobileControllors from './_mobileLayout/MobileControllors'
import { Slider } from '~/components/ui/slider'
import ProgressBar from './ProgressBar'

function PlaybackController() {
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <footer className="bg-black backdrop-blur-xl fixed bottom-16 mb-2.5 md:mb-0 rounded-2xl md:rounded-none md:bottom-0 left-0 right-0 z-20 md:bg-black/60 md:backdrop-blur-xl h-[65px] md:h-[80px] w-[95%] md:w-full mx-auto">
            <div className="max-w-[90rem] mx-auto px-6 w-full h-full flex items-center justify-between text-white">

                {/* Progress bar */}
                <ProgressBar/>

                {/* Desktop layout */}
                <div className="hidden md:flex w-full justify-between items-center">
                    <DesktopLeftSideInfo />
                    <CenterControllers />
                    <VolumeController />
                </div>

                {/* Mobile layout */}
                <div className="flex md:hidden w-full items-center justify-between gap-4">
                    <MobileLeftSideInfo />
                    <MobileControllors />
                </div>

            </div>
        </footer>
    )
}

export default PlaybackController
