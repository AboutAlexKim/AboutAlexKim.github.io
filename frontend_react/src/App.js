import React from 'react'

import { About, Home, Skills, Contact, Work } from './container';
import { Navbar } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

const App = () => {
  //Return HTML for App (website itself)
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/experience" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />


        </Routes>
      </div>
    </Router>
  )
}

export default App