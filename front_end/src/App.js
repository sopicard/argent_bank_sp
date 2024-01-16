import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import AppRouter from './AppRouter'
import { updateToken } from './redux/actions/authActions'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    // Vérifie si le token est présent dans le localStorage lors du chargement initial
    const storedToken = localStorage.getItem('token')
    if (storedToken) {
      // Met à jour le state Redux avec le token du localStorage
      dispatch(updateToken(storedToken))
    }
  }, [dispatch])

  return (
    <Router>
      <AppRouter />
    </Router>
  )
}

export default App

