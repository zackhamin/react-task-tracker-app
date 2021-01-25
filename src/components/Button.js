

const Button = ({ colour, text, onClick }) => {
    return (
        <button style={{backgroundColor: colour}} onClick={onClick} className="btn"> {text}</button>
    )
}

Button.defaultProps = {
    colour: "steel blue"
}

export default Button
