import TypeIt from 'typeit-react'

interface Props {
    className: string
    textMain: string
    textSec: string
}

const Greeting: React.FC<Props> = props => {
    return (
        <>
            <div className={props.className}>
                <TypeIt
                    getBeforeInit={(instance) => {
                        instance.type(props.textMain).pause(750).break().type(props.textSec)
                        return instance
                    }}
                />
            </div>
        </>
    )
}

export default Greeting
