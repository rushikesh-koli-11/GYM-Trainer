import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/hero.svg'


const HeroBanner = () => (
  <>
  <Box sx={{ mt: { lg: '100px', xs: '70px' }, zIndex:'0', ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#fff" fontWeight="600" fontSize="26px">GYM Trainer</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="/exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '300px', textAlign: 'center', background: '#810000', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>
        Explore Exercises
      </a>
    </Stack>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>

  </>
);

export default HeroBanner;