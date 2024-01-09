import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import HeaderProfile from '../components/HeaderProfile'
import Footer from '../components/Footer'
import { updateUserProfile } from '../redux/actions/authActions'

const Profile = () => {

  // Initialisation du dispatch pour les actions Redux
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // Récupération des données du store Redux
  const { token, userData } = useSelector((state) => state.auth)

  // Effet qui charge le profil de l'utilisateur lors du montage du composant
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Requête pour récupérer le profil de l'utilisateur avec le token
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.ok) {
          // Si la requête est ok, met à jour les données utilisateur dans le store Redux
          const data = await response.json()

          // Dispatch l'action pour mettre à jour les données utilisateur dans le store
          dispatch(updateUserProfile(data.body))

        } else {
          // Gére les erreurs si requête échoue
          console.error('Error fetching user profile')
        }
      } catch (error) {
        // Gère les erreurs liées à la requête
        console.error('Error fetching user profile', error)
      }
    };

     // Vérifie si un token est présent avant de charger le profil
  if (token) {
    fetchUserProfile();
  } else {
    // S'il n'y a pas de token, redirige vers la page de connexion
    navigate('/login');
  }
}, [token, dispatch, navigate])

  // Rendu JSX du composant
  return (
     <div>
        <HeaderProfile/>
        <main className="main bg-dark">
        <div className="header">
          {userData && (
            <div>
              <h1>Welcome back {userData.firstName} {userData.lastName}!</h1>
            </div>
          )}
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default Profile
