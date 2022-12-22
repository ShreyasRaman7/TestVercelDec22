import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import background1 from "./background1.jpg";
import logo from "./logo.png"

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '3rem',
      fontFamily: "Montserrat",
      fontWeight: 550,
      color: '#3f51b5',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      marginBottom: '1rem'
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 400,
      color: '#3f51b5',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      marginBottom: '1rem'
    },
    body1: {
      fontSize: '1.25rem',
      fontWeight: 300,
      color: '#333',
      lineHeight: 1.5
    }
  }
});

function HomePage() {
  return (
    <div style={{
        backgroundImage: `url(${background1})`, // Set the background image
        height: '100vh', // Set the height to fill the viewport
        width: "100%",
        backgroundSize: 'cover', // Cover the entire container
        backgroundPosition: 'center' // Center the image
      }} >
    <logo/>
    <ThemeProvider theme={theme}>
      <Typography variant="h1">Shreyas' Sandbox</Typography>
      <Typography variant="h2">Welcome to my playground</Typography>
      <Typography variant="body1">
        Here you can find my experiments and projects.
      </Typography>
    </ThemeProvider>
    </div>
  );
}

export default HomePage;
