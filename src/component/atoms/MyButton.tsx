
interface ButtonProps{
    className?: string,
    borderColor?: string,
    type?: any,
    onClick?: (prop : any) => void,
    value?: any,
    text: string,
    disabled?: boolean,
    img?: string,
    [x:string] : any,
}

const MyButton = ({ className, borderColor,type, onClick, value, text, disabled , img}: ButtonProps) => {
    
    const disabledStyles = "opacity-50"; 

    return (
        <>
            <button
                type={type ? type : "submit"}
                onClick={onClick}
                value={value}
                disabled={disabled}
                className={`${disabled ? `${disabledStyles}` : ""} ${className ? className  : "bg-blue-500 hover:blue-600"} duration-150 hover:scale-x-105 px-5 py-2.5 border ${borderColor} rounded-xl text-white`}
            >
                {text}
            </button>

        </>
  )
}

export default MyButton