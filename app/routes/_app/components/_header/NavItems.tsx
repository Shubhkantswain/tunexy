import { Link, useLocation } from '@remix-run/react'
import React from 'react'
import { navLinks } from '~/constants'

function NavItems() {
    const location = useLocation()
    const currentPath = location.pathname

    return (
        <nav className="space-x-10 lg:space-x-14 hidden md:flex font-bold">
            {navLinks.map(({ to, label, icon, showInHeader }) => {
                if (!showInHeader) return null // 👈 Skip Search

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
                        className={`flex items-center space-x-2 cursor-pointer ${isActive
                            ? 'text-[#25d1da]'
                            : 'text-white hover:text-[#A8EDF0]'
                            }`}
                    >
                        {icon}
                        <span className="uppercase hidden lg:inline">{label}</span>
                    </Link>
                )
            })}
        </nav>
    )
}

export default NavItems
