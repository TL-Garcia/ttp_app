import React from 'react'
import './Header.scss'

const Header = () => {
    return (
        <header className="Header">
            <div className="content">
                <h1 className="Header__logo">Twelve Tone Practice</h1>
                <nav className="Navbar">
                    <ul className="Navbar__list">
                        <li className="Navbar__link">
                            <a href="#home">Home</a>
                        </li>
                        <li className="Navbar__link">
                            <a href="#about">About</a>
                        </li>
                        <li className="Navbar__link">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
