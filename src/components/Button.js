const Button = ({bg, color, text}) => {
    return <button style={{backgroundColor:bg , color:color, fontWeight:'400'}} className='btn'>{text}</button>
}

export default Button
