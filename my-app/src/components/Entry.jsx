import TextField from '@mui/material/TextField'
import { Grid, Box, Typography, Button } from '@mui/material'
import React from 'react'

class Entry extends React.Component {
  state = {

  }
  render() {
  return (
    <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 1,
    }}>
    <Grid container spacing={4} width='100ch'>
      <Grid item xs={12}>
        <Typography variant='h4'>New Posting</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField id="address-entry" label="Address" variant="standard" fullWidth required={true}/>
      </Grid>
      <Grid item xs={3}>
        <TextField id="total-room-entry" label="Total Bedrooms" variant="standard" fullWidth inputProps={{ inputMode: 'numeric', pattern: '[0-9]*'}} required={true}/>
      </Grid>
      <Grid item xs={3}>
        <TextField id="available-room-entry" label="Available Bedrooms" variant="standard" fullWidth inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} onChange={() => this.updateAvailableRooms} required={true}/>
      </Grid>
      <Grid item xs={3}>
        <TextField id="bathroom-entry" label="Bathrooms" variant="standard" fullWidth required={true}/>
      </Grid>
      <Grid item xs={3}>
        <TextField id="kitchen-entry" label="Kitchens" variant="standard" fullWidth required={true}/>
      </Grid>
      <Grid item xs={6}>
        <TextField id="parking-entry" label="Parking Availability" variant="standard" fullWidth required={true}/>
      </Grid>
      <Grid item xs={6}>
        <TextField id="contact-entry" label="Contact Information" variant="standard" fullWidth required={true}/>
      </Grid>
      <Grid item xs={12}>
        <TextField id="utility-entry" label="Utility Information" variant="standard" fullWidth required={true}/>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='h6' align='left'>Please Enter Information About Available Rooms Below.</Typography>  
      </Grid> 
      <Grid item xs={2}>
        <Button variant='outlined'>Add Bedrooms</Button>
      </Grid>
      <Grid item xs={12}>
        <Room />
      </Grid>
    </Grid>
    </div>
  )
}
}

class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: this.props.x
    };
  }
  render() {
    return(
      <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        border: 1,
      }}>
          <Grid item xs={4}>
            <Typography variant='h6' align='left'>Room {this.state.x}</Typography>
          </Grid>
          <Grid m={1} item xs={5}>
            <TextField id="room-entry" label="Square Footage" variant="standard" required={true}/>
          </Grid>
          <Grid m={1} item xs={5}>
            <TextField id="price-entry" label="Price (Monthly)" variant="standard" fullWidth required={true}/>
          </Grid>
          <Grid m={1} item xs={5}>
            <TextField id="floor-entry" label="Floor" variant="standard" fullWidth required={true}/>
          </Grid>
          <Grid m={1} item xs={10}>
            <TextField id="note-entry" label="Additional Information" variant="standard" fullWidth/>
          </Grid>
      </div>
    )
  }
}

export default Entry