import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  Box, CircularProgress
} from "@mui/material";
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Career from './Components/Career';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Login from './Components/Login';
import ApplyNow from './Components/ApplyNow';
import Refund from './Components/Refund';
import Policies from './Components/Policies';
import Copyright from './Components/Copyright';
import Privacy from './Components/Privacy';
import Terms from './Components/Terms';
import ScrollToTop from './Components/ScrollToTop';
const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000) //3 secs
  }, [])

  return (
    <>
      {
        loading ?
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: '100vh',
            }}
          >
            <CircularProgress size='5rem' />
          </Box>

          : <div>
            <Header />
            <ScrollToTop />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/career' element={<Career />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/gallery' element={<Gallery />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/apply-now' element={<ApplyNow />}></Route>
              <Route path='/refund-policy' element={<Refund />}></Route>
              <Route path='/web-policy' element={<Policies />}></Route>
              <Route path='/copyright' element={<Copyright />}></Route>
              <Route path='/privacy-policy' element={<Privacy />}></Route>
              <Route path='/terms-condition' element={<Terms />}></Route>
            </Routes>
            <Footer />
          </div>
      }
    </>
  )
}

export default App