import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Regex for validating email and password
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Validate email format
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Validate password strength
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
      );
      return;
    }

    // Validate password and confirm password match
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // If all validations pass, clear the error message and proceed
    setErrorMessage('');

    // Simulate successful signup
    console.log('Signup submitted', { email, password, confirmPassword });

    // Set authentication state
    localStorage.setItem('isAuthenticated', 'true');

    // Navigate to the landing page
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: 3,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper elevation={3} sx={{ p: 4, backgroundColor: 'rgba(255, 255, 255, 0.9)', maxWidth: 400, width: '100%' }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#4a148c' }}>
            Sign up for VedikVerse
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              color='black'
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              color='black'
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              color='black'
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errorMessage && (
              <Typography variant="body2" color="error" align="center">
                {errorMessage}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Typography variant="body2" align="center" sx={{ color: '#4a148c' }}>
                Already have an account? Sign In
              </Typography>
            </Link>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
}

export default Signup;
