'use client';

import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
} from '@mui/material';
import { Movie, LocalMovies, Theaters } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useBooking } from '@/context/BookingContext';
import { mockMovies } from '@/data/mockData';
import MovieCard from '@/components/MovieCard';
import { Movie as MovieType } from '@/types';

export default function Home() {
  const router = useRouter();
  const { setSelectedMovie } = useBooking();

  const handleBookNow = (movie: MovieType) => {
    setSelectedMovie(movie);
    router.push(`/movie/${movie.id}`);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: '2rem', md: '3rem' },
            background: 'linear-gradient(45deg, #1976d2 30%, #dc004e 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Welcome to CineBook
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: 'text.secondary',
            mb: 4,
            fontSize: { xs: '1.2rem', md: '1.5rem' },
          }}
        >
          Your premier destination for booking movie tickets online
        </Typography>

        {/* Stats */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: 3,
            mb: 4,
          }}
        >
          <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
            <LocalMovies sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
              {mockMovies.length}+
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Movies Available
            </Typography>
          </Paper>
          <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
            <Theaters sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
              15+
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Theaters
            </Typography>
          </Paper>
          <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
            <Movie sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
              100K+
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Happy Customers
            </Typography>
          </Paper>
        </Box>
      </Box>

      {/* Movies Section */}
      <Box sx={{ mb: 4 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Now Playing
          </Typography>
          <Button variant="outlined" color="primary">
            View All Movies
          </Button>
        </Box>

        {/* Movie Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: 3,
          }}
        >
          {mockMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onBookNow={handleBookNow} />
          ))}
        </Box>
      </Box>

      {/* Call to Action */}
      <Box sx={{ textAlign: 'center', py: 6 }}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
            color: 'white',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
            Ready to Watch?
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
            Book your tickets now and enjoy the ultimate movie experience
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
            }}
          >
            Start Booking
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}
