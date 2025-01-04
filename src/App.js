import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import NavBar from './components/NavBar.js';
import Home from './pages/Home.js';
import ExerciseDetail from './pages/ExerciseDetail.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <Box 
      sx={{
        maxWidth: '2000px', // Set a max width for large screens
        margin: 'auto', // Center horizontally
        overflowX: 'hidden', // Prevent horizontal scrolling
      }}
    >
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
    </Box>

  )
}

export default App;
