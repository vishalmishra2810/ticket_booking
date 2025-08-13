import { Movie, SeatLayout, Seat } from '@/types';

export const mockMovies: Movie[] = [
    {
        id: '1',
        title: 'Avengers: Endgame',
        poster: 'https://i.redd.it/esea05pj84o21.jpg',
        genre: ['Action', 'Adventure', 'Drama'],
        duration: '3h 1min',
        language: 'English',
        description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.',
        rating: 8.4,
        showtimes: [
            {
                id: '1-1',
                time: '10:00 AM',
                date: '2024-08-13',
                price: 250,
                theater: 'PVR Cinemas Screen 1',
                availableSeats: 45
            },
            {
                id: '1-2',
                time: '2:30 PM',
                date: '2024-08-13',
                price: 300,
                theater: 'PVR Cinemas Screen 1',
                availableSeats: 32
            },
            {
                id: '1-3',
                time: '6:00 PM',
                date: '2024-08-13',
                price: 350,
                theater: 'PVR Cinemas Screen 1',
                availableSeats: 28
            },
            {
                id: '1-4',
                time: '9:30 PM',
                date: '2024-08-13',
                price: 350,
                theater: 'PVR Cinemas Screen 1',
                availableSeats: 15
            }
        ]
    },
    {
        id: '2',
        title: 'Spider-Man: No Way Home',
        poster: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop',
        genre: ['Action', 'Adventure', 'Sci-Fi'],
        duration: '2h 28min',
        language: 'English',
        description: 'With Spider-Man\'s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.',
        rating: 8.2,
        showtimes: [
            {
                id: '2-1',
                time: '11:30 AM',
                date: '2024-08-13',
                price: 280,
                theater: 'INOX Screen 2',
                availableSeats: 52
            },
            {
                id: '2-2',
                time: '3:00 PM',
                date: '2024-08-13',
                price: 320,
                theater: 'INOX Screen 2',
                availableSeats: 38
            },
            {
                id: '2-3',
                time: '7:00 PM',
                date: '2024-08-13',
                price: 380,
                theater: 'INOX Screen 2',
                availableSeats: 22
            }
        ]
    },
    {
        id: '3',
        title: 'The Batman',
        poster: 'data:image/jpeg;base64,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',
        genre: ['Action', 'Crime', 'Drama'],
        duration: '2h 56min',
        language: 'English',
        description: 'When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city\'s hidden corruption and question his family\'s involvement.',
        rating: 7.8,
        showtimes: [
            {
                id: '3-1',
                time: '1:00 PM',
                date: '2024-08-13',
                price: 300,
                theater: 'Cinepolis Screen 3',
                availableSeats: 40
            },
            {
                id: '3-2',
                time: '5:30 PM',
                date: '2024-08-13',
                price: 350,
                theater: 'Cinepolis Screen 3',
                availableSeats: 25
            },
            {
                id: '3-3',
                time: '9:00 PM',
                date: '2024-08-13',
                price: 380,
                theater: 'Cinepolis Screen 3',
                availableSeats: 18
            }
        ]
    },
    {
        id: '4',
        title: 'Dune',
        poster: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop',
        genre: ['Action', 'Adventure', 'Drama'],
        duration: '2h 35min',
        language: 'English',
        description: 'Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.',
        rating: 8.0,
        showtimes: [
            {
                id: '4-1',
                time: '12:00 PM',
                date: '2024-08-13',
                price: 260,
                theater: 'PVR Cinemas Screen 4',
                availableSeats: 48
            },
            {
                id: '4-2',
                time: '4:00 PM',
                date: '2024-08-13',
                price: 310,
                theater: 'PVR Cinemas Screen 4',
                availableSeats: 35
            },
            {
                id: '4-3',
                time: '8:00 PM',
                date: '2024-08-13',
                price: 360,
                theater: 'PVR Cinemas Screen 4',
                availableSeats: 20
            }
        ]
    },
    {
        id: '5',
        title: 'Top Gun: Maverick',
        poster: 'https://cdn.theatlantic.com/thumbor/sd3pjCrjepBTGNOklgPJ1MB9eS8=/1005x0:3164x1619/1200x900/media/img/mt/2022/05/tgm_ff_125r2/original.jpg',
        genre: ['Action', 'Drama'],
        duration: '2h 10min',
        language: 'English',
        description: 'After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he returns to TOP GUN to train a new generation of elite pilots.',
        rating: 8.3,
        showtimes: [
            {
                id: '5-1',
                time: '10:30 AM',
                date: '2024-08-13',
                price: 240,
                theater: 'INOX Screen 1',
                availableSeats: 55
            },
            {
                id: '5-2',
                time: '2:00 PM',
                date: '2024-08-13',
                price: 290,
                theater: 'INOX Screen 1',
                availableSeats: 42
            },
            {
                id: '5-3',
                time: '6:30 PM',
                date: '2024-08-13',
                price: 340,
                theater: 'INOX Screen 1',
                availableSeats: 30
            }
        ]
    },
    {
        id: '6',
        title: 'Black Panther: Wakanda Forever',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD5lj_D0Q5ygMBVUUwmdC3H7vcsig2hNTc-A&s',
        genre: ['Action', 'Adventure', 'Drama'],
        duration: '2h 41min',
        language: 'English',
        description: 'The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T\'Challa.',
        rating: 6.7,
        showtimes: [
            {
                id: '6-1',
                time: '11:00 AM',
                date: '2024-08-13',
                price: 270,
                theater: 'Cinepolis Screen 2',
                availableSeats: 50
            },
            {
                id: '6-2',
                time: '3:30 PM',
                date: '2024-08-13',
                price: 320,
                theater: 'Cinepolis Screen 2',
                availableSeats: 33
            },
            {
                id: '6-3',
                time: '7:30 PM',
                date: '2024-08-13',
                price: 370,
                theater: 'Cinepolis Screen 2',
                availableSeats: 26
            }
        ]
    }, {
        id: '7',
        title: 'Inception',
        poster: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
        genre: ['Action', 'Sci-Fi', 'Thriller'],
        duration: '2h 28min',
        language: 'English',
        description: 'A thief who enters the dreams of others to steal secrets from their subconscious must perform inception to plant an idea into someone’s mind.',
        rating: 8.8,
        showtimes: [
            { id: '7-1', time: '12:30 PM', date: '2024-08-13', price: 270, theater: 'PVR Cinemas Screen 1', availableSeats: 44 },
            { id: '7-2', time: '4:00 PM', date: '2024-08-13', price: 320, theater: 'PVR Cinemas Screen 1', availableSeats: 30 },
            { id: '7-3', time: '8:00 PM', date: '2024-08-13', price: 380, theater: 'PVR Cinemas Screen 1', availableSeats: 18 }
        ]
    },
    {
        id: '8',
        title: 'Interstellar',
        poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=450&fit=crop',
        genre: ['Adventure', 'Drama', 'Sci-Fi'],
        duration: '2h 49min',
        language: 'English',
        description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival.',
        rating: 8.6,
        showtimes: [
            { id: '8-1', time: '10:15 AM', date: '2024-08-13', price: 250, theater: 'INOX Screen 1', availableSeats: 50 },
            { id: '8-2', time: '2:45 PM', date: '2024-08-13', price: 300, theater: 'INOX Screen 1', availableSeats: 35 },
            { id: '8-3', time: '7:15 PM', date: '2024-08-13', price: 360, theater: 'INOX Screen 1', availableSeats: 20 }
        ]
    },
    {
        id: '9',
        title: 'The Dark Knight',
        poster: 'https://m.media-amazon.com/images/S/pv-target-images/e9a43e647b2ca70e75a3c0af046c4dfdcd712380889779cbdc2c57d94ab63902.jpg',
        genre: ['Action', 'Crime', 'Drama'],
        duration: '2h 32min',
        language: 'English',
        description: 'Batman faces the Joker, a criminal mastermind who wants to plunge Gotham into anarchy.',
        rating: 9.0,
        showtimes: [
            { id: '9-1', time: '1:15 PM', date: '2024-08-13', price: 300, theater: 'Cinepolis Screen 3', availableSeats: 48 },
            { id: '9-2', time: '5:45 PM', date: '2024-08-13', price: 350, theater: 'Cinepolis Screen 3', availableSeats: 26 },
            { id: '9-3', time: '9:15 PM', date: '2024-08-13', price: 380, theater: 'Cinepolis Screen 3', availableSeats: 15 }
        ]
    },
    {
        id: '10',
        title: 'Avatar: The Way of Water',
        poster: 'https://m.media-amazon.com/images/I/71s3cEqEZTL._UF1000,1000_QL80_.jpg',
        genre: ['Action', 'Adventure', 'Fantasy'],
        duration: '3h 12min',
        language: 'English',
        description: 'Jake Sully and Neytiri must protect their family and people when a familiar threat returns to Pandora.',
        rating: 7.9,
        showtimes: [
            { id: '10-1', time: '11:00 AM', date: '2024-08-13', price: 280, theater: 'PVR Cinemas Screen 4', availableSeats: 47 },
            { id: '10-2', time: '3:20 PM', date: '2024-08-13', price: 330, theater: 'PVR Cinemas Screen 4', availableSeats: 33 },
            { id: '10-3', time: '7:50 PM', date: '2024-08-13', price: 380, theater: 'PVR Cinemas Screen 4', availableSeats: 19 }
        ]
    },
    {
        id: '11',
        title: 'Guardians of the Galaxy Vol. 3',
        poster: 'https://resizing.flixster.com/xV7EqckHQwE9I284oqcs3OAwqHc=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17845781_v_v13_ar.jpg',
        genre: ['Action', 'Adventure', 'Comedy'],
        duration: '2h 29min',
        language: 'English',
        description: 'The Guardians rally to defend one of their own from a new, dangerous enemy.',
        rating: 8.0,
        showtimes: [
            { id: '11-1', time: '12:00 PM', date: '2024-08-13', price: 260, theater: 'INOX Screen 2', availableSeats: 51 },
            { id: '11-2', time: '4:30 PM', date: '2024-08-13', price: 320, theater: 'INOX Screen 2', availableSeats: 28 },
            { id: '11-3', time: '8:30 PM', date: '2024-08-13', price: 370, theater: 'INOX Screen 2', availableSeats: 14 }
        ]
    },
    {
        id: '12',
        title: 'Oppenheimer',
        poster: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg',
        genre: ['Biography', 'Drama', 'History'],
        duration: '3h 0min',
        language: 'English',
        description: 'The story of J. Robert Oppenheimer and the creation of the atomic bomb during World War II.',
        rating: 8.7,
        showtimes: [
            { id: '12-1', time: '10:45 AM', date: '2024-08-13', price: 270, theater: 'Cinepolis Screen 2', availableSeats: 42 },
            { id: '12-2', time: '3:10 PM', date: '2024-08-13', price: 330, theater: 'Cinepolis Screen 2', availableSeats: 29 },
            { id: '12-3', time: '7:40 PM', date: '2024-08-13', price: 390, theater: 'Cinepolis Screen 2', availableSeats: 13 }
        ]
    },
    {
        id: '13',
        title: 'The Matrix Resurrections',
        poster: 'https://m.media-amazon.com/images/S/pv-target-images/32cbdbe4273fdfbb0f88c22efee93bb93975a357a34b7afffb3ec8a2634ced6f.jpg',
        genre: ['Action', 'Sci-Fi'],
        duration: '2h 28min',
        language: 'English',
        description: 'Neo reunites with Trinity in a new reality as they fight to free minds trapped inside the Matrix.',
        rating: 5.7,
        showtimes: [
            { id: '13-1', time: '1:00 PM', date: '2024-08-13', price: 250, theater: 'INOX Screen 1', availableSeats: 53 },
            { id: '13-2', time: '5:00 PM', date: '2024-08-13', price: 300, theater: 'INOX Screen 1', availableSeats: 31 },
            { id: '13-3', time: '9:00 PM', date: '2024-08-13', price: 360, theater: 'INOX Screen 1', availableSeats: 17 }
        ]
    },
    {
        id: '14',
        title: 'Doctor Strange in the Multiverse of Madness',
        poster: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?w=300&h=450&fit=crop',
        genre: ['Action', 'Adventure', 'Fantasy'],
        duration: '2h 6min',
        language: 'English',
        description: 'Doctor Strange traverses the mind-bending and dangerous alternate realities of the Multiverse.',
        rating: 7.0,
        showtimes: [
            { id: '14-1', time: '11:45 AM', date: '2024-08-13', price: 260, theater: 'PVR Cinemas Screen 1', availableSeats: 49 },
            { id: '14-2', time: '3:45 PM', date: '2024-08-13', price: 320, theater: 'PVR Cinemas Screen 1', availableSeats: 27 },
            { id: '14-3', time: '8:15 PM', date: '2024-08-13', price: 370, theater: 'PVR Cinemas Screen 1', availableSeats: 16 }
        ]
    }
];

