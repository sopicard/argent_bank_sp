import React, { useEffect, useState } from 'react'
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

  // État local pour gérer l'édition
  const [isEditing, setIsEditing] = useState(false)
  const [editedFirstName, setEditedFirstName] = useState('')
  const [editedLastName, setEditedLastName] = useState('')

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
          // Préremplit les valeurs lors de la récupération du profil
          setEditedFirstName(data.body.firstName || '')
          setEditedLastName(data.body.lastName || '')

        } else {
          // Gére les erreurs si requête échoue
          console.error('Error fetching user profile')
        }
      } catch (error) {
        // Gère les erreurs liées à la requête
        console.error('Error fetching user profile', error)
      }
    }

      // Vérifie si un token est présent avant de charger le profil
    if (token) {
      fetchUserProfile()
    } else {
      // S'il n'y a pas de token, redirige vers la page de connexion
      navigate('/login')
    }
  }, [token, dispatch, navigate])

  const handleEditButtonClick = () => {
    // Active le mode d'édition
    setIsEditing(true)
  }

  const handleSaveButtonClick = async () => {
    try {
      // Dispatch l'action pour mettre à jour le store Redux et le backend
      await dispatch(updateUserProfile({
        firstName: editedFirstName,
        lastName: editedLastName,
      }));

      // Désactive le mode d'édition
      setIsEditing(false)
    } catch (error) {
      console.error('Error updating user profile', error)
    }
  }

  const handleCancelEdit = () => {
    // Annule les modifications et désactive le mode d'édition
    setEditedFirstName(userData.firstName || '')
    setEditedLastName(userData.lastName || '')
    setIsEditing(false)
  }

  // Rendu JSX du composant
  return (
     <div>
        <HeaderProfile/>
        <main className={`main bg-dark ${isEditing ? 'editing-mode' : ''}`}>
      <div className='header'>
        {userData && (
          <div className='edit-inputs'>
            <h1 className={isEditing ? 'editing-mode-text' : ''}>
              Welcome back<br />
              {isEditing ? (
                <>
                  <input
                    type='text'
                    onChange={(e) => setEditedFirstName(e.target.value)}
                    placeholder={editedFirstName}
                    className='edit-input'
                    onFocus={() => setEditedFirstName('')}
                  />
                  <input
                    type='text'
                    onChange={(e) => setEditedLastName(e.target.value)}
                    placeholder={editedLastName}
                    className='edit-input'
                    onFocus={() => setEditedLastName('')}
                  />
                </>
              ) : (
                <>
                  {userData.firstName} {userData.lastName}
                </>
              )}
            </h1>
          </div>
        )}
        {isEditing ? (
          <div className='edit-buttons'>
            <button className='save-button' onClick={handleSaveButtonClick}>Save</button>
            <button className='cancel-button' onClick={handleCancelEdit}>Cancel</button>
          </div>
        ) : (
          <button className='editName-button' onClick={handleEditButtonClick}>Edit Name</button>
        )}
      </div>

        <h2 className='sr-only'>Accounts</h2>
        <section className={`account ${isEditing ? 'editing-mode' : ''}`}>
          <div className='account-content-wrapper'>
            <h3 className='account-title'>Argent Bank Checking (x8349)</h3>
            <p className='account-amount'>$2,082.79</p>
            <p className='account-amount-description'>Available Balance</p>
          </div>
          <div className='account-content-wrapper cta'>
            <button className={`transaction-button ${isEditing ? 'editing-mode' : ''}`}>View transactions</button>
          </div>
        </section>
        <section className={`account ${isEditing ? 'editing-mode' : ''}`}>
          <div className='account-content-wrapper'>
            <h3 className='account-title'>Argent Bank Savings (x6712)</h3>
            <p className='account-amount'>$10,928.42</p>
            <p className='account-amount-description'>Available Balance</p>
          </div>
          <div className='account-content-wrapper cta'>
            <button className={`transaction-button ${isEditing ? 'editing-mode' : ''}`}>View transactions</button>
          </div>
        </section>
        <section className={`account ${isEditing ? 'editing-mode' : ''}`}>
          <div className='account-content-wrapper'>
            <h3 className='account-title'>Argent Bank Credit Card (x8349)</h3>
            <p className='account-amount'>$184.30</p>
            <p className='account-amount-description'>Current Balance</p>
          </div>
          <div className='account-content-wrapper cta'>
            <button className={`transaction-button ${isEditing ? 'editing-mode' : ''}`}>View transactions</button>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default Profile