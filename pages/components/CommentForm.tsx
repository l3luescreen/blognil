import { FormEventHandler, useEffect, useState } from 'react'

const axios = require('axios')

interface Props {
    postId?: number
}

const CommentForm: React.FC<Props> = props => {
    const [name, setName] = useState<string>('')
    const [comment, setComment] = useState<string>('')
    const [formAllowed, setFormallowed] = useState(false)
    const [errorMsg, setErrorMsg] = useState<string>('')

    const payload = {
        params: {
            post: props.postId,
            author_name: name,
            content: comment
        },
        headers: {
            Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION
        }
    }

    const onSubmit = async () => {
        console.log(payload)
        try {
            await axios.post(
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}/comments`,
                {
                    post: props.postId,
                    author_name: name,
                    content: comment
                },
                {
                    headers: {
                        Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION
                    }
                }
            )
            setComment('')
            setFormallowed(false)
        } catch (error: any) {
            console.log(error)
            setErrorMsg('Something went wrong!')
        }
    }

    useEffect(() => {
        if (name && comment) {
            setFormallowed(true)
        } else {
            setFormallowed(false)
        }
    }, [name, comment])

    const handleNameChange: FormEventHandler<HTMLInputElement> = event => {
        const { value } = event.currentTarget
        setName(value)
    }

    const handleCommenthange: FormEventHandler<HTMLTextAreaElement> = event => {
        const { value } = event.currentTarget
        setComment(value)
    }

    return (
        <div className="card flex flex-col justify-around p-12 text-normal-dark my-4">
            <span className="text-3xl">Leave a comment</span>
            {errorMsg && <span className="text-red-500">{errorMsg}</span>}
            <label className="text-2xl" htmlFor="name">
                Name
            </label>
            <input
                className="border border-mint rounded-lg p-2 text-lg"
                type="text"
                autoComplete="name"
                required
                value={name}
                onInput={handleNameChange}
            />

            <label className="text-2xl" htmlFor="comment">
                Comment
            </label>
            <textarea
                className="border border-mint rounded-lg p-2 text-lg"
                name="comment"
                id="comment"
                cols={30}
                rows={5}
                autoComplete="comment"
                required
                value={comment}
                onInput={handleCommenthange}
            ></textarea>
            <button
                className="border border-mint rounded-lg text-2xl my-4 disabled:border-black disabled:cursor-not-allowed duration-500"
                type="submit"
                value="Submit"
                onClick={onSubmit}
                disabled={!formAllowed}
            >
                Submit
            </button>
        </div>
    )
}

export default CommentForm
