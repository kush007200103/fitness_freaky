import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import HeroBannerImage from '../assets/images/banne.jpg';

const HeroBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}>
      <Stack direction="column" alignItems="center" spacing={3}>
        <Typography color="#FF2625" fontWeight="bold" fontSize="26px">
          Fitness Club
        </Typography>
        <Typography fontWeight={700} variant="h1" sx={{ fontSize: { lg: '44px', xs: '40px' } }}>
          Sweat, Smile, <br />
          And Repeat
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '22px', textAlign: 'center' }}>
          Check out the most effective exercises personalized to you
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Explore Exercises
        </Button>
      </Stack>
      <Box position="relative" mt={8}>
        <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', fontSize: '200px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}>
          Exercise
        </Typography>
        <img src={HeroBannerImage} alt="hero-banner" style={{ width: '100%', height: isMobile ? 'auto' : '100%', objectFit: isMobile ? 'cover' : 'contain' }} />
      </Box>
    </Box>
  );
};

export default HeroBanner;