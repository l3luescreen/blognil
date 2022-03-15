import NextHead from 'next/head'

interface Props {
    title?: string
}

const Head: React.FC<Props> = props => (
    <NextHead>
        <title>{props.title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
    </NextHead>
)

export default Head
