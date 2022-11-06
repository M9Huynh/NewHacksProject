import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Marker } from '@react-google-maps/api'
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
        <Marker position={{lat: 43.2562975, lng: -79.9201851}} 
        ></Marker>
        <Marker position={{lat: 43.2570352, lng: -79.9197441}} 
        ></Marker>
        <Marker position={{lat: 43.2584612, lng: -79.9154525}} 
        ></Marker>
      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCJxuvt4wLLr1WISJVSQBeK93O9IvOnJmw'
})(Locate);