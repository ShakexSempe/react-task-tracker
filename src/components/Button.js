import PropTypes from 'prop-types'

const Button = ({ bg, color, text, onClick }) => {

    return (
    <button onClick={onClick}
            style={{backgroundColor:bg , color:color, fontWeight:'400'}} 
            className='btn'>{text}
    </button>
    )
}

// BUTTON DEFAULT PROPS
Button.defaultProps = {
    color: 'yellow'
}

// BUTTON PROP-TYPES
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}



export default Button
