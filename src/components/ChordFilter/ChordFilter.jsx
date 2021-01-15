import React from 'react'
import { Checkbox } from '../utilities/Checkbox/Checkbox'
import './ChordFilter.scss'

export const ChordFilter = () => {
    return (
        <div className="ChordFilter card">
            <h2 className="ChordFilter__title">Chords</h2>
            <form>
                <fieldset className="Input-group">
                <legend className="Input-group__legend">Quality</legend>
                    <Checkbox value="major" name="quality" />
                    <Checkbox value="minor" name="quality" />
                    <Checkbox value="augmented" name="quality" />
                    <Checkbox value="diminished" name="quality" />
                </fieldset>
            </form>
        </div>
    )
}
