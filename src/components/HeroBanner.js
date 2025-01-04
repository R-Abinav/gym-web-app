import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImg from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box
        sx = {{
            mt: {lg: '212px', xs: '70px'},
            ml: {sm: '50px'}
        }}
        position = 'relative'
        p = '20px'
    >
        <Typography
            color = '#FF2625'
            fontWeight = '600'
            fontSize = '26px'
        >
            Fitness Cult
        </Typography>

        <Typography
            fontWeight = '700'
            sx = {{
                fontSize: {lg: '44px', xs: '40px'}
            }}
            mb="20px"
            mt="15px"
        >
            Sweat, Gain <br/> and Repeat
        </Typography>

        <Typography
            fontSize = '22px'
            lineHeight = '35px'
            mb = "30px"
        >
            Check out the most effective exercises
        </Typography>

        <Button
            onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#exercises');
                element.scrollIntoView({ behavior: 'smooth' });
            }}
            variant= "contained"
            color = "error"
            sx={{
                backgroundColor: '#ff2625',
                padding: '10px',
            }}   
        >
            Explore Exercises
        </Button>

        <Typography
            fontWeight = {600}
            fontSize= "200px"
            color = "#ff2625"
            sx={{
                opacity: 0.1,
                display: { lg: 'block', xs: 'none' },
                mt: '25px'
            }}
        >
            Exercise
        </Typography>  

        <img
                src= {HeroBannerImg}
                alt= "Hero Banner Image"
                className="hero-banner-img"
        />
    </Box>
  );
}

export default HeroBanner;