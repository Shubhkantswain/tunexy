import { HeartIcon, PauseIcon, PlayIcon } from '~/Svgs'

function MobileControllors() {
    return (
        <div className="flex gap-4 items-center">
            <button className="hover:text-[#A8EDF0]">
                {false ? <PauseIcon /> : <PlayIcon />}
            </button>
            <button className="hover:text-[#A8EDF0]">
                <HeartIcon />
            </button>
        </div>
    )
}

export default MobileControllors