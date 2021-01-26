import PropTypes from 'prop-types';
import Button from './Button';
import button from './Button'


const Header = ({ title }) => {

    const onClick = () => {
        console.log("Clicked")
    }


    return (
        <header className="header">
            <h1 style={headingStyle}> {title}</h1>
            <Button colour="black" text="Add Task" onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
    title: PropTypes.string,
    //Throws a fault if the type isn't matched. Can all add $.isRequired
}
const headingStyle = {
    color: 'blue',
    //Can use the above instead of inline styling.
}

export default Header
