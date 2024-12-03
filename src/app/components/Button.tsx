interface Props {
    onClick?: () => void,
    text: string,
    classes?: string,
}

const Button = ({onClick, text, classes}: Props) => {
    return (
        <button
            onClick={onClick}
            className={`rounded-lg border py-2.5 px-3.5 text-sm font-semibold text-center ${classes}`}
        >
            {text}
        </button>
    )
}
export default Button
