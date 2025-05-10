import Header from "./components/_header/Header";
import { Outlet } from "@remix-run/react";
import PlaybackController from "./components/_playbackController/PlaybackController";
import MobileNavigationFooter from "./components/_mobileNavigationFooter/MobileNavigationFooter";
import { useState } from "react";

//h-[65px] md:h-[80px]
export default function AmazonMusicKids() {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className="bg-[#0E1112] text-white min-h-screen">
            {/* Fixed Header */}
            <Header />


            {/* Scrollable Content Area */}
            <main className={`max-w-[90rem] mx-auto pt-[72px]  ${isOpen ? "pb-[137px] md:pb-[80px]": "pb-[72px] md:pb-[0px]"} `}>
                <Outlet />
            </main>

            {
                isOpen && (
                    <PlaybackController/>
                )
            }
            {/* Fixed Playback Footer */}
          
            {/* Fixed Mobile Navigation Footer */}
            <MobileNavigationFooter/>

        </div>
    );
}
