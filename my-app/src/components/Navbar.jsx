import React from "react"
import './Navbar.css'
import { Button, Toolbar } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';

const Navbar = () => {

    return (
        <div className="navBar container">
        <div className="navLogo">
            <a href="/">Test</a>
        </div>

        <div className="navLinks">
            <a href="/map">Map Search</a>
            <a href="/for-rent">Rent</a>
            <a href="/sell">Advertise</a>
        </div>

        <div>
           <Toolbar>
                <Button sx={{marginLeft: 'auto', color:'white'}} variant="contained" color="warning" endIcon={<AccountCircle />}>Login</Button>
           </Toolbar>
        </div>
        </div>

    )
}

export default Navbar
