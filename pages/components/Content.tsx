import { useEffect, useState } from 'react'
import { Author, Category } from '../../Types/wordpress'

import dayjs from 'dayjs'

const axios = require('axios')

interface Props {
    className?: string
    title?: string
    author?: number
    content?: string
    date?: string
    categories?: number[]
}

interface AxiosResultSingle {
    data: Author
}

export interface AxiosResult {
    data: Category[]
}

const Content: React.FC<Props> = props => {
    const [author, setAuthor] = useState<Author>()
    const [categories, setCategories] = useState<Category[]>()
    const [filtered, setFiltered] = useState<Category[]>()

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/${props.author}`)
            .then((authorResult: AxiosResultSingle) => {
                setAuthor(authorResult.data)
            })
            .catch((error: any) => console.error(error))
        axios
            .get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/categories`)
            .then((categoriesResult: AxiosResult) => {
                setCategories(categoriesResult.data)
                filteredCategories()

            })
            .catch((error: any) => console.error(error))
    }, [props.author])

    const filteredCategories = () => {
        let tempFilter: Category[] = []
        props.categories?.forEach((element: number) => {
            let target: any = categories?.find((item: Category) => {
                return item.id === element
            })
            if (target) {
                tempFilter?.push(target)
            }
        })
        setFiltered(tempFilter)
    }

    const createMarkup = (content: string | undefined) => {
        if (content) {
            return { __html: content }
        }
    }

    const dateFormat = (date: string | undefined) => {
        if (date) {
            return dayjs(date).format('DD/MM/YYYY')
        }
    }

    return (
        <div className="card flex flex-col p-24 text-normal-dark min-w-full duration-500">
            <div className="w-full text-center text-6xl mb-6">{props?.title}</div>
            <div className="w-full text-2xl flex justify-center space-x-12">
                {filtered?.map((item: Category, id: number) => {
                    return (
                        <span key={id} className="bg-mint p-3 rounded-3xl">
                            {item.name}
                        </span>
                    )
                })}
            </div>
            <div className="w-full text-2xl mb-12 flex justify-between">
                <span>Author: {author?.name}</span>
                <span>On {dateFormat(props?.date)}</span>
            </div>
            <div
                className="flex flex-col space-y-8 text-2xl"
                dangerouslySetInnerHTML={createMarkup(props?.content)}
            />
        </div>
    )
}

export default Content
