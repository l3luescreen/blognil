import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
const Navbar: NextPage = () => {
    const router = useRouter()
    // const [isDarkmode, setIsDarkmode] = useState(true)

    // const toggleMode = () => {
    //     setIsDarkmode(!isDarkmode)
    //     localStorage.setItem('dark', isDarkmode.toString())

    //     if (localStorage.getItem('dark') === 'true') {
    //         document.documentElement.classList.add('dark')
    //     } else {
    //         document.documentElement.classList.remove('dark')
    //     }
    // }

    // useEffect(() => {
    //     if (localStorage.getItem('dark') === 'true') {
    //         document.documentElement.classList.add('dark')
    //     } else {
    //         document.documentElement.classList.remove('dark')
    //     }
    //     setIsDarkmode(localStorage.getItem('dark') === 'true')
    // }, [])

    return (
        <div className="mb-14">
            <nav className="z-10 top-0 fixed py-5 px-20 flex justify-between min-w-full bg-mint">
                <div>
                    <span
                        className="text-2xl dark:text-white text-normal-dark cursor-pointer"
                        onClick={() => router.push('/')}
                    >
                        Blognil
                    </span>
                </div>
                <div className="flex">
                    <ul className="flex justify-between">
                        <li className="mx-4">
                            <span
                                className="text-2xl dark:text-white text-normal-dark cursor-pointer"
                                onClick={() => router.push('/')}
                            >
                                Home
                            </span>
                        </li>
                        <li className="mx-4">
                            <span
                                className="text-2xl dark:text-white text-normal-dark cursor-pointer"
                                onClick={() => router.push('/Categories')}
                            >
                                Category
                            </span>
                        </li>
                        <li className="mx-4">
                            <span
                                className="text-2xl dark:text-white text-normal-dark cursor-pointer"
                                onClick={() => router.push('/Authors')}
                            >
                                Authors
                            </span>
                        </li>
                        {/* <li className="mx-4">
                            <span
                                className="text-2xl dark:text-white text-normal-dark cursor-pointer"
                                onClick={toggleMode}
                            >
                                {isDarkmode && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7"
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
                                        className="h-7 w-7"
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
                        </li> */}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
