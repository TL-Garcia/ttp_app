import React from 'react'
import chord from './mockChord.json'
import { Score } from 'react-vexflow'
import './ChordVisualizer.scss'
import Button from '../utilities/Button/Button'

const ChordVisualizer = () => {
    const handleClick = () => {
        console.log('clickidy click')
    }

    return (
        <main className="ChordVisualizer card">
            <div className="Chord">
                <h2 className="Chord__name">{chord.name}</h2>
                <ul className="Chord__notes">
                    {chord.notes.map((note) => (
                        <li>{note}</li>
                    ))}
                </ul>
            </div>
            <Button text={"Next"} handleClick={handleClick}/>

{/*             <Score
                className="score"
                staves={[
                    ['g4', 'd4', 'e4', 'd4'],
                    ['a4', 'd4', 'e4', 'd4'],
                    ['a4', 'a4', 'b4', 'a4'],
                    ['d4', 'e4', ['g3', 2]],
                ]}
            /> */}
        </main>
    )
}

export default ChordVisualizer
