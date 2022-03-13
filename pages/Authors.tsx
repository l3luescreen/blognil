import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'

import type { Author } from '../Types/wordpress'
import Head from './components/Head'
import Navbar from './components/Navbar'
import PostCard from './components/PostCard'

const axios = require('axios')

interface AuthorResult {
    data: Author[]
}

const Author: NextPage = () => {
    const router = useRouter()
    const [authors, setAuthors] = useState<Author[]>()
    const [selected, setSelected] = useState<number>()

    useEffect(() => {
        const payload = {
            headers: {
                Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION
            }
        }
        axios
            .get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/users`, payload)
            .then((result: AuthorResult) => {
                setAuthors(result.data)
            })
            .catch((error: any) => console.error(error))
    }, [])

    return (
        <>
            <Head title="Authors" />
            <Navbar />
            <div className="container mx-auto">
                <div className="flex">
                    {authors?.map((item: Author, id: number) => {
                        return (
                            <div
                                key={id}
                                className={
                                    'card m-12 p-4 border hover:border hover:border-mint cursor-pointer' +
                                    (item.id === selected ? 'border border-mint' : '')
                                }
                                onClick={() => {
                                    setSelected(item.id)
                                }}
                            >
                                <div className="relative h-32 w-32 overflow-hidden">
                                    <Image
                                        src={item.avatar_urls[96]}
                                        alt={item.slug}
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition="50% 50%"
                                    />
                                </div>
                                <div className="text-2xl text-center">
                                    <span>{item.name}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="min-w-full min-h-screen">
                    {selected && <PostCard searchOption="author" search={selected} />}
                </div>
            </div>
        </>
    )
}

export default Author
