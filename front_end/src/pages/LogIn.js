import React, { useEffect, useState }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/actions/authActions'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const LogIn = () => {
  // Initialisation du dispatch pour les actions Redux et la navigation
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Utilisation de useState pour gérer localement les champs username, password et rememberMe
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  // Récupération des données du store Redux
  const { token, error } = useSelector((state) => state.auth)

  // Fonction pour gérer la soumission du formulaire de connexion
  const handleSignIn = async (e) => {
    e.preventDefault()
  
    try {
      // Dispatch l'action loginUser avec les données du formulaire
      await dispatch(loginUser(username, password, rememberMe))
  
      // Vérifie si la connexion a réussi avant de rediriger
      if (!error && token) {
        // Redirige l'utilisateur vers la page de son profil
        navigate('/profile')
      } 
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la connexion.', error)
    }
  }

  // Effet qui redirige l'utilisateur vers le profil si le token est présent dans le store au chargement initial
  useEffect(() => {
    if (token) {
      navigate('/profile')
    }
  }, [token, navigate])

  
  // Effet qui nettoie les champs du formulaire en cas d'erreur ou de déconnexion
  useEffect(() => {
    if (error || !token) {
      // Réinitialise l'email, le mot de passe et rememberMe localement
      setUsername('')
      setPassword('') 
      setRememberMe(false)
    }
  }, [error, token, dispatch])

  // Rendu JSX du composant
  return (
    <>
      <Header />
      <main className='main bg-dark'>
        <section className='sign-in-content'>
          <i className='fa fa-user-circle sign-in-icon'></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSignIn}>
            <div className='input-wrapper'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='password'>Password</label>
              <input 
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='input-remember'>
              {/* Utilise l'état RememberMe pour contrôler la case à cocher */}
              <input
                type='checkbox'
                id='remember-me'
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor='remember-me'>Remember me</label>
            </div>
            <button type='submit' className='sign-in-button'>Sign In</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </section>
      </main>
      <Footer />
    </>
  )
}

export default LogIn