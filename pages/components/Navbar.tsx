import type { NextPage } from 'next'
import { useRouter } from 'next/router'
const Navbar: NextPage = () => {
    const router = useRouter()
    return (
        <div className="mb-14">
            <nav className="z-10 top-0 fixed py-5 px-20 flex justify-between min-w-full bg-mint">
                <div>
                    <span
                        className="text-2xl text-normal-dark cursor-pointer"
                        onClick={() => router.push('/')}
                    >
                        Blognil
                    </span>
                </div>
                <div className="flex">
                    <ul className="flex justify-between">
                        <li className="mx-4">
                            <span
                                className="text-2xl text-normal-dark cursor-pointer"
                                onClick={() => router.push('/')}
                            >
                                Home
                            </span>
                        </li>
                        <li className="mx-4">
                            <span
                                className="text-2xl text-normal-dark cursor-pointer"
                                onClick={() => router.push('/Categories')}
                            >
                                Categories
                            </span>
                        </li>
                        <li className="mx-4">
                            <span
                                className="text-2xl text-normal-dark cursor-pointer"
                                onClick={() => router.push('/Authors')}
                            >
                                Authors
                            </span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
