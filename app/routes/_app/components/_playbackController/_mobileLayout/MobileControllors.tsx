import { HeartIcon, PauseIcon, PlayIcon } from '~/Svgs'

function MobileControllors() {
    return (
        <div className="flex gap-4 items-center">
            <button>
                {false ? <PauseIcon /> : <PlayIcon />}
            </button>
            <button>
                {/* <NextIcon /> */}
                <HeartIcon />
            </button>
        </div>
    )
}

export default MobileControllors