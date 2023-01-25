
interface ButtonProps{
    className?: string,
    type?: any,
    onClick?: () => void,
    value?: any,
    text: string,
    disabled?: boolean,
    [x:string] : any,
}

const MyButton = ({ className, type, onClick, value, text, disabled }: ButtonProps) => {
    
    const disabledStyles = "opacity-50"; 

    return (
        <>
            <button
                type={type ? type : "submit"}
                onClick={onClick}
                value={value}
                disabled={disabled}
                className={`${disabled ? `${disabledStyles}` : ""} ${className ? className  : "bg-blue-500 hover:blue-600"}  px-5 py-2.5 rounded-xl text-white`}
            >
                {text}
            </button>

        </>
  )
}

export default MyButton