'use client';

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Chip,
  Rating,
  Divider,
} from '@mui/material';
import {
  AccessTime,
  Language,
  ArrowBack,
  CalendarToday,
  LocationOn,
} from '@mui/icons-material';
import { useRouter, useParams } from 'next/navigation';
import { useBooking } from '@/context/BookingContext';
import { mockMovies } from '@/data/mockData';
import { Showtime } from '@/types';

export default function MovieDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const { selectedMovie, setSelectedMovie, setSelectedShowtime } = useBooking();

  const movieId = params.id as string;
  const movie = selectedMovie || mockMovies.find(m => m.id === movieId);

  // Set the selected movie if it's not already set
  React.useEffect(() => {
    if (!selectedMovie && movie) {
      setSelectedMovie(movie);
    }
  }, [movie, selectedMovie, setSelectedMovie]);

  if (!movie) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4">Movie not found</Typography>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => router.push('/')}
          sx={{ mt: 2 }}
        >
          Back to Home
        </Button>
      </Container>
    );
  }

  const handleShowtimeSelect = (showtime: Showtime) => {
    setSelectedShowtime(showtime);
    router.push(`/movie/${movie.id}/seats`);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Back Button */}
      <Button
        startIcon={<ArrowBack />}
        onClick={() => router.push('/')}
        sx={{ mb: 3 }}
      >
        Back to Movies
      </Button>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '300px 1fr' },
          gap: 4,
          mb: 4,
        }}
      >
        {/* Movie Poster */}
        <Box>
          <Paper
            elevation={4}
            sx={{
              overflow: 'hidden',
              borderRadius: 2,
              height: { xs: 400, md: 450 },
            }}
          >
            <Box
              component="img"
              src={movie.poster}
              alt={movie.title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Paper>
        </Box>

        {/* Movie Information */}
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            {movie.title}
          </Typography>

          {/* Rating */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating
              value={movie.rating / 2}
              precision={0.1}
              size="large"
              readOnly
            />
            <Typography variant="h6" sx={{ ml: 1 }}>
              {movie.rating}/10
            </Typography>
          </Box>

          {/* Genres */}
          <Box sx={{ mb: 3 }}>
            {movie.genre.map((genre) => (
              <Chip
                key={genre}
                label={genre}
                variant="outlined"
                color="primary"
                sx={{ mr: 1, mb: 1 }}
              />
            ))}
          </Box>

          {/* Movie Details */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <AccessTime sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography variant="body1">
                <strong>Duration:</strong> {movie.duration}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Language sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography variant="body1">
                <strong>Language:</strong> {movie.language}
              </Typography>
            </Box>
          </Box>

          {/* Description */}
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Synopsis
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.6, mb: 3 }}>
            {movie.description}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      {/* Showtimes Section */}
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <CalendarToday sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Select Showtime
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
          Choose your preferred showtime and theater
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: 2,
          }}
        >
          {movie.showtimes.map((showtime) => (
            <Paper
              key={showtime.id}
              elevation={2}
              sx={{
                p: 3,
                cursor: 'pointer',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  elevation: 4,
                  transform: 'translateY(-2px)',
                  bgcolor: 'primary.50',
                },
              }}
              onClick={() => handleShowtimeSelect(showtime)}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                  {showtime.time}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  ₹{showtime.price}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LocationOn sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
                <Typography variant="body2" color="text.secondary">
                  {showtime.theater}
                </Typography>
              </Box>

              <Typography variant="body2" color="text.secondary">
                Available Seats: {showtime.availableSeats}
              </Typography>

              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleShowtimeSelect(showtime);
                }}
              >
                Select Seats
              </Button>
            </Paper>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
