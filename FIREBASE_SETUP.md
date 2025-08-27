# Firebase Authentication Setup Guide

This guide will help you set up Google Authentication using Firebase for your CineBook application.

## Prerequisites

1. A Google account
2. Node.js and npm installed
3. The CineBook project running locally

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter your project name (e.g., "cinebook-auth")
4. Enable Google Analytics (optional)
5. Click "Create project"

## Step 2: Enable Authentication

1. In your Firebase project dashboard, click on "Authentication" in the left sidebar
2. Click on "Get started"
3. Go to the "Sign-in method" tab
4. Click on "Google" provider
5. Enable the Google sign-in method
6. Add your project's domain to authorized domains (for development, `localhost` should already be there)
7. Save the changes

## Step 3: Get Firebase Configuration

1. In your Firebase project dashboard, click on the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click on the "</>" (Web) icon to add a web app
5. Register your app with a nickname (e.g., "CineBook Web")
6. Copy the Firebase configuration object

## Step 4: Configure Environment Variables

1. In your project root, create a `.env.local` file (copy from `.env.local.example`)
2. Replace the placeholder values with your actual Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
```

## Step 5: Test the Authentication

1. Start your development server: `npm run dev`
2. Open your browser and go to `http://localhost:3000`
3. Click on the "Sign In" button in the header
4. Test the Google authentication flow

## Features Added

### 🔐 Authentication

- Google Sign-in with Firebase
- User profile display with avatar
- Secure logout functionality
- Authentication state management

### 🛡️ Protected Routes

- Seat selection requires authentication
- Booking confirmation requires authentication
- Graceful fallbacks for unauthenticated users

### 🎨 UI Components

- Login modal with Google sign-in
- User profile dropdown menu
- Responsive authentication UI
- Loading states and error handling

## Troubleshooting

### Common Issues

1. **"auth/configuration-not-found"**

   - Make sure your `.env.local` file is in the project root
   - Verify all environment variables are correctly set
   - Restart your development server after adding environment variables

2. **"auth/unauthorized-domain"**

   - Add your domain to Firebase Auth settings
   - For development, ensure `localhost` is in authorized domains

3. **Authentication not working**
   - Check browser console for errors
   - Verify Firebase project is active
   - Ensure Google sign-in method is enabled

### Development Notes

- The `.env.local` file is ignored by git for security
- Never commit your Firebase credentials to version control
- For production, use your hosting platform's environment variable settings

## Security Best Practices

1. **Environment Variables**: Never hardcode credentials
2. **Domain Authorization**: Only authorize necessary domains
3. **User Data**: Store minimal user information
4. **Session Management**: Firebase handles secure session management

## Next Steps

Consider adding these features:

- Email/password authentication
- User profile management
- Booking history for authenticated users
- Admin authentication for movie management

---

For more detailed Firebase documentation, visit: https://firebase.google.com/docs
