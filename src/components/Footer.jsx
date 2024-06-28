import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => (
  <Box m="80px 0" >
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" >Made by <a href="https://github.com/rushikesh-koli-11" style={{textDecoration: 'none', color: 'yellow'}} target="_blank">Rushikesh Koli</a> </Typography>
  </Box>
);

export default Footer;