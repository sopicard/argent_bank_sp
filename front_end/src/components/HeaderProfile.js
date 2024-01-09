import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../redux/actions/authActions'
import logo from '../assets/img/argentBankLogo.png'

const HeaderProfile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userData = useSelector((state) => state.auth.userData)

  const handleLogout = () => {
    // Dispatch l'action de déconnexion pour mettre à jour le state Redux
    dispatch(logoutUser())

    // Redirige l'utilisateur vers la page de connexion après la déconnexion
    navigate('/login')
  };

  return (
    <nav className='main-nav'>
      <Link to='/' className='main-nav-logo'>
        <img
          className='main-nav-logo-image'
          src={logo}
          alt='Argent Bank Logo'
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      <button
        className='main-nav-item'
        onClick={handleLogout}
      >
        <i className="fa fa-user-circle"></i>
        {userData && userData.firstName} 
        <i className='fa fa-sign-out'></i>
        Sign Out
      </button>
    </nav>
  );
};

export default HeaderProfile;

