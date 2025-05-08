function MobileLeftSideInfo() {
    return (
        <div className="flex items-center gap-3 min-w-0">
            <img
                src="https://cms.pixso.net/images/articles/music-player-ui.png" // Replace with dynamic src if needed
                alt="Episode thumbnail"
                className="w-11 h-11 rounded-md object-cover"
            />
            <div className="flex flex-col overflow-hidden">
                <p className="text-sm font-medium truncate">Mahabharata Epissiiss</p>
                {/* <p className="text-xs text-gray-400 truncate">The Stories of Mahabhara</p> */}
                <div className="text-xs text-gray-400 truncate">{"The Stories of Mahabhara"}</div>

            </div>
        </div>
    )
}

export default MobileLeftSideInfo