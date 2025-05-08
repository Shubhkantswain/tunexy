import Account from "./Account"
import Logo from "./Logo"
import NavItems from "./NavItems"
import SearchBar from "./SearchBar"

function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-10 bg-black/20 backdrop-blur-xl h-[72px] border-b border-[#2E3030]">
            <div className="max-w-[90rem] mx-auto w-full h-full flex items-center justify-between px-6">
                <div className="flex items-center space-x-10 lg:space-x-14">
                    <Logo />
                    <NavItems />
                </div>

                <div className="flex items-center space-x-4">
                    <SearchBar />
                    <Account />
                </div>
            </div>
        </header>
    )
}

export default Header
