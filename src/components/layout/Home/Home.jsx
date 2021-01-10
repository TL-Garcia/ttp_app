import React from 'react'
import ChordVisualizer from '../../ChordVisualizer/ChordVisualizer'
import Header from '../../Header/Header'
import './Home.scss'

import chords from '../../ChordVisualizer/mockChord.json'

const Home = () => {
    return (
        <div className="Home vh100" id="home">
            <Header/>
            <section className="Home__content content">

            <ChordVisualizer chords={chords}/>
            </section>
        </div>
    )
}

export default Home