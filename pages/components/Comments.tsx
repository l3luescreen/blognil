import { useEffect, useState } from 'react'
import { Comment } from '../../Types/wordpress'

import CommentCard from './CommentCard'

const axios = require('axios')

interface Props {
    postId?: number
}

interface AxiosResult {
    data: Comment[]
}

const Comments: React.FC<Props> = props => {
    const [comments, setComments] = useState<Comment[]>()
    const payload = {
        params: {
            per_page: 100,
            post: props.postId
        },
        headers: {
            Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION
        }
    }

    const refresh = () => {
        axios
            .get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/comments`, payload)
            .then((commentResult: AxiosResult) => {
                setComments(commentResult.data)
                console.log(commentResult)
            })
            .catch((error: any) => console.error(error))
    }
    useEffect(() => {
        axios
            .get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/comments`, payload)
            .then((commentResult: AxiosResult) => {
                setComments(commentResult.data)
            })
            .catch((error: any) => console.error(error))
    }, [props.postId])

    return (
        <div className="card flex flex-col justify-around p-12 text-normal-dark my-4">
            <span className="text-5xl text-center">{comments?.length} Comments</span>
            <div className="flex flex-col justify-around p-24 text-normal-dark">
                <CommentCard comments={comments} postId={props.postId} refresh={refresh} />
            </div>
        </div>
    )
}

export default Comments
