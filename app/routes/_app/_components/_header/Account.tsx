import React from 'react'
import { AccountIcon } from '~/Svgs'

function Account() {
    return (
        <div className="bg-[#313232] hover:bg-[#565757] hover:scale-105 p-2 rounded-full cursor-pointer">
            <AccountIcon />
        </div>
    )
}

export default Account