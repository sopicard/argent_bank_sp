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
      <Link to='/' className='main-nav-item'>
        <i class="fa fa-user-circle"></i>
        Tony
        <i className='fa fa-sign-out'></i>
        Sign Out
      </Link>
    </nav>
  );
};

export default HeaderUser;
