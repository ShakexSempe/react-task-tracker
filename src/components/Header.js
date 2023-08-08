import PropTypes from 'prop-types'


const Header = (props) => {
    return ( 
        <header className='header'>
            <h1>{props.title}</h1>
            <button className='btn'>Add</button>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS IN JS
// const headingStyle = {
//     backgroundColor: 'black',
//     color: 'skyblue',
//     padding: '1rem',
// }

export default Header
