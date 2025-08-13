'use client';

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Divider,
  Alert,
} from '@mui/material';
import {
  ArrowBack,
  EventSeat,
  LocationOn,
  AccessTime,
} from '@mui/icons-material';
import { useRouter, useParams } from 'next/navigation';
import { useBooking } from '@/context/BookingContext';
import { seatLayouts } from '@/data/mockData';
import SeatSelector from '@/components/SeatSelector';

export default function SeatSelectionPage() {
  const router = useRouter();
  const params = useParams();
  const {
    selectedMovie,
    selectedShowtime,
    selectedSeats,
    addSeat,
    removeSeat,
  } = useBooking();

  const movieId = params.id as string;

  // Redirect if no movie or showtime is selected
  React.useEffect(() => {
    if (!selectedMovie || !selectedShowtime) {
      router.push(`/movie/${movieId}`);
    }
  }, [selectedMovie, selectedShowtime, movieId, router]);

  if (!selectedMovie || !selectedShowtime) {
    return null;
  }

  const seatLayout = seatLayouts[selectedShowtime.theater];

  if (!seatLayout) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert severity="error">
          Seat layout not available for this theater. Please try again later.
        </Alert>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => router.push(`/movie/${movieId}`)}
          sx={{ mt: 2 }}
        >
          Back to Movie Details
        </Button>
      </Container>
    );
  }

  const handleProceedToBooking = () => {
    if (selectedSeats.length > 0) {
      router.push(`/movie/${movieId}/booking`);
    }
  };

  const totalAmount = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => router.push(`/movie/${movieId}`)}
          sx={{ mb: 2 }}
        >
          Back to Movie Details
        </Button>

        <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
          Select Your Seats
        </Typography>

        {/* Movie & Showtime Info */}
        <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 2,
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {selectedMovie.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <AccessTime sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
                <Typography variant="body2" color="text.secondary">
                  {selectedShowtime.time} • {selectedShowtime.date}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
                <Typography variant="body2" color="text.secondary">
                  {selectedShowtime.theater}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Base Price: ₹{selectedShowtime.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Available Seats: {selectedShowtime.availableSeats}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>

      {/* Seat Selection */}
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <EventSeat sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Choose Your Seats
          </Typography>
        </Box>

        <SeatSelector
          seatLayout={seatLayout}
          selectedSeats={selectedSeats}
          onSeatSelect={addSeat}
          onSeatDeselect={removeSeat}
          maxSeats={10}
        />
      </Paper>

      {/* Booking Summary */}
      {selectedSeats.length > 0 && (
        <Paper elevation={3} sx={{ p: 3, mb: 3, bgcolor: 'primary.50' }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            Booking Summary
          </Typography>
          
          <Box sx={{ mb: 2 }}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Movie:</strong> {selectedMovie.title}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Showtime:</strong> {selectedShowtime.time}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Theater:</strong> {selectedShowtime.theater}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Selected Seats:</strong> {selectedSeats.map(seat => seat.id).join(', ')}
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Total Amount: ₹{totalAmount}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleProceedToBooking}
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 600,
              }}
            >
              Proceed to Booking
            </Button>
          </Box>
        </Paper>
      )}

      {/* Instructions */}
      {selectedSeats.length === 0 && (
        <Alert severity="info" sx={{ mt: 3 }}>
          Please select at least one seat to proceed with the booking.
        </Alert>
      )}
    </Container>
  );
}
