import React from 'react'

function DesktopLeftSideInfo() {
    const currentSong = {
        title:
            "ठ-ठूसन थ्योरी, चालान का चलन और जाम का झाम : तीन ताल Special - Ep.1",
        artist: "Teen Taal",
        thumbnail:
            "https://upload.wikimedia.org/wikipedia/en/6/6e/Teen_Taal_Album_Cover.jpg",
    };

    return (
        <div className="hidden md:flex items-center space-x-4 overflow-hidden w-1/3">
            <img
                src={"https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/23e00040-1692-4d3e-9a87-3b169e644500/23e00040-1692-4d3e-9a87-3b169e644500--1597963444._UX250_FMwebp_QL85_.png"}
                alt="Song Cover"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-14 md:h-14 rounded-sm"
            />
            <div className="truncate">
                <div className="font-semibold text-md truncate">Mahabharata Episode 1: Beginnings</div>
                <div className="text-sm text-gray-400 truncate">{currentSong.artist}</div>
            </div>
        </div>
    )
}

export default DesktopLeftSideInfo