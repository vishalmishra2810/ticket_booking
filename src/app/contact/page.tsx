'use client';

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  AccessTime,
  ArrowBack,
} from '@mui/icons-material';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => router.push('/')}
          sx={{ mb: 2 }}
        >
          Back to Home
        </Button>

        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, textAlign: 'center' }}>
          Contact Us
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', textAlign: 'center' }}>
          Get in touch with our customer support team
        </Typography>
      </Box>

      {/* Contact Information */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 3,
          mb: 4,
        }}
      >
        <Paper elevation={3} sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Email sx={{ mr: 2, color: 'primary.main', fontSize: 28 }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Email Support
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ mb: 1 }}>
            support@cinebook.com
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We typically respond within 24 hours
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Phone sx={{ mr: 2, color: 'primary.main', fontSize: 28 }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Phone Support
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ mb: 1 }}>
            +1 (555) 123-4567
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Available 24/7 for urgent issues
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <LocationOn sx={{ mr: 2, color: 'primary.main', fontSize: 28 }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Office Address
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ mb: 1 }}>
            123 Cinema Street<br />
            Movie District, MD 12345<br />
            United States
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Visit us during business hours
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <AccessTime sx={{ mr: 2, color: 'primary.main', fontSize: 28 }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Business Hours
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Monday - Friday: 9:00 AM - 6:00 PM<br />
            Saturday: 10:00 AM - 4:00 PM<br />
            Sunday: Closed
          </Typography>
          <Typography variant="body2" color="text.secondary">
            All times in local timezone
          </Typography>
        </Paper>
      </Box>

      {/* FAQ Section */}
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
          Frequently Asked Questions
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            How can I cancel my booking?
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            You can cancel your booking up to 2 hours before the show time by contacting our customer support.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Can I change my selected seats?
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Seat changes are subject to availability and can be made up to 1 hour before the show time.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            What payment methods do you accept?
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            We accept all major credit cards, debit cards, and digital payment methods.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Is there a booking fee?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Yes, we charge a small convenience fee of 2% on the total ticket price for online bookings.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
