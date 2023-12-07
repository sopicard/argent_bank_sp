import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import Profile from './pages/Profile'

const AppRouter = () => {
    return (
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    )
  }
  
  export default AppRouter