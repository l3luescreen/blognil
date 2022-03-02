import NextHead from 'next/head'

interface Props {
    title?: string
}

const Head: React.FC<Props> = props => (
    <NextHead>
        <title>{props.title}</title>
    </NextHead>
)

export default Head
