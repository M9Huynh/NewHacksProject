import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Marker } from '@react-google-maps/api'
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Navbar from './Navbar';


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
        <Marker onClick={this.onMarkerClick}
          name={'Kenyatta International Convention Centre'} position={{lat: 43.2562975, lng: -79.9201851}} 
        ></Marker>
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCJxuvt4wLLr1WISJVSQBeK93O9IvOnJmw'
})(Locate);