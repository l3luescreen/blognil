import { useEffect, useState } from 'react'
import { AxiosResultSingle, Author } from '../../Types/wordpress'

import dayjs from 'dayjs'

const axios = require('axios')

interface Props {
    className?: string
    title?: string
    author?: number
    content?: string
    date?: string
}

const Content: React.FC<Props> = props => {
    const [author, setAuthor] = useState<Author>()

    const payload = {
        headers: {
            Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION
        }
    }
    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/${props.author}`, payload)
            .then((authorResult: AxiosResultSingle) => {
                setAuthor(authorResult.data)
            })
            .catch((error: any) => console.error(error))
    }, [props.author])

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
        <div className="card flex flex-col justify-around p-24 text-normal-dark min-h-screen min-w-full duration-500">
            <div className="w-full text-center text-6xl mb-6">{props?.title}</div>
            <div className="w-full text-2xl mb-6 flex justify-between">
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
