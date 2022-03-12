import NextHead from 'next/head'

interface Props {
    title?: string
}

const Head: React.FC<Props> = props => (
    <NextHead>
        <title>{props.title}</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
            href='https://fonts.googleapis.com/css2?family=Hubballi&display=swap'
            rel='stylesheet'
        />
    </NextHead>
)

export default Head
