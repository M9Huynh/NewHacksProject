import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Marker } from '@react-google-maps/api'
import Navbar from './Navbar';
import {featured} from './data/data';

export class Locate extends Component {
  render() {
    return (
        <div><Navbar></Navbar>
        <Map
        google={this.props.google}
        zoom={15}
        style={{width: '100%',
        height: '100%'}}
        initialCenter={
          {
            lat: 43.257944,
            lng: -79.915486
          }
        }
      >
        {featured.map((val, index) => {
          const { lat, lng } = val
          return(
            <Marker key={index} position={{lat: {lat}, lng: {lng}}}></Marker>
          )
        })}
        
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCJxuvt4wLLr1WISJVSQBeK93O9IvOnJmw'
})(Locate);
