import React from "react"
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navBar container">
        <div className="navLogo">
            Test
        </div>

        <div className="navLinks">
            <a href="/">one</a>
            <a href="/">two</a>
            <a href="/">three</a>
            <a href="/">four</a>
        </div>
        </div>
    )
}

export default Navbar
