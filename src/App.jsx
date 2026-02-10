import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import AboutUs from './pages/Aboutus'
import Courses from './pages/Courses'
import Feestructure from './pages/Feestructure'
import Enrollment from './pages/Enrollment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/fee-structure" element={<Feestructure />} />
        <Route path="/enrollment" element={<Enrollment />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App