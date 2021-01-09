import React from 'react'
import ChordVisualizer from '../../ChordVisualizer/ChordVisualizer'
import Header from '../../Header/Header'
import './Home.scss'

const Home = () => {
    return (
        <div className="Home vh100" id="home">
            <Header/>
            <section className="Home__content content">

            <ChordVisualizer/>
            </section>
        </div>
    )
}

export default Home