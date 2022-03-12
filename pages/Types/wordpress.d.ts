export interface ApiPosts {
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
