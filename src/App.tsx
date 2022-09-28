import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  Box, CircularProgress
} from "@mui/material";
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import PaidCandidate from './Components/PaidCandidate';
import UnpaidCandidate from './Components/UnpaidCandidate';
import News from './Components/News';
import Disclaimer from './Components/Disclaimer';
import Copyright from './Components/Copyright';
import Privacy from './Components/Privacy';
import Refund from './Components/Refund';
import Terms from './Components/Terms';
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
              <Route path='/' element={<News />}></Route>
              <Route path='/paid-candidate' element={<PaidCandidate />}></Route>
              <Route path='/unpaid-candidate' element={<UnpaidCandidate />}></Route>
              <Route path='/disclaimer' element={<Disclaimer />}></Route>
              <Route path='/copyright' element={<Copyright />}></Route>
              <Route path='/privacy-policy' element={<Privacy />}></Route>
              <Route path='/refund-policy' element={<Refund />}></Route>
              <Route path='/terms-condition' element={<Terms />}></Route>

            </Routes>
            <Footer />
          </div>
      }
    </>
  )
}

export default App