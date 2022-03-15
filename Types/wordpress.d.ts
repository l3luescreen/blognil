export interface ApiPost {
    id: number
    slug: string
    featured_media: number
    title: {
        rendered: string
    }
    excerpt: {
        rendered: string
    }
    content: {
        rendered: string
    }
    categories: number[]
    author: number
    modified: string
}

export interface Author {
    id: number
    name: string
    avatar_urls: {
        24: string
        48: string
        96: string
    }
    slug: string
}

export interface Category {
    id: number
    count: number
    description: string
    name: string
    slug: string
}

export interface Comment {
    id: number
    post: number
    author: number
    author_name: string
    content: {
        rendered: string
    }
    author_avatar_urls: {
        24: string
        48: string
        96: string
    }
    date: string
}
