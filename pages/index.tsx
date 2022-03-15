import type { NextPage } from 'next'
import Head from './components/Head'
import Navbar from './components/Navbar'
import PostCard from './components/PostCard'
const Home: NextPage = () => {
    return (
        <>
            <Head title="Blognil" />
            <Navbar />
            <div className="container flex flex-col justify-around text-normal-dark mx-aut p-5 min-h-screen min-w-full">
                <div className="w-3/5 flex flex-col justify-around p-5 min-h-screen mx-auto">
                    <PostCard searchOption="all" />
                </div>
            </div>
        </>
    )
}

export default Home