// Generate seat layout for theaters
const generateSeatLayout = (totalSeats: number = 60): SeatLayout => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const seatsPerRow = Math.ceil(totalSeats / rows.length);
    const seats: { [key: string]: Seat } = {};

    rows.forEach((row, rowIndex) => {
        for (let seatNum = 1; seatNum <= seatsPerRow; seatNum++) {
            const seatId = `${row}${seatNum}`;
            let seatType: 'regular' | 'premium' | 'executive' = 'regular';
            let price = 250;

            // Executive seats (first 2 rows)
            if (rowIndex < 2) {
                seatType = 'executive';
                price = 400;
            }
            // Premium seats (middle rows)
            else if (rowIndex < 5) {
                seatType = 'premium';
                price = 320;
            }

            // Randomly make some seats unavailable (booked)
            const isAvailable = Math.random() > 0.15; // 85% seats available

            seats[seatId] = {
                id: seatId,
                row,
                number: seatNum,
                isAvailable,
                isSelected: false,
                type: seatType,
                price
            };
        }
    });

    return {
        rows,
        seatsPerRow,
        seats
    };
};

export const seatLayouts: { [key: string]: SeatLayout } = {
    'PVR Cinemas Screen 1': generateSeatLayout(60),
    'PVR Cinemas Screen 4': generateSeatLayout(60),
    'INOX Screen 1': generateSeatLayout(65),
    'INOX Screen 2': generateSeatLayout(65),
    'Cinepolis Screen 2': generateSeatLayout(55),
    'Cinepolis Screen 3': generateSeatLayout(55),
};
