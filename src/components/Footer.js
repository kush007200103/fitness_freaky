import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import FitnessFreaksLogo from '../assets/images/fitness_freaky.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <Box bgcolor="#f5f5f5" color="#333" py={3}>
    <Grid container justifyContent="center">
      <Grid item xs={10} md={4}>
        <Box textAlign="center" mb={1}>
          <img src={FitnessFreaksLogo} alt="Fitness Freaks" style={{ width: '200px' }} />
          <Typography variant="body2" color="inherit">
            Empowering Fitness Enthusiasts
          </Typography>
        </Box>
        <Typography variant="body2" align="center" color="inherit" mb={1}>
          &copy; 2023 Fitness Freaks. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center" color="inherit">
          Terms of Service | Privacy Policy
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box textAlign="center" mb={3}>
          <Typography variant="h6" color="inherit" mb={2}>
            Contact Us
          </Typography>
          <Typography variant="body2" color="inherit">
            Email: <Link href="mailto:info@fitnessfreaks.com" underline="hover">info@fitnessfreaks.com</Link>
            <br />
            Phone: +1 123-456-7890
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box textAlign="center" mb={3}>
          <Typography variant="h6" color="inherit" mb={2}>
            Follow Us
          </Typography>
          <Box display="flex" justifyContent="center">
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              <FaFacebook />
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              <FaTwitter />
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              <FaInstagram />
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default Footer;
