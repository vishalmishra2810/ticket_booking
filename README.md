# CineBook - Online Movie Ticket Booking System

A complete frontend-only movie ticket booking system built with Next.js 14, TypeScript, and Material UI.

## Features

### Pages
- **Home Page**: Displays currently running movies with posters, titles, genres, and "Book Now" buttons
- **Movie Details Page**: Shows detailed movie information, showtimes, and theater selection
- **Seat Selection Page**: Interactive seat map with different seat types and pricing
- **Booking Confirmation Page**: Complete booking summary with payment simulation
- **Contact Page**: Customer support information and FAQ

### Components
- **Header**: Responsive navigation with site logo and menu
- **Footer**: Information links and contact details
- **MovieCard**: Reusable movie display component with ratings and details
- **SeatSelector**: Interactive seat selection with real-time pricing

### Key Features
- ✅ Fully responsive design for mobile and desktop
- ✅ Material UI v5 components with custom theming
- ✅ TypeScript for type safety
- ✅ Context API for state management
- ✅ Mock data for movies and seat layouts
- ✅ Interactive seat selection with different pricing tiers
- ✅ Complete booking flow with confirmation
- ✅ Clean, modern UI design

## Technology Stack

- **Frontend Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **UI Library**: Material UI v5
- **Styling**: Material UI's emotion-based styling
- **State Management**: React Context API
- **Icons**: Material UI Icons
- **Font**: Roboto (Google Fonts)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result (or port 9000 if using the custom port command below).

### Running on Custom Port (Port 9000)

To run the application on port 9000:
```bash
npm run dev -- --port 9000
```

Then open [http://localhost:9000](http://localhost:9000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── contact/           # Contact page
│   ├── movie/
│   │   └── [id]/         # Dynamic movie routes
│   │       ├── page.tsx  # Movie details
│   │       ├── seats/    # Seat selection
│   │       └── booking/  # Booking confirmation
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/            # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── MovieCard.tsx
│   ├── SeatSelector.tsx
│   └── ThemeProvider.tsx
├── context/               # React Context
│   └── BookingContext.tsx
├── data/                  # Mock data
│   └── mockData.ts
└── types/                 # TypeScript types
    └── index.ts
```

## Features Walkthrough

### 1. Home Page
- Displays a hero section with statistics
- Shows all available movies in a responsive grid
- Each movie card includes poster, title, rating, genres, and duration
- "Book Now" button navigates to movie details

### 2. Movie Details
- Comprehensive movie information with large poster
- Star ratings and genre chips
- Multiple showtime options with different pricing
- Theater location and available seats information

### 3. Seat Selection
- Interactive seat map with color-coded seat types:
  - Executive (₹400) - First 2 rows
  - Premium (₹320) - Middle rows  
  - Regular (₹250) - Back rows
- Real-time seat selection with pricing updates
- Visual indicators for available, selected, and booked seats
- Maximum 10 seats can be selected per booking

### 4. Booking Confirmation
- Complete booking summary with all details
- Price breakdown including convenience fees
- Simulated payment confirmation
- Booking ID generation for reference

## Mock Data

The application uses comprehensive mock data including:
- 6 popular movies with realistic details
- Multiple showtimes per movie
- Different theaters and pricing
- Realistic seat layouts with availability simulation
- High-quality placeholder images from Unsplash

## Responsive Design

The application is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktop computers (1024px+)
- Large screens (1200px+)

## Material UI Theme

Custom theme configuration includes:
- Primary color: Blue (#1976d2)
- Secondary color: Pink (#dc004e)
- Custom button styling with rounded corners
- Card components with hover effects
- Consistent typography scale

## State Management

Uses React Context API for:
- Selected movie information
- Chosen showtime details
- Selected seats tracking
- Cross-page state persistence during booking flow

## Future Enhancements

Potential features for a full production version:
- User authentication and profiles
- Real backend integration
- Payment gateway integration
- Email confirmations
- Booking history
- Movie reviews and ratings
- Search and filtering
- Admin panel for theater management

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please visit the contact page in the application or reach out to the development team.

---

Built with ❤️ using Next.js, TypeScript, and Material UI
