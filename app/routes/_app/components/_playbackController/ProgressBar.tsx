import React from 'react'
import { Slider } from '~/components/ui/slider'

function ProgressBar() {
    const currentTime = "1:23"
    const duration = "4:56"
    return (
        <div className="hidden md:block absolute cursor-grab top-0 left-0 right-0 w-full group max-w-[90rem] mx-auto">
            <div className="relative">
                {/* Time labels */}
                <div className="absolute -top-5 flex justify-between w-full text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2">
                    <span>{currentTime}</span>
                    <span>{duration}</span>
                </div>

                <Slider
                    defaultValue={[33]}
                    max={100}
                    step={1}
                    className="w-full"
                />
            </div>
        </div>
    )
}

export default ProgressBar