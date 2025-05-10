import { VolumeIcon } from '~/Svgs'

function VolumeController() {
    return (
        <div className="hover:text-[#A8EDF0] cursor-pointer items-center space-x-2 w-1/3 justify-end pr-2 hidden md:flex">
            <VolumeIcon />
        </div>
    )
}

export default VolumeController