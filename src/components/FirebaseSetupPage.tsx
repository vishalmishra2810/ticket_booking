"use client";

import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Alert,
  Button,
  Link,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import {
  Settings as SettingsIcon,
  Security as SecurityIcon,
  Code as CodeIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";

const FirebaseSetupPage: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    {
      label: "Create Firebase Project",
      content: (
        <Box>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Create a new Firebase project for authentication:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Go to Firebase Console"
                secondary={
                  <Link
                    href="https://console.firebase.google.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    https://console.firebase.google.com/
                  </Link>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Click 'Create a project'" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Enter project name (e.g., 'cinebook-auth')" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Complete the setup process" />
            </ListItem>
          </List>
        </Box>
      ),
    },
    {
      label: "Enable Google Authentication",
      content: (
        <Box>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Enable Google sign-in in your Firebase project:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Go to Authentication → Get started" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Click on 'Sign-in method' tab" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Enable 'Google' provider" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Add your project email and save" />
            </ListItem>
          </List>
        </Box>
      ),
    },
    {
      label: "Get Configuration",
      content: (
        <Box>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Get your Firebase web app configuration:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Go to Project Settings (gear icon)" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Scroll to 'Your apps' section" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Click '</>' to add a web app" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Copy the configuration object" />
            </ListItem>
          </List>
        </Box>
      ),
    },
    {
      label: "Setup Environment Variables",
      content: (
        <Box>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Create a .env.local file in your project root with:
          </Typography>
          <Paper
            sx={{
              p: 2,
              bgcolor: "grey.100",
              fontFamily: "monospace",
              fontSize: "0.875rem",
            }}
          >
            <Typography variant="body2" component="pre">
              {`NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id`}
            </Typography>
          </Paper>
          <Alert severity="warning" sx={{ mt: 2 }}>
            Replace the placeholder values with your actual Firebase
            configuration!
          </Alert>
        </Box>
      ),
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <SettingsIcon sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
          Firebase Setup Required
        </Typography>
        <Typography variant="body1" color="text.secondary">
          To enable Google authentication, please follow these setup steps:
        </Typography>
      </Box>

      <Alert severity="info" sx={{ mb: 4 }}>
        <Typography variant="body2">
          This is a one-time setup process. Once completed, users will be able
          to sign in with their Google accounts.
        </Typography>
      </Alert>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                {step.content}
                <Box sx={{ mb: 2, mt: 2 }}>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mr: 1 }}
                    disabled={index === steps.length - 1}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3, bgcolor: "primary.50" }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Setup Complete! 🎉
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              After setting up your environment variables, restart your
              development server and refresh this page.
            </Typography>
            <Button onClick={handleReset} sx={{ mr: 1 }}>
              Reset Steps
            </Button>
            <Button
              variant="contained"
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </Button>
          </Paper>
        )}
      </Paper>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Need Help?
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Check out the detailed setup guide in your project folder:
        </Typography>
        <Paper sx={{ p: 2, bgcolor: "grey.100", display: "inline-block" }}>
          <Typography variant="body2" sx={{ fontFamily: "monospace" }}>
            FIREBASE_SETUP.md
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default FirebaseSetupPage;
