
//region data types
type ButtonProps = {
    text: string;
    onClick?: () => void;
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    type: 'primary' | 'secondary'
}
//endregion

function Button({ text, onClick, rightIcon, leftIcon, type }: ButtonProps) {
    return (
        <button onClick={onClick} className={`flex items-center gap-1  text-white px-2 py-2 rounded-md ${type === 'primary' ? 'bg-primary' : 'text-link'}`}>
            {leftIcon}
            {text}
            {rightIcon}
        </button>

    )
}

export default Button;
