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

export interface AxiosResult {
    data: ApiPost[]
}

export interface AxiosResultSingle {
    data: ApiPosts
}
