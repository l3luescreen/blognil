import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { Comment } from '../../Types/wordpress'

import CommentForm from './CommentForm'

import dayjs from 'dayjs'

const axios = require('axios')

interface Props {
    postId?: number
    comments?: Comment[]
}

const CommentCard: React.FC<Props> = props => {
    const [comments, setComments] = useState<Comment[]>()
    useEffect(() => {
        setComments(props.comments)
    }, [props.comments])

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
        <>
            <CommentForm postId={props.postId} />
            {comments?.map((item: Comment, id: number) => {
                return (
                    <div
                        key={id}
                        className="card text-normal-dark my-12 p-7 flex flex-col min-w-full"
                    >
                        <div>
                            <div className="text-3xl flex items-baseline">
                                <div className="relative h-12 w-12 overflow-hidden rounded-full mx-4">
                                    <Image
                                        className="relative"
                                        src={item.author_avatar_urls[96]}
                                        alt={item.author_name}
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition="50% 50%"
                                    />
                                </div>
                                <span className="relative my-auto">{item.author_name}</span>
                            </div>
                            <div
                                className="text-xl p-4"
                                dangerouslySetInnerHTML={createMarkup(item.content.rendered)}
                            />
                        </div>
                        <div>
                            <hr />
                            <div className="text-m my-2">{dateFormat(item.date)}</div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default CommentCard
