export interface Movie {
  id: string;
  title: string;
  poster: string;
  genre: string[];
  duration: string;
  language: string;
  description: string;
  rating: number;
  showtimes: Showtime[];
}

export interface Showtime {
  id: string;
  time: string;
  date: string;
  price: number;
  theater: string;
  availableSeats: number;
}

export interface Seat {
  id: string;
  row: string;
  number: number;
  isAvailable: boolean;
  isSelected: boolean;
  type: 'regular' | 'premium' | 'executive';
  price: number;
}

export interface SeatLayout {
  rows: string[];
  seatsPerRow: number;
  seats: { [key: string]: Seat };
}

export interface Booking {
  id: string;
  movieId: string;
  movieTitle: string;
  showtime: Showtime;
  selectedSeats: Seat[];
  totalAmount: number;
  bookingDate: string;
}

export interface BookingContextType {
  selectedMovie: Movie | null;
  selectedShowtime: Showtime | null;
  selectedSeats: Seat[];
  setSelectedMovie: (movie: Movie | null) => void;
  setSelectedShowtime: (showtime: Showtime | null) => void;
  setSelectedSeats: (seats: Seat[]) => void;
  addSeat: (seat: Seat) => void;
  removeSeat: (seatId: string) => void;
  clearBooking: () => void;
}
