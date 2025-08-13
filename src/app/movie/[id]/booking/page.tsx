'use client';

import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Divider,
  Alert,
  Dialog,
  DialogContent,
  DialogActions,
  Chip,
} from '@mui/material';
import {
  ArrowBack,
  CheckCircle,
  Movie,
  AccessTime,
  LocationOn,
  EventSeat,
  Receipt,
} from '@mui/icons-material';
import { useRouter, useParams } from 'next/navigation';
import { useBooking } from '@/context/BookingContext';

export default function BookingPage() {
  const router = useRouter();
  const params = useParams();
  const {
    selectedMovie,
    selectedShowtime,
    selectedSeats,
    clearBooking,
  } = useBooking();

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const movieId = params.id as string;

  // Redirect if no movie, showtime, or seats are selected
  React.useEffect(() => {
    if (!selectedMovie || !selectedShowtime || selectedSeats.length === 0) {
      router.push(`/movie/${movieId}`);
    }
  }, [selectedMovie, selectedShowtime, selectedSeats, movieId, router]);

  if (!selectedMovie || !selectedShowtime || selectedSeats.length === 0) {
    return null;
  }

  const totalAmount = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
  const convenienceFee = Math.round(totalAmount * 0.02); // 2% convenience fee
  const finalAmount = totalAmount + convenienceFee;

  const handleConfirmBooking = () => {
    // Generate a mock booking ID
    const newBookingId = `BK${Date.now().toString().slice(-8)}`;
    setBookingId(newBookingId);
    setShowConfirmation(true);
  };

  const handleBookingComplete = () => {
    setShowConfirmation(false);
    clearBooking();
    router.push('/');
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => router.push(`/movie/${movieId}/seats`)}
          sx={{ mb: 2 }}
        >
          Back to Seat Selection
        </Button>

        <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
          Confirm Your Booking
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Review your booking details before confirming
        </Typography>
      </Box>

      {/* Booking Details */}
      <Paper elevation={3} sx={{ p: 4, mb: 3 }}>
        {/* Movie Information */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Movie sx={{ mr: 2, color: 'primary.main', fontSize: 28 }} />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {selectedMovie.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {selectedMovie.genre.join(' • ')} • {selectedMovie.duration}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Showtime & Theater */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <AccessTime sx={{ mr: 1, color: 'text.secondary' }} />
            <Typography variant="body1">
              <strong>Date & Time:</strong> {selectedShowtime.date} at {selectedShowtime.time}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LocationOn sx={{ mr: 1, color: 'text.secondary' }} />
            <Typography variant="body1">
              <strong>Theater:</strong> {selectedShowtime.theater}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Selected Seats */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <EventSeat sx={{ mr: 1, color: 'text.secondary' }} />
            <Typography variant="body1">
              <strong>Selected Seats ({selectedSeats.length}):</strong>
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            {selectedSeats.map((seat) => (
              <Chip
                key={seat.id}
                label={`${seat.id} (${seat.type.charAt(0).toUpperCase() + seat.type.slice(1)})`}
                color="primary"
                variant="outlined"
              />
            ))}
          </Box>
          <Box sx={{ mt: 2 }}>
            {selectedSeats.map((seat) => (
              <Box
                key={seat.id}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  py: 0.5,
                }}
              >
                <Typography variant="body2">
                  Seat {seat.id} ({seat.type.charAt(0).toUpperCase() + seat.type.slice(1)})
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  ₹{seat.price}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Price Breakdown */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            Price Breakdown
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body1">Ticket Price ({selectedSeats.length} seats)</Typography>
            <Typography variant="body1">₹{totalAmount}</Typography>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Convenience Fee (2%)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ₹{convenienceFee}
            </Typography>
          </Box>

          <Divider sx={{ mb: 2 }} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Total Amount
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
              ₹{finalAmount}
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Confirm Button */}
      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleConfirmBooking}
          startIcon={<Receipt />}
          sx={{
            px: 6,
            py: 2,
            fontSize: '1.1rem',
            fontWeight: 600,
          }}
        >
          Confirm Booking & Pay ₹{finalAmount}
        </Button>
      </Box>

      {/* Terms */}
      <Alert severity="info" sx={{ mt: 3 }}>
        By confirming this booking, you agree to our terms and conditions. 
        Please arrive at the theater at least 15 minutes before the show time.
      </Alert>

      {/* Success Dialog */}
      <Dialog
        open={showConfirmation}
        onClose={handleBookingComplete}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent sx={{ textAlign: 'center', py: 4 }}>
          <CheckCircle sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
            Booking Confirmed!
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Your booking has been successfully confirmed.
          </Typography>
          
          <Paper elevation={2} sx={{ p: 3, bgcolor: 'grey.50', mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Booking ID: {bookingId}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Please save this booking ID for your records
            </Typography>
          </Paper>

          <Typography variant="body2" color="text.secondary">
            A confirmation email has been sent to your registered email address.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
          <Button
            variant="contained"
            onClick={handleBookingComplete}
            size="large"
            sx={{ px: 4 }}
          >
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
