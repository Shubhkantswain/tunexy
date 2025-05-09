import { useState } from "react"
import {
    Drawer, DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "~/components/ui/drawer"
import { Slider } from "~/components/ui/slider";
import { DownArrowIcon, HeartIcon, HeartIconFilled, ListIcon, MoreIcon, NextIcon, PauseIcon, PlayIcon, PrevIcon, SkipBackwardIcon, SkipForwardIcon, VolumeIcon } from "~/Svgs";

function MobileLeftSideInfo() {
    const [isOpen, setIsOpen] = useState(false)

    const [isPlaying, setIsPlaying] = useState(false);

    // Sample song data based on the image
    const song = {
        title: "Is It Mine",
        artist: "Coco Jones, Lady London",
        coverArt: "/api/placeholder/400/400",
        duration: "3:59",
        currentTime: "0:59"
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="flex items-center gap-3 min-w-0">
            <div onClick={() => setIsOpen(true)}>
                <img
                    src="https://cms.pixso.net/images/articles/music-player-ui.png" // Replace with dynamic src if needed
                    alt="Episode thumbnail"
                    className="w-11 h-11 rounded-md object-cover"
                />
            </div>
            <div className="flex flex-col overflow-hidden">
                <p className="text-sm font-medium truncate">Mahabharata Epissiiss</p>
                {/* <p className="text-xs text-gray-400 truncate">The Stories of Mahabhara</p> */}
                <div className="text-xs text-gray-400 truncate">{"The Stories of Mahabhara"}</div>

            </div>
            
            <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
                <DrawerContent className="bg-black h-full w-full">
                    <div
                        className={`[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] fixed inset-0 bg-black overflow-y-auto z-50 `}
                    >
                        {/* Background Image (Visible on md and larger) */}
                        <div
                            className="fixed inset-0 z-0 opacity-30"
                            style={{
                                backgroundImage: `url('https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/dd26d3c9-8d35-4fa8-be30-ef6215cb9c9a/dd26d3c9-8d35-4fa8-be30-ef6215cb9c9a--774139821._SX1680_SY1680_BL0_QL100__UXNaN_FMwebp_QL85_.jpg')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                filter: "blur(100px)",
                            }}
                        />

                        <div className="relative z-10 max-w-3xl mx-auto min-h-full">

                            {/* Header */}
                            {/* <Header onClose={onClose} onShowQueueTrack={() => setIsQueueTrackVisible(true)} hide={hide} setHide={setHide} videoEnabled={videoEnabled} /> */}
                            <div className="p-4 flex items-center justify-between relative">
                                <button className="relative group hover:text-[#93D0D5]  text-white transition-colors duration-300">

                                    <DownArrowIcon />
                                </button>

                                <button className="relative group text-white hover:text-[#93D0D5] transition-colors duration-300" >


                                    <ListIcon />
                                </button>

                            </div >



                            <div className="px-8 pt-8 -mt-7">
                                <div
                                    className={`aspect-square w-full max-w-sm lg:max-w-[300px] lg:ml-0 mx-auto rounded-lg mb-8 will-change-transform transition-transform duration-500 ease-out transform wave-container ${true
                                        ? 'scale-100 playing'
                                        : 'scale-75 lg:scale-95'
                                        }`}

                                >
                                    <div className="relative w-full h-full mt-3">
                                        {/* Image */}
                                        <img
                                            src={'https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/dd26d3c9-8d35-4fa8-be30-ef6215cb9c9a/dd26d3c9-8d35-4fa8-be30-ef6215cb9c9a--774139821._SX1680_SY1680_BL0_QL100__UXNaN_FMwebp_QL85_.jpg'}
                                            alt="Album art"
                                            className="absolute inset-0 w-full h-full object-cover rounded-sm"
                                        />
                                    </div>



                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="space-y-1 text-left flex-1 min-w-0">
                                        <div className="relative group">
                                            <h2 className="text-2xl md:text-3xl text-white font-medium transition-all duration-300 truncate overflow-hidden max-w-full">
                                                {'trackDetails.title'}
                                            </h2>

                                        </div>

                                        <div className="relative group">
                                            <p className="text-zinc-400 transition-all duration-300 truncate overflow-hidden max-w-full">
                                                {'trackDetails.singer'}
                                            </p>

                                        </div>
                                    </div>


                                    <div className="flex gap-9 items-center">
                                        <button
                                            className={`relative group rounded-full transition-all duration-300 group ${false ? "text-white" : "text-[#25d1da]"} hover:text-[#93D0D5]`}

                                        >

                                            <HeartIconFilled width="24" height="24" />
                                        </button>



                                        <button
                                            className="relative group rounded-full text-white hover:text-[#93D0D5] transition-all duration-300 group rotate-90"
                                        // onClick={onShow}
                                        >
                                            {/* <Tooltip text='More' className='-left-10 ml-2 -rotate-90' /> */}
                                            <MoreIcon width="24" height="24" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Progress bar section - Fixed alignment for small screens */}
                            <div className="px-8 mt-8 w-full max-w-3xl mx-auto">
                                <Slider
                                    // value={[currentTime]}
                                    // max={duration || 100}
                                    step={1}
                                    className="w-full hover:cursor-grab active:cursor-grabbing"
                                // onValueChange={handleSeek}
                                // nowPlaying={true}
                                />
                                <div className="flex justify-between mt-2 text-xs text-zinc-400">
                                    <span>1:45</span>
                                    <span>4:55</span>
                                </div>
                            </div>

                            <div className="px-4 sm:px-8 py-8 lg:py-12 w-full max-w-3xl mx-auto">
                                {/* Playback Controls */}
                                <div className="flex items-center justify-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 xl:space-x-8 mb-6">


                                    <button className="relative group rounded-full p-2 text-white hover:text-[#93D0D5] transition-colors" >
                                        {/* <Tooltip text='Skip Backward 15s' className='-top-10' /> */}
                                        <SkipBackwardIcon width="24" height="24" />
                                    </button>


                                    <button
                                        className={`p-2 relative group rounded-full ${true ? "opacity-100 hover:text-[#93D0D5]" : "opacity-50 cursor-not-allowed"} transition-colors text-white hover:text-[#93D0D5]`}
                                    // onClick={() => playTrack('prev')}
                                    // disabled={isDisabledForDirection('prev')}
                                    >

                                        <PrevIcon width="24" height="24" />
                                    </button>


                                    <div className='relative group rounded-full'>
                                        {/* <Tooltip text={isPlaying ? "Pause" : "Play"} className='-top-10' /> */}
                                        <button className="w-16 h-16 opacity-100 hover:scale-105 bg-white rounded-full flex items-center justify-center transition-transform" >
                                            {
                                                isPlaying ? (
                                                    <PauseIcon width="30" height="30" />
                                                ) : (
                                                    <PlayIcon width="30" height="30" />
                                                )
                                            }
                                        </button>
                                    </div>


                                    <button
                                        className={`p-2 relative group rounded-full ${true ? "opacity-100 hover:text-[#93D0D5]" : "opacity-50 cursor-not-allowed"} transition-colors text-white`}
                                    // onClick={() => playTrack('next')}
                                    // disabled={isDisabledForDirection('next')}
                                    >

                                        <NextIcon width="24" height="24" />
                                    </button>

                                    <button className="p-2 relative group rounded-full text-white hover:text-[#93D0D5] transition-colors">
                                        {/* <Tooltip text='Skip Forward 30s' className='-top-10' /> */}
                                        <SkipForwardIcon width="24" height="24" />
                                    </button>

                                </div>

                                {/* Volume Controls */}
                                <div className="flex justify-center items-center w-full px-8">
                                    <div className="flex items-center gap-2 w-full max-w-md">
                                        <div className="text-white">

                                        <VolumeIcon />
                                        </div>
                                        <div
                                            className="flex-1 backdrop-blur-sm rounded-full relative cursor-pointer"

                                        >
                                            <Slider
                                                // value={[currentTime]}
                                                // max={duration || 100}
                                                step={1}
                                                className="w-full hover:cursor-grab active:cursor-grabbing"
                                            // onValueChange={handleSeek}
                                            // nowPlaying={true}
                                            />
                                           
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </DrawerContent>
            </Drawer>


        </div>
    )
}

export default MobileLeftSideInfo