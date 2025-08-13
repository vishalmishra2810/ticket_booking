'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Divider,
} from '@mui/material';
import { Movie as MovieIcon } from '@mui/icons-material';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey.900',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 4,
          }}
        >
          {/* Brand */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <MovieIcon sx={{ mr: 1, fontSize: 28 }} />
              <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                CineBook
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, color: 'grey.300' }}>
              Your premier destination for booking movie tickets online. 
              Experience cinema like never before with our easy-to-use platform.
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="/" color="inherit" underline="hover">
                Movies
              </Link>
              <Link href="/contact" color="inherit" underline="hover">
                Contact
              </Link>
            </Box>
          </Box>

          {/* Support */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Support
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="inherit" underline="hover">
                Help Center
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Terms of Service
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Privacy Policy
              </Link>
            </Box>
          </Box>

          {/* Contact Info */}
          <Box>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Contact Info
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, color: 'grey.300' }}>
              Email: support@cinebook.com
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, color: 'grey.300' }}>
              Phone: +1 (555) 123-4567
            </Typography>
            <Typography variant="body2" sx={{ color: 'grey.300' }}>
              24/7 Customer Support
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 4, borderColor: 'grey.700' }} />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', sm: 'center' },
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'grey.400' }}>
            © {currentYear} CineBook. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: 'grey.400' }}>
            Made with ❤️ for movie lovers
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
