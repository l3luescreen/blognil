import Image from 'next/image'
import { useEffect, useState } from 'react'
const axios = require('axios')

interface ImageProps {
    className?: string
    featureImageId?: number
}

interface Image {
    data: {
        source_url: string
        alt_text: string
    }
}

const PostImage: React.FC<ImageProps> = ({ featureImageId }) => {
    const [featureImage, setFeatureImage] = useState('')
    const [imageAlt, setImageAlt] = useState('')

    useEffect(() => {
        const payload = {
            headers: {
                Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION
            }
        }
        if (featureImageId) {
            axios
                .get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/media/${featureImageId}`, payload)
                .then((res: Image) => {
                    setFeatureImage(res.data.source_url)
                    setImageAlt(res.data.alt_text)
                })
                .catch((error: any) => console.error(error))
        }
    }, [featureImageId])

    return (
        <>
            {featureImage && (
                <div className='relative h-60'>
                    <Image
                        src={featureImage}
                        alt={imageAlt}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='50% 50%'
                    />
                </div>
            )}
        </>
    )
}

export default PostImage
