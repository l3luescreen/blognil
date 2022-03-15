import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

import type { Category } from '../Types/wordpress'
import Head from './components/Head'
import Navbar from './components/Navbar'
import PostCard from './components/PostCard'

const axios = require('axios')

interface CategoryResult {
    data: Category[]
    selected: string
}

const Category: NextPage = () => {
    const [categories, setCategories] = useState<Category[]>()
    const [selected, setSelected] = useState<number>()

    useEffect(() => {
        const payload = {
            headers: {
                Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION
            }
        }
        axios
            .get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/categories`, payload)
            .then((result: CategoryResult) => {
                setCategories(result.data)
            })
            .catch((error: any) => console.error(error))
    }, [])

    return (
        <>
            <Head title="Categories" />
            <Navbar />
            <div className="container mx-auto">
                <div className="grid grid-cols-6 gap-8">
                    {categories?.map((item: Category, id: number) => {
                        return (
                            <div
                                key={id}
                                className={
                                    'card col-span-1 my-12 p-4 border hover:border hover:border-mint cursor-pointer' +
                                    (item.id === selected ? 'border border-mint' : '')
                                }
                                onClick={() => {
                                    setSelected(item.id)
                                }}
                            >
                                <div className="text-2xl">
                                    <span>{item.name}</span>
                                </div>
                                <div className="text-lg">
                                    {item.description ? item.description : 'none'}
                                </div>
                                <div className="text-lg">
                                    <span>Posts:{item.count}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="min-w-full min-h-screen">
                    {selected && <PostCard searchOption="category" search={selected} />}
                </div>
            </div>
        </>
    )
}

export default Category
