import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import type { ApiPost } from '../Types/wordpress'
import Head from './components/Head'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Comments from './components/Comments'

const axios = require('axios')
interface AxiosResult {
    data: ApiPost[]
}

const Post: NextPage = () => {
    const router = useRouter()
    const [postInfo, setPostInfo] = useState<ApiPost>()

    useEffect(() => {
        const slug = router.query.slug
        const payload = {
            params: {
                slug
            },
            headers: {
                Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION
            }
        }
        if (router.query.slug) {
            axios
                .get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/posts`, payload)
                .then((post: AxiosResult) => {
                    setPostInfo(post.data[0])
                })
                .catch((error: any) => console.error(error))
        }
    }, [router.query.slug])

    return (
        <>
            <Head title="Blognil" />
            <Navbar />
            <div className="container mx-auto p-20 my-4">
                <Content
                    title={postInfo?.title.rendered}
                    author={postInfo?.author}
                    content={postInfo?.content.rendered}
                    date={postInfo?.modified}
                    categories={postInfo?.categories}
                />
                <Comments postId={postInfo?.id} />
            </div>
        </>
    )
}

export default Post
