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
import { DownArrowIcon, ExpandIcon, HeartIcon, HeartIconFilled, ListIcon, MoreIcon, NextIcon, PauseIcon, PlayIcon, PrevIcon, SkipBackwardIcon, SkipForwardIcon, VolumeIcon } from "~/Svgs";
import NowPlaying from "../../_nowPlaying/NowPlaying";

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
            <div className="relative cursor-pointer"
            onClick={() => setIsOpen(true)}>
                <img
                    src="https://cms.pixso.net/images/articles/music-player-ui.png" // Replace with dynamic src if needed
                    alt="Episode thumbnail"
                    className="w-11 h-11 rounded-md object-cover"
                />

                 {/* overlay icon */}
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="hover:text-[#A8EDF0] text-white p-1">
                        <ExpandIcon width="20" height="20" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col overflow-hidden">
                <p className="text-sm font-medium truncate">Mahabharata Epissiiss</p>
                <div className="text-xs text-gray-400 truncate">{"The Stories of Mahabhara"}</div>

            </div>

            <NowPlaying open={isOpen} onClose={() => setIsOpen(false)}/>

        </div>
    )
}

export default MobileLeftSideInfo