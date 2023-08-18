import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    

    return ( 
        <header style={{borderBottom: "1px solid #0005"}} className='header'>
            <h1>{title}</h1>
            {/* BUTTON STYLES = PROPS */}
            <Button bg={showAdd ? 'red' : 'green'} color={gradient.color} 
                    text={showAdd ? 'Close' : 'Add'} 
                    onClick={onAdd} />
        </header>
    )
}



// BUTTON CSS STYLE OBJECT
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
