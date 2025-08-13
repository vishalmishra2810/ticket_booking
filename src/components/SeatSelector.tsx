'use client';

import React from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Seat, SeatLayout } from '@/types';

interface SeatSelectorProps {
  seatLayout: SeatLayout;
  selectedSeats: Seat[];
  onSeatSelect: (seat: Seat) => void;
  onSeatDeselect: (seatId: string) => void;
  maxSeats?: number;
}

const SeatSelector: React.FC<SeatSelectorProps> = ({
  seatLayout,
  selectedSeats,
  onSeatSelect,
  onSeatDeselect,
  maxSeats = 10,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSeatClick = (seat: Seat) => {
    if (!seat.isAvailable) return;

    const isSelected = selectedSeats.some(s => s.id === seat.id);
    
    if (isSelected) {
      onSeatDeselect(seat.id);
    } else if (selectedSeats.length < maxSeats) {
      onSeatSelect(seat);
    }
  };

  const getSeatColor = (seat: Seat) => {
    const isSelected = selectedSeats.some(s => s.id === seat.id);
    
    if (!seat.isAvailable) return theme.palette.grey[400];
    if (isSelected) return theme.palette.success.main;
    
    switch (seat.type) {
      case 'executive':
        return theme.palette.warning.main;
      case 'premium':
        return theme.palette.info.main;
      default:
        return theme.palette.grey[300];
    }
  };

  const getSeatTextColor = (seat: Seat) => {
    const isSelected = selectedSeats.some(s => s.id === seat.id);
    return !seat.isAvailable || isSelected ? 'white' : 'black';
  };

  return (
    <Box>
      {/* Legend */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          Seat Types & Pricing
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            mb: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 20,
                height: 20,
                bgcolor: theme.palette.warning.main,
                borderRadius: 1,
              }}
            />
            <Typography variant="body2">Executive (₹400)</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 20,
                height: 20,
                bgcolor: theme.palette.info.main,
                borderRadius: 1,
              }}
            />
            <Typography variant="body2">Premium (₹320)</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 20,
                height: 20,
                bgcolor: theme.palette.grey[300],
                borderRadius: 1,
              }}
            />
            <Typography variant="body2">Regular (₹250)</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 20,
                height: 20,
                bgcolor: theme.palette.success.main,
                borderRadius: 1,
              }}
            />
            <Typography variant="body2">Selected</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 20,
                height: 20,
                bgcolor: theme.palette.grey[400],
                borderRadius: 1,
              }}
            />
            <Typography variant="body2">Booked</Typography>
          </Box>
        </Box>
      </Box>

      {/* Screen */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Paper
          elevation={3}
          sx={{
            py: 2,
            px: 4,
            bgcolor: 'grey.100',
            borderRadius: 3,
            display: 'inline-block',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            SCREEN
          </Typography>
        </Paper>
      </Box>

      {/* Seat Map */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          mb: 3,
        }}
      >
        {seatLayout.rows.map((row) => (
          <Box
            key={row}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: isMobile ? 0.5 : 1,
            }}
          >
            {/* Row Label */}
            <Typography
              variant="body2"
              sx={{
                minWidth: 20,
                textAlign: 'center',
                fontWeight: 600,
                mr: isMobile ? 0.5 : 1,
              }}
            >
              {row}
            </Typography>

            {/* Seats in Row */}
            <Box sx={{ display: 'flex', gap: isMobile ? 0.3 : 0.5 }}>
              {Array.from({ length: seatLayout.seatsPerRow }, (_, index) => {
                const seatId = `${row}${index + 1}`;
                const seat = seatLayout.seats[seatId];
                
                if (!seat) return null;

                return (
                  <Button
                    key={seatId}
                    variant="contained"
                    size="small"
                    onClick={() => handleSeatClick(seat)}
                    disabled={!seat.isAvailable}
                    sx={{
                      minWidth: isMobile ? 28 : 36,
                      width: isMobile ? 28 : 36,
                      height: isMobile ? 28 : 36,
                      p: 0,
                      bgcolor: getSeatColor(seat),
                      color: getSeatTextColor(seat),
                      fontSize: isMobile ? '0.7rem' : '0.8rem',
                      fontWeight: 600,
                      '&:hover': {
                        bgcolor: seat.isAvailable ? getSeatColor(seat) : undefined,
                        filter: seat.isAvailable ? 'brightness(1.1)' : undefined,
                      },
                      '&.Mui-disabled': {
                        bgcolor: getSeatColor(seat),
                        color: getSeatTextColor(seat),
                      },
                    }}
                  >
                    {index + 1}
                  </Button>
                );
              })}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Selected Seats Summary */}
      {selectedSeats.length > 0 && (
        <Paper elevation={2} sx={{ p: 2, bgcolor: 'grey.50' }}>
          <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
            Selected Seats ({selectedSeats.length})
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            {selectedSeats.map((seat) => (
              <Chip
                key={seat.id}
                label={`${seat.id} - ₹${seat.price}`}
                onDelete={() => onSeatDeselect(seat.id)}
                color="primary"
                variant="outlined"
              />
            ))}
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
            Total: ₹{selectedSeats.reduce((sum, seat) => sum + seat.price, 0)}
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default SeatSelector;
