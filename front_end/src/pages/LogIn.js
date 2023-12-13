import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, updateUsername, updatePassword } from '../redux/actions/authActions'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const LogIn = () => {
  const dispatch = useDispatch();
  const { username, password } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
  
    try {
      // Dispatch l'action loginUser avec les données du formulaire
      await dispatch(loginUser(username, password));
  
      // Redirige l'utilisateur vers la page de son profil
      navigate('/profile');
    } catch (error) {
      console.error('Échec de la connexion.', error);
    }
  }

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSignIn}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => dispatch(updateUsername(e.target.value))}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input 
                type="password"
                id="password"
                value={password}
                onChange={(e) => dispatch(updatePassword(e.target.value))}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default LogIn
