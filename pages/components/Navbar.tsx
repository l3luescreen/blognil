import type { NextPage } from 'next'
import { useState } from 'react'
const Navbar: NextPage = () => {
    const [isDarkmode, setIsDarkmode] = useState(true)

    const toggleMode = () => {
        setIsDarkmode(!isDarkmode)

        if (isDarkmode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    return (
        <>
            <nav className="absolute p-5 flex justify-between min-w-full bg-mint">
                <div>
                    <span className="text-2xl dark:text-white text-normal-dark cursor-pointer">Blognil</span>
                </div>
                <div>
                    <span className="text-2xl dark:text-white text-normal-dark cursor-pointer" onClick={toggleMode}>
                        {isDarkmode && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            </svg>
                        )}
                        {!isDarkmode && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            </svg>
                        )}
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Navbar
