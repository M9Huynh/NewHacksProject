import React from 'react'
import {featured} from "../data/Data"

const FeaturedCard = () => {
    return (
      <>
        <div className='content grid3 mtop'>
          {featured.map((val, index) => {
            const {cover, location, name, price, type} = val
            return(
                <div className= 'box shadow' key = {index}>
                    <div className= 'img'>
                        <img src={cover} alt=''/>
                    </div>

                    <div className= 'text'>
                        <h4>{name}</h4>
                        <p>
                            <i className='fa-map-marker'></i> {location}
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