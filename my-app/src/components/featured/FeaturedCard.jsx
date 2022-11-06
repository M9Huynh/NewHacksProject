import React from 'react'
import Navbar from '../Navbar'
import {featured} from "../data/data"
import { Link } from 'react-router-dom';

const FeaturedCard = () => {
    return (
      <>
        <Navbar/>
        
        <div className="grid3 mtop">
          {featured.map((val, index) => {
            const { cover, location, address, price, type } = val
            return(
                <div className="box shadow" key = {index}>
                  
                    <div className= "img">
                        <img src={cover} alt=''/>
                    </div>

                    <div className= "text">
                        <p>
                          <b>{location}</b><br></br>
                          {price}/month
                        </p>
                    </div>
                    

                </div>
                
            )     
          }
          )}
        </div>
      </>
    )
  }

export default FeaturedCard