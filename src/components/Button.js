//Button prop. Becomes a reusable button with three parameters, colour,text and on click. Whenever you call button you can edit -
// - the args as you want
// Functional component
const Button = ({ colour, text, onClick }) => {
    return (
        <button style={{backgroundColor: colour}} onClick={onClick} className="btn"> {text}</button>
    )
}

Button.defaultProps = {
    colour: "steel blue"
}

export default Button
