import './App.css'
import React from 'react';
import {Routes, Route} from "react-router-dom"
import { Box } from '@mui/material';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import ExerciseDetail from './pages/ExerciseDetail'
import Home from './pages/Home'
import Sender from './components/Sender';



function App() {

  return (
    <>
      <Box width="400px" sx={{ 
        width: { xl: '1400px' },
        position: 'relative',
        width: '100vw',
        height: '100vh',
        zIndex: '2',
        color: 'white'
      }} m="auto">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Sender />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />

      </Box>
    </>
  )
}

export default App
