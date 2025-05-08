import { ExploreIcon, HomeIcon, LibraryIcon, SearchIcon } from "./Svgs";

export const navLinks = [
    { to: '/', label: 'Home', icon: <HomeIcon />, showInHeader: true },
    { to: '/explore', label: 'Explore', icon: <ExploreIcon />, showInHeader: true },
    { to: '/library', label: 'Library', icon: <LibraryIcon />, showInHeader: true },
    { to: '/search', label: 'Search', icon: <SearchIcon />, showInHeader: false },
]
