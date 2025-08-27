"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material";
import { useAuth } from "@/context/AuthContext";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
  const { signInWithGoogle } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      await signInWithGoogle();
      onClose();
    } catch (error: any) {
      setError("Failed to sign in with Google. Please try again.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          padding: 2,
        },
      }}
    >
      <DialogTitle>
        <Typography
          variant="h5"
          component="h2"
          textAlign="center"
          fontWeight="bold"
        >
          Welcome to CineBook
        </Typography>
        <Typography
          variant="body2"
          textAlign="center"
          color="text.secondary"
          mt={1}
        >
          Sign in to book your favorite movies
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, py: 2 }}>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Button
            variant="outlined"
            size="large"
            startIcon={
              loading ? <CircularProgress size={20} /> : <GoogleIcon />
            }
            onClick={handleGoogleLogin}
            disabled={loading}
            sx={{
              py: 1.5,
              textTransform: "none",
              fontSize: "1rem",
              borderColor: "#DB4437",
              color: "#DB4437",
              "&:hover": {
                borderColor: "#C23321",
                backgroundColor: "rgba(219, 68, 55, 0.04)",
              },
            }}
          >
            {loading ? "Signing in..." : "Continue with Google"}
          </Button>

          <Typography
            variant="caption"
            textAlign="center"
            color="text.secondary"
            mt={2}
          >
            By signing in, you agree to our Terms of Service and Privacy Policy
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
        <Button onClick={onClose} color="inherit">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginModal;
