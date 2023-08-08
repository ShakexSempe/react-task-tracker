import PropTypes from 'prop-types'


const Header = (props) => {
    return ( 
        <header >
            <h1>Task Tracker <br /> {props.title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: "React Tutorial",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
