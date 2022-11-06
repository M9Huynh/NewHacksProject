import React from 'react'
import Navbar from './Navbar'
import Box from '@mui/material/Box'
import { color } from '@mui/system'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='home'>    
      <Box sx={{marginLeft: 'auto', border:1}}color= 'red'>
          <h1>test</h1>
      </Box>
      </div>
      
    </div>
     
    
  )
}

export default Home