import type { NextPage } from 'next'
import Head from './components/Head'
import Navbar from './components/Navbar'
import Greeting from './components/Greeting'

const Home: NextPage = () => {
    return (
        <>
            <Head title="Blognil" />
            <Navbar />
            <div className="container flex flex-col justify-around text-normal-dark dark:text-white dark:bg-normal-dark mx-aut p-5 min-h-screen min-w-full">
                <div className="min-w-full h-2/5 self-center">
                    <Greeting
                        className="text-8xl text-center"
                        textMain="Blognil"
                        textSec="lingolB"
                        />
                </div>
                <div className="h-2/5 self-center">
                    <button className="text-xl dark:text-white text-normal-dark bg-mint hover:bg-dark-mint active:bg-darker-mint focus:outline-none focus:ring px-9 py-5 rounded-full">
                        Lets go!
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home
