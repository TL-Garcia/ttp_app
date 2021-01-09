import React from 'react'
import './Button.scss'

const Button = ({text, handleClick}) => {
    return <button onClick={handleClick} className="Button">{text}</button>
}

export default Button