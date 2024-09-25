import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { color, motion } from 'framer-motion';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email and Password Regex patterns
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Email validation
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Password validation
    if (!passwordRegex.test(password)) {
      setErrorMessage("Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.");
      return;
    }

    // If both validations pass
    setErrorMessage('');

    // Simulating a successful login
    console.log('Login submitted', { email, password });

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
        color: 'grey',
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
            Login to VedikVerse
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              color='black'
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              color='black'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              Sign In
            </Button>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <Typography variant="body2" align="center" sx={{ color: '#4a148c' }}>
                Don't have an account? Sign Up
              </Typography>
            </Link>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
}

export default Login;
