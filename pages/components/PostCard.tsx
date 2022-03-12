import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import dayjs from 'dayjs'
import type { ApiPost, AxiosResult } from '../Types/wordpress'
import PostImage from './PostImage'
import PostInfoCard from './PostInfoCard'

const axios = require('axios')

interface Props {
    className: string
}

const PostCard: React.FC<Props> = props => {
    const router = useRouter()

    const [contents, setContents] = useState<ApiPost[]>([])

    const payload = {
        params: {
            per_page: 100
        },
        headers: {
            Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION
        }
    }

    const dateFormat = (date: string | undefined) => {
        if (date) {
            return dayjs(date).format('DD/MM/YYYY')
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

    return (
        <>
            {contents.map((item: ApiPost, id: number) => {
                return (
                    <Link key={id} href={`/${item.slug}`} passHref>
                        <div className="cursor-pointer bg-white mb-14 card duration-500 flex flex-row overflow-hidden border hover:border hover:border-mint">
                            <div className="relative">
                                <PostImage featureImageId={item.featured_media} />
                            </div>
                            <div className="text-normal-dark">
                                <PostInfoCard
                                    title={item.title.rendered}
                                    preview={item.excerpt.rendered}
                                    author={item.author}
                                    modified={dateFormat(item?.modified)}
                                />
                            </div>
                        </div>
                    </Link>
                )
            })}
        </>
    )
}

export default PostCard
