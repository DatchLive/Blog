import Link from 'next/link'
import { useState } from 'react'
import { MenuIcon } from '@heroicons/react/outline'

export const NavBar = () => {
    const [active, setActive] = useState(false)
    const handleClick = () => {
        setActive(!active)
    }

    return (
        <nav className="flex flex-wrap items-center pb-8 sm:pb-4">
            <button
                className="absolute p-2 rounded outline-none top-2 right-2 hover:bg-green-100 hover:bg-opacity-50 sm:hidden "
                onClick={handleClick}
            >
                <MenuIcon className="w-5 h-5 text-white" />
            </button>
            {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
            <div
                className={`${
                    active ? '' : 'hidden'
                }   w-full sm:inline-flex sm:flex-grow sm:w-auto`}
            >
                <div className="flex flex-col pt-4 sm:flex-row sm:w-auto sm:justify-center sm:m-auto">
                    <Link href="/">
                        <a className="items-center justify-center w-full px-3 py-2 text-white uppercase rounded lg:w-auto hover:bg-green-100 hover:bg-opacity-50">
              Home
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className="items-center justify-center w-full px-3 py-2 text-white uppercase rounded lg:w-auto hover:bg-green-100 hover:bg-opacity-50">
              About
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a className="items-center justify-center w-full px-3 py-2 text-white uppercase rounded lg:w-auto hover:bg-green-100 hover:bg-opacity-50">
              Contact
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
