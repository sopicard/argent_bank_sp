import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/argentBankLogo.png'

const HeaderUser = () => {
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
      <div>
        {/* logique de déconnexion */}
        <Link to='/sign-out' className='main-nav-item'>
          Sign Out
        </Link>
      </div>
    </nav>
  );
};

export default HeaderUser;
