'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Movie, Showtime, Seat, BookingContextType } from '@/types';

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

interface BookingProviderProps {
  children: ReactNode;
}

export const BookingProvider: React.FC<BookingProviderProps> = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [selectedShowtime, setSelectedShowtime] = useState<Showtime | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  const addSeat = (seat: Seat) => {
    setSelectedSeats(prev => {
      const exists = prev.find(s => s.id === seat.id);
      if (exists) return prev;
      return [...prev, { ...seat, isSelected: true }];
    });
  };

  const removeSeat = (seatId: string) => {
    setSelectedSeats(prev => prev.filter(seat => seat.id !== seatId));
  };

  const clearBooking = () => {
    setSelectedMovie(null);
    setSelectedShowtime(null);
    setSelectedSeats([]);
  };

  const value: BookingContextType = {
    selectedMovie,
    selectedShowtime,
    selectedSeats,
    setSelectedMovie,
    setSelectedShowtime,
    setSelectedSeats,
    addSeat,
    removeSeat,
    clearBooking,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};
