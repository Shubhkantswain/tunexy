import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CrossIcon, SearchIcon } from '~/Svgs';

function SearchBar() {
    const location = useLocation();
    const navigate = useNavigate();
    const isSearchPage = location.pathname === '/search';
    const [searchQuery, setSearchQuery] = useState("");

    return isSearchPage ? (
        <div className="hidden md:flex bg-[#2E2F2F] px-5 py-5 items-center space-x-2 rounded-none w-fit">
            <input
                type="text"
                placeholder="Search"
                className="searchbar bg-transparent outline-none  text-sm text-white placeholder-[#b2b2b2]"
                autoFocus
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
            />

            <button
                className={`hover:bg-[#A8EDF0] p-1 flex items-center justify-center bg-white rounded-full text-black transition ${searchQuery ? "" : "invisible"}`}
                onClick={() => setSearchQuery("")}
            >
                <CrossIcon width="13" height="13" />
            </button>

            <button
                className={`${!searchQuery ? "opacity-50": "opacity-100 cursor-pointer hover:bg-[#A8EDF0] hover:scale-105"} p-2 flex items-center justify-center bg-[#25d1da] rounded-full text-black transition`}
                disabled={!searchQuery}
            >
                <SearchIcon width="17" height="17" />
            </button>
        </div>
    ) : (
        <div
            onClick={() => navigate('/search')}
            className="hidden md:flex bg-white text-black px-5 py-2 rounded-full items-center cursor-pointer"
        >
            <div className="bg-transparent w-32 md:w-48 text-sm text-[#b2b2b2]">
                Search
            </div>
            <button className="text-[#b2b2b2]">
                <SearchIcon width="20" height="20" />
            </button>
        </div>
    );
}

export default SearchBar;
