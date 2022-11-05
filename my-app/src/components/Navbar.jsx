import React from "react"
import {AppBar, Typography, Toolbar, Tabs, Tab, Button} from '@mui/material';

const Navbar = () => {
    return (
        <React.Fragment>
            <AppBar sx={{background: '#776fdb'}}>
                <Toolbar>
                    <Typography variant ='h6' component='div'>
                        HOUSING
                    </Typography>

                    <Tabs sx={{marginLeft: 'auto'}} textColor="inherit">
                        <Tab label="Map Search"/>
                        <Tab label="For Rent"/>
                        <Tab label="Advertise"/>
                    </Tabs>

                    <Button variant="contained">Login{""}</Button>
                    <Button sx={{marginLeft: '10px'}}variant="contained">Get Started{""}</Button>

                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Navbar
