import { useEffect, useState } from 'react'
import type { ApiPosts } from '../Types/wordpress'
import PostImage from './PostImage'
import PostInfoCard from './PostInfoCard'

const axios = require('axios')

interface Props {
    className: string
}

interface AxiosResult {
    data: ApiPosts[]
}

const PostCard: React.FC<Props> = props => {
    const [contents, setContents] = useState<ApiPosts[]>([])

    const payload = {
        params: {
            per_page: 100
        },
        headers: {
            Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION
        }
    }

    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/posts`, payload)
            .then((posts: AxiosResult) => {
                setContents(posts.data)
            })
            .catch((error: any) => console.error(error))
    }, [])

    const createMarkup = (content: string) => {
        return { __html: content }
    }

    return (
        <>
            {contents.map((item: ApiPosts, id: number) => {
                return (
                    <div
                        key={id}
                        className="bg-white mb-14 card duration-500 flex flex-row overflow-hidden border hover:border hover:border-normal-dark"
                    >
                        <div className="relative">
                            <PostImage featureImageId={item.featured_media} />
                        </div>
                        <div className="text-normal-dark">
                            <PostInfoCard
                                title={item.title.rendered}
                                preview={item.excerpt.rendered}
                                author={item.author}
                                modified={item.modified}
                            />
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default PostCard
