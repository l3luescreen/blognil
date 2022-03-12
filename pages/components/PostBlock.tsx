import { useEffect, useState } from 'react'
import type { ApiPosts } from '../Types/wordpress'
import Post from '../components/Post'
import PostImage from '../components/PostImage'

const axios = require('axios')

interface Props {
    className: string
}

interface AxiosResult {
    data: ApiPosts[]
}

const Greeting: React.FC<Props> = props => {
    const [contents, setContents] = useState<ApiPosts[]>([])

    const payload = {
        params: {
            per_page: 100
        },
        headers: {
            Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION
        }
    }

    const getPosts = () => {
        axios
            .get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/posts`, payload)
            .then((posts: AxiosResult) => {
                setContents(posts.data)
            })
            .catch((error: any) => console.error(error))
    }

    useEffect(() => {
        getPosts()
    }, [])

    const createMarkup = (content: string) => {
        return { __html: content }
    }

    return (
        <>
            {contents.map((item: ApiPosts, id: number) => {
                return (
                    <div key={id} className='bg-white card mb-14'>
                        <PostImage featureImageId={item.featured_media} />
                        <div
                            dangerouslySetInnerHTML={createMarkup(item.title.rendered)}
                            className='text-normal-dark duration-500 text-xl p-7'
                        ></div>
                        <div>
                            
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Greeting
