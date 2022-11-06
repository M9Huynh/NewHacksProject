import React from "react"
import './Navbar.css'
import Pop from './Pop'
const Navbar = () => {

    return (
        <div className="navBar container">
        <div className="navLogo">
            <a href="/">Sweet Home</a>
        </div>

        <div className="navLinks">
            <a href="/map">Map Search</a>
            <a href="/for-rent">Rent</a>
            <a href="/sell">Advertise</a>
        </div>

        <div>
            <Pop/>
        </div>
        </div>

    )
}

export default Navbar
