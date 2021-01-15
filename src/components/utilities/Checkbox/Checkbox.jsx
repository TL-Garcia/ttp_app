import React from 'react'
import './Checkbox.scss'

export const Checkbox = ({ name, value }) => {
    return (
        <label className="Checkbox">
            <input
                type="checkbox"
                className="Checkbox__input"
                name={name}
                value={value}
            ></input>
            {value}
        </label>
    )
}
