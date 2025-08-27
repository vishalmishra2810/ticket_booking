"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  useMediaQuery,
  useTheme,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Movie as MovieIcon,
  Menu as MenuIcon,
  Login as LoginIcon,
} from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import UserProfile from "./UserProfile";
import LoginModal from "./LoginModal";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();
  const { user, loading } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [loginModalOpen, setLoginModalOpen] = React.useState(false);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "Movies", href: "/" },
    { label: "Contact", href: "/contact" },
  ];

  const handleNavigation = (href: string) => {
    router.push(href);
    handleMenuClose();
  };

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <AppBar position="sticky" elevation={2}>
      <Container maxWidth="lg">
        <Toolbar sx={{ px: { xs: 0, sm: 0 } }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <MovieIcon sx={{ mr: 1, fontSize: 28 }} />
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.1rem", sm: "1.25rem" },
                cursor: "pointer",
              }}
              onClick={() => router.push("/")}
            >
              CineBook
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {navigationItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  component={Link}
                  href={item.href}
                  sx={{
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}

              {/* Authentication Section */}
              {!loading && (
                <>
                  {user ? (
                    <UserProfile />
                  ) : (
                    <Button
                      color="inherit"
                      variant="outlined"
                      startIcon={<LoginIcon />}
                      onClick={openLoginModal}
                      sx={{
                        ml: 1,
                        borderColor: "rgba(255, 255, 255, 0.5)",
                        "&:hover": {
                          borderColor: "white",
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                        },
                      }}
                    >
                      Sign In
                    </Button>
                  )}
                </>
              )}
            </Box>
          )}

          {/* Mobile Navigation */}
          {isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {/* Mobile Auth */}
              {!loading && (
                <>
                  {user ? (
                    <UserProfile />
                  ) : (
                    <IconButton
                      color="inherit"
                      onClick={openLoginModal}
                      sx={{ mr: 1 }}
                    >
                      <LoginIcon />
                    </IconButton>
                  )}
                </>
              )}

              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                {navigationItems.map((item) => (
                  <MenuItem
                    key={item.label}
                    onClick={() => handleNavigation(item.href)}
                  >
                    {item.label}
                  </MenuItem>
                ))}
                {!user && (
                  <MenuItem
                    onClick={() => {
                      handleMenuClose();
                      openLoginModal();
                    }}
                  >
                    Sign In
                  </MenuItem>
                )}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>

      {/* Login Modal */}
      <LoginModal open={loginModalOpen} onClose={closeLoginModal} />
    </AppBar>
  );
};

export default Header;
