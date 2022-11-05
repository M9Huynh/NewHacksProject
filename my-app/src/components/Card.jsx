import React from 'react'
import Box from '@mui/material/Box'
import Navbar from './Navbar'

export const Card = () => {
  return (
    <div>
        <Navbar/>
        <Box sx={{m: 20, border:1}}>
            <h1>test</h1>
        </Box>
    </div>
    
  )
}

export default Card