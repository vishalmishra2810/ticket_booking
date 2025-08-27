"use client";

import React, { ReactNode } from "react";
import { Box, CircularProgress, Typography, Button } from "@mui/material";
import { useAuth } from "@/context/AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
  fallbackMessage?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  fallbackMessage = "Please sign in to access this feature.",
}) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!user) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
          gap: 2,
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography variant="h6" color="text.secondary">
          {fallbackMessage}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sign in with your Google account to continue.
        </Typography>
      </Box>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
