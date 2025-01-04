import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';


const NavBar = () => {
  return (
    <Stack
      direction = "row"
      justifyContent = "space-around"
      alignItems = "flex-end"
      sx = {{ gap: {
        sm: '122px',
        xs: '40px'
      }, mt: {
        sm: '32px',
        xs: '20px'
      }, 
      justifyContent: 'none',
      px :{
        lg: '40px',
        xs: '10px'
      }
    }}
      
    >
      <Link to="/">
        <img src={Logo} alt="Gym Logo" style={{width: '48px', height: '48px', margin: '0 20px'}}/>
      </Link>
      <Stack
        direction = "row"
        gap = "50px"
        fontSize = "24px"
        alignItems = "flex-end"
      >
        <Link to="/" style={{textDecoration: 'None', color: '#3A1212', borderBottom: '2.3px solid #FF2625'}}>
          Home
        </Link>
        <a
          href="#exercises"
          style={{textDecoration: 'None', color: "#3A1212", cursor: 'pointer'}}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  )
}

export default NavBar;

