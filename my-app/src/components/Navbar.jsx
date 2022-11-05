import React from "react"
import './Navbar.css'
import { Button, Toolbar } from "@mui/material";

const Navbar = () => {
    return (
        <div className="navBar container">
        <div className="navLogo">
            Test
        </div>

        <div className="navLinks">
            <a href="/">Map Search</a>
            <a href="/">Rent</a>
            <a href="/">Advertise</a>
        </div>
        <div>
           <Toolbar>
                <Button sx={{marginLeft: 'auto', color:'white'}} variant="contained" color="warning">Login</Button>
                <Button sx={{marginLeft: '10px', color:'white'}} variant="contained" color="warning">Sign Up</Button>
           </Toolbar>
        </div>
        </div>

    )
}

export default Navbar
