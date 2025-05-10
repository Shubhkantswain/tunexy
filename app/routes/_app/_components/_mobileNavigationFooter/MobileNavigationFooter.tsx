import React from 'react'
import NavItems from './NavItems'

function MobileNavigationFooter() {
    return (
        <footer className="fixed bottom-0 h-[72px] left-0 right-0 z-10 bg-black/60 backdrop-blur-xl border-t border-[#2E3030] md:hidden">
            <NavItems/>
        </footer>
    )
}

export default MobileNavigationFooter