import React, { useState } from 'react'
import Button from '../utilities/Button/Button'
import { getRandNumber } from '../../helpers/helpers'
import { Score } from 'react-vexflow'
import './ChordVisualizer.scss'

const ChordVisualizer = ({ chords }) => {
    const [chordList, setChordList] = useState(chords)
    const [currentChord, setCurrentChord] = useState(chordList[0])
    const randIndex = getRandNumber(0, chordList.length - 1)

    const nextChord = () => {
        const randChord = chordList[randIndex]
        setCurrentChord(randChord)
    }

    const discardChord = () => {
        const updatedChordList = chordList.filter(
            (c) => c._id !== currentChord._id
        )
        setChordList(updatedChordList)
        setCurrentChord(chordList[randIndex])
    }

    return (
        <main className="ChordVisualizer card">
            <div className="Chord">
                <h2 className="Chord__name">{currentChord.name}</h2>
                <ul className="Chord__notes">
                    {currentChord.notes.map((note) => (
                        <li key={note}>{note}</li>
                    ))}
                </ul>
            </div>
            <div className="ChordVisualizer__controls">
                <Button text={'Next'} handleClick={nextChord} />
                <Button text={'Discard'} handleClick={discardChord} />
            </div>

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
