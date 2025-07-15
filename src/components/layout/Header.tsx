'use client'

import Link from 'next/link'

const Header = () => {
    return (
        <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
            <h1 className="text-xl font-bold">
                Wallet Tracker
            </h1>
            <Link href="/dashboard" className='text-sm hover:underline'>
                Dashboard
            </Link>
            <nav>
            </nav>
        </header>
    )
}

export default Header