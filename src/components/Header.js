import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    return ( 
        <header className='header'>
            <h1>{props.title}</h1>
            {/* <Button bg="#0000ff" color='#fff' text="Add Prop" /> */}
            <Button bg={gradient.backgroundColor} color={gradient.color} text={gradient.text} />
        </header>
    )
}

const gradient = {
    backgroundColor: "#0000ff",
    color: '#ffffff',
    text: 'Prop Btn',
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