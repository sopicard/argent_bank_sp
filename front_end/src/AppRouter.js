import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'

const AppRouter = () => {
    return (
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/profile" element={<User />} />
      </Routes>
    )
  }
  
  export default AppRouter