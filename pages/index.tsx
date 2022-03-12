import type { NextPage } from 'next'
import Head from './components/Head'
import Navbar from './components/Navbar'
import PostBlock from './components/PostBlock'
const Home: NextPage = () => {
    return (
        <>
            <Head title="Blognil" />
            <Navbar />
            <div className="container flex flex-col justify-around text-normal-dark dark:text-white dark:bg-normal-dark mx-aut p-5 min-h-screen min-w-full duration-500">
                <div className="w-3/5 flex flex-col justify-around p-5 min-h-screen mx-auto">
                    <PostBlock className="container" />
                </div>
            </div>
        </>
    )
}

export default Home
