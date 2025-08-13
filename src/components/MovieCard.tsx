'use client';

import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
  Rating,
} from '@mui/material';
import { PlayArrow, AccessTime, Language } from '@mui/icons-material';
import { Movie } from '@/types';

interface MovieCardProps {
  movie: Movie;
  onBookNow: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onBookNow }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
      }}
    >
      {/* Movie Poster */}
      <CardMedia
        component="img"
        height="300"
        image={movie.poster}
        alt={movie.title}
        sx={{
          objectFit: 'cover',
        }}
      />

      {/* Movie Content */}
      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        {/* Title */}
        <Typography
          gutterBottom
          variant="h6"
          component="h2"
          sx={{
            fontWeight: 600,
            lineHeight: 1.2,
            mb: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {movie.title}
        </Typography>

        {/* Rating */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Rating
            value={movie.rating / 2}
            precision={0.1}
            size="small"
            readOnly
          />
          <Typography variant="body2" sx={{ ml: 1, color: 'text.secondary' }}>
            {movie.rating}/10
          </Typography>
        </Box>

        {/* Genres */}
        <Box sx={{ mb: 2 }}>
          {movie.genre.slice(0, 2).map((genre) => (
            <Chip
              key={genre}
              label={genre}
              size="small"
              variant="outlined"
              sx={{ mr: 0.5, mb: 0.5 }}
            />
          ))}
          {movie.genre.length > 2 && (
            <Chip
              label={`+${movie.genre.length - 2} more`}
              size="small"
              variant="outlined"
              sx={{ mr: 0.5, mb: 0.5 }}
            />
          )}
        </Box>

        {/* Movie Details */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccessTime sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {movie.duration}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Language sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {movie.language}
            </Typography>
          </Box>
        </Box>

        {/* Available Shows */}
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {movie.showtimes.length} shows available
        </Typography>
      </CardContent>

      {/* Action Button */}
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          startIcon={<PlayArrow />}
          onClick={() => onBookNow(movie)}
          sx={{
            fontWeight: 600,
            py: 1,
          }}
        >
          Book Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
