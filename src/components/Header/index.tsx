import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Link from 'next/link';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between',marginLeft:'50px',marginRight:'50px' }}>
        {/* Left section */}
        <div >
          {/* Replace the text with the logo */}
          <IconButton edge="start" color="inherit" aria-label="logo">
            <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f3af.svg" alt="Logo" style={{ width: 40, height: 40 }} />
          </IconButton>
          {/* Menu items */}
          
        </div>

        {/* Center section (empty to create space between left and right) */}
        <div>
        <Button color="inherit">
            <Link href="/emotions">Emotions</Link>
          </Button>
          <Button color="inherit">
            <Link href="/manifesto">Manifesto</Link>
          </Button>
          <Button color="inherit">
            <Link href="/self-awareness">Self-awareness test</Link>
          </Button>
          <Button color="inherit">
            <Link href="/work-with-us">Work With Us</Link>
          </Button>
        </div>

        {/* Right section */}
        <Button
          color="inherit"
          sx={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '50%', // Square or circle based on the state
            minWidth: '40px',
            minHeight: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'border-radius 0.3s ease', // Smooth transition
          }}
        >
          <Link href="/download-app" style={{ textDecoration: 'none', margin: '0' }}>
            Download app
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
