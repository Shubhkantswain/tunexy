import { DownArrowIcon, ListIcon } from "~/Svgs";

interface HeaderProps {
  onClose: () => void;
}

const Header: React.FC<HeaderProps> = ({ onClose }) => {
    return (
        <div className="p-4 flex items-center justify-between relative">
            <button
                className="relative group hover:text-[#93D0D5] text-white transition-colors duration-300"
                onClick={onClose}
            >
                <DownArrowIcon />
            </button>

            <button className="relative group text-white hover:text-[#93D0D5] transition-colors duration-300">
                <ListIcon />
            </button>
        </div>
    )
}

export default Header