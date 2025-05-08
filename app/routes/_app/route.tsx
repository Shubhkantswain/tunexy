import Header from "./components/_header/Header";
import { Outlet } from "@remix-run/react";
import PlaybackController from "./components/_playbackController/PlaybackController";
import MobileNavigationFooter from "./components/_mobileNavigationFooter/MobileNavigationFooter";

export default function AmazonMusicKids() {



    return (
        <div className="bg-[#0E1112] text-white min-h-screen">
            {/* Fixed Header */}
            <Header />


            {/* Scrollable Content Area */}
            <main className="max-w-[90rem] mx-auto pt-[72px] pb-[139px] md:pb-[82px]">
                <Outlet />
            </main>

            {/* Fixed Playback Footer */}
            <PlaybackController/>
          


            {/* Fixed Mobile Navigation Footer */}
            <MobileNavigationFooter/>

        </div>
    );
}
