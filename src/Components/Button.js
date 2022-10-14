const Button = ({children,type,isdisabled}) => {
    return (
        <button className="btn" type={type} disabled = {isdisabled}>
            {children}
        </button>
    )
}

export default Button;