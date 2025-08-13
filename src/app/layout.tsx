import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ThemeProviderWrapper from "@/components/ThemeProvider";
import { BookingProvider } from "@/context/BookingContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Box } from "@mui/material";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "CineBook - Online Movie Ticket Booking",
  description: "Book your favorite movies online with CineBook. Easy, fast, and convenient movie ticket booking system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProviderWrapper>
          <BookingProvider>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
              }}
            >
              <Header />
              <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
              </Box>
              <Footer />
            </Box>
          </BookingProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
