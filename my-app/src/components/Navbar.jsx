import React from "react"
import './Navbar.css'
import { Button, Toolbar } from "@mui/material";
import {BrowserRouter as Link} from 'react-router-dom'

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
           <Toolbar>
                <Button sx={{marginLeft: 'auto', color:'white'}} variant="contained" color="error">Login</Button>
           </Toolbar>
        </div>
        </div>

    )
}

export default Navbar
