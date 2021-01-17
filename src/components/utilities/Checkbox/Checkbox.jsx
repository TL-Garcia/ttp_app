import React from 'react'
import './Checkbox.scss'

export const Checkbox = ({ handleChange, name, value }) => {
    return (
        <label className="Checkbox">
            <input
                type="checkbox"
                className="Checkbox__input"
                name={name}
                value={value}
                onChange={handleChange}
            ></input>
            {value}
        </label>
    )
}
