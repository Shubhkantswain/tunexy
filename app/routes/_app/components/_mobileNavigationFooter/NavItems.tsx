import { Link, useLocation } from '@remix-run/react'
import React from 'react'
import { navLinks } from '~/constants'

function NavItems() {
    const location = useLocation()
    const currentPath = location.pathname

    return (
        <nav className="flex justify-around items-center h-full">
            {navLinks.map(({ to, label, icon }) => {
                const isActive = currentPath === to

                return (
                    <Link
                        key={to}
                        to={to}
                        onClick={(e) => {
                            if (isActive) {
                                e.preventDefault()
                                e.stopPropagation()
                            }
                        }}
                        className={`flex flex-col items-center text-xs ${
                            isActive ? 'text-[#25d1da]' : 'text-white hover:text-[#A8EDF0]'
                        }`}
                    >
                        {icon}
                        <span>{label}</span>
                    </Link>
                )
            })}
        </nav>
    )
}

export default NavItems
