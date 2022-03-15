import { useEffect, useState } from 'react'
import type { Author } from '../../Types/wordpress'

const axios = require('axios')

interface Props {
    className?: string
    title?: string
    preview?: string
    author?: number
    modified?: string
}

interface AxiosResult {
    data: Author
}

const PostInfoCard: React.FC<Props> = props => {
    const [author, setAuthor] = useState<Author | void>()

    const payload = {
        headers: {
            Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION
        }
    }
    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/${props.author}`, payload)
            .then((author: AxiosResult) => {
                setAuthor(author.data)

            })
            .catch((error: any) => console.error(error))

        return () => {
            setAuthor()
        }
    }, [])

    const createMarkup = (content: string | undefined) => {
        if (content) {
            return { __html: content }
        }
    }

    return (
        <>
            <div className="text-normal-dark duration-500 p-7 flex flex-col justify-between h-64 min-w-full">
                <div>
                    <div className="text-3xl" dangerouslySetInnerHTML={createMarkup(props.title)} />
                    <div
                        className="text-xl"
                        dangerouslySetInnerHTML={createMarkup(props.preview)}
                    />
                </div>
                <div>
                    <div className="text-lg">Author: {author?.name}</div>
                    <div className="text-lg">On: {props.modified}</div>
                </div>
            </div>
        </>
    )
}

export default PostInfoCard
