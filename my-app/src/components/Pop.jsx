import React from 'react';
import {Button, Menu, MenuItem} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Dehaze from '@mui/icons-material/Dehaze';

export default function Pop() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        startIcon={<Dehaze color="action"/>}
        endIcon={<AccountCircle color="action" />}
      >
        
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Sign Up</MenuItem>
        <MenuItem onClick={handleClose}>Login</MenuItem>
      </Menu>
    </div>
  );
}